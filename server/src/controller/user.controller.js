const userService = require('../service/user.service')

class UserController {
 async create (ctx, next) {
  // 1.获取用户账号密码
  const { username, password } = ctx.request.body

  // 2.往数据库添加账户信息
  await userService.create({ username, password })

  const body = { data: true, code: 200, message: '用户注册成功~' }
  ctx.body = body
 }

 async getUserInfo (ctx, next) {
  const { user } = ctx
  ctx.body = '获取用户信息~'
 }
}

module.exports = new UserController()