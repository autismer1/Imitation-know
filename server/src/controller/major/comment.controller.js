const { requset } = require('../../utils/request')

class CommentController {
  async getComments (ctx, next) {
    const { id, type } = ctx.params
    const data = await requset(`https://www.zhihu.com/api/v4/${type}/${id}/root_comments?order=normal&limit=20&offset=0&status=open`, 'get')
    ctx.body = data
  }
}

module.exports = new CommentController()