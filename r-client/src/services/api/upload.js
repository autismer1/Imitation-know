import request from "../request.js";

export const UPLOAD = (data, config) => request("POST", '/upload/file', data, config)

export const MERGE = (data) => request("POST", '/upload/merge', data)

export const CHECK = (data) => request("POST", '/upload/check', data)