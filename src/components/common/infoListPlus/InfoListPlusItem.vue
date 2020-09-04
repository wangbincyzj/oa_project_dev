<template>
  <div class="item" :style="itemStyle">
    <div class="name" :style="nameStyle">
      <template v-if="name">
        {{name}}:
      </template>
      <template v-else>
        <slot name="name"/>
      </template>
    </div>
    <div class="content" :style="contentStyle">
      <div class="inner" >
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
    oneline: {type: Boolean, default: false},
    type: {
      type: String,
      default: "normal",
      enum: ["normal","danger"]
    }
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
      if(this.$parent.labelWidth){
        return {width: this.$parent.labelWidth, textAlign: "right"}
      }
    },
    contentStyle() {
      let flex = this.oneline ? 3 : 1;
      return {flex,
        backgroundColor: this.$parent.contentBgc,
        color: this.$parent.contentColor
      }
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
  padding-left: 30px;
  height: 16px;
  line-height: 16px;
  margin: 8px 0!important;
  display: flex;
  .name {
    flex-shrink: 0;
    font-size:12px;
    color:rgba(144,147,153,1);
    margin-right: 5px;

  }

  .content {
    font-size:12px;
    color:rgba(48,49,51,1);
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    .inner{
      padding: 0 3px;
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