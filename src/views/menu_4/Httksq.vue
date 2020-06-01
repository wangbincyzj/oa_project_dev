<template>
  <div class="httksq">
   
      <TitleTable
        title="已撤备案未解除监管的合同列表">
        <div slot="controls">
         <div class="controls" style="background-color:#fdf6ec">
        <span style="margin-left:100px">买受人:</span><el-input size="mini" placeholder="按买受人搜索" style="width:200px;margin-right:100px;" />
        <span>证件号码:</span><el-input size="mini" placeholder="按证件号码搜索" style="width:200px;margin-right:100px"/>
        <span>备案号:</span><el-input size="mini" placeholder="按备案号搜索" style="width:200px;margin-right:100px"/>
        <el-button size="mini" type="success">搜索</el-button>
        <div class="controls">
            <el-alert
            type="warning"
            center
            :closable="false">
            <span class="warning" style="color: red">注意：已经备案的房间必须是撤销完合同后才能退款！</span>
          </el-alert>
        </div></div>
      </div>
        <el-table
          :data="tableData"
          style="width: 100%">
           <el-table-column
            label="序号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="备案号"
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
            label="项目名称"
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
            label="变更时间"
            prop="phone">
          </el-table-column>
          <el-table-column
            align="center"
            label="变更原因"
            prop="status">           
          </el-table-column>
         <el-table-column
            align="center"
            label="纳入监管资金"
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
    name: "httksq",
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
      
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry{
    padding: $pm;
  }

</style>
