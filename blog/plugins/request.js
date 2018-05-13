/**
 * Created by juntong on 2018/5/13.
 */
import * as axios from 'axios'

const service = axios.create({
  baseURL: "http://localhost:3000/api",
  timeout: 5000
})

service.interceptors.request.use(config => {
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
