const Router = require('koa-router')
const { create, getUserInfo } = require('../controller/user.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { verifyUser, encryption } = require('../middleware/user.middleware')
const { cors } = require('../middleware/cors.middleware')

const userRoute = new Router({ prefix: '/user' })

userRoute.post('/', cors, verifyUser, encryption, create)
userRoute.get('/', cors, verifyAuth, getUserInfo)

module.exports = userRoute