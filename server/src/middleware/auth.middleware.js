const jwt = require('jsonwebtoken')
const errType = require('../constants/errorType')
const { PUBLIC_KEY } = require('../app/config')
const userService = require('../service/user.service')

const md5Password = require('../utils/handlePassword')
const authService = require('../service/auth.service')

// 验证用户登录时输入的信息是否正确中间件
const verifyLogin = async (ctx, next) => {
 // 1.先拿到用户传递的参数
 const { username, password } = ctx.request.body

 // 2.先判断用户名和密码是否为空
 if (!username || !password) {
  const error = new Error(errType.USER_OR_PASSWORD_NOT_EXISTS)
  return ctx.app.emit('error', error, ctx)
 }

 // 3.判断用户名是否被注册(没注册给他错误提示)
 const result = await userService.getUserByName(username)
 const user = result[0]
 if (!user) {
  const error = new Error(errType.USER_IS_NOT_EXISTS)
  return ctx.app.emit('error', error, ctx)
 }

 // 4.判断用户传入的密码是否与数据库一致
 if (md5Password(password) != user.password) {
  const error = new Error(errType.PASSWORD_IS_NOT_CORRECT)
  return ctx.app.emit('error', error, ctx)
 }

 // 5.将用户信息挂载全局
 ctx.user = user

 await next()
}

// 验证用户是否登录中间件
const verifyAuth = async (ctx, next) => {
 // 1.拿到用户请求头信息 Authorization
 const Authorization = ctx.headers.authorization
 
 // 2.判断 token 信息是否存在
 if (!Authorization) {
  const error = new Error(errType.AUTHORIZATION_IS_NOT_INVALID)
  
  return ctx.app.emit('error', error, ctx)
 }

 
 // 3.解析 token 信息
 const token = Authorization.replace('Bearer ', '')
 
 // 4.如果解析失败会直接报错，用 try catch 捕获
 try {
  const result = jwt.verify(token, PUBLIC_KEY, {
   algorithms: ['RS256']
  })
  
  // 将用户信息重新挂载
  ctx.user = result
  await next()
 } catch (err) {
  const error = new Error(errType.AUTHORIZATION_IS_NOT_INVALID)
  return ctx.app.emit('error', error, ctx)
 }
}

// 验证用户是否具有操作权限中间件
const verifyPermission = async (ctx, next) => {
 // 1.首先拿到用户传递的参数
 const [resourceKey] = Object.keys(ctx.params) // 键名
 const tableName = resourceKey.replace('Id', '') // 查绚的表名
 const resourceId = ctx.params[resourceKey] // 查绚内容id
 const { id } = ctx.user // 用户id

 // 2.查绚用户是否具备权限
 try {
  const hasPermission = await authService.getUserByPermission(tableName, resourceId, id)
  
  if (!hasPermission) throw new Error('')

  await next()
 } catch (err) {
  const error = new Error(errType.NOT_PERMISSION)
  return ctx.app.emit('error', error, ctx)
 }
}

module.exports = { verifyLogin, verifyAuth, verifyPermission }