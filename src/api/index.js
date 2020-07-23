// 针对8080端口   用户中心
// 封装网络请求
import axios from "axios"
import store from "@/store"
import {config} from "@/api/baseConfig";


// 基础设置
const BASE_URL = `http://${config.baseIP}:8090/`;
// 155陈, 153郑,131杨
const TIME_OUT = 5000;
axios.defaults.baseURL = config.productMode ? "" : BASE_URL;
axios.defaults.timeout = TIME_OUT;

// 请求注入token
axios.interceptors.request.use(opts=>{
  opts.headers.token = store.state.loginInfo.token
  return opts
})


// 响应拦截
axios.interceptors.response.use(resp => {
  if(resp.data.code===999||resp.data.code===1000){
    store.dispatch("logout")
    return {code: -1, data:{}}
  }else{
    return resp.data
  }
}, reason => {
  return {code: 555, message: "系统错误,请联系软件公司"}
});

// get请求
let get = function (url, params) {
  return axios.get(url, {
    params
  })
}

// wang dev
let post = function (url, data) {
  return axios.post(url, data)
}


export const requests = {
  get, post
}
