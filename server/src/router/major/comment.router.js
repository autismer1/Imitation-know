const Router = require('koa-router')
const { getComments } = require('../../controller/major/comment.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const commentRoute = new Router({ prefix: '/comments' })

commentRoute.get('/:type/:id', cors, verifyAuth, getComments)

module.exports = commentRoute