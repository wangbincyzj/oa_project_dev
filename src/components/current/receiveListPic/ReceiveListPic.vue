<!--
  解决element-table的table传图bug
-->
<template>
  <el-collapse accordion @change="handleChange">
    <el-collapse-item v-for="(item, index) in listData" :name="index">
      <template slot="title">
        <slot name="title" :index="index" :item="item"/>
      </template>
      <div class="add">
        <slot name="add" :item="item"/>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";

  export default {
    name: "ReceiveListPic",
    components: {UploadCpn},
    props:{
      listData: {
        default: ()=>[],
        type: Array
      }
    },

    methods:{
      handleChange(index) {
        console.log(index)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

</style>