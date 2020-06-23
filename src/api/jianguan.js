// 针对预售8083端口
// 封装网络请求
import axios from "axios"
import store from "@/store";


// 基础设置
const BASE_URL = "http://192.168.1.161:8093/";
// 155, 161, 153

const TIME_OUT = 5000;
let _ = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

// 请求注入token
_.interceptors.request.use(opts=>{
  opts.headers.token = store.state.loginInfo.token
  return opts
})


// 相应拦截
_.interceptors.response.use(resp => {
  if(resp.data.code===999||resp.data.code===1000){
    store.dispatch("logout")
    return {code: -1, data:{}}
  }else{
    return resp.data
  }
}, reason=> {
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


export const requests8083 = {
  get, post
}
