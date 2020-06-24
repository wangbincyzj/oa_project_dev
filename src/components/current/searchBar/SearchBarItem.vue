<!--
  仅能当做SearchBar的default-slot
  props:
    prefix 前置内容
    suffix 按钮内容
  emit:
    search(value)
-->
<template>
  <div class="searchItem">
    <div class="prefix"
         :style="prefixStyle"
         v-if="prefix">{{prefix}}</div>
    <template v-if="mode==='input'">
      <input v-model="value" :placeholder="placeholder" type="text">
    </template>
    <template v-if="mode==='select'">
      <select  v-model="value">
        <option :value="item.value" v-for="item in selectData">{{item.key}}</option>
      </select>
    </template>
    <el-button
      v-if="$parent.mode==='each'"
      size="mini"
      :type="$parent.eachBtnType"
      @click="$emit('search', value)">{{suffix}}</el-button>
  </div>
</template>

<script>
  export default {
    name: "SearchBarItem",
    props:{
      prefix:{
        type: String,
        default: ""
      },
      placeholder:{
        type: String,
        default: ""
      },
      suffix:{
        type: String,
        default: "搜索"
      },
      mode:{
        type: String,
        default: "input",
      },
      selectData:{
        type: Array, // [{key:xxx,value:yyyy}]
        default() {
          return  [{key: "请选择", value: null}]
        }
      }
    },
    data() {
      return{
        value: ""
      }
    },
    computed:{
      prefixStyle(){
        return{
          color: this.$parent.prefixColor,
          backgroundColor: this.$parent.prefixBgc,
        }
      }
    },
    methods:{

    }
  }
</script>

<style scoped lang="scss">
  .searchItem{
    height: 32px;
    margin: 0 10px;
    display: flex;
    .prefix{
      line-height: 28px;
      margin: 2px 0;
      height: 28px;
      padding: 0 15px;
      font-size: 13px;
    }
    input {
      box-sizing: border-box;
      height: 28px;
      margin: 2px 0;
      margin-right: -5px;
      outline: none;
      color: #333;
      font-size: 14px;
      padding: 0 3px;
      border: 1px solid #cccccc;
    }
    select{
      box-sizing: border-box;
      height: 28px;
      margin: 2px 0;
      width: 175px;
      margin-right: -2px;
      color: #333;
      font-size: 14px;
      padding-left: 5px;
      outline: none;
      border: 1px solid #fff;
      option{
        height: 28px;
        line-height: 28px;
      }
    }
    button{
      border-radius: 0;
    }
  }
</style>