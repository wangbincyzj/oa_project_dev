<template>
  <div id="login" class="myClass">
    <div class="hide">
      <div class="logoArea">
        <img class="logo" src="../../assets/images/login/logo.png" alt="">
      </div>
      <transition name="login">
        <div class="loginForm" v-if="flag" @keyup.enter="login">
          <h3 class="title">开发企业申报系统</h3>
          <div class="inputItem">
            <i class="iconfont iconlujing1"/>
            <input class="input" :disabled="loading" v-model="username" placeholder="请输入账户名称">
          </div>
          <div class="inputItem">
            <i class="iconfont iconlujing3"/>
            <input class="input" :disabled="loading" v-model="password" type="password" placeholder="请输入账户密码">
          </div>
          <!--<CenterButton :loading="loading" @btnClick="login" style="margin-top: 30px" title="登录"/>-->
          <el-button type="primary" class="loginButton" :loading="loading" @click="login" style="margin-top: 1.85%; margin-bottom: 12.35%">登录
          </el-button>
        </div>
      </transition>
      <div class="bottom">
        <span>售后电话：4001-366328(转2)</span>
        <span>|</span>
        <span>©</span>
        <span>江西才气软件技术有限公司</span>
      </div>
    </div>

  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {loginApi} from "@/api/login";
  import {webClient} from "@/utils/webClient"
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
        udxh:"" // u盾序号
      }
    },
    mounted() {
      this.flag = true;
      this.onPageLoad();
    },
    methods: {
      onPageLoad(){
        var browser = webClient.DetectBrowser();
        if(browser == "Unknown")
        {
          this.$message.error("不支持该浏览器， 如果您在使用傲游或类似浏览器，请切换到IE模式");
            return false;
        }
        //createElementIAWeb() 对本页面加入IAWeb插件
        webClient.createElementIAWeb();
        //DetectActiveX() 判断IAWebClinet是否安装
        var create = webClient.DetectIAWebPlugin();
        if(create == false)
        {
          this.$message.error("IAWeb插件未安装!")
              return false;
        }

        var rtn = webClient.IAWeb_Find();
        if(rtn!=0)
          {
            this.$message.error("没有找到加密锁")
            return false;
          }
        this.udxh = webClient.IAWeb_GetGUID();
        console.log(this.udxh);
        return true
      },
     
      login() {
        var flag = this.onPageLoad();
        if(!flag){
          return;
        }
        if (!this.username.trim() || !this.password.trim()) {
          this.$message.info("请输入正确的信息");
          return
        }
        this.loading = true
        loginApi.login(this.username, this.password,this.udxh).then(ret => {
          this.loading = false;
          if (ret.code === 200) {
            console.log(ret.data)
            let uDun = ret.data.user.rwdqrqzt;
            if(uDun === 1){
              alert("U盾将于15日内过期,请及时续期")
            }else if(uDun === 2){
              alert("U盾已过期,请及时续期")
            }
            this.$message.success("登录成功");
            this.$store.dispatch("login", {
              username: this.username,
              loginStatus: true,
              userAuths: ret.data.userAuths,
              token:ret.data.token,
              rwbh: ret.data.user.rybh,
              userId: ret.data.user.userId,
              rwdqrq: ret.data.user.rwdqrq,
              rwdqrqzt: ret.data.user.rwdqrqzt
            })
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
  background: url("~@/assets/images/login/background.png") no-repeat center center;
  background-size: cover;
}

.hide {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 1;
  padding-top: 31.8vh;
}

.logoArea {
  user-select: none;
  .logo {
    width: 10.89%;
    position: fixed;
    top: 6.2%;
    left: 4.69%;
  }

  .name {
    position: fixed;
    top: 60px;
    left: 171px;
    width: 128px;
    height: 42px;
    font-size: 32px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 42px;
    color: rgba(255, 255, 255, 1);
    opacity: 1;
  }
}

.loginForm {
  width: 25vw;
  padding: 0 2.08%;
  background: rgba(255, 255, 255, 1);
  opacity: 1;
  border-radius: 10px;
  margin: 0 auto;
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  box-shadow: $box-shadow;
  transition: all 1.2s;

  .title {
    height: 9.63vh;
    font-size: 18px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    line-height: 9.63vh;
    color: rgba(48, 49, 51, 1);
    text-align: center;
    opacity: 1;
  }

  .inputItem {
    width: 100%;
    height: 40px;
    background: rgba(255, 255, 255, 1);
    opacity: 1;
    margin: 0 auto;
    margin-bottom: 1.85vh;
    position: relative;

    i {
      width: 42px;
      text-align: center;
      color: $text-info;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }

    input {
      flex: 1;
      height: 100%;
      width: 100%;
      padding-left: 42px;
      border-radius: 4px;
      padding-right: 5px;
    }
  }
}

.bottom {
  position: fixed;
  bottom: 2.7vh;
  display: flex;
  width: 100%;
  font-size: 12px;
  justify-content: center;
  color: white;

  span:nth-child(2) {
    margin-left: 20px;
    margin-right: 20px;
  }

  span:nth-child(3) {
    margin-right: 8px;
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


</style>