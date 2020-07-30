<template>
  <div id="mainContentLayout">
    <RouterView class="mainContent"/>
  </div>
</template>

<script>
  export default {
    name: "MainContent",
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  #mainContentLayout{
    background-color: $border-4;
    width: 100%;
    height: 100%;
    .mainContent{
      height: calc(100% - 34px);
    }
  }
</style>