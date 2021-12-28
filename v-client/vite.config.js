import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

const isProduction = process.env.NODE_ENV === "production";

// 拿到环境变量
const config = loadEnv(process.env.NODE_ENV, './')
console.log(config);

export default defineConfig({
  // 项目根目录
  root: process.cwd(),
  // 在生产中服务时的基本公共路径
  base: isProduction ? "./" : "",
  // 配置中指明将会把 serve 和 build 时的模式都覆盖掉,serve 时默认 'development'，build 时默认 'production'
  mode: "development",
  // 在开发时会被定义为全局变量，而在构建时则是静态替换
  define: "",
  // 静态资源服务的文件夹
  publicDir: "assets",
  resolve: {
    // 目录别名
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // CSS 预处理器
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `$injectedColor: orange;`,
      },
      less: {
        javascriptEnabled: true,
      },
    },
  },
  //
  server: {
    // 是否自动打开浏览器
    open: true,
    // 服务器主机名，如果允许外部访问，可设置为"0.0.0.0"
    host: "0.0.0.0",
    // 服务器端口号
    port: 56438,
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 为开发服务器配置 CORS
    cors: true,
    // 设置为 true 强制使依赖预构建
    force: true,
    // 代理
    proxy: {
      "/api": {
        target: config.VITE_APP_API_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // build
  build: {
    // 压缩
    minify: "esbuild",
    assetsDir: "",
    outDir: `./dist/${process.env.VITE_ENV}`,
    // 进行压缩计算
    brotliSize: false,
  },
  ssr: false,
  // 将要用到的插件数组
  plugins: [vue()],
});
