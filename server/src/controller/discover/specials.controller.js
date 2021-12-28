const { requset } = require('../../utils/request')

class SpecialsController {
  async getSpecials (ctx, next) {
    const { offset = 10, limit = 10 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/news_specials/list?limit=${limit}&offset=${offset}`, 'get')
    
    ctx.body = data
  }
}

module.exports = new SpecialsController()