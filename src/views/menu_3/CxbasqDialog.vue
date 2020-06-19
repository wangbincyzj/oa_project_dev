<template>
  <div class="cxbasqDialog">
    <div v-if="mode===0">   <!--0 申请-->
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="申请人" >
          <el-input disabled v-model="form.name"/>
        </el-form-item>
        <el-form-item label="退变原因" >
          <el-input type="textarea" :rows="5" v-model="form.reason"/>
        </el-form-item>
      </el-form>
      <CenterButton :loading="loading" @btnClick="handleSubmit" title="提交申请"/>
    </div>
    <div v-if="mode===1">  <!--1 详情-->
      <el-tabs value="first" type="card" >
        <el-tab-pane label="基本信息" name="first">
          <InfoListPlus>
            <template slot="title">合同变更详情</template>
            <InfoListPlusItem :name="item.name" v-for="item in changeDetail">{{item.content}}</InfoListPlusItem>
          </InfoListPlus>
        </el-tab-pane>
        <el-tab-pane label="收件图片" name="second">
          <InfoListPlus>
            <template slot="title">收件图片</template>
          </InfoListPlus>
        </el-tab-pane>
        <el-tab-pane label="审核意见" name="third">
          <InfoListPlus>
            <template slot="title">审核意见</template>
            <template v-for="item in form2.approveProcess">
              <InfoListPlusItem :name="`${item.processName}人`">{{item.approvePerson}}</InfoListPlusItem>
              <InfoListPlusItem :name="`${item.processName}时间`">{{item.approveTime}}</InfoListPlusItem>
              <InfoListPlusItem oneline :name="isReject(item.approveOpinion) ? '驳回原因' :`${item.processName}意见`" :type="isReject(item.approveOpinion) ? 'danger': null">{{item.approveOpinion|opinionFilter}}</InfoListPlusItem>
            </template>
          </InfoListPlus>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  export default {
    name: "CxbasqDialog",
    components: {InfoListPlusItem, InfoListPlus, CenterButton},
    props:{
      htId: {},
      visible: {}
    },
    data() {
      return {
        form: {
          name: "",
          reason: ""
        },
        form2:{

        },
        loading: false,
        mode: null, // 0变更申请  1变更详情,
        result: {},
        changeDetail:{
          sqr:{name: "申请人", content: ""},
          sqsj:{name: "申请时间", content: ""},
          msr:{name: "买 受 人", content: ""},
          zjhm:{name: "证件号码", content: ""},
          fwmj:{name: "房屋面积", content: ""},
          htze:{name: "合同总额", content: ""},
          fkfs:{name: "付款方式", content: ""},
          qdsj:{name: "签订时间", content: ""},
          sbsj:{name: "上报时间", content: ""},
          basj:{name: "备案时间", content: ""},
          zjjgzt:{name: "资金监管状态", content: ""},
          nrjgze:{name: "纳入监管总额", content: ""},
          cxyy:{name: "申请原因", content: ""},
        }
      }
    },
    created() {
      this.form.name = this.$store.state.loginInfo.username
    },
    filters:{
      opinionFilter(value=""){
        if(value.startsWith("bhyy:")){
          return value.split("bhyy:")[1]
        }else{
          return value
        }
      }
    },
    methods:{
      handleSubmit() {
        yushouContractApi.revokeContract(this.htId, this.form.reason).then(ret=>{
          if(ret.code===200){
            this.$message.success("操作成功");
            this.form.reason = ""
            this.$emit("submitSuccess")
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      },
      isReject(val) {
        return val.startsWith("bhyy:")
      },
      setMode(mode,...args){
        this.mode = mode;
        if(mode===1){
          this.fetchDetail(args[0])
        }
      },
      fetchDetail(htId) {
        yushouContractApi.revokeContractDetail(htId).then(ret=>{
          this.form2 = ret.data
          Object.keys(this.changeDetail).forEach(key=>{
            this.changeDetail[key].content = ret.data[key]
          })
        })
      }
    }

  }
</script>

<style scoped lang="scss">
  .cxbasqDialog{
    padding: 0 10px;
  }
</style>