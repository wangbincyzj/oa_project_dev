<template>
  <div id="header">
    <div class="logo">
      <i v-if="!fold" class="el-icon-s-fold" @click="$emit('update:fold', true)"/>
      <i v-else class="el-icon-s-unfold" @click='$emit("update:fold", false)'/>
      开发申报系统
    </div>
    <div class="topBar">
      <div class="home"><i class="iconfont icon-home"/> 首页</div>
      <el-popover
          placement="top-start"
          width="420"
          trigger="hover">
        <HeaderMenu :data="$store.state.navList"/>
        <span slot="reference"><i class="iconfont icon-icon-"/> 菜单</span>
      </el-popover>
      <div class="rightArea">
        <div class="controls">
          <i class="iconfont iconlujing129" title="答疑" @click="handleQuestion"/>
          <i class="iconfont iconlujing126" title="售后客服" @click="handleService"/>
          <i class="iconfont iconlujing125" title="消息" @click="handleMessage"/>
        </div>
        <div class="line"></div>
        <div class="userInfo">
          <el-popover
              placement="top-start"
              width="200"
              trigger="hover">
            <div class="popInfo">
              <div class="info">
                <span class="name">{{ name }}</span> <span class="title">{{ title }}</span>
              </div>
              <hr>
              <ul class="menu">
                <li @click="setPwd">修改密码</li>
                <li @click="logout">退出登录</li>
              </ul>
            </div>
            <div class="avatar" slot="reference">
              <img src="@/assets/images/header/avatar.png" alt="">
              <span class="name">{{ name }}</span>
            </div>
          </el-popover>
        </div>
      </div>
    </div>
    <WbDialog :visible.sync="visible" :title="dialogTitle">
      <ChangePwd @success="success"/>
    </WbDialog>
    <el-drawer
        :visible.sync="drawerVisible">
      <div class="title" style="font-weight: 600; color: slateblue;text-align: center">{{testText}}</div>
    </el-drawer>
  </div>
</template>

<script>
import HeaderMenu from "@/views/layout/components/HeaderMenu";
import WbDialog from "@/components/common/wb-dialog/WbDialog";
import ChangePwd from "@/components/common/wb-dialog/components/ChangePwd";

export default {
  name: "Header",
  components: {ChangePwd, WbDialog, HeaderMenu},
  props: ["fold"],
  data() {
    return {
      visible: false,
      dialogTitle: "",
      drawerVisible: false,
      testText: ""
    }
  },
  computed: {
    navList() {
      return this.$store.state.navList
    },
    name() {
      return this.$store.state.loginInfo.username || "获取中..."
    },
    title() {
      return this.$store.state.loginInfo.title || "职称获取中..."
    }
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$message.info("退出登录成功")
    },
    setPwd() {
      this.visible = true;
      this.dialogTitle = "修改密码"
    },
    success() {
      this.visible = false
    },
    handleQuestion() {
      this.drawerVisible = true
      this.testText = "答疑"
    },
    handleService() {
      this.drawerVisible = true
      this.testText = "售后服务"

    },
    handleMessage() {
      this.drawerVisible = true
      this.testText = "消息"

    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

#header {
  height: 55px;
  display: flex;
  color: white;
  line-height: 55px;

  .logo {
    text-align: center;
    width: 200px;
    background-color: #339EEF;
    flex-shrink: 0;

    i {
      cursor: pointer;

      &:hover {
        color: #2b2b2b;
      }
    }
  }

  .topBar {
    position: relative;
    flex: 1;
    display: flex;
    background-color: #0085EB;
    vertical-align: center;

    .rightArea {
      cursor: auto;
      position: absolute;
      right: 30px;
      display: flex;
      align-items: center;

      .userInfo {
        margin-left: 30px;

        .avatar {
          height: 55px;
          line-height: 55px;
          display: flex;
          align-items: center;

          span {
            color: var(--border-1);
            font-size: 16px;
          }

          img {
            width: 26px;
            height: 26px;
            border-radius: 50%;
            margin-right: 10px;
          }
        }
      }

      .line {
        width: 1px;
        height: 26px;
        background-color: $border-1;
        margin-left: 30px;
      }

      .controls {
        i {
          font-size: 20px;
          margin-left: 30px;

          &:hover {
            color: #4DAAF1;
            cursor: pointer;
          }
        }
      }
    }

    & > * {
      margin: 0 30px;
      cursor: pointer;
    }

    i {
      font-size: 18px;
    }
  }
}
</style>