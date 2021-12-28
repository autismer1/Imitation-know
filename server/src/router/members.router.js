const Router = require('koa-router')
const { getMembers } = require('../controller/members.controller')
const { verifyAuth } = require('../middleware/auth.middleware')
const { cors } = require('../middleware/cors.middleware')

const memberRoute = new Router({ prefix: '/members' })

memberRoute.get('/:url_token', cors, verifyAuth, getMembers)

module.exports = memberRoute