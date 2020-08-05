<template>
  <div class="tabs">
    <div class="items">
      <slot/>
    </div>
    <div class="control">
      <div class="box" @click="closeAll" :class="{inActive: $store.state.tabs.length===1}">关闭所有</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WbTabs",
    methods:{
      closeAll() {
        this.$router.push(this.$store.state.tabs[0].path)
        this.$store.commit("closeTab", "all")
      },
      closeOther() {
        this.$store.commit("closeTab", this.$route.path)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tabs{
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    padding-left: 18px;
    .items{
      flex: 1;
      height: 100%;
      display: flex;
      align-items: center;
      overflow: hidden;
      /*background-color: #cccccc;*/
    }
    .control{
      height: 100%;
      display: flex;
      align-items: center;
      margin-right: 15px;
      .box{
        flex-shrink: 0;
        font-size: 14px;
        padding: 6px 16px;
        border:1px solid rgba(0,133,235,1);
        color: white;
        display: flex;
        align-items: center;
        margin-left: 12px;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
        background-color: rgba(0,133,235,1);
        &:hover{
          background-color: #339EEF;
          color: white;
        }
        &.inActive{
          background-color: #A1D6FE;
          border: none;
          cursor: not-allowed;
        }
      }
    }
  }
</style>