<!--
  与InfoList类似,item右边内容可通过定制,模拟旧系统相关样式
  props:
    count:每行个数 默认2
-->
<template>
  <div class="infoList">
    <div class="title ">
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
      default: 4,
      type: Number
    },
    height:{
      default: "16px"
    },
    nameBgc:{
      type: String,
    },
    contentBgc:{
      type: String
    },
    nameColor:{
      type: String
    },
    contentColor:{
      type: String
    },
    labelWidth:{
      type: String,
      default: null
    }
  },
  created() {
  }
}
</script>

<style scoped lang="scss">
.infoList{
  display: flex;
  flex-flow: row wrap;
  //border: 5px solid rgb(228, 237, 249);
  .title{
    width: 100%;
    font-size: 14px;
    line-height: 30px;
    font-weight: 600!important;
    text-align: center;
  }
}
</style>