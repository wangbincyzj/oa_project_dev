import MainContent from "@/views/layout/MainContent";

export default {
  title: "抵押及租赁",
  path: "/menu_6",
  class: "icon-22",
  routes:[
    {
      title: "系统综合设置",
      path: "/ztzhsz",
      group:[
        {title: "用户管理", path: "yhgl"},
        {title: "业务大类", path: "ywdl"},
      ]
    },
    {
      title: "从业业主管理",
      path: "/cyyzgl",
      group:[
        {title: "添加入网企业", path: "tjrwqy"},
        {title: "添加入网人员", path: "tjrwry"},
        {title: "资质到期限制", path: "zzdqxz"},
        {title: "添加入网银行", path: "tjrwyh"},
        {title: "添加银行人员", path: "tjyhry"},
      ]
    }
  ]
}
