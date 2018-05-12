/**
 * Created by juntong on 2018/5/12.
 */
const User = require('../model/user')
const crypto = require('crypto')

module.exports = () => {
  return (ctx, next) => {
    const user = ctx.request.body.user
    const password = ctx.request.body.password
    const newPassword = crypto.createHash('md5').update(password).digest('hex')
    return User.create({
      user: user,
      password: newPassword
    })
  }
}