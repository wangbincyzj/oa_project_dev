<template>
  <div class="tabs">
    <div class="items">
      <slot/>
    </div>
    <div class="control">
      <div class="box" @click="closeAll">关闭所有</div>
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
    box-shadow: $box-shadow;
    width: 100%;
    height: 30px;
    margin-top: 2px;
    margin-bottom: 3px;
    display: flex;
    align-items: center;
    padding-left: 10px;
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
        font-size: 14px;
        padding: 5px 10px;
        color: white;
        background: #409eff;
        margin-right: 10px;
        cursor: pointer;
        border-radius: $border-radius;
        &:hover{
          background-color: red;
          color: white;
        }
      }
    }
  }
</style>