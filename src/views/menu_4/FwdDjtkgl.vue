<template>
  <div class="FwdDjtkgl">
    <!-- 定金退款管理1049906948 -->
    <TitleTable title="定金退款管理">
      <div slot="controls">
        <el-alert type="warning" center :closable="false">
          <div class="controls"></div>
        </el-alert>
        <el-alert type="warning" center :closable="false">
          <span class="warning" style="color: red">注意：将相关材料收件上传，确认完整后再上报！</span>
        </el-alert>
      </div>
      <el-table :data="tableData" style="width: 100%" @cell-mouse-enter="cellMouseEnter">
        <el-table-column label="项目名称" prop="djsyXmmc"></el-table-column>
        <el-table-column label="监管账号" prop="djsyJgzh"></el-table-column>
        <el-table-column label="监管银行名称" prop="djsyJgyhmc"></el-table-column>
        <el-table-column label="申请人姓名" prop="djsySqrlxdh"></el-table-column>
        <el-table-column label="汇入账户" prop="djsyHrzhzh"></el-table-column>
        <el-table-column label="汇入账户银行" prop="djsyHrzhyh"></el-table-column>
        <el-table-column align="center" label="申报金额" prop="djsySbje"></el-table-column>
        <el-table-column align="center" label="添加时间" prop="djsyAddtime"></el-table-column>

        <el-table-column align="center" label="收件操作" width="280" prop="operation">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleGetFile(scope.$index, scope.row)">收件</el-button>
            <el-button size="mini" type="primary" @click="handleDelFile(scope.$index, scope.row)">清除</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handlePrintFile(scope.$index, scope.row)"
              @mouseover.native="fetchPrintData"
            >打印收件</el-button>
          </template>
        </el-table-column>

        <el-table-column align="center" label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
            <el-button size="mini" type="primary" @click="handleUpdate(scope.$index, scope.row)">修改</el-button>
            <el-button size="mini" type="primary" @click="loadPic(scope.$index, scope.row)">传图</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="managePic(scope.$index, scope.row)"
              :disabled="scope.row.zjjgzhLczt !== '收件'"
            >管图</el-button>
            <el-button size="mini" type="primary" @click="handleInform(scope.$index, scope.row)">上报</el-button>
            <el-button size="mini" type="primary" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>

      <el-dialog
        :title="dialogTitle"
        center
        width="800px"
        :before-close="closeConfirm"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <FwdDjtkglDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
      </el-dialog>
    </TitleTable>
    <div id="printData" style="width:700px;margin:0 auto;display:none">
      <h1 style="text-align:center;font-weight:bold">预售监管账户申请收件清单</h1>
      <table
        style="width:700px;margin:0 auto;text-align:center;font-size:16px;text-height:25px"
        id="printTable"
        border="1"
        cellspacing="0"
      >
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
import FwdDjtkglDialog from "@/views/menu_4/FwdDjtkglDialog";

import { fwddjtklApi } from "@/api/menu_4/fwddjtk";
import { mixins } from "@/utils/mixins";

export default {
  name: "FwdDjtkgl",
  mixins: [mixins.dialogMixin],
  components: { TitleTable, ContainerTwoType, FwdDjtkglDialog },
  data() {
    return {
      printTable: [],
      tableData: [],
      search: "",
      dialogVisible: false,
      currentPage: 1,
      pageSize: 5,
      total: null,
      pages: null,
      dialogTitle: "",
      dialogType: 1,
      xmxxXmbh: "",
      xmxxid: "",
      selectedIndex: -1,
      fileType: 1,
      zjjgzhYwzh: "",
      zjjgzhId: ""
    };
  },

  created() {
    this.fetchData();
  },
  methods: {
    fetchPrintData(id) {
      // sqjgzhApi.selectByYwzh(id).then(ret => {
      //   this.printTable = ret.data.map(item => ({
      //     shoujianTitle: item.ywsjTitle,
      //     shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
      //     shoujianFenshu: item.ywsjFenshu
      //   }));
      // });
    },
    fetchData() {
      //定金退款分页查询
      console.log("where is my winter bear");
      console.log(this.$store.state.projectData.xmxxXmbh);
      this.xmxxXmbh = this.$store.state.projectData.xmxxXmbh;
      fwddjtklApi
        .getAllSysb(this.currentPage, this.pageSize, this.xmxxXmbh)
        .then(ret => {
          this.pages = ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          // this.tableData.map(function(val) {
          //   if (val.zjjgzhLczt == 0) {
          //     val.zjjgzhLczt = "收件";
          //   } else if (val.zjjgzhLczt == 1) {
          //     val.zjjgzhLczt = "上报";
          //   } else if (val.zjjgzhLczt == 2) {
          //     val.zjjgzhLczt = "已初审";
          //   } else if (val.zjjgzhLczt == 3) {
          //     val.zjjgzhLczt = "已复审";
          //   } else if (val.zjjgzhLczt == 4) {
          //     val.zjjgzhLczt = "已终审";
          //   } else if (val.zjjgzhLczt == 5) {
          //     val.zjjgzhLczt = "已开户";
          //   } else if (val.zjjgzhLczt == 6) {
          //     val.zjjgzhLczt = "退件";
          //   }
          // });
        });
    },
    addClick() {
      this.dialogVisible = true;
      this.dialogTitle = "添加监管账户";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.xmxxid);
      });
    },
    handleUpdate(index, row) {
      // debugger
      this.dialogVisible = true;
      this.dialogTitle = "修改定金退款";
      this.dialogType = 3;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(3, row.djsyId);
        //this.$refs.dialog.reset();
      });
    },
    handleDetail(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "监管账户详情";
      this.dialogType = 2;
      // this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2, row.djsyId);
        //this.$refs.dialog.reset();
      });
    },
    handleDelete(index, row) {
      // console.log(this.currentRow);
      if (window.confirm("确定要删除吗?")) {
        fwddjtklApi.getDeleteData(row.djsyId).then(res => {

          if (res.code === 200) {
            this.$message.success("删除成功");
            this.fetchData();
          } else {
            this.$message.error(res.message);
          }
        });
      }
    },
    handleDelFile(index, row) {
      console.log(this.currentRow);
      if (window.confirm("确定要清除收件吗?")) {
        // sqjgzhApi.deleteSj(this.currentRow.zjjgzhYwzh).then(ret => {
        //   console.log(this.currentRow.zjjgzhYwzh);
        //   if (ret.code === 200) {
        //     this.$message.success("删除成功");
        //     this.fetchData();
        //   } else {
        //     this.$message.error(ret.message);
        //   }
        // });
      }
    },
    loadPic(index, row) {
      // alert('传图')
      this.dialogVisible = true;
      this.dialogTitle = "上传图片";
      this.dialogType = 5;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(5, row.djsyId);
      });
    },
    managePic() {},
    handleInform(index, row) {
      // debugger
      // console.log(this.currentRow);
      // if (window.confirm("确定要上报该监管账户吗?")) {
      // sqjgzhApi.informAccount(this.currentRow.zjjgzhId).then(ret => {
      //   console.log(this.currentRow.zjjgzhId);
      //   if (ret.code === 200) {
      //     this.$message.success("上报成功");
      //     this.fetchData();
      //   } else {
      //     this.$message.error(ret.message);
      //   }
      // });
      // }
      fwddjtklApi.getReportData(row.djsyId).then(res => {
        if (res.code === 200) {
          this.$message.success(res.message);
          this.fetchData();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    handleGetFile(index, row) {
      //收件
      this.dialogVisible = true;
      this.dialogTitle = "业务收件操作";
      //监管账户id   this.currentRow.zjjgzhId
      // this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
      this.dialogType = 4;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(4, row);
      });
    },
    handlePrintFile() {
      document.getElementById("printTable").classList.add("printTable");
      let obj = document.getElementById("printData");
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
    }
  }
};
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
  text-align: center;
}
</style>
