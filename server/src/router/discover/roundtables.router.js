const Router = require('koa-router')
const { getRoundtables } = require('../../controller/discover/roundtables.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const roundtablesRoute = new Router({ prefix: '/roundtables' })

roundtablesRoute.get('/', cors, verifyAuth, getRoundtables)

module.exports = roundtablesRoute