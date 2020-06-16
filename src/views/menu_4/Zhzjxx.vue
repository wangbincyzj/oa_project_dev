<template>
  <div class="httksq">
   
      <TitleTable
        :title="`【${this.$store.state.projectData.xmxxKfs}】监管资金汇总`">
        <div slot="controls">
         <div class="controls" style="background-color:#fdf6ec">
        <span style="margin-left:200px">开始时间:</span> <el-date-picker v-model="startTime" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
        <span>结束时间:</span><el-date-picker v-model="endTime" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
        <el-button size="mini" type="success" @click="search">查找</el-button>
        <el-button size="mini" type="success" @click="handlePrint">打印明细</el-button>
        </div>
      </div>
        <el-table
          :data="tableData"
          show-summary
          sum-text="汇总信息"
          style="width: 100%">
           <el-table-column
            label="序号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="账户名称"
            prop="id">
          </el-table-column>
          <el-table-column
            label="监管账号"
            prop="htId">
          </el-table-column>
          <el-table-column
            label="缴存金额"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="使用金额"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="剩余金额"
            prop="itemName">
          </el-table-column>
          
         
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next, total"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total">
        </el-pagination>
       <el-dialog
          :title="dialogTitle"
          center
          width="800px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <HttksqDialog
            ref="dialog"
            :dialog-type="dialogType"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
  
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import HttksqDialog from "@/views/menu_4/HttksqDialog";
 
  //import {tjrwyhApi} from "@/api/menu_4/tjrwyh";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "httksq",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType,HttksqDialog},
    data() {
      return{
       
        tableData: [
          {id:1}
        ],
        search: "",
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        authList: [],
        selectedIndex: 0,
        selectedIndex: null,
        startTime:"",
        endTime:"",
      }
    },
    created() {
      this.fetchNavInfo();
    },
    methods:{
      fetchNavInfo() {
        this.navInfo.loading = true;
        // tjrwqyApi.getAccessEnterprisesByPage(1, 50).then(ret=>{
        //   this.navInfo.loading = false;
        //   this.navInfo.list = ret.data.records.map(item=>({
        //     ...item, id: item.rwqyxxId, name: item.rwqyxxTitle
        //   }));
         this.navInfo.list.unshift({id:0, name: "请选择对应的监管账户"})
        // })
      },
      // fetchTableData
     
      liClick(index) {
        this.selectedIndex = index;
        if(index===0)return;
        // this.selectedIndex = this.navInfo.list[index];
        // this.getAccessEnterprisesInfo(this.navInfo.list[index].id)
      },
     
     
      handlePrint(index, row){
       
      },
      currentChange(num) {
        this.currentPage = num;
        this.fetchData()
      },
       cellMouseEnter(row) {
        this.currentRow = row;
      },
       submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
      },
      
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry{
    padding: $pm;
  }

</style>
