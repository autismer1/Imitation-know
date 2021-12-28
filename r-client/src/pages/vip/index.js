import React, { useState, useMemo, useRef, memo } from 'react';
import { Row, Col, Button, Input, Progress, List, message, Card } from 'antd';
import axios from 'axios';
import { UPLOAD, MERGE, CHECK } from '@/services/api/upload';

// 切片大小，先定为5M
const SLICE_SIZE = 10 * 1024 * 1024;

function Vip() {
  // 保存文件流
  const [file, setFile] = useState(null);

  // 保存所有需要上传的切片列表
  const [chunkList, setChunkList] = useState([]);

  // 保存服务器已上传过 hash 文件列表
  const [uploadedChunk, setUploadedChunk] = useState([]);

  // 解析hash值进度
  const [hashProgress, setHashProgress] = useState(0);

  const hash = useRef('');
  const worker = useRef();

  // 上传总进度
  const percent = useMemo(() => {
    if (!file || !chunkList.length) return 0
    const loaded = chunkList.map(item => item.progress * item.chunk.size).reduce((sum, next) => sum + next)
    return parseInt((loaded / file.size).toFixed(2))
  }, [file, chunkList])

  const handleChangeFile = async (e) => {
    const file = e?.target?.files?.[0] || null;
    if (file) {
      setFile(file);
      const slices = createFileSlices(file);
      const hashData = await calculateFileHash(slices);
      hash.current = hashData;
      const res = await CHECK({ fileName: file.name, hash: hashData });

      if (res?.fileExist) {
        message.info("文件已上传")
        return;
      }

      const chunks = createFileChunks(file, slices);
      const uploadedChunkNameList = res.uploadedChunks;

      setChunkList(chunks);
      setUploadedChunk(uploadedChunkNameList);

      // 上传切片
      await uploadFileChunks(chunks, uploadedChunkNameList);

      // 等所有切片上传完合并文件
      MERGE({
        fileName: file.name,
        hash: hashData,
        size: SLICE_SIZE
      })
    }
  };

  // 文件切片
  const createFileSlices = (file) => {
    if (!file) return [];

    const slices = [];
    let start = 0;
    while (start < file.size) {
      const slice = file.slice(start, start + SLICE_SIZE)
      slices.push(slice)
      start += SLICE_SIZE
    }

    return slices;
  };

  // 组装切片包
  const createFileChunks = (file, slices) => {
    if (!slices?.length) return [];

    return slices.map((slice, index) => ({
      index,
      chunk: slice,
      hash: hash.current + '-' + index,
      fileName: file.name,
      progress: 0,
      cancel: () => { }
    }));
  };

  // 上传分片包
  const uploadFileChunks = (chunks, upLoadedChunks) => {
    if (!chunks?.length) return;
    const requests = chunks.filter(({ hash }) => !upLoadedChunks.includes(hash)).map((item) => {
      const { chunk, hash, fileName, index } = item;
      const data = new FormData();
      data.append('chunk', chunk)
      data.append('hash', hash)
      data.append('fileName', fileName)
      
      const cancelToken = createCancelAction(item);
      const onUploadProgress = createProgressHandler(index)
      
      return UPLOAD(data, {
        onUploadProgress,
        cancelToken
      });
    })

    return Promise.all(requests)
  };

  // 创建每个chunk上传的progress监听函数
  const createProgressHandler = (index) => {
    return (e) => {
      setChunkList(prev => {
        const newList = prev.concat([])
        const chunk = newList.find(item => item.index === index);
        if (chunk) {
          chunk.progress = parseInt(String(e.loaded / e.total * 100));
        }

        return newList;
      });
    }
  };

  // 计算文件 hash 值
  const calculateFileHash = (slices) => {
    return new Promise((resolve, reject) => {
      // 添加 worker
      try {
        worker.current = new Worker('./hash.js')
        worker.current.postMessage({ slices })
        worker.current.onmessage = e => {
          const { hash, progress } = e.data
          setHashProgress(progress);
          if (hash) {
            resolve(hash)
          }
        }
      } catch (e) {
        reject(e)
      }
    })
  };

  // 获取cancelToken
  const createCancelAction = (chunk) => {
    const { cancel, token }=  axios.CancelToken.source();
    chunk.cancel = cancel;
    return token;
  };

  // 暂停上传
  const handlePauseUpload = () => {
    // axios的cancel在调用abort前会判断请求是否存在，所以针对所有的请求直接调用cancel即可
    chunkList.forEach(chunk => chunk.cancel())
  };

  // 恢复上传
  const handleResumeUpload = async () => {
    await uploadFileChunks(chunkList, uploadedChunk);
    MERGE({
      fileName: file?.name || '',
      hash: hash.current,
      size: SLICE_SIZE
    })
  };

  return (
    <div className="App">
      <h1>大文件上传</h1>
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col span={6}><Input type="file" onChange={handleChangeFile} /></Col>
        <Col><Button size="middle" style={{ height: 38 }} onClick={handlePauseUpload}>暂停上传</Button></Col>
        <Col><Button size="middle" style={{ height: 38 }} onClick={handleResumeUpload}>恢复上传</Button></Col>
      </Row>

      <h2>{ hash.current ? `hash值为：${hash.current}` : `hash计算进度` }</h2>
      <Row style={{ marginBottom: 16 }}>
        <Progress
          percent={hashProgress}
        />
      </Row>

      <h2>上传列表</h2>
      <Row gutter={32} className="row">
        <Col span={12}>
          <Card title="分片列表进度" bordered={false} style={{ width: '100%' }}>
            <List
              className="list"
              bordered
              dataSource={chunkList}
              renderItem={item => {
                const { progress, hash } = item;
                return <List.Item>
                  {hash}
                  <Progress
                    percent={progress}
                  />
                </List.Item>
              }}
            />
          </Card>
        </Col>

        <Col span={12}>
          <Card title="上传进度" bordered={false} style={{ width: '100%' }}>
            <Progress
              type="circle"
              percent={percent}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default memo(Vip);

// import React, { memo, useCallback, useState } from "react";

// import BraftEditor from "braft-editor";

// import { BorderWrapper } from './style';

// export default memo(function Vip(props) {
//   // 富文本编译器
//   const [editor, setEditor] = useState(BraftEditor.createEditorState(`<p></p>`));

//   const handleEditorChange = useCallback((value) => {
//     console.log(value.toHTML(), editor)
//     setEditor(value.toHTML())
//   }, [editor])

//   const submitContent = useCallback(() => {
//     console.log(2222)
//   }, [])

//   return (
//     <div style={{width: '1000px'}}>
//       <BraftEditor
//         value={editor}
//         onChange={handleEditorChange}
//         onSave={submitContent}
//       />

//       <BorderWrapper></BorderWrapper>
//     </div>
//   );
// });
