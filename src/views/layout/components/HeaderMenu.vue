<template>
  <div class="headerMenu">
    <div
        class="item"
        :class="{active: isActive(item)}"
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
  props: ["data"],
  methods:{
    isActive(item){
      return this.$route.fullPath.indexOf(item.path) !== -1
    }
  }
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
    position: relative;
    transition: all 0.3s;
    bottom: 0;
    overflow: hidden;
    i.iconfont{
      font-size: 30px!important;
      position: relative;
    }
    &:hover{
      background-color: #409EFF;
      color: white;
      bottom: 5px;
      box-shadow: 0 3px 10px red;
      i{
        animation: 0.5s to-left;
      }
    }
  }
  .active{
    background-color: #409EFF;
    color: white;
  }
}
@keyframes to-left {
  0%{
    left: 0;
  }
  50%{
    left: 80px;
  }
  51%{
    left: -50px;
  }
  100%{
    left: 0;
  }
}
</style>