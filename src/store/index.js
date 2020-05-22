import Vue from 'vue'
import Vuex from 'vuex'
import {navList} from "@/router/navList";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navList,
    rwbh:60029001
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
