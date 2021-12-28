const { requset } = require('../../utils/request')

class FavlistsController {
  async getFavlists (ctx, next) {
    const { offset = 10, limit = 10 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/favlists/discover?limit=${limit}&offset=${offset}`, 'get')
    ctx.body = data
  }
}

module.exports = new FavlistsController()