<template>
  <div class="item" :class="{active}" @click="itemClick" @click.middle="handleClose">
    <span>{{tab.title}}</span><i class="el-icon-close" @click.stop="handleClose"/>
  </div>
</template>

<script>
  export default {
    name: "WbTabsItem",
    props: {
      tab: {
        type: Object,
        default: "空白标签"
      },
    },
    computed: {
      active() {
        return this.$route.path === this.tab.path
      }
    },
    methods: {
      itemClick() {
        this.$router.push(this.tab.path)
      },
      handleClose(e) {
        let index = this.$store.state.tabs.findIndex(item=>item.title === this.tab.title)
        if(index===0)return;  // 首页不让关
        this.$store.commit("closeTab", this.tab)
        if(this.$route.path !== this.tab.path) return;
        let toIndex = index===this.$store.state.tabs.length ? index - 1 : index
        if(this.$route.path !== this.$store.state.tabs[toIndex].path){
          this.$router.push(this.$store.state.tabs[toIndex].path)
        }

      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .item {
    flex-shrink: 0;
    font-size: 13px;
    padding: 4px 7px;
    border: 1px solid $border-1;
    color: #333;
    margin: 3px;
    border-radius: $border-radius;
    cursor: pointer;

    &:hover {
      border-color: white;
      background-color: orange;
      color: white;
    }

    span {
      margin-right: 3px;
    }

    i {
      color: #333;
      border-radius: 50%;
      padding: 2px;

      &:hover {
        color: white;
        background-color: red;
      }
    }
  }

  .active{
    background-color: #007fff;
    color: white;
  }
</style>