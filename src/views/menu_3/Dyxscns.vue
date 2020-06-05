<template>
  <TitleTable title="销售承诺书管理">
    <div slot="controls" class="controls">
      <div @click="dialogVisible=true"><span>按楼栋名称搜索:</span><el-input size="mini"/></div>
      <div><span>房间号搜索:</span><el-input size="mini"/></div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column align="center" label="项目名称" prop="xkzXkzbh" width="100"/>
      <el-table-column align="center" label="楼栋名称" prop="xkzLdmc" width="200"/>
      <el-table-column align="center" label="房号" prop="ysxkZjzmj" width="100"/>
      <el-table-column align="center" label="签订时间" prop="xkzZzmj" width="100"/>
      <el-table-column align="center" label="状态" prop="xkzZzts" width="100"/>
      <el-table-column align="center" label="注销时间" prop="xkzFzzmj" width="100"/>
      <el-table-column align="center" label="注销原因" prop="xkzFzzts"  width="300"/>
      <el-table-column align="center" label="操作">
        <template #default="scope">
          <el-button size="mini">签名</el-button>
          <el-button size="mini">查看签名</el-button>
          <el-button size="mini">注销</el-button>
          <el-button size="mini">打印承诺书</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dialogTitle"
      center
      width="1200px"
      :before-close="closeConfirm"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <DyxscnsDialog/>
    </el-dialog>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import DyxscnsDialog from "@/views/menu_3/DyxscnsDialog";

  export default {
    name: "Dyxscns",
    mixins: [mixins.dialogMixin],
    components: {DyxscnsDialog, TitleTable},
    data() {
      return{
        tableData:[{}]
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .controls{
    display: flex;
    background-color: rgb(253, 246, 236);
    padding-bottom: 50px;
    &>div{
      height: 28px;
      line-height: 28px;
      display: flex;
      justify-content: center;
      span{
        width: 200px;
        font-size: 14px;
        color: $info;
        font-weight: 600;
        text-align: right;
      }
    }
  }
</style>