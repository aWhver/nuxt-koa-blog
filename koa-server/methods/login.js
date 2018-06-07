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
  console.log(ctx.request.body)
  const newPassword = crypto.createHash('md5').update(password).digest('hex')
  const data = await login({ user: user})
  console.log(data.dataValues)
  let token = null
  console.log(data.dataValues.password === newPassword)
  console.log(newPassword)
  if (data.dataValues.password === newPassword) {
    token = jwt.sign({1z
      id:data.dataValues.id,
      user: user
    }, token_config.jwt.cert, { expiresIn: '7d' })
    ctx.cookies.set('token', token, { expires: 7*24*60*60*1000 })
    console.log(token)
    ctx.send({token: token}, 'LOGIN_SUCCESS')
  } else {
    ctx.sendError({}, 'INVALID ACCOUNT OR PASSWORD')
  }
}
