const { requset } = require('../../utils/request')

class FollowController {
  async getFollow (ctx, next) {
    const { limit } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v3/moments?limit=${limit}&desktop=true`, 'get')
    ctx.body = data
  }
}

module.exports = new FollowController()