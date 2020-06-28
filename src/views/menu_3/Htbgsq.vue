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
        @expand-change="handleExpand"
        :data="tableData">
        <el-table-column type="expand">
          <template #default="{row}">
            <el-table
              v-loading="row.loading"
              :data="row.expand" style="box-shadow: 3px 3px 3px rgba(20,150,220,0.11), -3px -3px 3px rgba(20,157,220,0.15)">
              <el-table-column label="创建日期" align="center" prop="createDt" />
              <el-table-column label="变更单号" align="center" prop="changeNr" />
              <el-table-column label="经办人" align="center" prop="creator"/>
              <el-table-column label="变更类型" align="center" prop="changeType">
                <template #default="{row}">
                  {{row.changeType==="1"?"变更条款":"变更买受人"}}
                </template>
              </el-table-column>
              <el-table-column label="变更单状态" align="center" #default="{row}"  width="80">
                {{row.status|statusFilter}}
              </el-table-column>
              <el-table-column label="操作" align="center" width="300">
                <template #default="scope">
                  <el-button @click="handleSubmit(scope.row, scope.$index)" size="mini" :disabled="scope.row.status===1||scope.row.status===2">提交审核</el-button>
                  <el-button @click="handleUpdate(scope.row)" size="mini" :disabled="scope.row.status===1||scope.row.status===2">内容修改</el-button>
                  <el-button @click="handleChangeDetail(scope.row)" size="mini" >变更详情</el-button>
                </template>
              </el-table-column>
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="合同备案号" align="center" prop="htBah" width="70"/>
        <el-table-column label="买受人" #default="{row}" align="center" prop="htMc">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrSyqr}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="证件号码" #default="{row}" align="center" prop="htMc">
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
        <el-table-column label="变更状态" align="center" #default="{row}"  width="80">
          {{row.htBgzt}}
        </el-table-column>
        <el-table-column label="操作" align="center" width="300">
          <template #default="{row}">
            <el-button @click="handleChange(row)" size="mini" >变更买受人</el-button>
            <el-button @click="handleChangeContent(row)" size="mini" >变更条款</el-button>
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
    filters:{
      statusFilter(val){
        switch (val) {
          case 0: return "新建";
          case 1: return "审核中";
          case 2: return "审核完成";
          case 3: return "驳回";
        }
      }
    },
    created(){
      this.fetchTableData()
    },
    methods:{
      fetchTableData() {
        yushouContractApi.getAllContract({htBazt:2}).then(ret=>{
          this.tableData = ret.data.records.map(item=>({
            ...item,
            expand: [],
            loading: false
          }));
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
      handleChangeContent(item){
        this.dialogVisible = true;
        this.htId = item.htId;
        this.dialogTitle = "变更合同条款"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1, item.htBh)
        })
      },
      handleExpand(row) {
        row.loading = true;
        yushouContractApi.getChangeIdByHtId(row.htId).then(ret=>{
          row.loading = false;
          row.expand = ret.data.contractChanges
        })
      },
      handleDetail(row){
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleSubmit(item,index){
        let sIndex = this.tableData.findIndex(item2=>item2.expand[index]===item)
        console.log(sIndex)
        yushouContractApi.submitContractChange(item.id).then(ret=>{
          if(ret.code===200){
            this.$message.success("上报成功")
            this.handleExpand(this.tableData[sIndex])
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      },
      handleUpdate(item) {

      },
      handleChangeDetail(item){
        this.dialogVisible = true;
        this.htId = item.htId;
        this.dialogTitle = "查看变更详情"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, item)
        })

      },
      submitSuccess(){
        this.dialogVisible = false;
        this.fetchTableData()
      },
      fetchDetail(id, htId) {
        yushouContractApi.revokeContractDetail(htId).then(ret => {
          this.form = ret.data;
          this.form.approveProcess = []
          Object.keys(this.changeDetail).forEach(key => {
            this.changeDetail[key].content = ret.data[key]
          })
          yushouContractApi.getChangeById(id).then(ret => {
            console.log(ret)
            this.changeDetail.cxyy.content = ret.data.contractChange.remark;
            this.form.approveProcess = ret.data.approveProcess;
            this.contractChange = ret.data.contractChange;
            this.tableData = ret.data.contractChange.houseOwners;
            this.tableData2 = ret.data.contractChange.oldHouseOwners;
            this.reason = ret.data.contractChange.remark;
            this.content = ret.data.contractChange.content;
          })
        })
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