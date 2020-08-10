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
    <div class="prefix" v-if="prefix">{{ prefix }}</div>
    <div class="button">
      <template v-if="mode==='input'">
        <el-input size="mini" :placeholder="placeholder" v-model="value"/>
      </template>
      <template v-if="mode==='select'">
        <el-select v-model="value" size="mini">
          <el-option :value="item.value" v-for="item in selectData" :label="item.key"></el-option>
        </el-select>
      </template>
    </div>
    <el-button
      v-if="$parent.mode==='each'"
      size="mini"
      :type="$parent.eachBtnType"
      @click="$emit('search', value)">{{ suffix }}
    </el-button>
  </div>
</template>

<script>
export default {
  name: "SearchBarItem",
  props: {
    prefix: {
      type: String,
      default: ""
    },
    placeholder: {
      type: String,
      default: ""
    },
    suffix: {
      type: String,
      default: "搜索"
    },
    mode: {
      type: String,
      default: "input",
    },
    selectData: {
      type: Array, // [{key:xxx,value:yyyy}]
      default() {
        return [{key: "请选择", value: null}]
      }
    }
  },
  data() {
    return {
      value: ""
    }
  },
  computed: {
    prefixStyle() {
      return {
        color: this.$parent.prefixColor,
        backgroundColor: this.$parent.prefixBgc,
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.searchItem {
  height: 32px;
  margin-right: 40px;
  display: flex;
  align-items: center;

  .prefix {
    color: $text-normal;
    font-size: 14px;
    margin-right: 10px;
  }
  .button{
    flex: 1;
  }

  button {
    border-radius: 0;
  }
}
</style>