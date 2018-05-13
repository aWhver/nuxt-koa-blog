/**
 * Created by juntong on 2018/5/12.
 */
const router = require('koa-router')({prefix: '/api'})
const login = require('../methods/login')

module.exports = app => {
  router.post('/login', login)
  app.use(router.routes()).use(router.allowedMethods())
}