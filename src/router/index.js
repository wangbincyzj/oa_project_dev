import Vue from 'vue'
import VueRouter from "vue-router";
Vue.use(VueRouter)
import MainContent from "@/views/layout/MainContent";
import menu_1 from "@/router/menu_1";  // 主体内容的载体layout
import menu_2 from "@/router/menu_2";  // 主体内容的载体layout

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
  objectToRoutes(menu_1),
  objectToRoutes(menu_2),

]

const router = new VueRouter({
  routes
})

export default router
