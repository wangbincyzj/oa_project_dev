<template>
  <TitleTable title="预售许可证列表">
    <el-alert center type="warning">
      <span style="color: red">添加完成后需要点扫描将相关材料上传，之后点“上报”后等待住建局审核！</span>
      <el-button size="mini" type="primary" @click="add">添加预售</el-button>
    </el-alert>
    <el-table
      :data="tableData"
    >
      <el-table-column align="center" label="预售证号" prop=""/>
      <el-table-column align="center" label="预售名称" prop=""/>
      <el-table-column align="center" label="预售总面积" prop=""/>
      <el-table-column align="center" label="住宅面积" prop=""/>
      <el-table-column align="center" label="住宅套数" prop=""/>
      <el-table-column align="center" label="非住宅面积" prop=""/>
      <el-table-column align="center" label="非住宅套数" prop=""/>
      <el-table-column align="center" label="审核状态" prop=""/>
      <el-table-column align="center" label="操作" prop=""/>
    </el-table>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "Sqysxk",
    mixins: [mixins.dialogMixin],
    components: {TitleTable},
    data() {
      return {
        tableData:[{}],
        loading: false
      }
    },
    methods:{
      add() {
        console.log("add")
      }
    }
  }
</script>

<style scoped>

</style>