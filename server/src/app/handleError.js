const errType = require('../constants/errorType')

const handleError = async (error, ctx) => {
 let status, message;
 switch (error.message) {
  case errType.USER_OR_PASSWORD_NOT_EXISTS:
   status = 400
   message = '输入的用户名或密码错误~'
   break
  case errType.USER_IS_NOT_EXISTS:
   status = 400
   message = '用户不存在~'
   break
  case errType.USER_HAS_ALREADY:
   status = 400
   message = '用户存在，请勿重复注册~'
   break
  case errType.PASSWORD_IS_NOT_CORRECT:
   status = 400
   message = '输入的密码不正确~'
   break
  case errType.NOT_PERMISSION:
   status = 401
   message = '您不具备此操作权限~'
   break
  case errType.AUTHORIZATION_IS_NOT_INVALID:
   status = 401
   message = '用户信息以失效，请重新登录~'
   break
  case errType.FORBIDDEN:
   status = 403
   message = '服务器已经理解请求，但是拒绝执行它~'
   break
  case errType.METHOD_NOT_ALLOWED:
   status = 405
   message = '请求方法不正确~'
   break
  default:
   status = 404
   message = '请求失败，请求所希望得到的资源未被在服务器上发现~'
   break
 }

 ctx.status = status
 ctx.type = 'application/json; charset=utf-8'
 const body = {
  code: status,
  message,
  data: null
 }
 ctx.body = JSON.stringify(body)
}

module.exports = handleError