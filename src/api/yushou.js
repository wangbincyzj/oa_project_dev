// 针对预售8084端口
// 封装网络请求
import axios from "axios"


// 基础设置
const BASE_URL = "http://192.168.1.161:8084/";
// 155, 161
const TIME_OUT = 5000;
let _ = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})



// 相应拦截
_.interceptors.response.use(resp => resp.data, reason=> {
  return {code: 999, message: "网络错误,请检查网络连接"}
});

// get请求
let get = function (url, params) {
  return _.get(url, {
    params
  })
}

// wang dev
// post请求4
let post = function (url, data) {
  return _.post(url, data)
}


export const requests = {
  get, post
}
