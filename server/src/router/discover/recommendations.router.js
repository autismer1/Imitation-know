const Router = require('koa-router')
const { getRecommendations } = require('../../controller/discover/recommendations.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const recommendationsRoute = new Router({ prefix: '/recommendations' })

recommendationsRoute.get('/', cors, verifyAuth, getRecommendations)

module.exports = recommendationsRoute