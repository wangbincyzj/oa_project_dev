<template>
  <div class="myTable-p0">
    <TitleTable title="撤销备案合同" bgc="#848DF9" color="white">
      <div class="controls" slot="controls" style="background-color:white;">
        <SearchBar @combSearch="combSearch" @combClear="combClear">
          <SearchBarItem prefix="买受人"/>
          <SearchBarItem prefix="证件号码"/>
          <SearchBarItem prefix="备案号"/>
        </SearchBar>
        <ButtonsArea :row="row" @cancel="setCurrent">
          
          <template v-if="(row.htCxzt===0||row.htCxzt)&&row.htCxzt!==1&&row.htCxzt!==2">
            <el-button type="primary"  size="mini"  @click="handleGetFile(row)">确认收件</el-button>
            <el-button type="primary"  size="mini" @click="handleManageFile(row)">管理收件</el-button>
            <el-button type="primary" @click="handleSubmit(row)" size="mini">上报</el-button>
          </template>
          <el-button type="primary" v-if="row.htCxzt!==null" @click="handleChangeDetail(row)" size="mini">变更详情</el-button>
          <el-button type="primary" @click="handleChange(row)" size="mini" v-if="row.htCxzt!==0&&!row.htCxzt">变更退房申请</el-button>
          <el-button type="primary" @click="handleDetail(row)" size="mini">合同详情</el-button>
        </ButtonsArea>
      </div>
      <el-table
        v-loading="loading"
        style="width: 100%"
        size="mini"
        ref="table" highlight-current-row @current-change="handleCurrentChange"  @cancel="setCurrent"
        :data="tableData">
        <el-table-column label="合同备案号" align="center" prop="htBah" width="70"/>
        <el-table-column label="买受人" #default="{row}" align="center" prop="htMc" width="180">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrSyqr}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="证件号码" #default="{row}" align="center" prop="htMc" width="180">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrZjhm}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="项目名称" align="center" prop="xmMc" />
        <el-table-column label="楼栋名称" align="center" prop="ldMc" />
        <el-table-column label="房号" align="center" prop="roomFh" width="60"/>
        <el-table-column label="面积" align="center" prop="roomMj" width="80"/>
        <el-table-column label="预告状态" align="center" #default="{row}"  width="80">
          {{row.roomYgzt === 1 ? "是" : "否"}}
        </el-table-column>
        <el-table-column label="按揭状态" align="center" #default="{row}" width="80">
          {{row.roomAjzt === 1 ? "是" : "否"}}
        </el-table-column>
        <el-table-column label="查封状态" align="center" #default="{row}"  width="80">
          {{row.htCfzt === 1 ? "是" : "否"}}
        </el-table-column>
        <el-table-column label="撤销状态" align="center" #default="{row}"  width="80">
          {{row.htCxzt === 2 ? "是" : "否"}}
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialogTitle"
        center
        :width="dialogWidth"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <CxbasqDialog
          ref="dialog"
          :htId="htId"
          :dialogType="dialogType"
          :visible.sync="dialogVisible"
          @submitSuccess="submitSuccess"/>
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
        <WsyshtLayout ref="ref1" :htId="htId" :read-only="true" @close="active=false" />
      </div>
    </transition>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import WsyshtLayout from "@/views/menu_3/Wsysht/WsyshtLayout";
  import {mixins} from "@/utils/mixins";
  import CxbasqDialog from "@/views/menu_3/CxbasqDialog";
  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
  import SearchBar from "@/components/current/searchBar/SearchBar";
  import SearchBarItem from "@/components/current/searchBar/SearchBarItem";

  export default {
    name: "Cxbasq",
    mixins: [mixins.dialogMixin, mixins.myPagerMixin, mixins.tableMixin],
    components: {
      SearchBarItem,
      SearchBar, ButtonsArea, CxbasqDialog, WsyshtLayout, InfoListPlusItem, InfoListPlus, TitleTable},
    data() {
      return{
        tableData: [],
        loading: false,
        active: false,
        htId: null,
        dialogWidth: "800px",
        dialogTitle: "",
        dialogType:null,
        msr: null,
        zjh: null,
        bah: null,
      }
    },
    created(){
      this.fetchTableData()
    },
    methods:{
      fetchTableData() {
        yushouContractApi.getAllContract({htBazt:2, kfsRwbh: this.$store.state.rwbh, htMsrxm: this.msr, htMsrzjhm: this.zjh, htBah:this.bah}).then(ret=>{
          this.total = ret.data.total
          this.tableData = ret.data.records;
        })
      },
      combSearch([msr, zjh, bah]) {
        this.msr = msr
        this.zjh = zjh
        this.bah = bah
        this.fetchTableData()
      },
      combClear() {
        this.msr = null
        this.zjh = null
        this.bah = null
        this.fetchTableData()
      },
      handleChange(item){
        this.dialogVisible = true;
        this.htId = item.htId;
        this.dialogType=0;
        this.dialogWidth = "600px"
        this.dialogTitle = "变更退房申请"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(0)
        })
      },
      handleDetail(row){
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleSubmit(item){
        yushouContractApi.submitContract(item.htId, 2).then(ret=>{
          if(ret.code===200){
            this.$message.success("上报成功");
            this.fetchTableData()
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      },
      handleChangeDetail(item){
        this.dialogVisible = true;
        this.htId = item.htId;
        this.dialogWidth = "1200px";
        this.dialogType=1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1, item.htId,item.htBh,item.logId)
        })
      },
      handleGetFile(row) {
        this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.dialogType = 4;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(4, row.htId, row.htBh);
        })
      },
      handleManageFile(row) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, row.htId, row.htBh);
        })
      },
      submitSuccess(){
        this.dialogVisible = false;
        this.fetchTableData()
      }
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