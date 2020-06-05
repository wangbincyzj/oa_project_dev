import Vue from 'vue'
import Vuex from 'vuex'
import {navList} from "@/router/navList";
import {loginApi} from "@/api/login/login";
import storage from "good-storage"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList,
    /*入网编号写死*/rwbh: 60039001,  //   todo 从login获取
    /*项目信息 */projectData: {},   // 在App created中创建
    /*项目楼栋信息*/buildingInfo: [],  //  在App created中创建
    xmxxId: 3,  // todo 后期由登录获得状态,测试时候,
    loginInfo:{
      username: "",
      loginStatus: false,
      userAuths: [],
      token: "",
    }
  },
  mutations: {
    setProjectData(state, projectData) {
      state.projectData = projectData;
    },
    setBuildingInfo(state, buildingInfo) {
      state.buildingInfo = buildingInfo;
    },
    setLoginInfo(state, {username, loginStatus, userAuths, token}){
      state.loginInfo.username = username||"";
      state.loginInfo.loginStatus = loginStatus||false;
      state.loginInfo.userAuths = userAuths||[];
      state.loginInfo.token = token||"";
    }
  },
  getters: {
    /*项目ID*/projectId(state) {
      return state.projectData ? state.projectData.xmxxId : null
    }
  },
  actions: {
    fetchBaseData({commit, state}, rwbh) {
      return new Promise((resolve, reject) => {
        loginApi.getOwnProjectByRwId(rwbh).then(ret => {
          commit("setProjectData", ret.data.records[0]);
          loginApi.getBuildingInfo(ret.data.records[0].xmxxId).then(ret => {
            commit("setBuildingInfo", ret.data);
            resolve({code: 200, message: "请求数据成功"})
          })
        });
      })
    },
    login({commit}, payload) {
      return new Promise((resolve, reject) => {
        commit("setLoginInfo", payload);
        storage.session.storage.setItem("__info__", JSON.stringify(payload));
        resolve("loginSuccess");
      })
    },
    logout({commit}){
      commit("setLoginInfo",{});
      storage.session.storage.clear();
    }
  },
  modules: {}
})
