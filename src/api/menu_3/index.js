// 封装网络请求
import _ from "axios"

// 基础设置
const BASE_URL = "http://192.168.1.161:8084/data-presale-license";
const TIME_OUT = 12000;

const axios = _.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})


// 相应拦截
axios.interceptors.response.use(resp => resp.data, reason => {
  return {code: 999, message: "网络错误,请检查网络连接"}
});


// get请求
let get = function (url, params, /*Object*/config) {
  return axios.get(url, {
    params,
    ...config
  })
}


// post请求
let post = function (url, data, /*Object*/config) {
  return axios.post(url, data, config)
}


export const requests = {
  get, post
}
