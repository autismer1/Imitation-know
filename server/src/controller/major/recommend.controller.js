const { requset } = require('../../utils/request')

class RecommendController {
  async getRecommends (ctx, next) {
    const { limit = 10 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v3/feed/topstory/recommend?limit=${limit}&desktop=true`, 'get')
    ctx.body = data
  }
}

module.exports = new RecommendController()