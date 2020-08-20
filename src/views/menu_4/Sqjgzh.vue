<template>
  <div class="sqjgzh">
    <TitleTable
        title="项目对应监管资金列表">
      <template #controls>
        <ButtonsArea :row="row" @cancel="setCurrent">
          <el-button
              size="mini"
              type="primary"
              @click="handleGetFile(0, row)"
              :disabled="row.zjjgzhShzt===1 ||row.zjjgzhShzt===2">确认收件
          </el-button>
          <el-button
              size="mini"
              type="primary"
              :disabled="row.zjjgzhShzt===1 ||row.zjjgzhShzt===2"
              @click="handleManageFile(0, row)">管理收件
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleDetail(0, row)">详情
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleUpdate(0, row)"
              :disabled="row.zjjgzhShzt===1 ||row.zjjgzhShzt===2">修改
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleInform(0, row)"
              :disabled="row.zjjgzhShzt===1 ||row.zjjgzhShzt===2">上报
          </el-button>
          <el-button
              size="mini"
              type="primary"
              @click="handleDelete(0, row)"
              :disabled="row.zjjgzhShzt===1 ||row.zjjgzhShzt===2">删除
          </el-button>
        </ButtonsArea>
      </template>

      <el-table
          :data="tableData"
          style="width: 100%"
          size="mini"
          ref="table"
          highlight-current-row
          @current-change="handleCurrentChange">
        <el-table-column
            label="序号"
            align="center"
            prop="zjjgzhId">
        </el-table-column>
        <el-table-column
            label="公司名称"
            align="center"
            prop="zjjgzhGsmc">
        </el-table-column>
        <el-table-column
            label="项目名称"
            align="center"
            prop="zjjgzhXmmc">
        </el-table-column>
        <el-table-column
            label="楼栋名称"
            align="center"
            prop="zjjgzhLdmc">
        </el-table-column>
        <el-table-column
            label="联系电话"
            align="center"
            prop="zjjgzhLxdh">
        </el-table-column>
        <el-table-column
            align="center"
            label="流程"
            prop="zjjgzhShzt">
          <template #default="{row}">
            {{ row.zjjgzhShzt|shztFilter }}
          </template>
        </el-table-column>
      </el-table>
      <template #addButton>
        <Why>注意：将相关材料收件上传，确认完整后再上报！</Why>
        <el-button @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加账户</el-button>
      </template>
      <template #pager>
        <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="currentChange"
            @size-change="handleSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
        </el-pagination>

      </template>

      <el-dialog
          :title="dialogTitle"
          center
          width="1200px"
          slot="dialog"
          :before-close="dialogReset"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
      >
        <TjjgzhDialog
            ref="dialog"
            :dialog-type="dialogType"
            :zjjgzhYwzh="zjjgzhYwzh"
            :zjjgzhId="zjjgzhId"
            @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </TitleTable>
    <div id="printData" style="width:700px;margin:0 auto;display:none">
      <h1 style="text-align:center;font-weight:bold">预售监管账户申请收件清单</h1>
      <table style="width:700px;margin:0 auto;text-align:center;font-size:16px;text-height:25px" id="printTable"
             border="1" cellspacing="0">
        <thead>
        <tr>
          <td>序号</td>
          <td>收件名称</td>
          <td>收件性质</td>
          <td>收件份数</td>

        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in printTable" :key="index">
          <th>{{ index + 1 }}</th>
          <th>{{ item.shoujianTitle }}</th>
          <th>{{ item.shoujianSjxz }}</th>
          <th>{{ item.shoujianFenshu }}</th>
        </tr>
        </tbody>

      </table>
    </div>
  </div>

</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import TjjgzhDialog from "@/views/menu_4/TjjgzhDialog";
import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
import {mixins} from "@/utils/mixins";
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
import Why from "@/components/common/why/Why";

export default {
  name: "sqjgzh",
  mixins: [mixins.dialogMixin, mixins.myPagerMixin, mixins.tableMixin],
  components: {TjjgzhDialog, TitleTable, ContainerTwoType, ButtonsArea, Why},
  data() {
    return {
      navInfo: {
        loading: false,
        list: []
      },
      printTable: [],
      tableData: [],
      search: "",
      dialogVisible: false,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pages: 1,
      dialogTitle: "",
      dialogType: 1,
      xmxxXmbh: "",
      xmxxid: "",
      selectedIndex: -1,
      fileType: 1,
      zjjgzhYwzh: "",
      zjjgzhId: "",
    }
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchPrintData() {
      this.zjjgzhYwzh = row.zjjgzhYwzh;
      sqjgzhApi.selectByYwzh(this.zjjgzhYwzh).then(ret => {
        this.printTable = ret.data.map(item => ({
          shoujianTitle: item.ywsjTitle,
          shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
          shoujianFenshu: item.ywsjFenshu
        }))
      })
    },
    fetchData() {
      this.xmxxXmbh = this.$store.state.projectData.xmxxXmbh;
      sqjgzhApi.getAccountById(this.currentPage, this.pageSize, this.xmxxXmbh).then(ret => {
        this.pages = ret.data.pages;
        this.tableData = ret.data.records;
        this.total = ret.data.total;
      })
    },

    addClick() {
      this.dialogVisible = true;
      this.dialogTitle = "添加监管账户";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.xmxxid)
      })
    },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "修改监管账户";
      this.dialogType = 3;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(3, row.zjjgzhId);

        //this.$refs.dialog.reset();
      })
    },
    handleDetail(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "监管账户详情";
      this.dialogType = 2;
      this.zjjgzhYwzh = row.zjjgzhYwzh;

      this.$nextTick(() => {
        this.$refs.dialog.setMode(2, row.zjjgzhId, row.logId, row.zjjgzhYwzh);
      })
    },


    handleDelFile(index, row) {
      this.$confirm('确定要清除收件吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        sqjgzhApi.deleteSj(row.zjjgzhYwzh).then(ret => {
          if (ret.code === 200) {
            this.$message.success("操作成功");
            this.fetchData();
          } else {
            this.$message.error(ret.message || "操作失败")
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        });
      });
    },
    handleInform(index, row) {
      this.$confirm('确定要上报该监管账户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        sqjgzhApi.informAccount(row.zjjgzhId).then(ret => {
          if (ret.code === 200) {
            this.$message.success("操作成功");
            this.fetchData();
          } else {
            this.$message.error(ret.message || "操作失败")
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        });
      });
    },
    handleDelete(index, row) {
      this.$confirm('确定要删除该监管账户吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(() => {
        sqjgzhApi.deleteAccount(row.zjjgzhId).then(ret => {
          if (ret.code === 200) {
            this.$message.success("操作成功");
            this.fetchData();
          } else {
            this.$message.error(ret.message || "操作失败")
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消操作'
        });
      });
    },
    handleGetFile(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "确认收件";
      this.zjjgzhYwzh = row.zjjgzhYwzh;
      this.dialogType = 4;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(4, row.zjjgzhId, row.zjjgzhYwzh);
      })
    },
    handleManageFile(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "管理收件";
      this.zjjgzhYwzh = row.zjjgzhYwzh;
      this.dialogType = 9;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(9, row.zjjgzhId, row.zjjgzhYwzh);
      })
    },
    handlePrintFile() {
      let obj = document.getElementById('printData');
      let newWindow = window.open("打印窗口", "_blank");
      let docStr = obj.innerHTML;
      newWindow.document.write(docStr);
      newWindow.document.close();
      newWindow.print();
      //window.print();
      //window.open("https://www.baidu.com/");
    },
    submitSuccess() {
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.dialogVisible = false;
      this.fetchData();
    },
    fetchPrint() {
      this.zjjgzhYwzh = row.zjjgzhYwzh;
      this.fetchPrintData(this.zjjgzhYwzh);
    },
    cellMouseEnter(row) {
      row = row;
      // this.zjjgzhYwzh=row.zjjgzhYwzh;
      // this.fetchPrintData(this.zjjgzhYwzh);
    },
    currentChange(num) {
      this.currentPage = num;
      this.zjjgzhYwzh = row.zjjgzhYwzh;
      this.fetchData();
    },
    handleSizeChange(val) {
      console.log(val);
      this.pageSize = val;
      this.fetchData();
    },

  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.tjrwry {
  padding: $pm;
}

.printTable {
  border: black solid 2px;
  width: 1000px;
  margin: 0 auto;
  text-align: center
}

</style>
