/**
 * Created by juntong on 2018/5/13.
 */
import * as axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
})
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// let token = localStorage.getItem('token')

service.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers['X-Token'] = localStorage.getItem('token') // 请求带上自定义token
  }
  return config
}, err => {
  Promise.reject(err)
})

service.interceptors.response.use(response => {
  return response
}, err => {
  Promise.reject(err)
})

export default service
