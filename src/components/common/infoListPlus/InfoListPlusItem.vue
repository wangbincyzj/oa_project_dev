<template>
  <div class="item" :style="itemStyle">
    <div class="name">
      <template v-if="name">
        {{name}}
      </template>
      <template v-else>
        <slot name="name"/>
      </template>
    </div>
    <div class="content" :style="contentStyle">
      <div class="inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoListPlusItem",
    props: {
      name: {type: String},
      oneline: {type: Boolean, default: false}
    },
    computed: {
      itemStyle() {
        let width;
        if(this.oneline){
          width = "100%"
        }else{
          width = (100 / this.$parent.count).toFixed(2) + "%";
        }
        let height = this.$parent.height;
        return {
          width, height, lineHeight: height
        }
      },
      nameStyle() {

      },
      contentStyle() {
        let flex = this.oneline ? 3 : 1;
        return {flex}
      },
      inputStyle() {
        let border = "none";
        let borderBottom = "";
        let backgroundColor =  "transparent";
        let outline = "none";
        let width =  "100%";
        return {border, borderBottom, backgroundColor, outline, width}
      }
    },
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .item {
    display: flex;
    flex-shrink: 0;
    border: 1px solid #fff;
    box-sizing: border-box;

    .name {
      flex: 1;
      text-align: center;
      font-size: 12px;
      font-weight: 600;
      background-color: #E4EDF9;

    }

    .content {
      flex: 1;
      font-size: 13px;
      color: #135294;
      .inner{
        padding: 0 20px;
      }
      .inner > input{
        border: none;
        border-bottom: 1px $info solid;
        background-color: transparent;
        outline: none;
        width: 100%;
      }
    }
  }
</style>