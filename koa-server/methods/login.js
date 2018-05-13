/**
 * Created by zhaojuntong on 2018/5/13.
 */
const login = require('../controller/login')
const crypto = require('crypto')
module.exports = async (ctx, next) => {
  const user = ctx.request.body.user
  const password = ctx.request.body.password
  console.log(ctx.request)
  const newPassword = crypto.createHash('md5').update(password).digest('hex')
  const data = await login({ user: user, password: newPassword })
  // console.log(data)
  ctx.send(data)
}
