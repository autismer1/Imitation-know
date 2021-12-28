const { requset } = require('../../utils/request')

class VideoController {
  async getVideo (ctx, next) {
    const { offset = 12 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/zvideo-tabs/tabs/choice/feeds/recommend?limit=12&offset=${offset}&include=creation_relationship`, 'get')
    ctx.body = data
  }
}

module.exports = new VideoController()