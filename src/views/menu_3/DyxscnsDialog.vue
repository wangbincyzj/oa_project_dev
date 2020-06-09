<template>
  <div>
    <div v-if="mode===0">
      <el-form
        style="padding-right: 100px"
        v-loading="loading"
        label-position="right"
        label-width="150px"
        size="mini"
        :model="formPwd">
        <el-form-item label="承诺人姓名">
          <el-input v-model="formPwd.xsqrdCrnxm"></el-input>
        </el-form-item>
        <div class="tip">提示:姓名之间用、隔开</div>
        <el-form-item label="交易密码">
          <el-input type="password"  v-model="formPwd.xsqrdPass"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password"  v-model="formPwd.password"></el-input>
        </el-form-item>
      </el-form>
      <CenterButton @btnClick="handleSavePwd" title="保存密码"/>
    </div>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "DyxscnsDialog",
    components: {CenterButton},
    props: ["id"],
    data() {
      return {
        formData: {},
        formPwd: {
          xsqrdCrnxm: "",
          xsqrdPass: "",
          password: "",
        },
        mode: 0,
        loading: false
      }
    },
    methods: {
      setMode(mode) {
        console.log("mode", mode)
        this.mode = mode;
        switch (mode) {
          case 0:
            this.fetchById();
            break;  // 修改密码
        }
      },
      handleSavePwd() {
        yushouContractApi.setPassword({...this.formPwd,xsqrdId:this.id}).then(ret=>{
          if(ret.code===200){
            this.$message.success("保存成功")
            this.$emit("submitSuccess")
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      },
      fetchById() {
        yushouContractApi.salesConfirmationSelectById(this.id).then(ret => {
          console.log(ret)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .tip{
    text-align: center;
    font-size: 12px;
    color: red;
    position: relative;
    left: 30px;
    bottom: 10px;
  }
</style>