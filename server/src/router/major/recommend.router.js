const Router = require('koa-router')
const { getRecommends } = require('../../controller/major/recommend.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const recommendRoute = new Router({ prefix: '/recommend' })

recommendRoute.get('/', cors, verifyAuth, getRecommends)

module.exports = recommendRoute