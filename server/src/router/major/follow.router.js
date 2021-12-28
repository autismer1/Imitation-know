const Router = require('koa-router')
const { getFollow } = require('../../controller/major/follow.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const followRoute = new Router({ prefix: '/follow' })

followRoute.get('/', cors, verifyAuth, getFollow)

module.exports = followRoute