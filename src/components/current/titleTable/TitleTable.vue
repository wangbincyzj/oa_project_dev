<!--
  组件:适用于大多数添加数据+标题+列表
-->
<template>
  <div class="titleTable">
    <div class="title">
      <el-alert
        type="warning"
        center
        :style="{backgroundColor: this.bgc, position: 'relative'}"
        :closable="false">
        <span class="title" :style="{fontWeight: 600, fontSize: '15px', color: this.color}">
          {{title}}
          <slot name="addButton" v-if="addButton"/>
        </span>
      </el-alert>
    </div>
    <div class="controls">
      <!--控件和提醒的slot-->
      <slot name="controls"/>
    </div>
    <div class="mainTable">
      <!--主要表格的slot-->
      <slot/>
    </div>
    <!--对话框slot-->
    <slot name="dialog"/>
  </div>
</template>

<script>
  export default {
    name: "TitleTable",
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
      return {

      }
    },
    methods:{
      handleEdit(){
        console.log(arguments)
      },
      handleDelete() {

      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .titleTable {
    height: 100%;
    padding: $ps;
  }

</style>