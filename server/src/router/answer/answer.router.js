const Router = require('koa-router')
const { getAnswers, getPopulars, getQuestions, getInvites } = require('../../controller/answer/answer.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const answersRoute = new Router({ prefix: '/answers' })

answersRoute.get('/recommend', cors, verifyAuth, getAnswers)
answersRoute.get('/popular', cors, verifyAuth, getPopulars)
answersRoute.get('/question', cors, verifyAuth, getQuestions)
answersRoute.get('/invite', cors, verifyAuth, getInvites)


module.exports = answersRoute