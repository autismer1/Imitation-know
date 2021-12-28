import axios from 'axios'
import { ElMessage } from 'element-plus' 

axios.defaults.baseURL = import.meta.env.VITE_APP_API_BASE_URL
axios.defaults.timeout = 6000
axios.defaults.withCredentials = true

// axios的拦截器
// 使用请求拦截器的三种情况：
// 一、config中的某些信息不符合服务器的要求
// 二、每次发送网络请求时，可以往界面显示一个请求的图标
// 三、某些网络请求（比如登录(token)），必须携带一些特殊信息
// 请求拦截：config请求成功返回的参数，err请求失败返回的参数
axios.interceptors.request.use(config => {
  
  if (localStorage.getItem('userInfo')) {
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('userInfo')
  }

  return config
}, err => {
})

// 响应拦截：响应成功后返回的数据res，响应失败后返回的数据err
axios.interceptors.response.use(config => {
  return config.data
}, err => {
  ElMessage({
    message: err.response.data.message,
    type: 'error'
  })
  return null
})

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// get请求

export default function request(method = 'get', url, data = null) {
  method = method.toLowerCase()
  switch (method) {
    case 'get':
      return axios.get(url, data)
      break
    case 'post':
      return axios.post(url, data)
      break
    case 'put':
      return axios.put(url, data)
      break
    case 'delete':
      return axios.delete(url, data)
      break
  }
}
