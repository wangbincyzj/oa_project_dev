<template>
  <div class="item" :class="{active}" @click="itemClick" @click.middle="handleClose">
    <div class="ball"></div>
    <span>{{tab.title}}</span>
    <i v-if="tab.title!=='系统首页'" class="el-icon-close" @click.stop="handleClose"/>
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
    user-select: none;
    flex-shrink: 0;
    font-size: 14px;
    padding: 0 8px;
    height: 26px;
    border:1px solid #909399;
    color: #333;
    display: flex;
    align-items: center;
    margin-left: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.2s;
    color:rgba(96,98,102,1);
    &:hover {
      background:rgba(226,245,253,1);;
      color:rgba(96,98,102,1);
      border:1px solid #0085EB
    }

    span {
      margin-right: 8px;
    }

    i {
      color: #fff;
      border-radius: 50%;
      color:rgba(96,98,102,1);
      padding: 2px;
      &:hover {
        background: rgb(245, 109, 109);
        color: #fff;
      }
    }
  }

  .active{
    background-color: #0085EB;
    border:1px solid #0085EB;
    color: white;
    position: relative;
    .ball{
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: white;
      margin-right: 6px;
    }
    i{
      color: white;
    }
    &:hover{
      background-color: #0085EB;
      color: white;
      position: relative;
      .ball{
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: white;
        margin-right: 6px;
      }
      i{
        color: white;
      }
    }
  }
</style>