import axios from "axios";
import Nprogress from 'nprogress';
import {
  message,
} from "antd";
import { BASE_URL } from "./config";

Nprogress.configure({ showSpinner: false })

const instance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

// axios的拦截器
// 使用请求拦截器的三种情况：
// 一、config中的某些信息不符合服务器的要求
// 二、每次发送网络请求时，可以往界面显示一个请求的图标
// 三、某些网络请求（比如登录(token)），必须携带一些特殊信息
// 请求拦截：config请求成功返回的参数，err请求失败返回的参数
instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("userInfo");
    token && (config.headers.common["Authorization"] = `Bearer ${token}`);
    Nprogress.start()
    return config;
  },
  (err) => {
  }
);

// 响应拦截：响应成功后返回的数据res，响应失败后返回的数据err
instance.interceptors.response.use(
  (config) => {
    Nprogress.done()
    return config?.data;
  },
  (err) => {
    Nprogress.done()
    if (err.response?.data) {
      message.error(`${err.response?.data?.message}`);
    }
    return null;
  }
);

// 2、封装请求方式
// @param url 接口地址
// @param data 携带参数
// get请求

export default function request(method = "get", url, data = null, config = {}) {
  method = method.toLowerCase();
  switch (method) {
    case "get":
      return instance.get(url, data);
    case "post":
      return instance.post(url, data, config);
    case "put":
      return instance.put(url, data);
    case "delete":
      return instance.delete(url, data);
    default:
      message.error("请求方式错误");
  }
}
