/**
 * Created by juntong on 2018/5/13.
 */
import request from '../plugins/request'

export default (user, password) => {
  return request({
    url: '/login',
    method: 'post',
    data: {
      user: user,
      password: password
    }
  })
}
