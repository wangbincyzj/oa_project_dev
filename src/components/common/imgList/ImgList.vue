<template>
  <div class="imgList">
    <ul>
      <li v-for="(item,index) in list.slice(0,count)">
        <el-image
          class="item"
          v-if="index < count"
          :src="item"
          :preview-src-list="list">
          <div v-if="index+1===count"></div>
        </el-image>
      </li>
      <li class="more" v-if="list.length > count">
        <span>点击图片</span>
        <span>更多({{count}}/{{list.length}})</span>
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: "ImgList",
    props: {
      count: {
        type: Number,
        default: 3
      },
      itemStyle: {
        type: Object,
        default: () => ({width: "80px", height: "80px"})
      },
      list: {
        type: Array,
        default: () => []
      }
    },
  }
</script>

<style scoped lang="scss">
  .imgList {
    ul {
      width: 320px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      li {
        position: relative;
        width: 80px;
        height: 80px;
        box-sizing: border-box;
        padding: 5px;
        background-color: gainsboro;
        &.more {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .item {
          width: 100%;
          height: 100%;
        }
      }
    }


  }

</style>