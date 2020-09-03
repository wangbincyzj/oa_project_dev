<template>
  <div class="myTable-p0">
    <TitleTable title="已完成备案合同">
      <SearchBar @combSearch="combSearch" @combClear="combClear">
        <SearchBarItem prefix="买受人" placeholder="根据买受人姓名搜索"/>
      </SearchBar>
      <ButtonsArea :row="row" @cancel="setCurrent">
        <el-button type="primary" @click="handlePrint(row)" size="mini">打印合同</el-button>
        <el-button type="primary" size="mini" @click="handlePrint2(row)">打印备案表</el-button>
        <el-button type="primary" size="mini" @click="handleDetail(row)">详情</el-button>
      </ButtonsArea>
      <el-table
        v-loading="loading"
        ref="table"
        style="width: 100%"
        size="mini"
        highlight-current-row
        @current-change="handleCurrentChange"
        :data="tableData">
        <el-table-column label="合同备案号" align="center" prop="htBah" width="70"/>
        <el-table-column label="买受人" #default="{row}" align="center" prop="htMc" width="150">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrSyqr}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="证件号码" #default="{row}" align="left" prop="htMc" >
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrZjhm}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="楼栋名称" align="left" prop="ldMc" />
        <el-table-column label="房号" align="center" prop="roomFh" width="60"/>
        <el-table-column label="面积" align="center" prop="roomMj" width="80"/>
        <el-table-column label="单价" align="center" prop="roomDj" width="80"/>
        <el-table-column label="挂牌单价" align="center" prop="roomGpdj" width="100"/>
        <el-table-column label="付款方式" align="center" prop="htFkfs" width="50"/>
        <el-table-column label="监管状态" align="center" prop="roomZjjgzt" width="100">
          <template #default="{row}">
            <i class="el-icon-check" v-if="row.roomZjjgzt"/>
            <i class="el-icon-close" v-else/>
          </template>
        </el-table-column>
        <el-table-column label="备案时间" align="center" prop="htBasj" width="150"/>
      </el-table>
      <el-dialog
        title="合同详细"
        center
        width="1200px"
        :before-close="closeConfirm"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
      </el-dialog>
      <template #pager>
        <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="mixinCurrentChange"
            @size-change="mixinSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
      </template>
    </TitleTable>
    <transition name="bd">
      <div class="main-bd" v-if="active">
        <WsyshtLayout ref="ref1" :htId="htId" @close="close" :read-only="readOnly"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import WsyshtLayout from "@/views/menu_3/Wsysht/WsyshtLayout";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
  import SearchBar from "@/components/current/searchBar/SearchBar";
  import SearchBarItem from "@/components/current/searchBar/SearchBarItem";

  export default {
    name: "Ckbaht",
    mixins: [mixins.dialogMixin, mixins.myPagerMixin, mixins.tableMixin],
    components: {SearchBarItem, SearchBar, ButtonsArea, WsyshtLayout, TitleTable},
    data() {
      return {
        loading: false,
        tableData: [],
        active: false,
        htId: null,
        readOnly: false,
        msr: null
      }
    },
    created() {
      this.fetchTableData()
    },
    methods: {
      handleContract(row) {
        this.active = true;
        this.htId = row.htId;
        this.readOnly = false;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleDetail(row) {
        this.active = true;
        this.htId = row.htId;
        this.readOnly = true;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      close() {
        this.active = false
      },
      combSearch([msr]) {
        this.msr = msr;
        this.fetchTableData()
      },
      combClear() {
        this.msr = null;
        this.fetchTableData()
      },
      fetchTableData() {
        this.loading = true;
        yushouContractApi.getAllContract({htMsrxm: this.msr,kfsRwbh: this.$store.state.rwbh, htBazt:2, htCxzt:-1},this.currentPage, this.pageSize, 0).then(ret => {
          this.loading = false;
          this.tableData = ret.data.records;
        })
      },
      handleSubmit(item) {
        yushouContractApi.submitContract(item.htId).then(ret => {
          if (ret.code === 200) {
            this.$message.success("上报成功");
            this.fetchTableData()
          } else {
            this.$message.error(ret.message || "未知错误")
          }
        })
      },
      handlePrint(item){
        window.open(`#/printView/ysht?id=${item.htId}`)
      },
      handlePrint2(item){
        window.open(`#/printView/bab2?id=${item.htId}`)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .main-bd {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: $border-4;
    z-index: 99;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .bd-enter {
    left: 30%;
    opacity: 0;
    background-color: white;
  }

  .bd-leave-to {
    left: 30%;
    opacity: 0;
  }
</style>