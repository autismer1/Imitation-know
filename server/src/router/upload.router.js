const Router = require('koa-router')
const { uploadFile, uploadMerge, uploadCheck } = require('../controller/upload.controller')
// const { verifyAuth } = require('../middleware/auth.middleware')
// const { cors } = require('../middleware/cors.middleware')

const multer = require('koa-multer')

const formData = multer({
  dest: '../uploads/'
})

const uploadRoute = new Router({ prefix: '/upload' })

uploadRoute.post('/file', formData.any(), uploadFile)
uploadRoute.post('/merge', uploadMerge)
uploadRoute.post('/check', uploadCheck)

module.exports = uploadRoute