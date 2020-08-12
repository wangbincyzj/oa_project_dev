<template>
  <span class="title-shadow">
          <span class="title">{{title}}</span>
<!--          <span class="shadow"></span>-->
        </span>
</template>

<script>
export default {
  name: "TitleShadow",
  props:{
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.title-shadow{
  position: relative;
  .title{
    position: relative;
    z-index: 2;
    font-weight: 600;
    color: $brand;
  };
  .shadow{
    position: absolute;
    width: 100%;
    height: 14px;
    background:rgba(226,245,253,1);
    left: 20px;
    top: 10px;
    z-index: 1;
  }
}
</style>