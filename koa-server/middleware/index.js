const koaBody = require('koa-body')
const send = require('./send')

module.exports = app => {
  app.use(koaBody())
  app.use(send())
}
