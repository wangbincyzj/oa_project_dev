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
    },
    {
      title: "预售资金缴存",
      path: "/yszjjc",
      group:[
        {title: "添加监管资金", path: "tjjgzj"},
        {title: "管理监管资金", path: "gljgzj"},
        {title: "打印预备缴款名单", path: "dyybjkmd"},
        {title: "测试页面", path: "demopage"},
      ]
    },
    {
      title: "预售资金使用",
      path: "/yszjsy",
      group:[
        {title: "合同退款申请", path: "httksq"},
        {title: "添加使用申报", path: "tjsysb"},
        {title: "管理使用申报", path: "glsysb"},
      ]
    },
    {
      title: "资金监管解除",
      path: "/zjjgjc",
      group:[
        {title: "申请解除监管", path: "sqjcjg"},
        {title: "管理解除申请", path: "gljcsq"},
       
      ]
    },
    {
      title: "预售资金核对",
      path: "/yszjhd",
      group:[
        {title: "楼栋资金信息", path: "ldzjxx"},
        {title: "账户资金信息", path: "zhzjxx"},
      ]
    },
    {
      title: "房屋定金管理",
      path: "/fwdjgl",
      group:[
        {title: "定金缴存", path: "fwdDjjc"},
        {title: "定金关联", path: "fwdDjgl"},
        {title: "定金退款", path: "fwdDjtk"},
      ]
    },
    {
      title: "房屋定金管理",
      path: "/fwdjgl",
      group:[
        {title: "定金缴存", path: "fwdDjjc"},
        {title: "定金关联", path: "fwdDjgl"},
        {title: "定金退款", path: "fwdDjtk"},
        {title: "定金统计", path: "fwdDjtj"},
      ]
    }
  ]
}
