<!--
  与InfoList类似,item右边内容可通过定制,模拟旧系统相关样式
  props:
    count:每行个数 默认2
-->
<template>
  <div class="infoList">
    <div class="title">
      <slot name="title"/>
    </div>
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "InfoListPlus",
    props:{
      count: {
        default: 2,
        type: Number
      },
      height:{
        default: "35px"
      }
    },
  }
</script>

<style scoped lang="scss">
  .infoList{
    display: flex;
    flex-flow: row wrap;
    .title{
      width: 100%;
      background-color: #E4EDF9;
      font-size: 14px;
      line-height: 30px;
      font-weight: 600!important;
      text-align: center;
    }
  }
</style>