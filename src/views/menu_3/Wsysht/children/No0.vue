<template>
  <div class="wsysht-item">
    <div class="hd">第一章 合 同 当 事 人</div>
    <div class="bd" v-if="baseData">
      <InfoListPlus>
        <div slot="title"><span style="font-weight: 600">合 同 当 事 人</span></div>
        <template>
          <InfoListPlusItem name="出卖人">{{baseData.rwqyxxTitle}}</InfoListPlusItem>
          <InfoListPlusItem name="注册地址">{{baseData.rwqyxxZcdz}}</InfoListPlusItem>
          <InfoListPlusItem name="营业执照注册号">{{baseData.rwqyxxYyzh}}</InfoListPlusItem>
          <InfoListPlusItem name="法定代表人">{{baseData.rwqyxxFaren}}</InfoListPlusItem>
          <InfoListPlusItem name="企业资质证书号">{{baseData.rwqyxxZzbh}}</InfoListPlusItem>
          <InfoListPlusItem name="企业资质等级">{{baseData.rwqyxxZzdj}}</InfoListPlusItem>
          <InfoListPlusItem name="邮政编码">{{baseData.rwqyxxYzbm}}</InfoListPlusItem>
          <InfoListPlusItem name="联系电话">{{baseData.rwqyxxLxdh}}</InfoListPlusItem>
          <InfoListPlusItem name="委托代理人"><input v-model="form.htMfwtdlr" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="通讯地址"><input v-model="form.htMfwtdldz" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="联系电话"><input v-model="form.htMfdllxdh" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="邮政编码"><input v-model="form.htMfdlyzbm" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="委托销售经纪机构"><input v-model="form.htMfwtdljg" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="营业执照注册号"><input v-model="form.htMfwtdljgzch" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="法定代表人"><input v-model="form.htMfdljgfr" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="联系电话"><input v-model="form.htMfdljgddh" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="合同密码"><input v-model="form.htPass" type="text"></InfoListPlusItem>
          <InfoListPlusItem name=""></InfoListPlusItem>
        </template>
      </InfoListPlus>
      <InfoListPlus>
        <div slot="title"><span style="font-weight: 600; color: red">注意：购买人务必一个一个的添加，同时合同密码为购买人中第一个购买人的身份证后6位</span>
        </div>
        <template>
          <InfoListPlusItem name="买 受 人">
            <div>
              <el-button @click="add" size="mini">添加购买人</el-button>
              <el-button @click="manage" size="mini">管理购买人</el-button>
            </div>
          </InfoListPlusItem>
          <InfoListPlusItem name=""></InfoListPlusItem>
          <InfoListPlusItem name="【委托代理人】【法定代理人】"><input v-model="form.htMfdlrxm" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="【国籍】:【户籍所在地】"><input v-model="form.htMfdldz" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="证件类型：【居民身份证】【护照】【营业执照】"><input v-model="form.htMfdlrzjlx" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="证   号"><input v-model="form.htMfdlrzjhm"  type="text"></InfoListPlusItem>
          <InfoListPlusItem name="通讯地址"><input v-model="form.htMfdlrtxdz"  type="text"></InfoListPlusItem>
          <InfoListPlusItem name="性   别"><input v-model="form.htMsfdlrxb"  type="text"></InfoListPlusItem>
          <InfoListPlusItem name="邮政编码"><input v-model="form.htMsfdlyzbm"  type="text"></InfoListPlusItem>
          <InfoListPlusItem name="电    话"><input v-model="form.htMfdldh"  type="text"></InfoListPlusItem>
        </template>
      </InfoListPlus>
      <CenterButton @btnClick="handleSave" :loading="loading" style="margin-top: 15px" title="保存条款"/>
    </div>
    <el-dialog
      :title="dialogTitle"
      center
      width="1200px"
      slot="dialog"
      append-to-body
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <No0Dialog
        ref="dialog"
      />
    </el-dialog>
  </div>
</template>

<script>
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {mixins} from "@/utils/mixins";
  import No0Dialog from "@/views/menu_3/Wsysht/children/No0Dialog";
  import {contractAbout} from "@/api/menu_3/contractAbout";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "No1",
    mixins: [mixins.dialogMixin],
    components: {No0Dialog, CenterButton, InfoListPlusItem, InfoListPlus},
    props: ["htId", "oriData"],
    data() {
      return {
        baseData:{

        },
        form: {
          htMfwtdlr: "",
          htMfwtdldz: "",
          htMfdllxdh: "",
          htMfdlyzbm: "",
          htMfwtdljg: "",
          htMfwtdljgzch: "",
          htMfdljgfr: "",
          htMfdljgddh: "",
          htPass: "",
          ////
          htMfdlrxm: "X",
          htMfdldz: "X",
          htMfdlrzjlx: "X",
          htMfdlrzjhm: "X",
          htMfdlrtxdz: "X",
          htMsfdlrxb: "X",
          htMsfdlyzbm: "X",
          htMfdldh: "X",
        },
        loading: false,
        dialogTitle: "",
        sectionName: "contractBothParties"
      }
    },
    computed:{
      sectionData() {
        return this.oriData[this.sectionName]
      }
    },
    created() {
      this.fetchBaseData();
      this.mapOriDataToSectionData()
    },
    methods:{
      handleSave() {
        this.form.htId = this.htId;
        this.form.name = this.sectionName;
        yushouContractApi.contractComplete(1, this.form).then(ret=>{
          if(ret.code===200){
            this.$message.success("保存成功")
          }else{
            this.$message.success(ret.message||"未知错误")
          }
        })
      },
      fetchBaseData() {
        contractAbout.getRwqyBaseInfo((this.$store.state.rwbh + "").slice(0,4)).then(ret=>{
          this.baseData = ret.data;
        })
      },
      mapOriDataToSectionData() {
        this.form = this.oriData[this.sectionName];
      },
      _mapResponseToForm(obj, obj2) {  // 递归注入数据
        Object.keys(obj).forEach(item=>{
          if(obj[item] instanceof Object){
            this._mapResponseToForm(obj[item], obj2)
          }else{
            obj[item] = obj2[item]
          }
        })
      },
      add() {
        this.dialogVisible = true;
        this.dialogTitle = "添加购买人"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(0)
        })
      },
      manage() {
        this.dialogVisible = true;
        this.dialogTitle = "管理购买人"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1)
        })
      }
    }
  }
</script>

<style lang="scss">

</style>