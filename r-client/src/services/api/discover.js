import request from "../request.js";

// 获取最新专题
export const SPECIALS = (limit, offset) => request('GET', `/specials?limit=${limit}&offset=${offset}`)

// 获取圆桌讨论
export const ROUNDTABLES = (offset, limit) => request('GET', `/roundtables?limit=${limit}&offset=${offset}`)

// 获取收藏夹
export const FAVLISTS = (limit, offset) => request('GET', `/favlists?limit=${limit}&offset=${offset}`)

// 获取专栏
export const RECOMMENDATIONS = (limit, offset) => request('GET', `/recommendations?limit=${limit}&offset=${offset}`)