<template>
  <div id="header">
    <div class="logo">
      <i v-if="!fold" class="el-icon-s-fold" @click="$emit('update:fold', true)"/>
      <i v-else class="el-icon-s-unfold" @click='$emit("update:fold", false)'/>
      房产综合管理系统
    </div>
    <div class="topBar">
      <div class="home">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#iconshouye"></use>
        </svg>
        首页
      </div>
      <el-popover
          placement="top-start"
          width="420"
          trigger="hover">
        <HeaderMenu :data="$store.state.navList"/>
        <span slot="reference">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#iconcaidan"></use>
          </svg>
          菜单</span>
      </el-popover>
      <div class="rightArea">
        <div class="controls">
          <i title="答疑" @click="handleQuestion">
            <svg class="icon" aria-hidden="true" >
              <use xlink:href="#icondayi"></use>
            </svg>
          </i>
          <i title="售后客服" @click="handleService">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconkefu"></use>
            </svg>
          </i>
          <i title="消息" @click="handleMessage">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#iconxiaoxi"></use>
            </svg>
          </i>

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
        size="50%"
        :with-header="false"
        :visible.sync="drawerVisible">
      <div class="content">
        <template v-if="type===0">
          <HeaderQuestion />
        </template>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import HeaderMenu from "@/views/layout/components/HeaderMenu";
import WbDialog from "@/components/common/wb-dialog/WbDialog";
import ChangePwd from "@/components/common/wb-dialog/components/ChangePwd";
import HeaderQuestion from "@/views/layout/components/HeaderQuestion";
import Vue from "vue"
export default {
  name: "Header",
  components: {HeaderQuestion, ChangePwd, WbDialog, HeaderMenu},
  props: ["fold"],
  data() {
    return {
      visible: false,
      dialogTitle: "",
      drawerVisible: false,
      testText: "",
      type: 0
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
  mounted() {
    Vue.prototype.$openQuestions = this.handleQuestion;
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
      this.type = 0
      this.testText = "答疑"
    },
    handleService() {
      this.drawerVisible = true
      this.type = 1
      this.testText = "售后服务"

    },
    handleMessage() {
      this.drawerVisible = true
      this.type = 2
      this.testText = "消息"
    },
    handleQuestionSuccess() {

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
    background-color: #FF9A00;
    flex-shrink: 0;

    svg {
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
    background-color: white;
    vertical-align: center;
    color: #606266;
    border-bottom: 1px $border-1 solid;

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
        svg {
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

.content{
  height: 100%;
}
</style>