<template>
  <div class="pwd">
    <el-form label-position="right" label-width="80px" :model="form" size="mini">
      <el-form-item label="登录用户">
        <el-input disabled :value="$store.state.loginInfo.username"></el-input>
      </el-form-item>
      <el-form-item label="原密码" required>
        <el-input v-model="form.pwd1" type="password"></el-input>
      </el-form-item>
      <el-form-item label="新密码" required>
        <el-input v-model="form.pwd2" type="password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码" required>
        <el-input v-model="form.pwd3" type="password"></el-input>
      </el-form-item>
    </el-form>
    <CenterButton title="确认修改" @btnClick="btnClick"/>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {authApi} from "@/api/menu_1/auth";

  export default {
    name: "ChangePwd",
    components: {CenterButton},
    data() {
      return {
        form: {
          username: "",
          pwd1: "",
          pwd2: "",
          pwd3: "",
        }
      }
    },
    methods: {
      btnClick() {
        if (!this.form.pwd1.trim() || !this.form.pwd2.trim() || !this.form.pwd3.trim()) {
          this.$message.warning("请输入完整")
          return
        }
        if (this.form.pwd2 !== this.form.pwd3) {
          this.$message.warning("两次输入密码不一致")
          return
        }
        authApi.changPwd(this.$store.state.loginInfo.userId, this.form.pwd1, this.form.pwd2, this.form.pwd3, 2).then(ret=>{
          if(ret.code===200){
            this.$message.success("修改密码成功")
            this.$emit("success")
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .pwd {
    padding: 100px 200px;
    height: 500px;
  }
</style>