// 针对预售的8084端口  预售资金
import axios from "axios"
import store from "@/store";
import {config} from "@/api/baseConfig";

// 基础设置
const BASE_URL = `http://${config.baseIP}:8094/`;
// 155, 161
const TIME_OUT = 5000;
let _ = axios.create({
  baseURL: config.productMode ? "" : BASE_URL,
  timeout: TIME_OUT
})


// 请求注入token
_.interceptors.request.use(opts => {
  opts.headers.token = store.state.loginInfo.token
  return opts
})

// 相应拦截
_.interceptors.response.use(resp => {
  if (resp.data.code === 999 || resp.data.code === 1000) {
    store.dispatch("logout")
    return {code: -1, data: {}}
  } else {
    return resp.data
  }
}, reason => {
  return {code: 555, message: "系统错误,请联系软件公司"}
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
