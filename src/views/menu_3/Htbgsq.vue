<template>
  <div class="myTable-p0">
    <TitleTable title="合同变更申请" bgc="#848DF9" color="white">
      <div class="controls" slot="controls" style="background-color:white;">
        <InfoListPlus :count="3">
          <InfoListPlusItem name="买受人"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
          <InfoListPlusItem name="证件号码"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
          <InfoListPlusItem name="备案号"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
        </InfoListPlus>
        <div style="height: 15px; background-color:#E4EDF9;"></div>
      </div>
      <el-table
        v-loading="loading"
        style="width: 100%"
        :data="tableData">
        <el-table-column label="合同备案号" align="center" prop="htBah" width="70"/>
        <el-table-column label="买受人" #default="{row}" align="center" prop="htMc" width="80">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrSyqr}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="证件号码" #default="{row}" align="center" prop="htMc" width="180">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrZjhm}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="项目名称" align="center" prop="xmMc" width="80"/>
        <el-table-column label="楼栋名称" align="center" prop="ldMc" width="80"/>
        <el-table-column label="房号" align="center" prop="roomFh" width="60"/>
        <el-table-column label="面积" align="center" prop="roomMj" width="80"/>
        <el-table-column label="预告状态" align="center" #default="{row}"  width="80">
          {{row.roomYgzt}}
        </el-table-column>
        <el-table-column label="按揭状态" align="center" #default="{row}" width="80">
          {{row.roomAjzt}}
        </el-table-column>
        <el-table-column label="查封状态" align="center" #default="{row}"  width="80">
          {{row.htCfzt}}
        </el-table-column>
        <el-table-column label="撤销状态" align="center" #default="{row}"  width="80">
          {{row.htCxzt}}
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button @click="handleChange(row)" size="mini" >变更买受人</el-button>
            <el-button @click="handleChange(row)" size="mini" >变更合同条款</el-button>
            <el-button @click="handleDetail(row)" size="mini">合同详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialogTitle"
        center
        width="1200px"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <HtbgsqDialog
          ref="dialog"
          :htId="htId"
          :visible.sync="dialogVisible"
          @submitSuccess="submitSuccess"/>
      </el-dialog>
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
  import HtbgsqDialog from "@/views/menu_3/HtbgsqDialog";

  export default {
    name: "Cxbasq",
    mixins: [mixins.dialogMixin],
    components: {HtbgsqDialog, CxbasqDialog, WsyshtLayout, InfoListPlusItem, InfoListPlus, TitleTable},
    data() {
      return{
        tableData: [],
        loading: false,
        active: false,
        htId: null,
      }
    },
    created(){
      this.fetchTableData()
    },
    methods:{
      fetchTableData() {
        yushouContractApi.getAllContract({htBazt:2}).then(ret=>{
          this.tableData = ret.data.records;
        })
      },
      handleChange(item){
        this.dialogVisible = true;
        this.htId = item.htId;
        this.dialogTitle = "变更买受人详情"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(0, item.htBh)
        })
      },
      handleDetail(row){
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleSubmit(item){},
      handleChangeDetail(item){},
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