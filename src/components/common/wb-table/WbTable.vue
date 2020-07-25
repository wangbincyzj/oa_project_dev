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
    name: "WbTable",
    components: {UploadCpn},
    props:{
      listData: {
        default: ()=>[],
        type: Array
      }
    },

    methods:{
      handleChange(index) {
        this.$emit("indexChange", index!==""? index:-1)
      },

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

</style>