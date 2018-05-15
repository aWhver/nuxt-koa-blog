/**
 * Created by zhaojuntong on 2018/5/13.
 */
const login = require('../controller/login')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const token_config = require('../config/token.config')

module.exports = async (ctx, next) => {
  const user = ctx.request.body.user
  const password = ctx.request.body.password
  console.log(ctx.request)
  const newPassword = crypto.createHash('md5').update(password).digest('hex')
  const data = await login({ user: user })
  console.log(data)
  let token = null
  if (data[0].password === newPassword) {
    token = jwt.sign({
      id: data[0].id,
      user: user
    }, token_config.jwt.cert, { expiresIn: '7d' })
    ctx.cookies.set('token', token, { expires: 7*24*60*60*1000 })
    ctx.send({token: token}, 'LOGIN_SUCCESS')
  } else {
    ctx.sendError({}, 'INVALID ACCOUNT OR PASSWORD')
  }
}
