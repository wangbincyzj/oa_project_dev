<template>
  <div class="sqsfxy">
    
      <TitleTable
        title="账户对应三方协议列表">
        
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="序号"
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="合同备案号"
            prop="htId">
          </el-table-column>
          <el-table-column
            label="银行名称"
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="企业名称"
            prop="hetongKfsmc">
          </el-table-column>
          <el-table-column
            label="监管账户"
            prop="hetongZhmc">
          </el-table-column>
          <el-table-column
            label="项目名称"
            prop="hetongXmmc">
          </el-table-column>
          <el-table-column
            align="center"
            label="审核状态"
            prop="hetongLczt">           
          </el-table-column>
         <el-table-column
            align="center"
            label="审核时间"
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
  import DysfxyDialog from "@/views/menu_4/DysfxyDialog";
 
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
 import {sqsfxyApi} from "@/api/menu_4/sqsfxy";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "sqjgzh",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
             { id:1,name:"别问"},
             { id:2,name:"问就是不知道"},
          ]
        },
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
