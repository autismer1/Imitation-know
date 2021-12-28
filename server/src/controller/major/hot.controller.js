const { requset } = require('../../utils/request')

class HotController {
  async getHot (ctx, next) {
    const { limit } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v3/feed/topstory/hot-list-web?limit=${limit}&desktop=true`, 'get')
    ctx.body = data
  }
}

module.exports = new HotController()