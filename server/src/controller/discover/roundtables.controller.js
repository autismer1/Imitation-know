const { requset } = require('../../utils/request')

class RoundtablesController {
  async getRoundtables (ctx, next) {
    const { offset = 10, limit = 10 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/roundtables?limit=${limit}&offset=${offset}`, 'get')
    ctx.body = data
  }
}

module.exports = new RoundtablesController()