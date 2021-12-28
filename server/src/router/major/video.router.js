const Router = require('koa-router')
const { getVideo } = require('../../controller/major/video.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const videoRoute = new Router({ prefix: '/video' })

videoRoute.get('/', cors, verifyAuth, getVideo)

module.exports = videoRoute