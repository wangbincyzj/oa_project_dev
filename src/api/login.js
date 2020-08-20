// 针对预售的8082端口 登录中心
import axios from "axios"
import store from "@/store";
import {config} from "@/api/baseConfig";
import Vue from 'vue'


// 基础设置
const BASE_URL = `http://${config.baseIP}:8092/`;
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
    if(config.errMsg && resp.data.code===400){
      Vue.prototype.$message.error(resp.data.message||"访问出错,请尝试刷新页面或者联系软件客服")
      return resp.data
    }
    return resp.data
  }
}, reason => {
  Vue.prototype.$message.error(`错误的http状态码,详情:${reason}`)
  return {code: 400, message: "系统错误,请联系软件公司"}
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

let logout = function (){
  return post("login/login/logout")
}


export const loginApi = {
  login,
  logout
}
