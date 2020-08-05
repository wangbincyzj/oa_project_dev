<!--
  组件:适用于大多数添加数据+标题+列表
-->
<template>
  <div class="titleTable">
    <div class="title">
      <TitleShadow :title="title"/>
      <div class="title-buttons">
        <slot name="addButton"/>
      </div>
    </div>
    <div class="line"></div>
    <div class="controls">
      <!--控件和提醒的slot-->
      <slot name="controls"/>
    </div>
    <div class="mainTable">
      <slot/>
    </div>
    <div class="pager" v-if="$slots.pager">
      <slot name="pager"/>
    </div>
    <slot name="dialog"/>
  </div>
</template>

<script>
import TitleShadow from "@/components/uiComponent/titleShadow/TitleShadow";
export default {
  name: "TitleTable",
  components: {TitleShadow},
  props: {
    title: {
      type: String,
      required: true,
      default: "标题缺失"
    },
    bgc: {
      type: String,
      default: "#FDF6EC"
    },
    color: {
      default: "#111"
    },
    addButton: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.titleTable {
  background-color: white;
  height: 100%;
  overflow-y: auto;
  padding: 0 $pl;
  padding-bottom: $pl;
  display: flex;
  flex-flow: column nowrap;
  .title{
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .title-buttons{
      position: absolute;
      right: 30px;
      display: flex;
      align-items: center;
    }
  }

  .line{
    height: 1px;
    background:rgba(234,237,243,1);
    margin: 0 -30px;
    margin-bottom: 13px;
  }

  .pager{
    margin-bottom: -18px;
  }

  .mainTable{
    flex: 1;
    overflow-y: auto;
    &::-webkit-scrollbar{
      width: 8px;
      height: 8px;
      //background-color: #D7DBE4;
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
  }


}

</style>