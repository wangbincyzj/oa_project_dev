<template>
  <div class="sqjgzh">
    <TitleTable title="账户对应监管协议列表">
      <div slot="controls">
        <el-alert type="warning" center :closable="false">
          <div class="controls">
            <span class="warning" v-if="selectedIndex">当前选择 【{{selectedIndex.name}}】</span>
            <span class="warning" v-else>首先点击左边对应的监管账户，然后再点“添加合同”</span>
            <el-button
              :disabled="selectedIndex===0"
              @click="addClick"
              icon="el-icon-plus"
              size="mini"
              type="primary"
            >添加合同</el-button>
          </div>
        </el-alert>
        <el-alert type="warning" center :closable="false">
          <span class="warning" style="color: red">注意：资金监管账户审核通过才能申请“资金监管三方协议”</span>
        </el-alert>
      </div>
      <el-table :data="tableData" style="width: 100%" @cell-mouse-enter="cellMouseEnter">
        <el-table-column label="序号" prop="hetongId"></el-table-column>
        <el-table-column label="银行名称" prop="hetongYhmc"></el-table-column>
        <el-table-column label="企业名称" prop="hetongKfsmc"></el-table-column>
        <el-table-column label="监管账户" prop="hetongZhmc"></el-table-column>
        <el-table-column label="项目名称" prop="hetongXmmc"></el-table-column>
        <el-table-column align="center" label="状态" prop="hetongLczt"></el-table-column>

        <el-table-column align="center" label="操作">
          <!-- <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
          </template>-->
          <template slot-scope="scope">
            <el-button size="mini" @click="handlePrint(scope.$index, scope.row)">查看合同</el-button>
            <el-button size="mini" type="primary" @click="handleDetail(scope.$index, scope.row)">详情</el-button>
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
        <SqsfxyDialog
          ref="dialog"
          :dialog-type="dialogType"
          :zjjgzhId="zjjgzhId"
          :zjjgzhZhmc="zjjgzhZhmc"
          :zjjgzhGsmc="zjjgzhGsmc"
          :zjjgzhYhmc="zjjgzhYhmc"
          :zjjgzhXmmc="zjjgzhXmmc"
          :kfsId="kfsId"
          @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </TitleTable>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import SqsfxyDialog from "@/views/menu_4/SqsfxyDialog";
import { sqsfxyApi } from "@/api/menu_4/sqsfxy";
import { sqjgzhApi } from "@/api/menu_4/sqjgzh";
import { mixins } from "@/utils/mixins";

export default {
  name: "sqsfxy",
  mixins: [mixins.dialogMixin],
  components: { SqsfxyDialog, TitleTable, ContainerTwoType },
  data() {
    return {
      navInfo: {
        loading: false,
        list: [
          { id: 1, name: "别问" },
          { id: 2, name: "问就是不知道" }
        ]
      },
      tableData: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 1,
      currentPage: 1,
      pageSize: 10,
      total: 20,
      pages: 1,
      selectedIndex: 0,
      zjjgzhId: "",
      zjjgzhZhmc: "",
      zjjgzhGsmc: "",
      zjjgzhYhmc: "",
      zjjgzhXmmc: "",
      kfsId: ""
    };
  },
  created() {
    //this.fetchNavInfo();
    this.fetchData();
  },
  methods: {
    fetchNavInfo() {
      sqjgzhApi.getAllAccount(1, 100).then(ret => {
        this.navInfo.list = ret.data.records.map(item => ({
          ...item,
          id: item.zjjgzhId,
          name: item.zjjgzhZhmc
        }));
        this.navInfo.list.unshift({ id: 0, name: "请选择监管账户名称" });
      });
    },
    fetchData() {
      sqsfxyApi
        .getAllContract(this.currentPage, this.pageSize, this.$store.state.rwbh)
        .then(ret => {
          console.log("fetchData");
          // debugger

          this.pages = ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function(val) {
            if (val.hetongLczt == 0) {
              val.hetongLczt = "收件";
            } else if (val.hetongLczt == 1) {
              val.hetongLczt = "上报";
            } else if (val.hetongLczt == 2) {
              val.hetongLczt = "初审";
            } else if (val.hetongLczt == 3) {
              val.hetongLczt = "复审";
            } else if (val.hetongLczt == 4) {
              val.hetongLczt = "终审";
            } else if (val.hetongLczt == 5) {
              val.hetongLczt = "已开户";
            } else if (val.hetongLczt == 6) {
              val.hetongLczt = "退件";
            }
          });
        });
    },
    fetchDataByAccountId(id) {
      sqsfxyApi
        .getContractByAccount(
          this.currentPage,
          this.pageSize,
          this.$store.state.rwbh,
          id
        )
        .then(ret => {
          console.log(ret);
          console.log("where is my ...");

          this.pages = ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function(val) {
            if (val.hetongLczt == 0) {
              val.hetongLczt = "收件";
            } else if (val.hetongLczt == 1) {
              val.hetongLczt = "上报";
            } else if (val.hetongLczt == 2) {
              val.hetongLczt = "初审";
            } else if (val.hetongLczt == 3) {
              val.hetongLczt = "复审";
            } else if (val.hetongLczt == 4) {
              val.hetongLczt = "终审";
            } else if (val.hetongLczt == 5) {
              val.hetongLczt = "已开户";
            } else if (val.hetongLczt == 6) {
              val.hetongLczt = "退件";
            }
          });
        });
    },
    liClick(index) {
      this.selectedIndex = index;
      console.log("index:" + index);
      this.selectedIndex = this.navInfo.list[index];
      this.zjjgzhId = this.navInfo.list[index].id;
      this.zjjgzhZhmc = this.navInfo.list[index].name;
      this.zjjgzhGsmc = this.navInfo.list[index].zjjgzhGsmc;
      this.zjjgzhYhmc = this.navInfo.list[index].zjjgzhYhmc;
      this.zjjgzhXmmc = this.navInfo.list[index].zjjgzhXmmc;
      this.kfsId = this.navInfo.list[index].kfsId;
      console.log(this.zjjgzhId);
      console.log(this.zjjgzhZhmc);
      console.log(this.zjjgzhGsmc);
      console.log(this.zjjgzhYhmc);

      if (index === 0) {
        this.selectedIndex = 0;
        this.fetchData();
      } else {
        this.fetchDataByAccountId(this.zjjgzhId);
      }
    },

    addClick() {
      this.dialogVisible = true;
      this.dialogTitle = "添加合同";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.zjjgzhId);
      });
    },
    handleDetail(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "账户申请信息";
      this.dialogType = 2;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2, this.currentRow.zjjgzhId);
        this.$refs.dialog.reset();
      });
    },
    handlePrint(index, row) {},
    submitSuccess() {
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.dialogVisible = false;
    },
    cellMouseEnter(row) {
      this.currentRow = row;
    },
    currentChange(num) {
      this.currentPage = num;
      if (this.selectedIndex === 0) {
        this.fetchData();
      } else {
        this.fetchDataByAccountId(this.zjjgzhId);
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
