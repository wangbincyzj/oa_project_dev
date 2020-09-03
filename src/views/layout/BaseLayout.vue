<template>
  <div id="baseLayout">
    <Header class="header" :fold.sync="fold"/>

    <main style="overflow-x: hidden">
      <AsideNav
          class="asideNav"
          :fold="fold"
          :style="{width:fold?'':'200px'}"
          @navClick="navClick"
      />
      <div class="mainContent">
        <wb-tabs class="tabs" @refresh="handleRefresh">
          <wb-tabs-item
              v-for="item in $store.state.tabs"
              :tab="item"
              @close="handleClose"
          />
        </wb-tabs>
        <RouterView v-if="showRouter" class="mainRouter"/>
      </div>
    </main>


  </div>
</template>

<script>
import Header from "@/views/layout/components/Header";
import AsideNav from "@/views/layout/components/AsideNav";
import WbTabs from "@/components/common/wb-tabs/WbTabs";
import WbTabsItem from "@/components/common/wb-tabs/WbTabsItem";
import WbDialog from "@/components/common/wb-dialog/WbDialog";
import Vue from "vue"
export default {
  name: "BaseLayout",
  components: {WbDialog, WbTabsItem, WbTabs, AsideNav, Header},
  data() {
    return {
      fold: false,
      tabs: [],
      visible: true,
      showRouter: true
    }
  },
  created() {
    Vue.prototype.$refresh = this.handleRefresh
  },
  methods: {
    handleRefresh() {
      this.showRouter = false;
      this.$nextTick(() => {
        this.showRouter = true
      })
    },
    navClick(path, obj) {
      if (this.tabs.some(item => item.path === path)) return;
      this.tabs.push({path, title: obj.title})
    },
    handleClose(path) {
      if (this.tabs.length === 1) return;  // 只有一个tab不让关不太好
      let index = this.tabs.findIndex(item => item.path === path);
      let toIndex = index === this.tabs.length - 1 ? index - 1 : index + 1
      this.$router.push(this.tabs[toIndex].path).then(args => {
        console.log(ret)
      })
      this.tabs.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
@import "~@/assets/css/var.scss";

#baseLayout {
  height: 100vh;


  .header {
    height: 55px;
  }

  main {
    height: calc(100% - 55px);
    overflow-y: hidden;
    display: flex;

    .asideNav {
      height: 100%;
      overflow-y: auto;
      overflow-x: hidden;
      flex-shrink: 0;
    }

    .mainContent {
      flex: 1;
      overflow-x: auto;
      overflow-y: hidden;

    }

    .tabs {
      min-width: 1166px;
      height: 40px;
      box-shadow: 0 3px 20px -2px rgba(0, 0, 0, 0.08);
    }

    .mainRouter {
      box-sizing: border-box;
      min-width: 1166px;
      //overflow-x: auto;
      background: rgba(240, 242, 245, 1);
      height: calc(100% - 40px);
      padding-top: 1px;
      overflow-y: auto;
    }
  }
}
</style>