<template>
  <div class="_infoList">
    <div class="title">{{title}}</div>
    <ul class="list">
      <li :style="{width: width}" v-for="item in info">
        <span class="key">
          {{item.key}}
        </span>
        <span class="value">
          {{item.value}}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "InfoList",
    props: {
      title: {},
      info: Array,
      rowCount: {
        default: 2,
      }
    },
    computed:{
      width() {
        return 100 / this.rowCount + "" + "%"
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  ._infoList{
    width: 100%;
    div.title{
      padding: 10px 20px;
      color: white;
      margin: 10px;
      font-weight: 600;
      font-size: 14px;
      background: $brand;
    }
    ul.list{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 50%;
        display: flex;
        margin-bottom: 3px;
        span{
          font-size: 14px;
          flex: 1;
          padding: 3px 0;
          &.key{
            text-align: center;
            background-color: #E4E7ED;
          }
          &.value{
            padding-left: 15px;
            font-size: 13px;
            font-weight: 600;
          }
        }
      }
    }
  }
</style>