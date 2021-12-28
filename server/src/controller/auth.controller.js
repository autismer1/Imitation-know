const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

class AuthController {
 async login (ctx, next) {
  // 1.拿到用户传递的账号密码
  const { username, password } = ctx.request.body

  // 2.将用户信息与私钥生成 token
  const token = jwt.sign({ username, password }, PRIVATE_KEY, {
   expiresIn: 60 * 60 * 24 * 15, //设置 token 有效时间 15天
   algorithm: 'RS256' // 设置 token 加密方式
  })

  // 3.将 token 信息返回给前端
  const body = { code: 200, message: '用户登录成功~', data: token }
  ctx.body = body
 }
}

module.exports = new AuthController()