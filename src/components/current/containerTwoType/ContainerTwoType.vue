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
      navInfo: {},  //
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
      padding: $ps;
      background-color: #eee;
      box-shadow: $box-shadow;
      overflow: auto;

      .title {
        text-align: center;
        color: white;
        font-size: 14px;
        font-weight: 600;
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
          color: $text-info;
          font-size: 14px;
          font-weight: 600;
          padding: 10px 10px;
          border-radius: $border-radius;

          &:hover {
            color: $hover-color;
            background-color: #ccc;
          }

          &.active {
            color: white;
            background-color: $brand;
          }
        }
      }
    }

    .right {
      overflow: auto;
      flex: 1;
      margin-left: $pm;
      background-color: #eee;
      box-shadow: $box-shadow;
    }
  }
</style>