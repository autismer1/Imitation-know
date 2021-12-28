const Router = require('koa-router')
const { getMoment } = require('../controller/moment.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { cors } = require('../middleware/cors.middleware')

const momentRoute = new Router({ prefix: '/moment' })

momentRoute.get('/', cors, verifyAuth, getMoment)

module.exports = momentRoute