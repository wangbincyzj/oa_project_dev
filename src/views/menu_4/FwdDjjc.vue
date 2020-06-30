<template>
  <div class="FwdDjjc">
    <!-- 定金缴存1049906948-->
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金缴款">
        <div slot="controls">
          <el-alert type="warning" center :closable="false">
            <div class="controls">
              <el-button @click="addClick()" size="mini" type="primary">新增记录</el-button>
            </div>
          </el-alert>
        </div>
        <el-table :data="tableData" style="width: 100%">
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="银行id" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款日期" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="操作" width="400px">
            <template slot-scope="scope">
              <el-button
                size="mini"
                :type="StatusColor(scope.row)"
                :disabled="!_enable(scope.row)"
                @click="report(scope.$index, scope.row)"
              >{{ scope.row.djJkzt | formStatus }}</el-button>
              <el-button size="mini" type="danger" @click="lookOver(scope.$index, scope.row)">查看</el-button>
              <el-button size="mini" type="danger" @click="editinfo(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" type="danger" @click="deletes(scope.$index, scope.row)">删除</el-button>
              <!-- <el-button size="mini" type="danger" @click="deletes(scope.$index, scope.row)">关联</el-button> -->
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
          <FwdDjjcDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import FwdDjjcDialog from "@/views/menu_4/FwdDjjcDialog";
import { mixins } from "@/utils/mixins";

import axios from "axios";
import { fwdjglApi } from "@/api/menu_4/fwdjgl";

export default {
  name: "FwdDjjc",
  components: {
    TitleTable,
    ContainerTwoType,
    FwdDjjcDialog
  },
  mixins: [mixins.dialogMixin],
  data() {
    return {
      currentPage: 1, //分页
      pageSize: 10,
      total: null,
      pages: null,
      tableData: [],
      dialogVisible: false,
      dialogType: 1,
      dialogTitle: "",
      navInfo: {
        title: "监管账户",
        selectedIndex: 0,
        list: []
      },
      djDjglzt: 0,
      // djJkzt: 0,
      djDjtkzt: 0,
      accountinfo: {}
    };
  },
  methods: {
    liClick(index) {
      this.selectedIndex = index;
      if (this.selectedIndex === 0) {
        return (index = null);
      }
      this.getData(this.navInfo.list[index].zjjgzhYhzh);
      // console.log(this.navInfo.list[index], "账户");
      this.accountinfo = this.navInfo.list[index];
    },
    getnavInfo() {
      fwdjglApi.getzjzh().then(async res => {
        const navlist = res.data.records;
        this.navInfo.list = navlist.map(item => ({
          ...item,
          id: item.zjjgzhId,
          name: item.zjjgzhYhzh
        }));
        this.navInfo.list.unshift({
          id: -1,
          name: "监管账户"
        });
        await this.getData();
      });
    },
    getData(id) {
      fwdjglApi
        .getlist(
          this.currentPage,
          this.pageSize,
          this.djDjglzt,
          this.djJkzt,
          this.djDjtkzt,
          id
        )
        .then(res => {
          this.total = res.data.total;
          this.tableData = res.data.records;
        });
    },
    addClick() {
      // alert('新增记录')
      this.dialogVisible = true;
      this.dialogTitle = "新增记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.accountinfo);
      });
    },
    lookOver(index, row) {
      // debugger
      //查看記錄
      this.dialogVisible = true;
      this.dialogTitle = "查看詳情";
      this.dialogType = 2;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2, row.djId);
      });
    },
    editinfo(index, row) {
        
      // debugger
      //修改信息
      this.dialogVisible = true;
      this.dialogTitle = "编辑信息";
      this.dialogType = 3;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(3,row.djId);
      });
    },
    deletes(index, row) {
      // alert('删除')
      fwdjglApi.delDeposit(row.djId).then(res => {
        if (res.code == 200) {
          this.$message.success("删除成功");
          this.$emit("submitSuccess");
          this.getData();
        } else {
          this.$message.error(res.message);
        }
      });
    },
    currentChange(num) {
      this.currentPage = num;
      this.getData();
    },

    submitSuccess() {
      this.dialogVisible = false;
      this.getData();
    },
    StatusColor(row) {
      switch (row.djJkzt) {
        case 0:
          return "success";
        case 1:
          return "info";
        case 2:
          return "warning";
      }
    },
    _enable(row) {
      return row.djJkzt === 0;
    },
    report(index, row) {
      if (row.djJkzt === 0) {
        fwdjglApi.reporinfo(row.djId).then(res => {});
        this.getData();
      } else {
        alert("不发送");
      }
      //上报信息
    }
  },
  created() {
    this.getData();
    this.getnavInfo();
    console.log(this.$store.state.projectData, "项目");
  },
  filters: {
    formStatus(djJkzt) {
      switch (djJkzt) {
        case 0:
          return "待上报";
        case 1:
          return "已上报";
        case 2:
          return "已入账";
      }
    }
  }
};
</script>

<style>
</style>
