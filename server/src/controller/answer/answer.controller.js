const { requset } = require('../../utils/request')

class AnswerController {
  async getAnswers (ctx, next) {
    const { offset = 0 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/creators/personalized-questions/recommended?limit=20&offset=${offset}`, 'get')
    ctx.body = data
  }

  async getPopulars (ctx, next) {
    const { offset = 0 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/creators/personalized-questions/hot?limit=20&offset=${offset}`, 'get')
    ctx.body = data
  }

  async getQuestions (ctx, next) {
    const { offset = 0 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/creators/candidate-quesitons?type=newest&include=data[*].question.answer_count,follower_count,visit_count,detail,excerpt,author,created,relationship.is_following&limit=20&offset=${offset}`, 'get')
    ctx.body = data
  }

  async getInvites (ctx, next) {
    const { offset = 0 } = ctx.query
    const data = await requset(`https://www.zhihu.com/api/v4/notifications/v3/timeline/entry/invite?invite_with_time_slice=1&limit=20&offset=${offset}`, 'get')
    ctx.body = data
  }
}

module.exports = new AnswerController()