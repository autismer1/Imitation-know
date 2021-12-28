const Router = require('koa-router')
const { login } = require('../controller/auth.controller')
const { verifyLogin } = require('../middleware/auth.middleware')
const { cors } = require('../middleware/cors.middleware')

const authRoute = new Router({ prefix: '/login' })

authRoute.post('/', cors, verifyLogin, login)

module.exports = authRoute