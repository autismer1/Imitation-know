import request from "./request.js";

// 登录接口
export const LOGIN = (method, url, data = null) => request(method, url, data)

// 获取用户信息接口
export const USERINFO = (method, url, data = null) => request(method, url, data)