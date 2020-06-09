<template>
  <div id="login">
    <transition name="login">
      <div class="loginForm" v-if="flag" @keyup.enter="login">
        <h3 class="title">开发企业房产业务申报系统</h3>
        <div class="line"></div>
        <div>
          <label for="">
            <span><i class="el-icon-user-solid"/>用户名</span>
            <input :disabled="loading" v-model="username" type="text">
          </label>
        </div>
        <div>
          <label for="">
            <span><i class="el-icon-unlock"/>密码</span>
            <input ref="password" :disabled="loading" v-model="password" type="password">
          </label>
        </div>
        <CenterButton :loading="loading" @btnClick="login" style="margin-top: 30px" title="登录"/>
      </div>
    </transition>

  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {loginApi} from "@/api/login";
  import storage from "good-storage"
  export default {
    name: "Login",
    components: {CenterButton},
    data() {
      return {
        flag: false,
        username: "",
        password: "",
        loading: false,
      }
    },
    mounted() {
      this.flag = true;
    },
    methods: {
      login() {
        if (!this.username.trim() || !this.password.trim()) {
          this.$message.info("请输入正确的信息");
          return
        }
        this.loading = true
        loginApi.login(this.username, this.password).then(ret => {
          this.loading = false;
          if (ret.code === 200) {
            this.$message.success("登录成功");
            this.$store.dispatch("login", {
              username: this.username,
              loginStatus: true,
              userAuths: ret.data.userAuths,
              token:ret.data.token,
              rwbh: ret.data.user.rybh
            })
          } else {
            this.$message.error(ret.message || "登录失败");
            // this.password = "";
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  #login {
    width: 100%;
    height: 100vh;
    background: url("~@/assets/images/login/login.jpg") no-repeat center center;
    background-size: cover;
    padding-top: 200px;
  }

  .loginForm {
    width: 400px;
    margin: 0 auto;
    background-color: rgba(255, 255, 255, 0.78);
    padding: 50px;
    display: flex;
    position: relative;
    flex-flow: column nowrap;
    box-shadow: $box-shadow;
    border-radius: $border-radius-weight;
    transition: all 0.8s;

    .title {
      color: $brand;
      font-size: 20px;
    }

    .line {
      width: 100%;
      height: 1px;
      border-bottom: 1px solid darkcyan;
      margin: 10px 0;
    }

    label {
      display: flex;
      position: relative;
      height: 40px;
      line-height: 40px;
      color: $text-info;
      margin-bottom: 10px;

      span {
        position: absolute;
        width: 80px;
        font-size: 15px;

        i {
          margin: 0 10px;
        }
      }

      input {
        width: 100%;
        font-size: 15px;
        line-height: 28px;
        padding-left: 85px;
        padding-right: 10px;
        outline: none;
        color: #666;
        &:focus{
          outline-offset: -1px;
          outline: 1px slateblue solid;
        }
      }
    }
  }

  .login-enter-active {
    bottom: -300px;
    opacity: 0;
  }

  .login-enter-to {
    bottom: 0;
    opacity: 1;
  }

 /* .login-leave-active{
    transition: all 20s;
    transform: scale(1);
  }
  .login-leave-to{
    transform: scale(1.5);
  }*/
</style>