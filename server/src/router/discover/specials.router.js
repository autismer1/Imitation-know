const Router = require('koa-router')
const { getSpecials } = require('../../controller/discover/specials.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const specialsRoute = new Router({ prefix: '/specials' })

specialsRoute.get('/', cors, verifyAuth, getSpecials)

module.exports = specialsRoute