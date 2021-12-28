import request from "../request.js";

// 获取为你推荐
export const RECOMMEND = (offset) => request('GET', `/answers/recommend?offset=${offset}`)

// 获取人气问题
export const POPULAR = (offset) => request('GET', `/answers/popular?offset=${offset}`)

// 获取最新问题
export const QUESTION = (offset) => request('GET', `/answers/question?offset=${offset}`)

// 获取邀请回答
export const INVITE = (offset) => request('GET', `/answers/invite?offset=${offset}`)