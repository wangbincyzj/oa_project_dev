<template>
  <div class="headerMenu">
    <div
      class="item"
      v-for="item in data"
      @click="go(item.path)"
    >
      <i class="iconfont" :class="item.class"/>
      <span>{{item.title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HeaderMenu",
    props: ["data"]
  }
</script>

<style scoped lang="scss">
  .headerMenu {
    display: flex;
    width: 400px;
    flex-wrap: wrap;

    .item {
      width: 80px;
      height: 80px;
      margin: 10px;
      display: flex;
      flex-flow: column;
      font-size: 12px;
      align-items: center;
      justify-content: space-around;
      cursor: pointer;
      background-color: #EBEEF5;
      box-shadow: var(--box-shadow);
      i.iconfont{
        font-size: 30px!important;
      }
      &:hover{
        background-color: #409EFF;
        color: white;
      }
    }
  }
</style>