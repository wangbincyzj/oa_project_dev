import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import Print from './vue-print-nb';

import "@/components/element"  // element按需引入
import 'element-ui/lib/theme-chalk/index.css';  // element样式

import "@/assets/css/index.css"  // 样式入口

import {mixins} from "@/utils/mixins";

//import vueToPdf from './vue-to-pdf';

　　//Vue.use(Print);
Vue.config.productionTip = false
Vue.mixin(mixins.routerMixin)
//Vue.use(vueToPdf);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
