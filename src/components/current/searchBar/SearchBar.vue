<!--
  使用场景:表格上方的搜索
  props:
    mode: each单独搜索:每个input后面有一个按钮  comb组合搜索:只有一个搜索按钮
  slot:
    searchBarItem
      props:
        val:搜索按钮内容 默认"搜索"
      @emit:
        @search  参数 input的内容
-->
<template>
  <div class="searchBar">
    <slot/>
    <el-button v-if="mode==='comb'" size="mini" :type="searchBtnType" @click="combSearch">搜索</el-button>
    <el-button v-if="mode==='comb'" size="mini" :type="clearBtnType" @click="combClear">清空</el-button>
  </div>
</template>

<script>
  export default {
    name: "SearchBar",
    props:{
      mode: {
        type: String,
        default: "comb"  // 'each'
      },
      searchBtnType:{
        type: String,
        default: "primary"
      },
      clearBtnType:{
        type: String,
        default: "default"
      },
      prefixBgc:{
        type: String,
        default: "#eee"
      },
      prefixColor:{
        type: String,
        default: "#aaa"
      },
      eachBtnType:{
        type: String,
        default: "default"
      }
    },
    computed:{
      items() {
        return this.$slots.default.map(item=>item.child)
      }
    },
    methods:{
      combSearch() {
        this.$emit("combSearch", this.items.map(item=>item.value||null))
      },
      combClear() {
        this.items.forEach(item=>item.value="")
        this.$emit("combClear")
      }
    }
  }
</script>

<style scoped lang="scss">
  .searchBar{
    display: flex;
    justify-content: center;
    padding: 10px 0 ;
  }
</style>