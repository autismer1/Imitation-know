const path = require("path");
const fs = require("fs");

// 服务端保存上传文件的目录
const FILES_DIR = path.resolve(__dirname, "../upload");


class UploadController {
  async uploadCheck(ctx, next) {
    const { hash, fileName } = ctx.request.body;
    // 先判断有没有文件
    const fileDir = path.resolve(FILES_DIR, fileName);
    if (fs.existsSync(fileDir)) {
      ctx.body = {
        code: 0,
        fileExist: true,
      };
      return;
    }
    // 判断切片包文件夹是否存在
    const chunkDir = path.resolve(FILES_DIR, hash.split("-")[0]);
    let uploadedChunks = [];
    if (fs.existsSync(chunkDir)) {
      const fileDir = path.resolve(FILES_DIR, hash.split("-")[0]);
      uploadedChunks = fs.readdirSync(fileDir);
    }
    ctx.body = {
      code: 0,
      fileExist: false,
      uploadedChunks,
    };
  }

  async uploadFile(ctx, next) {
    const [chunk] = ctx.req?.files;
    const {hash} = ctx.req.body;

    // 临时文件目录
    const tempDir = hash.split("-")[0];
    const chunkDir = path.resolve(FILES_DIR, tempDir);

    // 判断文件是否存在
    if (!fs.existsSync(chunkDir)) {
      fs.mkdirSync(chunkDir);
    }

    // chunk.path指的是经过处理之后的文件的存放处，将那个地址移动到我们需要的指定地址
    fs.copyFileSync(chunk.path, `${chunkDir}\\${hash}`);

    // 删除临时文件
    fs.rmSync(chunk.path);

    ctx.body = {
      code: 0,
      message: "上传完成",
    };
  }

  async uploadMerge(ctx, next) {
    const { hash, fileName, size } = ctx.request.body;
    const fileDir = path.resolve(FILES_DIR, hash.split("-")[0]);

    const fileNameList = fs.readdirSync(fileDir);
    // 按序读取文件
    const sortableFileNameList = fileNameList.sort(
      (a, b) => a.split("-")[1] - b.split("-")[1]
    );

    const fns = sortableFileNameList.map((tempFileName, index) => {
      const readPath = path.resolve(fileDir, tempFileName);
      const readStream = fs.createReadStream(readPath);
      // 因为是创建多个管道流，所以需要给每个写入流定位开始位置和结束位置
      const writeStream = fs.createWriteStream(
        path.resolve(FILES_DIR, fileName),
        {
          start: size * index,
          end: (index + 1) * size,
        }
      );
      readStream.pipe(writeStream);

      return new Promise((resolve, reject) => {
        readStream.on("close", () => {
          resolve(true);
        });
      });
    });

    await Promise.all(fns).catch((e) => {});

    // 合并成文件后，将 hash 值目录移除
    fs.rmSync(fileDir, { recursive: true, force: true });

    ctx.body = {
      code: 0,
      message: "合并完成",
    };
  }
}

module.exports = new UploadController();
