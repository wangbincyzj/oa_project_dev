<!--打印销售承诺书-->
<template>
  <div class="root">
    <div class="kfsTitle">{{d.kfqy}}</div>
    <div class="title">合法销售承诺书</div>
    <div class="tableWrapper">
      <table class="rootTable" border="1">
        <tr>
          <td class="field">开发企业</td>
          <td >{{d.kfqy}}</td>
          <td class="field">证件号码</td>
          <td>{{d.kfqy}}</td>
        </tr>
        <tr>
          <td class="field">项目名称</td>
          <td >{{d.xmxxMc}}</td>
          <td class="field">项目地址</td>
          <td>{{d.xmxxXmdz}}</td>
        </tr>
        <tr>
          <td class="field">土地证号</td>
          <td >{{d.xmxxTdzh}}</td>
          <td class="field">预售许可证号</td>
          <td>{{d.xkzbh}}</td>
        </tr>
        <tr>
          <td class="field">楼栋名称</td>
          <td >{{d.ldMc}}</td>
          <td class="field">房号</td>
          <td>{{d.roomFh}}</td>
        </tr>
        <tr>
          <td class="field">建筑面积</td>
          <td >{{d.roomJzmj}}</td>
          <td class="field">套内面积</td>
          <td>{{d.roomTnmj}}</td>
        </tr>
        <tr>
          <td class="field">分摊面积</td>
          <td >{{d.roomFtmj}}</td>
          <td class="field">房屋用途</td>
          <td>{{d.roomFwyt}}</td>
        </tr>
        <tr>
          <td class="field">房屋层高</td>
          <td >{{d.roomCg}}</td>
          <td class="field">所在层</td>
          <td>{{d.roomscz}}</td>
        </tr>
        <tr class="limit">
          <td class="field">限制信息</td>
          <td colspan="3">
            <table style="width: 100%; text-align: center; border-collapse: collapse" border="1">
              <tr >
                <td>序号</td>
                <td>限制原因</td>
                <td>限制时间</td>
                <td>限制状态</td>
              </tr>
              <template v-if="!xzxx.length">
                <tr>
                  <td colspan="6">无限制信息</td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="(item,index) in xzxx">
                  <td>{{index+1}}</td>
                  <td>{{item.fwxzXzbz}}</td>
                  <td>{{item.fwxzAddtime}}</td>
                  <td>{{item.fwxzYxzt?"限制":"解封"}}</td>
                </tr>
              </template>
            </table>
          </td>
        </tr>
        <tr class="limit">
          <td class="field">查封信息</td>
          <td colspan="3">
            <table style="width: 100%; text-align: center; border-collapse: collapse" border="1">
              <tr >
                <td>序号</td>
                <td>查封文号</td>
                <td>查封机关</td>
                <td>查封期限</td>
                <td>查封时间</td>
                <td>查封状态</td>
              </tr>
              <template v-if="!cfxx.length">
                <tr>
                  <td colspan="6">无查封信息</td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="(item,index) in xzxx">
                  <td>{{index+1}}</td>
                  <td>{{item.htcfCfwh}}</td>
                  <td>{{item.htcfCfjg}}</td>
                  <td>{{item.htcfCfkssj}}-{{item.htcfCfjssj}}</td>
                  <td>{{item.htcfAddtime}}</td>
                  <td>{{item.htcfYxzt?'查封':'解封'}}</td>
                </tr>
              </template>
            </table>
          </td>
        </tr>
        <tr class="limit">
          <td class="field">交易信息</td>
          <td colspan="3">
            <table style="width: 100%; text-align: center; border-collapse: collapse" border="1">
              <tr >
                <td>序号</td>
                <td>合同编号</td>
                <td>签订时间</td>
                <td>备案时间</td>
                <td>变更时间</td>
                <td>合同状态</td>
              </tr>
              <template  v-if="!jyxx.length">
                <tr>
                  <td colspan="6">无查封信息</td>
                </tr>
              </template>
              <template v-else>
                <tr v-for="(item,index) in jyxx">
                  <td>{{index+1}}</td>
                  <td>{{item.htBh}}</td>
                  <td>{{item.htAddtime}}</td>
                  <td>{{item.htBasj}}</td>
                  <td>{{item.htBgsj}}</td>
                  <td>{{item.htCxzt==2?"无效":"有效"}}</td>
                </tr>
              </template>

            </table>
          </td>
        </tr>
        <tr class="limit">
          <td class="field">抵押信息</td>
          <td colspan="3">
            <table style="width: 100%; text-align: center; border-collapse: collapse" border="1">
              <tr >
                <td>序号</td>
                <td>抵押权人</td>
                <td>所有权人</td>
                <td>债务期限</td>
                <td>他项权证号</td>
                <td>办理时间</td>
                <td>抵押状态</td>
              </tr>
              <tr >
                <td colspan="7">无抵押信息</td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td class="field">附记</td>
          <td colspan="3"></td>
        </tr>
        <tr>
          <td class="field">售房人意见</td>
          <td colspan="3" class="sellerOpinion">
            <div class="content">
              本公司承诺该房屋销售符合住建部《商品房销售管理办法》的相关规定,该房屋不存在一房多卖,无抵押,且无查封,无任何产权纠纷,
              该房屋具备合法销售条件。<br>
              如该房屋销售信息存在虚假,或本公司所提供的信息存在异议,我公司愿承担一切法律责任,保障购房人的合法权益。
            </div>
            <div class="item">
              承诺单位(签章):
            </div>
            <div class="item">
              法定代表人(签章):
            </div>
            <div class="item">
              日期:
            </div>
          </td>
        </tr>
        <tr>
          <td class="field">购房人意见</td>
          <td colspan="3" class="sellerOpinion">
            <div class="content">
              本人已知晓该该房屋销售情况,符合本人购房意向,因本人原因造成该房屋无法正常交易,本人愿意承担相关法律责任。
            </div>
            <div class="item">
              购房人(签章):
            </div>
            <div class="item">
              法定代表人(签章):
            </div>
            <div class="item">
              日期:
            </div>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "DyXscns",
    data() {
      return {
        d:{}
      }
    },
    computed:{
      xzxx() {
        return this.d.homeSalesRestrictions || []
      },
      cfxx() {
        return this.d.houseCloseds || []
      },
      jyxx() {
        return this.d.contractBothParties || []
      },
    },
    created() {
      this.getBaseData()
    },
    methods:{
      getBaseData() {
        console.log(this.$route)
        yushouContractApi.getPrintData(this.$route.query.id).then(ret=>{
          console.log(ret)
          this.d = ret.data
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .root{
    font-size: 14px;
    text-align: center;
    .kfsTitle{
      line-height: 2;
      font-size: 25px;
    }
    .title{
      line-height: 1.2;
      font-size: 18px;
    }
    .tableWrapper{
      width: 95%;
      margin: 0 auto;
      background-color: $border-4;
      table.rootTable{
        width: 100%;
        td{
          height: 25px;
          text-align: left;
          &.field{
            padding-left: 0;
            font-weight: 600;
            width: 15%;
            text-align: center;
          }
        }
        tr.limit{
          height: 50px;
          text-align: center;
          td{
            text-align: center;
          }
        }
        .sellerOpinion{
          font-size: 16px;
          padding: 10px;
          .item{
            margin-top: 30px;
          }
        }
      }
    }
  }
</style>