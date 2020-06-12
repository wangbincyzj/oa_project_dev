import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "@/components/element"  // element按需引入
import 'element-ui/lib/theme-chalk/index.css';  // element样式
import "@/assets/css/index.css"  // 样式入口

import {mixins} from "@/utils/mixins";
import {filters} from "@/utils/filters";

Vue.config.productionTip = false
Vue.mixin(mixins.routerMixin)
Vue.filter("shztFilter", filters.shztFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
