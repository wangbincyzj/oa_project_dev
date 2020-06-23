<template>
  <!-- 管理监管资金1049906948 -->
  <div class="gljgzj">
    <TitleTable title="待上报监管资金列表">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column align="center" label="合同编号" prop="jiaocunHtbh"></el-table-column>
        <el-table-column align="center" label="买受人" prop="jiaocunMsrxm"></el-table-column>
        <el-table-column align="center" label="证件号码" prop="jiaocunMsrzjhm"></el-table-column>
        <el-table-column align="center" label="幢号" prop="jiaocunLdmc"></el-table-column>
        <el-table-column align="center" label="房号" prop="jiaocunFh"></el-table-column>
        <el-table-column align="center" label="面积" prop="jiaocunFwmj"></el-table-column>
        <el-table-column align="center" label="缴款金额" prop="jiaocunJkje"></el-table-column>
        <el-table-column align="center" label="监管银行" prop="jiaocunKhyh"></el-table-column>
        <el-table-column align="center" label="监管账号" prop="jiaocunJkzh"></el-table-column>
        <el-table-column align="center" label="缴款说明" prop="jiaocunJksy"></el-table-column>
        <el-table-column align="center" label="操作" width="200px">
          <template slot-scope="scope">
            <!-- <el-button size="mini" @click="handlePrint(scope.$index, scope.row)">打印合同</el-button> -->
            <el-button
              size="mini"
              :type="StatusColor(scope.row)"
              :disabled="!_enable(scope.row)"
              @click="report(scope.$index, scope.row)"
            >{{ scope.row.jiaocunJkzt | formStatus }}</el-button>

            <el-button size="mini" type="danger" @click="deletes(scope.$index, scope.row)">删除</el-button>
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
    </TitleTable>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";

import { gljgzjApi } from "@/api/menu_4/gljgzj";
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
      currentPage: 1, //分页
      pageSize: 3,
      total: 0,
      pages: ''
    };
  },
  created() {
    this.fetchNavInfo();
  },
  methods: {
    fetchNavInfo() {
      // this.navInfo.loading = true;
      // tjrwqyApi.getAccessEnterprisesByPage(1, 50).then(ret=>{
      //   this.navInfo.loading = false;
      //   this.navInfo.list = ret.data.records.map(item=>({
      //     ...item, id: item.rwqyxxId, name: item.rwqyxxTitle
      //   }));
      //  this.navInfo.list.unshift({id:0, name: "请选择对应的监管账户"})
      // })
      //   jiaocunXmbh: 6028,
      gljgzjApi
        .getProjectById(
          this.currentPage,
          this.pageSize,
          this.$store.state.projectData.xmxxXmbh
        )
        .then(res => {
          // debugger
          this.total = res.data.total;
          // this.pages = res.data.pages;
          this.tableData = res.data.records;
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
    report(index, row) {
      //确认上报
      const list = {
        jiaocunId: row.jiaocunId,
        jiaocunJkzt: "1"
      };
      gljgzjApi.addDeposit(list).then(res => {
        //  debugger;
        this.fetchNavInfo();
      });
    },
    _enable(row) {
      return row.jiaocunJkzt === 0;
    },
    StatusColor(row) {
      switch (row.jiaocunJkzt) {
        case 0:
          return "success";
        case 1:
          return "info";
        case 2:
          return "warning";
      }
    },
    deletes(index, row) {
      debugger;
      alert("删除");
    },
    currentChange(num) {
      // debugger
      this.currentPage = num;
      this.fetchNavInfo();
    }
  },
  filters: {
    formStatus(jiaocunJkzt) {
      switch (jiaocunJkzt) {
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

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.tjrwry {
  padding: $pm;
}
</style>
