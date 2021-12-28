const { requset } = require('../utils/request')

class MemberController {
  async getMembers (ctx, next) {
    const { url_token } = ctx.params
    const data = await requset(`https://www.zhihu.com/api/v4/members/${url_token}?include=allow_message,is_followed,is_following,is_org,is_blocking,employments,answer_count,follower_count,articles_count,gender,badge[?(type=best_answerer)].topics`, 'get')
    ctx.body = data
  }
}

module.exports = new MemberController()