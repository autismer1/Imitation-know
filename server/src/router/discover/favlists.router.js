const Router = require('koa-router')
const { getFavlists } = require('../../controller/discover/favlists.controller')
const { verifyAuth } = require('../../middleware/auth.middleware')
const { cors } = require('../../middleware/cors.middleware')

const favlistsRoute = new Router({ prefix: '/favlists' })

favlistsRoute.get('/', cors, verifyAuth, getFavlists)

module.exports = favlistsRoute