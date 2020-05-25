import MainContent from "@/views/layout/MainContent";

export default {
  title: "预售资金",
  path: "/menu_4",
  class: "icon-house",
  redirect: "/menu_4/sqjgzh",
  routes:[
    {
      title: "监管账户管理",
      path: "/jgzhgl",
      group:[
        {title: "申请监管账户", path: "sqjgzh"},
        {title: "打印开户通知单", path: "dykhtzd"},
      ]
    },
    {
      title: "三方协议管理",
      path: "/sfxygl",
      group:[
        {title: "申请三方协议", path: "sqsfxy"},
        {title: "打印三方协议", path: "dysfxy"},
      ]
    }
  ]
}
