/**
 * Created by juntong on 2018/5/12.
 */
const User = require('../model/user')

const login = params => {
  return User.findOne({
    where: {
      user: params.user
    }
  })
}

/*const register = (params) => {
  return User.create({
    user: params.user,
    password: params.password
  })
}*/


module.exports = login