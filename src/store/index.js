import Vue from 'vue'
import Vuex from 'vuex'
import {navList} from "@/router/navList";
import {loginApi} from "@/api/login/login";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList,
    /*入网编号写死*/rwbh: 60039001,  //   todo 从login获取
    /*项目信息 */projectData: {},   // 在App created中创建
    /*项目楼栋信息*/buildingInfo: [],  //  在App created中创建
  },
  mutations: {
    setProjectData(state, projectData) {
      state.projectData = projectData;
    },
    setBuildingInfo(state, buildingInfo) {
      state.buildingInfo = buildingInfo;
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
    }
  },
  modules: {}
})
