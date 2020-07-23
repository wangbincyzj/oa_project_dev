import MainContent from "@/views/layout/MainContent";

export default {
  title: "项目管理",
  path: "/menu_2",
  class: "icon-dc-icon-beiangaoqishuliang",
  redirect: "/menu_2/wsfcxm",
  routes:[
    {
      title: "项目信息管理",
      path: "/xmxxgl",
      group:[
        // {title: "项目流程管理", path: "xmlcgl"},
        {title: "完善房产项目", path: "wsfcxm"},
        {title: "添加项目楼栋", path: "tjxmld"},
        {title: "添加户室房间", path: "tjhsfj"},
        {title: "楼盘自审结盘", path: "lpzsjp"},
        {title: "楼盘审核上报", path: "lpsbsh"},
      ]
    },
    {
      title: "一房一价管理",
      path: "/yfyjgl",
      group:[
        {title: "设置一房一价", path: "szyfyj"},
        {title: "一房一价上报", path: "yfyjsb"},
      ]
    }
  ]
}
