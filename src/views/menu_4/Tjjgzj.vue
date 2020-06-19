<template>
  <!-- 添加监管资金 -->
  <div class="tjjgzj" id="tjjgzjs">
    <TitleTable title="商品房买卖合同列表">
      <div slot="controls" style="background-color:#fdf6ec">
        <el-alert type="success" :closable="false">
          <div class="controls" id="search">
            <div class="searchbox">
              <span>买受人:</span>
              <el-input
                size="mini"
                placeholder="按买受人搜索"
                v-model="listQuery.jiaocunMsrxm"
                style="width:200px;"
              />
            </div>
            <div class="searchbox">
              <span>证件号码:</span>
              <el-input
                size="mini"
                placeholder="按证件号码搜索"
                v-model="listQuery.Msrzjhm"
                style="width:200px;"
              />
            </div>

            <div class="searchbox">
              <span>备案号:</span>
              <el-input
                size="mini"
                placeholder="按备案号搜索"
                v-model="listQuery.Htbh"
                style="width:200px;"
              />
            </div>

            <div class="searchbox">
              <el-button size="mini" type="success" @click="handleSearchList()">搜索</el-button>
            </div>
          </div>
        </el-alert>
        <el-alert type="warning" center :closable="false"></el-alert>
      </div>

      <el-table :data="tableData5" style="width: 100%" ref="refTable" @expand-change="openExpand">
        <el-table-column type="expand">
          <template>
            <el-table :data="tableData" style="width: 100%" border :span-method="objectSpanMethod">
              <el-table-column label="资金列表" align="center">
                <template>
                  <span>资金列表</span>
                </template>
              </el-table-column>

              <el-table-column prop="jiaocunJkje" label="添加金额" width="180" align="center"></el-table-column>
              <el-table-column prop="jiaocunJksy" label="缴款事由" width="180" align="center"></el-table-column>
              <el-table-column prop="id" label="添加人" align="center"></el-table-column>
              <el-table-column prop="jiaocunJkje" label="数据来源" align="center"></el-table-column>
              <el-table-column prop="jiaocunJkrq" label="时间" align="center"></el-table-column>
              <el-table-column prop="jiaocunJkzt" label="资金状态" align="center"></el-table-column>
            </el-table>
          </template>
        </el-table-column>

        <el-table-column label="备案号" prop="id" align="left"></el-table-column>
        <el-table-column label="买受人" prop="jiaocunMsrxm" align="center"></el-table-column>
        <el-table-column label="证件号码" prop="jiaocunMsrzjhm" width="180px" align="center"></el-table-column>
        <el-table-column label="栋号" prop="jiaocunLdmc" align="center"></el-table-column>
        <el-table-column label="房号" prop="jiaocunFwbh" align="center"></el-table-column>
        <el-table-column label="面积" prop="fwjzmj" align="center"></el-table-column>
        <el-table-column align="center" label="单价" prop="fwdj"></el-table-column>
        <el-table-column align="center" label="购房总额" prop="gfze"></el-table-column>
        <el-table-column align="center" label="首付金额" prop="sfk"></el-table-column>
        <el-table-column align="center" label="已添加资金" prop="ytjje"></el-table-column>
        <el-table-column align="center" label="未添加资金" prop="wtjje"></el-table-column>
        <el-table-column align="center" label="已监管资金" prop="yjgje"></el-table-column>
        <el-table-column align="center" label="未纳入监管资金" prop="wjgje" width="120px"></el-table-column>

        <el-table-column align="center" label="合同状态">
          <template slot-scope="scope">{{ scope.row.htBazt | formStatus }}</template>
        </el-table-column>
        <el-table-column align="center" label="备案时间" prop="htAddtime"></el-table-column>
        <el-table-column label="操作" prop="desc" width="200px" align="center">
          <template slot-scope="scope">
            <el-button @click="open(scope.row)" type="text" size="small">查看记录</el-button>
            <el-button size="mini" type="primary" @click="handleDetail()">新增缴存</el-button>
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
        <TjjgzhDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
      </el-dialog>
    </TitleTable>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import TjjgzhDialog from "@/views/menu_4/TjjgzhDialog";
// import SqsfxyDialog from "@/views/menu_4/SqsfxyDialog";

// import {tjrwyhApi} from "@/api/menu_4/tjrwyh";
import { mixins } from "@/utils/mixins";

import { tjjgzjApi } from "@/api/menu_4/tjjgzj";

import { mapState } from "vuex";

export default {
  name: "tjjgzj",
  mixins: [mixins.dialogMixin],
  components: {
    TitleTable,
    ContainerTwoType,
    TjjgzhDialog
  },
  data() {
    return {
      tableData: [],
      tableData5: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 1,
      currentPage: 1, //分页
      pageSize: 10,
      total: 20,
      pages: 1,
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "", // mergeSpanArr的索引
      listQuery: {
        jiaocunMsrxm: null,
        Msrzjhm: null,
        Htbh: null
      }
    };
  },
  computed: {
    ...mapState(["rwbh"])
  },
  methods: {
    //获取下拉列表信息
    fetchNavInfo(htbh) {
      tjjgzjApi
        .fetchlist(htbh)
        .then(res => {
          this.tableData = res.data.records;
        })
        .finally(() => {
          this.setMergeArr(this.tableData);
        });
    },
    //列表信息
    getlist() {
      // console.log(this.rwbh)
      tjjgzjApi.getlist(this.rwbh).then(res => {
        this.tableData5 = res.data;
      });
    },
    //打印合同
    handlePrint(index, row) {},
    //弹出框
    submitSuccess() {
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.dialogVisible = false;
    },
    handleDetail() {
      // debugger
      this.dialogVisible = true;
      this.dialogTitle = "添加缴款记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.xmxxid);
        // debugger
      });
    },
    handleSearchList() {
      //搜索功能
      this.getlist();
    },
    currentChange(num) {
      this.currentPage = num;
    },
    open(row) {
      this.$refs.refTable.toggleRowExpansion(row);
    },
    openExpand(row) {
      //下拉列表信息
      this.fetchNavInfo(row.jiaocunHtbh);
    },
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 合并第二列所有行
        const _row = this.mergeSpanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    setMergeArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.mergeSpanArr.push(1);
          this.mergeSpanArrIndex = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].name === data[i - 1].name) {
            this.mergeSpanArr[this.mergeSpanArrIndex] += 1;
            this.mergeSpanArr.push(0);
          } else {
            this.mergeSpanArr.push(1);
            this.mergeSpanArrIndex = i;
          }
        }
      }
    }
  },
  created() {
    //列表信息
    this.getlist();
  },
  mounted() {},
  filters: {
    formStatus(htBazt) {
      switch (htBazt) {
        case 0:
          return "新建";
        case 1:
          return "上报";
        case 2:
          return "已备案";
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

#search {
  display: flex;
  width: 100%;

  .searchbox {
    margin-left: 150px;

    span {
      margin-right: 20px;
    }
  }
}
</style>


<style lang="scss">
#tjjgzjs {
  .el-table__expand-icon {
    display: none;
  }
}
</style>
