const Koa = require('koa')
const middleware = require('./middleware')
const router = require('./router')
const port = process.env.PORT || 3001
const host = process.env.HOST || 'localhost'

const app = new Koa()
middleware(app)
router(app)

app.listen(port, host)

console.log('server is listening on:' + host + ': ' + port)