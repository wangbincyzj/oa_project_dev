<template>
  <div>
    <TitleTable title="合同模板管理">
      <el-table
        v-loading="loading"
        style="width: 100%"
        :data="tableData">
        <el-table-column label="模板ID" align="center" prop="" width="150"/>
        <el-table-column label="模板名称" align="center" prop="" width="400"/>
        <el-table-column label="楼栋名称" align="center" prop="" width="150"/>
        <el-table-column label="添加时间" align="center" prop="" width="150"/>
        <el-table-column label="状态" align="center" prop=""/>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button size="mini">修改</el-button>
            <el-button type="primary" size="mini">上报</el-button>
            <el-button type="danger" size="mini">删除</el-button>
            <el-button type="info" size="mini">打印合同模板</el-button>
          </template>
        </el-table-column>
      </el-table>
    </TitleTable>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  export default {
    name: "Glysmb",
    components: {TitleTable},
    data() {
      return {
        tableData: []
      }
    }
  }
</script>

<style scoped>

</style>