<template>
  <TitleTable title="销售承诺书管理">
    <div slot="controls" class="controls">
      <div @click="dialogVisible=true"><span>按楼栋名称搜索:</span>
        <el-input size="mini"/>
      </div>
      <div><span>房间号搜索:</span>
        <el-input size="mini"/>
      </div>
    </div>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column align="center" label="项目名称" prop="xsqrdXmmc" width="100"/>
      <el-table-column align="center" label="楼栋名称" prop="xsqrdLdmc" width="200"/>
      <el-table-column align="center" label="房号" prop="xsqrdFh" width="100"/>
      <el-table-column align="center" label="签订时间" prop="createTime" width="100"/>
      <el-table-column align="center" label="注销状态" prop="logoutStatus" width="100"/>
      <el-table-column align="center" label="注销时间" prop="xsqrdZxtime" width="100"/>
      <el-table-column align="center" label="注销原因" prop="xsqrdZxyy" width="300"/>
      <el-table-column align="center" label="操作">

        <template #default="scope">
          <div v-if="scope.row.xsqrdZxzt===1">
            <el-link>已注销</el-link>
          </div>
          <div v-else-if="scope.row.xsqrdMmqrzt===1">
            <el-button size="mini" @click="handleSetSign(scope.row)">签名</el-button>
            <el-button size="mini" @click="handleViewSign(scope.row)">查看签名</el-button>
            <el-button size="mini" @click="handleLogoff(scope.row)">注销</el-button>
            <el-button size="mini" @click="handlePrint(scope.row)">打印承诺书</el-button>
          </div>
          <div v-else>
            <el-button size="mini" @click="handleDel(scope.row)">删除</el-button>
            <el-button size="mini" @click="handleSetPwd(scope.row)">设置密码</el-button>
          </div>
        </template>

      </el-table-column>
    </el-table>
    <el-dialog
      :title="dialogTitle"
      center
      :width="dialogWidth"
      :before-close="closeConfirm"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <DyxscnsDialog
        :id="id"
        ref="dialog"
        @submitSuccess="submitSuccess"
      />
    </el-dialog>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import DyxscnsDialog from "@/views/menu_3/DyxscnsDialog";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "Dyxscns",
    mixins: [mixins.dialogMixin],
    components: {DyxscnsDialog, TitleTable},
    data() {
      return {
        tableData: [],
        id: null,
        dialogWidth: "500px"
      }
    },
    created() {
      this.fetchTableData()
    },
    methods: {
      fetchTableData() {
        yushouContractApi.getSalesConfirmationByKfsRwbh(this.$store.state.rwbh).then(ret => {
          this.tableData = ret.data.records.map(item => ({
            ...item,
            createTime: new Date(item.xsqrdAddtime).toLocaleString(),
            logoutStatus: item.xsqrdZxzt === 0 ? "未注销" : "已注销"
          }))
        })
      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchTableData()
      },
      handleSetSign() {
      },
      handleViewSign() {
      },
      handleLogoff(item) {
        this.$prompt('请录入注销原因', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(({value}) => {
          yushouContractApi.cancelSalesConfirmation(item.xsqrdId, value).then(ret => {
            if (ret.code === 200) {
              this.$message.success("注销成功");
              this.fetchTableData()
            } else {
              this.$message.error(ret.message || "未知错误")
            }
          })
        })


      },
      handlePrint() {
      }
      ,
      handleDel(item) {
        this.$confirm('确认删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          yushouContractApi.delSalesConfirmationById(item.xsqrdId).then(ret => {
            if (ret.code === 200) {
              this.$message.success("删除成功");
              this.fetchTableData()
            } else {
              this.$message.error(ret.message || "未知错误")
            }
          })
        })
      }
      ,
      handleSetPwd(item) {
        this.id = item.xsqrdId;
        this.dialogWidth = "500px";
        this.dialogTitle = "设置密码"
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(0)
        })
      }
      ,
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .controls {
    display: flex;
    background-color: rgb(253, 246, 236);
    padding-bottom: 50px;

    & > div {
      height: 28px;
      line-height: 28px;
      display: flex;
      justify-content: center;

      span {
        width: 200px;
        font-size: 14px;
        color: $info;
        font-weight: 600;
        text-align: right;
      }
    }
  }
</style>