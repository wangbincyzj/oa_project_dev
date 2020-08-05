<!--
  组件:适用于左右分栏操作,
  @slot
    default:右边一大块的内容

  @props:
    navInfo:[title:String, list:Array]

  @events:
    searchChange
    liClick
-->
<template>
  <div class="root" :style="{height: this.height}">
    <div class="left" v-if="!leftSlot">
      <el-input
          v-if="search || $listeners.searchChange"
          size="mini"
          style="margin-bottom: 10px"
          :placeholder="navInfo.title"
          v-model="searchValue"
          clearable
          @input="searchChange"
      />
      <ul v-loading="loading">
        <li
            v-for="(item,index) in navInfo.list"
            :key="index"
            :class="{active: index===currentIndex}"
            :title="item.name"
            @click="liClick(index)"
        >{{item.name}}
        </li>
      </ul>
    </div>
    <div class="left" v-else>
      <slot name="leftSlot"></slot>
    </div>
    <div class="right">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContainerTwoType",
  props: {
    leftSlot:{
      type: Boolean,
      default: false
    },
    navInfo: {

    },
    search:{
      type:Boolean,
      default: false
    },
    height: {
      type: String,
      default: "100%"
    },
    loading:{
      type: Boolean,
      default: false
    }

  },
  data() {
    return {
      currentIndex: 0,
      searchValue: ""
    }
  },
  methods: {
    liClick(index) {
      this.$emit("liClick", index);
      this.currentIndex = index;
    },
    // loading(){

    // },
    searchChange(){
      this.$emit("searchChange", this.searchValue)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.root {
  display: flex;

  .left {
    width: 200px;
    flex-shrink: 0;
    height: 100%;
    background-color: #fff;
    box-shadow: $box-shadow;
    overflow: auto;
    &::-webkit-scrollbar{
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track{
      //box-shadow: inset 0 0 5px rgba(0,0,0,.3);
      background-color: transparent;
    }
    &::-webkit-scrollbar-thumb{
      border-radius: 10px;
      background: #CBD2DD;
      //box-shadow: inset 0 0 5px #000;
    }
    &::-webkit-scrollbar-thumb:hover{
      background: #D9DFEA;
    }
    &::-webkit-scrollbar-thumb:active{
      background: #D9DFEA;
    }

    .title {
      text-align: center;
      color: white;
      font-size: 14px;
      line-height: 1.5;
      margin: $ps-f $ps-f 10px;
      background-color: $brand-light;
      padding: $pxs;
    }

    .searchWrapper {
      display: flex;
      justify-content: space-around;
    }

    ul {
      li {
        cursor: pointer;
        color: $text-normal;
        font-size: 14px;
        padding: 0 30px;
        height: 35px;
        line-height: 35px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        &:first-child{
          margin-top: 30px;
        }

        &:hover {
          color:rgba(96,98,102,1);
          background:rgba(226,245,253,1);
        }

        &.active {
          color: white;
          background-color: $brand;
        }
      }
    }
  }

  > .right {
    overflow: auto;
    margin: $pm;
    flex: 1;
    background-color: white;
    box-shadow: $box-shadow;
  }
}

@media all and (max-width: 1367px){
  .left{
    width: 150px!important;
    li{
      padding: 0 10px 0 12px!important;
    }
  }
}
</style>