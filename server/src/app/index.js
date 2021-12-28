const fs = require('fs')
const path = require('path')
const Koa = require('koa')

const app = new Koa()

// 将传入的参数转成json
const bodyparser = require('koa-bodyparser')

// 错误处理函数
const handleError = require('./handleError')

// 生成路由
const allRoutes = require('../router')
app.allRoutes = allRoutes

// // 处理跨域
// const proxy = require('koa2-proxy-middleware')
// const proxyOptions = {
//   target: 'https://www.zhihu.com/api', //后端服务器地址
//   changeOrigin: true, //处理跨域
//   pathRewrite: {
//     "^/app": "",
//   },
// }

// const exampleProxy = proxy('/app/*', proxyOptions) //app前缀的请求都走代理
// app.use(exampleProxy) //注册

// 生成接口请求日志
const morgan = require('koa-morgan')

const writeStream = fs.createWriteStream(path.resolve(__dirname, '../logs/informations.log'), {flags: 'a+'})

app.use(morgan('combined', { stream: writeStream }))

app.use(bodyparser())

app.allRoutes()

app.on('error', handleError)

module.exports = app