<template>
  <div class="gljgzj">
   
      <TitleTable
        title="待上报监管资金列表">
        
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="合同编号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="买受人"
            prop="htId">
          </el-table-column>
          <el-table-column
            label="证件号码"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="栋号"
            prop="itemName">
          </el-table-column>
          <el-table-column
            label="房号"
            prop="ldName">
          </el-table-column>
          <el-table-column
            label="面积"
            prop="phone">
          </el-table-column>
          <el-table-column
            align="center"
            label="缴款金额"
            prop="status">           
          </el-table-column>
         <el-table-column
            align="center"
            label="监管银行"
            prop="status">           
          </el-table-column>
          <el-table-column
            align="center"
            label="监管账号"
            prop="status">           
          </el-table-column>
          <el-table-column
            align="center"
            label="缴款说明"
            prop="status">           
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
          >
           
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handlePrint(scope.$index, scope.row)">打印合同
              </el-button>
              
            </template>
          </el-table-column>
        </el-table>
       
      </TitleTable>
  
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  //import SqsfxyDialog from "@/views/menu_4/SqsfxyDialog";
 
  //import {tjrwyhApi} from "@/api/menu_4/tjrwyh";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "gljgzj",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType},
    data() {
      return{
       
        tableData: [
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        authList: [],
        selectedIndex: 0,
        selectedIndex: null,
      }
    },
    created() {
      //this.fetchNavInfo();
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
      
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry{
    padding: $pm;
  }

</style>
