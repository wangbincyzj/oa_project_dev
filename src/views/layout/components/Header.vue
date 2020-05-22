<template>
  <div id="header">
    <div class="logo">房产业务员申报系统</div>
    <div class="topBar">
      <div class="home"><i class="iconfont icon-home"/> 首页</div>
      <el-popover
        placement="top-start"
        width="420"
        trigger="hover">
        <HeaderMenu :data="$store.state.navList"/>
        <span slot="reference"><i class="iconfont icon-icon-"/> 菜单</span>
      </el-popover>
      <div class="userInfo">
        <el-popover
          placement="top-start"
          width="200"
          trigger="hover">
          <div class="popInfo">
            <div class="info">
              <span class="name">{{name}}</span> <span class="title">{{title}}</span>
            </div>
            <hr>
            <ul class="menu">
              <li>修改密码</li>
              <li>退出登录</li>
            </ul>
          </div>
          <div class="avatar" slot="reference">
            <img src="@/assets/images/header/avatar.png" alt="">
            <span class="name">{{name}}</span>
          </div>
        </el-popover>

      </div>
    </div>
  </div>
</template>

<script>
  import HeaderMenu from "@/views/layout/components/HeaderMenu";
  export default {
    name: "Header",
    components: {HeaderMenu},
    data() {
      return {
        name: "杨文远",
        title: "信息部门"
      }
    },
    computed:{
      navList() {
        return this.$store.state.navList
      }
    },
  }
</script>

<style scoped lang="scss">
  #header{
    height: 55px;
    display: flex;
    color: white;
    line-height: 55px;
    .logo{
      text-align: center;
      width: 200px;
      background-color: #0270c1;
      flex-shrink: 0;
    }
    .topBar{
      position: relative;
      flex: 1;
      display: flex;
      background-color: #1248b3;
      vertical-align: center;
      .userInfo{
        position: absolute;
        right: 30px;
        .avatar{
          height: 55px;
          line-height: 55px;
          display: flex;
          span{
            color: var(--border-1);
            font-size: 12px;
          }
          img{
            padding: 10px;
            width: 55px;
            height: 55px;
            border-radius: 50%;
          }
        }
      }
      &>*{
        margin: 0 30px;
        cursor: pointer;
      }
      i{
        font-size: 18px;
      }
    }
  }
</style>