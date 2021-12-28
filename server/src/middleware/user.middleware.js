const errType = require('../constants/errorType')
const userService = require('../service/user.service')
const md5Password = require ('../utils/handlePassword')

// 验证用户注册信息中间件
const verifyUser = async (ctx, next) => {
 // 1. 获取用户传递的参数
 const { username, password } = ctx.request.body

 // 2.判断用户名、密码是否存在
 if (!username || !password) {
  const error = new Error(errType.USER_OR_PASSWORD_NOT_EXISTS)
  return ctx.app.emit('error', error, ctx)
 }

 // 3.判断用户名是否存在
 const result = await userService.getUserByName(username)
 if (result.length) {
  const error = new Error(errType.USER_HAS_ALREADY)
  return ctx.app.emit('error', error, ctx)
 }

 await next()
}

// 密码加密中间件
const encryption = async (ctx, next) => {
 const { password } = ctx.request.body
 ctx.request.body.password = md5Password(password)

 await next()
}

module.exports = { verifyUser, encryption }