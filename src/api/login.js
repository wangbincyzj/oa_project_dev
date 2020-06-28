// 针对预售的8082端口 登录中心
import axios from "axios"
import store from "@/store";
import {config} from "@/api/baseConfig";


// 基础设置
const BASE_URL = `http://192.168.1.${config.baseIP}:8092/`;
// 155, 161
const TIME_OUT = 5000;
let _ = axios.create({
  baseURL: config.productMode ? "" : BASE_URL,
  timeout: TIME_OUT
})



// 响应拦截
_.interceptors.response.use(resp => {
  if(resp.data.code===999||resp.data.code===1000){
    store.dispatch("logout")
    return {code: -1, data:{}}
  }else{
    return resp.data
  }
}, reason => {
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

let login = function (userName, passWord) {
  return post("login/login/doLogin", {userName, passWord})
}


export const loginApi = {
  login
}
