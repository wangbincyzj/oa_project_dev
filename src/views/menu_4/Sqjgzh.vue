<template>
  <TitleTable :title="`项目对应监管资金列表`">
    <el-alert type="warning" center>
      <span style="color: red">注意：将相关材料收件上传，确认完整后再上报！</span>
      <el-button type="primary" size="mini">新增账户</el-button>
    </el-alert>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  export default {
    name: "Sqjgzh",
    components: {TitleTable}
  }
</script>

<style scoped lang="scss">

</style>