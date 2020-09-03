import MainContent from "@/views/layout/MainContent";

export default {
  title: "用户中心",
  path: "/menu_1",
  class: "iconlujing229",
  redirect: "/menu_1/home",
  bgc: "#3474CC",
  routes:[
    {
      title: "系统权限设置",
      path: "/xtqxsz",
      class: "icon-shezhi1",
      group:[
        {title: "系统首页", path: "home"},
        {title: "用户密码修改", path: "yhmmxg"},
        {title: "用户权限设置", path: "yhqxsz"},
      ]
    },
    {
      title: "开发资质管理",
      path: "/kfzzgl",
      class: "icon-tubiaozhizuomobanyihuifu-",
      group:[
        {title: "开发资质申请", path: "kfzzsq"},
        {title: "开发资质管理", path: "kfzzgl"},
        {title: "资质年检管理", path: "zznjgl"},
      ]
    },
  ]
}
