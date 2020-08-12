import Vue from 'vue'
import VueRouter from "vue-router";
import store from "../store/index"

Vue.use(VueRouter)
import MainContent from "@/views/layout/MainContent";
import menu_1 from "@/router/menu_1";  // 主体内容的载体layout
import menu_2 from "@/router/menu_2";
import menu_3 from "@/router/menu_3";
import menu_4 from "@/router/menu_4";
import menu_7 from "@/router/menu_7";
/**
 * 首字母大写
 * @param str
 * @returns {string}
 */
function capitalize(/*String*/str) {
  return str[0].toUpperCase() + str.slice(1)
}


/**
 * @param menu_obj  路由对象
 * @returns {{}}  json => Object
 */
function objectToRoutes(menu_obj) {
  const routes = {};
  routes.path = menu_obj.path;
  routes.meta = {};
  routes.component = MainContent;
  routes.meta.asideNav = menu_obj;
  routes.redirect = menu_obj.redirect;
  let childrenRoutes = []
  menu_obj.routes.forEach(routeGroup=>{
    routeGroup.group.forEach(route=>{
      childrenRoutes.push({
        path: route.path,
        meta: {breadcrumb: [menu_obj.title, routeGroup.title, route.title] },
        component: () => {
          return import("@/views" + menu_obj.path + "/" + capitalize(route.path))
        }
      })
    })
  })
  routes.children = childrenRoutes
  return routes
}


const routes = [
  {path: "/", redirect: "/menu_1"},
  {path: "/printView/:args", component: () => import("@/views/printView/PrintView")},
  objectToRoutes(menu_1),
  objectToRoutes(menu_2),
  objectToRoutes(menu_3),
  objectToRoutes(menu_4),
  objectToRoutes(menu_7),
]


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if(to.path.indexOf("printView")>0){
    next()
    return
  }
  try{
    let tab = {title: to.meta.breadcrumb[2], path: to.path, meta:{}}
    let index = store.state.tabs.findIndex(item=>item.title===tab.title)
    if(index===-1)
      store.commit("openTab", tab)
    next()
  } catch (e) {
    Vue.prototype.$message.warning("当前页面不存在,跳转至首页")
    next("/menu_1/home")
  }
})

export default router
