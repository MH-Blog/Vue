/* eslint-disable no-undef */
import axios from 'axios';
let host = ''
// eslint-disable-next-line no-undef

if (DEBUG) {
    host = config.local_host;
} else {
    host = config.host;
}


/* eslint-disable no-unused-vars */

//登录
export const login = params => {
    return axios.post(`${host}/login/`, params)
}
// 获取验证码
export const getCode = params => {
    return axios.post(`${host}/code/`, params)
}
//注册
export const register = parmas => {
    return axios.post(`${host}/users/`, parmas)
}

//忘记密码
export const forget = parmas => {
    return axios.post(`${host}/users/`, parmas)
}


//获取待办事项
export const getThing = () => {
    return axios.get(`${host}/thing`)
}
//删除待办事项
export const delThing = thingId => {
    return axios.delete(`${host}/thing/` + thingId + '/')
}
//添加待办事项
export const createThing = params => {
    return axios.post(`${host}/thing/`, params)
}
//更新待办事项
export const updateThing = (thingId, params) => {
    return axios.patch(`${host}/thing/` + thingId + '/', params)
}

//获取文章清单
export const getArticle = () => {
    return axios.get(`${host}/article`)
}
//删除待读文章
export const delArticle = articleId => {
    return axios.delete(`${host}/article/` + articleId + '/')
}
//添加待读文章
export const createArticle = params => {
    return axios.post(`${host}/article/`, params)
}
//更新文章清单
export const updateArticle = (articleId, params) => {
    return axios.patch(`${host}/article/` + articleId + '/', params)
}


//获取网址导航
export const getLink = () => {
    return axios.get(`${host}/link`)
}
//删除网址导航
export const delLink = linkId => {
    return axios.delete(`${host}/link/` + linkId + '/')
}
//添加网址导航
export const createLink = params => {
    return axios.post(`${host}/link/`, params)
}
//更新网址导航
export const updateLink = (linkId, params) => {
    return axios.patch(`${host}/link/` + linkId + '/', params)
}


//获取用户信息
export const getUserDetail = () => { return axios.get(`${host}/users/1/`) }

//修改用户信息
export const updateUserInfo = params => { return axios.patch(`${host}/users/1/`, params) }

