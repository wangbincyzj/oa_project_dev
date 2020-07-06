<template>
  <div class="sqjgzh">
    <TitleTable
      title="项目对应监管资金列表">
      <div slot="controls">
        <el-alert
          type="warning"
          center
          :closable="false">
          <div class="controls">
            <span class="warning">【{{this.$store.state.projectData.xmxxXmmc}}】</span>

            <el-button @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加账户</el-button>
          </div>
        </el-alert>
        <el-alert
          type="warning"
          center
          :closable="false">
          <span class="warning" style="color: red">注意：将相关材料收件上传，确认完整后再上报！</span>
        </el-alert>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        @cell-mouse-enter="cellMouseEnter">
        <el-table-column
          label="序号"
          width=50
          prop="zjjgzhId">
        </el-table-column>
        <el-table-column
          label="公司名称"
          prop="zjjgzhGsmc">
        </el-table-column>
        <el-table-column
          label="项目名称"
          prop="zjjgzhXmmc">
        </el-table-column>
        <el-table-column
          label="楼栋名称"
          prop="zjjgzhLdmc">
        </el-table-column>
        <el-table-column
          label="联系电话"
          prop="zjjgzhLxdh">
        </el-table-column>
        <el-table-column
          align="center"
          label="状态"
          prop="zjjgzhLczt">
        </el-table-column>
        <el-table-column
          align="center"
          label="收件操作"
          width="280"
          prop="operation">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleGetFile(scope.$index, scope.row)"

              :disabled="scope.row.zjjgzhLczt !== '收件'">确认收件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleManageFile(scope.$index, scope.row)">管理收件
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handlePrintFile(scope.$index, scope.row)"
              @mouseover.native="">打印收件
            </el-button>
          </template>
        </el-table-column>

        <el-table-column
          align="center"
          label="操作"
          width="300"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handleDetail(scope.$index, scope.row)">详情
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleUpdate(scope.$index, scope.row)"
              :disabled="scope.row.zjjgzhLczt !== '收件'">修改
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleInform(scope.$index, scope.row)"
              :disabled="scope.row.zjjgzhLczt !== '收件'">上报
            </el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleDelete(scope.$index, scope.row)"
              :disabled="scope.row.zjjgzhLczt !== '收件'">删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total">
      </el-pagination>

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
          <th>{{index+1}}</th>
          <th>{{item.shoujianTitle}}</th>
          <th>{{item.shoujianSjxz}}</th>
          <th>{{item.shoujianFenshu}}</th>
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

  export default {
    name: "sqjgzh",
    mixins: [mixins.dialogMixin],
    components: {TjjgzhDialog, TitleTable, ContainerTwoType},
    data() {
      return {
        navInfo: {
          loading: false,
          list: [
            {id: 1, name: "别问"},
            {id: 2, name: "问就是不知道"},
          ]
        },
        printTable: [],
        tableData: [
          {id: 1, companyName: "公司", itemName: "项目", ldName: "楼栋1", phone: "110", status: "开户", operation: "收件操作"},
        ],
        search: "",
        dialogVisible: false,
        currentPage: 1,
        pageSize: 10,
        total: 20,
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
      fetchPrintData(){
        this.zjjgzhYwzh=this.currentRow.zjjgzhYwzh;
        sqjgzhApi.selectByYwzh(this.zjjgzhYwzh).then(ret => {
          this.printTable = ret.data.map(item => ({
            shoujianTitle: item.ywsjTitle,
            shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
            shoujianFenshu: item.ywsjFenshu
          }))
        })
      },
      fetchData() {
        this.xmxxXmbh = this.$store.state.projectData.xmxxXmbh;
        sqjgzhApi.getAccountById(this.currentPage, this.pageSize, this.xmxxXmbh).then(ret => {
          this.pages = ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function (val) {
            if (val.zjjgzhLczt == 0) {
              val.zjjgzhLczt = '收件'
            } else if (val.zjjgzhLczt == 1) {
              val.zjjgzhLczt = '上报'
            } else if (val.zjjgzhLczt == 2) {
              val.zjjgzhLczt = '已初审'
            } else if (val.zjjgzhLczt == 3) {
              val.zjjgzhLczt = '已复审'
            } else if (val.zjjgzhLczt == 4) {
              val.zjjgzhLczt = '已终审'
            } else if (val.zjjgzhLczt == 5) {
              val.zjjgzhLczt = '已开户'
            } else if (val.zjjgzhLczt == 6) {
              val.zjjgzhLczt = '退件'
            }
          })
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
          this.$refs.dialog.setMode(3, this.currentRow.zjjgzhId);

          //this.$refs.dialog.reset();
        })
      },
      handleDetail(index, row) {
        this.dialogVisible = true;
        this.dialogTitle = "监管账户详情";
        this.dialogType = 2;
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;

        this.$nextTick(() => {
          this.$refs.dialog.setMode(2, this.currentRow.zjjgzhId);
          //this.$refs.dialog.reset();
        })
      },
      handleDelete(index, row) {
        console.log(this.currentRow);
        if (window.confirm("确定要删除该监管账户吗?")) {
          sqjgzhApi.deleteAccount(this.currentRow.zjjgzhId).then(ret => {
            console.log(this.currentRow.zjjgzhId);
            if (ret.code === 200) {
              this.$message.success("删除成功");
              this.fetchData();
            } else {

              this.$message.error(ret.message)
            }
          })
        }
      },
      handleDelFile(index, row) {
        console.log(this.currentRow);
        if (window.confirm("确定要清除收件吗?")) {
          sqjgzhApi.deleteSj(this.currentRow.zjjgzhYwzh).then(ret => {
            console.log(this.currentRow.zjjgzhYwzh);
            if (ret.code === 200) {
              this.$message.success("删除成功");
              this.fetchData();
            } else {
              this.$message.error(ret.message)
            }
          })
        }
      },
      loadPic() {
      },
      managePic() {
      },
      handleInform(index, row) {
        console.log(this.currentRow);
        if (window.confirm("确定要上报该监管账户吗?")) {
          sqjgzhApi.informAccount(this.currentRow.zjjgzhId).then(ret => {
            console.log(this.currentRow.zjjgzhId);
            if (ret.code === 200) {
              this.$message.success("上报成功");
              this.fetchData();
            } else {

              this.$message.error(ret.message)
            }
          })
        }
      },
      handleGetFile() {
        this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
        this.dialogType = 4;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(4, this.currentRow.zjjgzhId);
        })
      },
      handleManageFile(index, item) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, this.currentRow.zjjgzhId);
        })
      },
      handlePrintFile() {

        document.getElementById('printTable').classList.add('printTable');
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
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
        this.fetchPrintData(this.zjjgzhYwzh);
      },
      cellMouseEnter(row) {
        this.currentRow = row;
        // this.zjjgzhYwzh=this.currentRow.zjjgzhYwzh;
        // this.fetchPrintData(this.zjjgzhYwzh);
      },
      currentChange(num) {
        this.currentPage = num;
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
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
