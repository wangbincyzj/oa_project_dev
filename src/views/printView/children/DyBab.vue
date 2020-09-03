<!--完善预售合同-打印备案表-->
<template>
  <div class="root">
    <table width="800" border="0" align="center" cellpadding="0" cellspacing="0">
      <tbody>
      <tr>
        <td height="65" align="center" style="font-size:32px;letter-spacing:5px;"><strong>XXX县房地产交易所</strong></td>
      </tr>
      <tr>
        <td height="50" align="center"><span class="STYLE2"><font
          style="font-size:22px; font-weight:bold; letter-spacing:4px;">&nbsp;商品房合同备案申请表</font></span></td>
      </tr>
      </tbody>
    </table>
    <table width="831" border="1" align="center" cellpadding="1" cellspacing="1" bordercolor="#000000">


      <tbody>
      <tr>
        <td height="70" align="center"><strong>出 卖 人</strong></td>
        <td height="50" align="left">&nbsp;{{d.kfsMc}}</td>
        <td width="133" height="50" align="center"><strong>证件号码</strong></td>
        <td width="273" height="50" align="left">&nbsp;{{d.kfsYyzh}}</td>
      </tr>
      <tr>
        <td height="50" colspan="4" align="center">
          <table width="100%" border="0" cellpadding="1" cellspacing="1" bgcolor="#000000">
            <tbody>
            <tr>
              <td height="40" align="center" bgcolor="#FFFFFF"><strong>买受人</strong></td>
              <td height="50" align="center" bgcolor="#FFFFFF"><strong>证件号码</strong></td>
              <td height="50" align="center" bgcolor="#FFFFFF"><strong>家庭地址</strong></td>
              <td align="center" bgcolor="#FFFFFF"><strong>联系电话</strong></td>
            </tr>
            <tr v-for="item in buyerList">
              <td height="40" align="center" bgcolor="#FFFFFF">{{item.fwsyqrSyqr}}</td>
              <td height="50" align="center" bgcolor="#FFFFFF">{{item.fwsyqrZjhm}}</td>
              <td height="50" align="center" bgcolor="#FFFFFF">{{item.fwsyqrJtdz}}</td>
              <td align="center" bgcolor="#FFFFFF">{{item.fwsyqrLxdh}}</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      <tr>
        <td height="70" align="center"><strong>预售证号</strong></td>
        <td height="50">&nbsp;{{d.roomXkzh}}</td>
        <td height="50" align="center"><strong>房屋坐落</strong></td>
        <td height="50">&nbsp;{{d.roomFwzl}}</td>
      </tr>
      <tr>
        <td height="70" align="center"><strong>建筑面积</strong></td>
        <td height="50">&nbsp;{{d.roomJzmj}}平方米</td>
        <td height="50" align="center"><strong>房屋用途</strong></td>
        <td height="50" align="left">&nbsp;{{d.roomSjyt}}</td>
      </tr>
      <tr>
        <td width="126" height="70" align="center"><strong>付款方式</strong></td>
        <td height="50" align="left">&nbsp;{{d.roomFkfs}}</td>
        <td height="50" align="center"><strong>签订时间</strong></td>
        <td height="50" align="left">&nbsp;{{d.htQdsj ? new Date(d.htQdsj).toLocaleString():""}}</td>
      </tr>
      <tr>
        <td height="70" align="center"><strong>成交单价</strong></td>
        <td height="50" align="left">&nbsp;{{d.roomCjdj}}元/平方米</td>
        <td height="50" align="center"><strong>成交总额</strong></td>
        <td height="50">&nbsp;{{d.roomCjZj}}元</td>
      </tr>
      <tr>
        <td height="70" align="center"><strong>合同编号</strong></td>
        <td width="271" height="50" align="left">&nbsp;{{d.htBh}}</td>
        <td colspan="2" rowspan="3" align="center">
          <table width="100%" height="130" border="0" cellpadding="0" cellspacing="0">
            <tbody>
            <tr>
              <td height="90" align="center" valign="middle"><img src="" width="180" height="180"></td>
            </tr>
            <tr>
              <td height="30" align="center" valign="top" style="font-size:22px;letter-spacing:5px;">&nbsp;{{d.htBh}}
              </td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>


      <tr>
        <td height="70" align="center"><strong>打 印 人</strong></td>
        <td height="50" align="left">&nbsp;{{d.dyr}}</td>
      </tr>

      <tr>
        <td height="70" align="center"><strong>打印时间</strong></td>
        <td height="50">&nbsp;{{new Date(d.dysj).toLocaleString()}}</td>
      </tr>

      <tr>
        <td height="70" align="center"><strong>声明</strong></td>
        <td height="50" colspan="3" align="left" style="line-height:30px;">本备案申请所填写的信息及提供的配套材料均真实、合法、有效，否则申请人愿意承担相应责任。
        </td>
      </tr>
      <tr>
        <td height="70" colspan="2" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;出卖人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;（单位盖章）</td>
            </tr>
            <tr>
              <td height="30">&nbsp;</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;法定代表人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;代理人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;年&nbsp; 月&nbsp;&nbsp; 日</td>
            </tr>
            </tbody>
          </table>
        </td>
        <td height="50" colspan="2" align="center">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
            <tbody>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;买受人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;（盖章）</td>
            </tr>
            <tr>
              <td height="30">&nbsp;</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;法定代表人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;代理人签字</td>
            </tr>
            <tr>
              <td height="30">&nbsp;&nbsp;&nbsp;年&nbsp; 月&nbsp;&nbsp; 日</td>
            </tr>
            </tbody>
          </table>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "DyBab",
    data() {
      return {
        d: {}
      }
    },
    computed: {
      buyerList() {
        return this.d.houseOwners || []
      }
    },
    created() {
      this.fetchBaseData()
    },
    methods: {
      fetchBaseData() {
        yushouContractApi.printContractForm(this.$route.query.id).then(ret => {
          this.d = ret.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .root {
    strong {
      font-weight: 600 !important;
    }
  }
  td:not([align='center']){
    padding-left: 10px;
  }
</style>