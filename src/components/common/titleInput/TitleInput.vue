<template>
  <div class="titleInput">
    <div class="title">{{this.label}}</div>
    <el-input
      style="width: 200px"
      v-model="inputValue"
      size="mini"
      @input="change"
      clearable
    />
  </div>
</template>

<script>
  export default {
    name: "TitleInput",
    props:{
      label: {
        required: true,
        type: String
      }
    },
    data() {
      return {
        inputValue: "",
      }
    },
    methods:{
      change(){
        this.$emit("inputChange", this.inputValue)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .titleInput{
    width: 400px;
    color: white;
    padding: 2px 0;
    height: 30px;
    display: flex;
    .title{
      text-align: center;
      height: 30px;
      line-height: 30px;
      font-size: $font-normal-s;
      width: 200px;
      color: $text-info;
      border: 1px solid #fff;
      background-color: #E4EDF9;
      margin-right: -5px;
    }
    .input{
      outline: none;
      border: 1px solid #E4EDF9;
      height: 30px;
    }
  }
</style>