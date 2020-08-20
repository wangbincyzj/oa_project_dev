<template>
  <el-menu
      class="el-menu leftMenu"
      @open="handleOpen"
      @close="handleClose"
      background-color="#065AAF"
      active-text-color="#A1D6FE"
      :collapse-transition="false"
      :default-active="$route.path"
      text-color="#eee"
      :unique-opened="true"
      :router="true"
      :collapse="fold"
  >
    <el-submenu :index="`${index}`" v-for="(item,index) in routes">
      <template slot="title">
        <i class="iconfont" :class="item.class" :style="{color: '#fff', fontSize: '14px'}"/>
        <span>{{ item.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
            @click="itemClick(asideNav.path + '/' + child.path, child)"
            :index="asideNav.path + '/' + child.path"
            v-for="child in item.group"
            :key="asideNav.path + '/' + child.path"
        >{{ child.title }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>

export default {
  name: "AsideNav",
  props: ["fold"],
  computed: {
    asideNav() {
      // todo 不是很严谨,考虑重写
      return this.$route.matched.length ? this.$route.matched[0].meta.asideNav : null
    },
    routes() {
      return this.asideNav ? this.asideNav.routes : null
    },
    authsCN() {
      return this.$store.state.loginInfo.userAuths.map(item => item.qxName)
    }
  },
  methods: {
    handleOpen(key, keyPath) {
    },
    handleClose(key, keyPath) {
    },
    itemClick(arg1, arg2) {
      this.$emit("navClick", arg1, arg2)
    },
    canShow(item) {
      return this.authsCN.includes(item)
    }
  }
}
</script>

<style scoped lang="scss">
.el-menu {
  color: #1a1a1c;

  .iconfont {
    margin-right: 12px;
  }
}
</style>