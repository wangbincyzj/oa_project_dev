<template>
  <!-- 打印预备缴款名单 -->
  <div class="Dyybjkmd">
    <TitleTable title="打印预备缴款名单">
      <div slot="controls">
        <el-alert type="warning" center :closable="false">
          <div class="controls">
            <!-- <span class="warning">【{{this.$store.state.projectData.xmxxXmmc}}】</span> -->
            <el-button @click="addClick" size="mini" type="primary">打印缴款名单</el-button>
          </div>
        </el-alert>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column align="center" label="合同编号" prop="jiaocunHtbh"></el-table-column>
        <el-table-column align="center" label="买受人" prop="jiaocunMsrxm"></el-table-column>
        <el-table-column align="center" label="证件号码" prop="jiaocunMsrzjhm"></el-table-column>
        <el-table-column align="center" label="幢号" prop="jiaocunLdmc"></el-table-column>
        <el-table-column align="center" label="房号" prop="jiaocunFh"></el-table-column>
        <el-table-column align="center" label="面积" prop="jiaocunFwmj"></el-table-column>
        <el-table-column align="center" label="缴款金额" prop="jiaocunJkje"></el-table-column>
        <el-table-column align="center" label="监管银行" prop="jiaocunKhyh"></el-table-column>
        <el-table-column align="center" label="监管账号" prop="jiaocunJkzh"></el-table-column>
        <el-table-column align="center" label="添加日期" prop="jiaocunJkrq"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </TitleTable>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";

import { gljgzjApi } from "@/api/menu_4/gljgzj";

import axios from "axios";

import { mixins } from "@/utils/mixins";

const listck = [
  {
    htbh: "合同编号",
    msr: "买受人",
    zjhm: "证件号码",
    zh: "幢号",
    fh: "房号",
    mj: "面积",
    jkje: "缴款金额",
    jgyh: "监管银行",
    jgzh: "监管账号",
    jksm: "缴款说明"
  }
];

export default {
  name: "gljgzj",
  mixins: [mixins.dialogMixin],
  components: { TitleTable, ContainerTwoType },
  data() {
    return {
      tableData: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 0,
      authList: [],
      selectedIndex: 0,
      selectedIndex: null,
      multipleSelection: [],
      currentPage: 1, //分页
      pageSize: 10,
      total: null,
      pages: null
    };
  },
  created() {
    this.fetchNavInfo();
  },
  methods: {
    fetchNavInfo() {
       gljgzjApi.apaymentlist(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh,1)
        .then(res => {
          // debugger
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
    // fetchTableData
    liClick(index) {
      this.selectedIndex = index;
      if (index === 0) return;
      // this.selectedIndex = this.navInfo.list[index];
      // this.getAccessEnterprisesInfo(this.navInfo.list[index].id)
    },
    handlePrint(index, row) {},
    addClick() {
      // alert("打印缴款名单");
      window.open("/#/printView/Dyjkmds");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
     currentChange(num) {
      this.currentPage = num;
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.tjrwry {
  padding: $pm;
}
</style>
