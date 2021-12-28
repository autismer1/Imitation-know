const Router = require('koa-router')
const { getHot } = require('../../controller/major/hot.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const hotRoute = new Router({ prefix: '/hot' })

hotRoute.get('/', cors, verifyAuth, getHot)

module.exports = hotRoute