<template>
  <div class="_root">
    <div class="top">
      <!-- <div class="title">受理意见单</div> -->
    </div>
    <div class="center">
      <div style="width:700px;margin:0 auto;">          
          <table style="width:700px;table-layout:fixed;border-collapse: collapse;text-align:center;height:800px " border="2">
           <tr><td colspan="4"><p style="font-size:20px;width:300px;margin:0 auto">商品房预售资金退款申请单</p></td></tr>
           <tr><td>开发企业</td><td>{{print.djsyKfs}}</td><td>项目名称</td><td>{{print.djsyXmmc}}</td></tr>
          <tr><td>缴存总额</td><td>{{print.jkze}}</td><td>使用总额</td><td>{{print.sbze}}</td></tr>
          <tr><td>监管金额</td><td>{{print.syze}}</td><td></td><td></td></tr>
           <tr><td>监管银行</td><td colspan="3">{{print.djsyJgyhmc}}</td></tr>
           <tr><td>申请拨付方式</td><td>定金退款</td><td>申请拨付金额</td><td>{{print.djsySbje}}</td></tr>
           <tr><td>申请拨付时间</td><td>{{print.djsySbsj}}</td><td>审核拨付时间</td><td>{{print.djsyShtime}}</td></tr>
            <tr><td>拨付确认码</td><td>{{print.djsyBfqrm}}</td><td colspan="2" rowspan="5"></td></tr>
            <tr><td>划拨账户</td><td >{{print.djsyHrzhmc}}</td></tr>
            <tr><td >划拨账号</td><td>{{print.djsyHrzhzh}}</td></tr>
            <tr><td>开户银行</td><td>{{print.djsyHrzhyh}}</td></tr>
            <tr><td >打印时间</td><td>{{print.dysj}}</td></tr>
         </table>
          </div>
     </div>
  </div>
</template>

<script>  
  import {djtkglApi} from "@/api/menu_4/djtkgl";
  export default {
    name: "Djtksqd",
    data() {
      return{
        djsyId:0,
        print:{},
      }
    },
    created() {
      this.djsyId = this.$route.query.djsyId;
     
      this.fetchBaseData()
    },
    
    methods:{
      fetchBaseData() {
          djtkglApi.getBfdDetail(this.djsyId).then(ret=>{
           console.log(ret);
           this.print=ret.data;
           
            
        })     
      }
    }
  }
</script>

<style scoped lang="scss">
//   ._root{
//     overflow-x: hidden;
//   }
//   .top{
//     line-height: 100px;
//     text-align: center;
//     font-weight: 600;
//   }
//   .center{
//     table, tr, td{
//       border: 1px solid red;
//       vertical-align: middle;
//     }
//     td{
//       padding-left: 2px;
//     }
//   }
//   .bottom{
//     padding: 0 10px;
//     display: flex;
//     line-height: 40px;
//     flex-flow: column nowrap;
//     font-size: 18px;
//     div:last-child{
//       text-align: right;
//     }
//   }
</style>