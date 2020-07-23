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
        {title: "添加预售模板", path: "tjysmb"},
        {title: "管理预售模板", path: "glysmb"},
        {title: "合法销售确认", path: "hfxsqr"},
        {title: "打印销售承诺书", path: "dyxscns"},
        {title: "签订预售合同", path: "qdysht"},
        {title: "完善预售合同", path: "wsysht"},
        {title: "查看备案合同", path: "ckbaht"},
        {title: "撤销备案申请", path: "cxbasq"},
        {title: "合同变更申请", path: "htbgsq"},
        {title: "退变合同列表", path: "tbhtlb"},
        {title: "房屋销售数据统计", path: "fwxssjtj"},
      ]
    }
  ]
}
