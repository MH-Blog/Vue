
import axios from 'axios';


let host = 'http://127.0.0.1:8000/api';

/* eslint-disable no-unused-vars */

//登录
export const login = params => {  return axios.post(`${host}/login/`, params)}

//注册
export const register = parmas => { return axios.post(`${host}/users/`, parmas) }


//获取待办事项
export const getThing = () => { return axios.get(`${host}/thing`) }
//删除待办事项
export const delThing = thingId => { return axios.delete(`${host}/thing/`+thingId+'/') }
//添加待办事项
export const createThing = params => {return axios.post(`${host}/thing/`, params)}

//获取文章清单
export const getArticle = () => { return axios.get(`${host}/article`) }
//删除待读文章
export const delArticle = articleId => { return axios.delete(`${host}/article/`+articleId+'/') }
//添加待读文章
export const createArticle = params => {return axios.post(`${host}/article/`, params)}


//获取网址导航
export const getLink = () => { return axios.get(`${host}/link`) }
//删除网址导航
export const delLink= articleId => { return axios.delete(`${host}/link/`+articleId+'/') }
//添加网址导航
export const createLink = params => {return axios.post(`${host}/link/`, params)}
