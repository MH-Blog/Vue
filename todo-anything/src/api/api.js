
import axios from 'axios';


let host = 'http://127.0.0.1:8000/api';

/* eslint-disable no-unused-vars */

//登录
export const loginApi = params => {  return axios.post(`${host}/login/`, params)}

//注册
export const register = parmas => { return axios.post(`${host}/users/`, parmas) }


//获取用户信息
export const getUserDetail = () => { return axios.get(`${host}/users/1/`) }

//修改用户信息
export const updateUserInfo = params => { return axios.patch(`${host}/users/1/`, params) }


//获取待办事项
export const getThing = () => { return axios.get(`${host}/thing`) }
//删除待办事项
export const delThing = thingId => { return axios.delete(`${host}/thing/`+thingId+'/') }
//添加待办事项
export const createThing = params => {return axios.post(`${host}/thing/`, params)}
