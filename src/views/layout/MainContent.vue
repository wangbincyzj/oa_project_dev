<template>
  <div id="mainContentLayout">
    <!--<div class="breadcrumb">
      <span><i class="el-icon-location"/>当前位置: </span>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="title in $route.meta.breadcrumb">{{title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>-->
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
    .breadcrumb{
      background-color: #FFE6F8FC;
      background-size: contain;
      padding: 10px 5px;
      display: flex;
      span{
        font-size: 14px;
        font-weight: 600;
        margin-right: 20px;
      }
    }
    .mainContent{
      height: calc(100% - 34px);
    }
  }
</style>