const { requset } = require('../../utils/request')

class RecommendationsController {
  async getRecommendations (ctx, next) {
    const { offset = 8, limit = 8 } = ctx.query
    const data = await requset(`https://zhuanlan.zhihu.com/api/recommendations/columns?limit=${limit}&offset=${offset}&seed=7`, 'get')
    ctx.body = data
  }
}

module.exports = new RecommendationsController()