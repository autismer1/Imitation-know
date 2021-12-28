import request from "../request.js";

// 获取热榜
export const HOT = (limit) => request('GET', `/hot?limit=${limit}`)

// 获取视频
export const VIDEO = (offset) => request('GET', `/video?offset=${offset}`)

// 获取关注
export const FOLLOW = (limit) => request('GET', `/follow?limit=${limit}`)

// 获取推荐
export const RECOMMEND = (limit = 10) => request('GET', `/recommend?limit=${limit}`)

// 获取关注文章下的评论
export const FOLLOW_COMMENT = (type, id) => request('GET', `/comments/${type}/${id}`)

// 获取用户具体信息
export const MEMBERS = (url_token) => request('GET', `/members/${url_token}`)

// 获取动态
// export const MOMENT = (method, url, data = null) => request(method, url, data)