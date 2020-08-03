<template>
  <div class="item" :style="{width:itemWidth}">
    <div class="title" >{{title}}:</div>
    <div class="content" :title="$slots.default ? $slots.default[0].text: ''"><slot>--</slot></div>
  </div>
</template>

<script>
export default {
  name: "InfoListItem",
  props:{
    title: {
      type: String,
      required: true
    }
  },
  computed:{
    itemWidth() {
      return 100/this.$parent.rowCount + "%"
    }
  },
}
</script>

<style scoped lang="scss">
  .item{
    padding-left: 30px;
    height: 16px;
    line-height: 16px;
    margin: 8px 0;
    display: flex;
    //overflow: hidden;
    .title{
      flex-shrink: 0;
      font-size:12px;
      color:rgba(144,147,153,1);
      margin-right: 5px;
    }
    .content{
      font-size:12px;
      color:rgba(48,49,51,1);
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
</style>