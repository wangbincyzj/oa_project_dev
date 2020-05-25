import MainContent from "@/views/layout/MainContent";

export default {
  title: "预售备案",
  path: "/menu_3",
  class: "icon-rmb",
  redirect: "/menu_3/sqysxk",
  routes:[
    {
      title: "预售许可申报",
      path: "/ysxksb",
      group:[
        {title: "申请预售许可", path: "sqysxk"},
        {title: "申请现售备案", path: "sqxsba"},
      ]
    },
    {
      title: "预售合同备案",
      path: "/yshtba",
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
