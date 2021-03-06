import MainContent from "@/views/layout/MainContent";

/**
 * 现售功能先放后面做,目录先注释(现售合同模板已做完,现售合同备案与预售差不多)  2020/09/03
 */

export default {
  title: "预售备案",
  path: "/menu_3",
  class: "iconzu311",
  redirect: "/menu_3/sqysxk",
  bgc:"#DA9355",
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
      title: "预售合同模板",
      path: "/yshtmb",
      group:[
        {title: "添加预售模板", path: "tjysmb"},
        {title: "管理预售模板", path: "glysmb"},
      ]
    },
    {
      title: "预售合同备案",
      path: "/yshtba",
      group:[
        {title: "合法销售确认", path: "hfxsqr"},
        {title: "打印销售承诺", path: "dyxscns"},
        {title: "签订预售合同", path: "qdysht"},
        {title: "完善预售合同", path: "wsysht"},
        {title: "查看备案合同", path: "ckbaht"},
      ]
    },
    /*{
      title: "现售合同模板",
      path: "/yshtmb",
      group:[
        {title: "添加现售模板", path: "tjysmb2"},
        {title: "管理销售模板", path: "glysmb2"},
      ]
    },
    {
      title: "现售合同备案",
      path: "/yshtba",
      group:[
        {title: "合法销售确认", path: "hfxsqr2"},
        {title: "打印销售承诺", path: "dyxscns2"},
        {title: "签订现售合同", path: "qdysht2"},
        {title: "完善现售合同", path: "wsysht2"},
        {title: "查看备案合同", path: "ckbaht2"},
      ]
    },*/
    {
      title: "备案合同管理",
      path: "/bahtgl",
      group:[
        {title: "撤销备案申请", path: "cxbasq"},
        {title: "合同变更申请", path: "htbgsq"},
        {title: "销售数据统计", path: "fwxssjtj"},
      ]
    },
    {
      title: "旧版合同管理",
      path: "/lshtgl",
      group: [
        {title: "完善合同", path: "wshtold"},
        {title: "管理合同", path: "glhtold"},
      ]
    }
  ]
}
