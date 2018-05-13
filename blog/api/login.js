/**
 * Created by juntong on 2018/5/13.
 */
import request from '../plugins/request'

export default (url, params) {
  return request({
    url: url,
    method: 'post',
    params: params
  })
}
