<template>
  <div class="gljgzj">
   
      <TitleTable
        title="商品房买卖合同列表">
         <div slot="controls" class="controls" style="background-color:#fdf6ec">
        <span style="margin-left:100px">买受人:</span><el-input size="mini" placeholder="按买受人搜索" style="width:200px;margin-right:100px;" />
        <span>证件号码:</span><el-input size="mini" placeholder="按证件号码搜索" style="width:200px;margin-right:100px"/>
        <span>备案号:</span><el-input size="mini" placeholder="按备案号搜索" style="width:200px;margin-right:100px"/>
        <el-button size="mini" type="success">搜索</el-button>
      </div>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="备案号"
            prop="jiaocunHtbh">
          </el-table-column>
          <el-table-column
            label="买受人"
            prop="jiaocunMsrxm">
          </el-table-column>
          <el-table-column
            label="证件号码"
            prop="jiaocunMsrzjhm">
          </el-table-column>
          <el-table-column
            label="栋号"
            prop="jiaocunLdmc">
          </el-table-column>
          <el-table-column
            label="房号"
            prop="jiaocunFwbh">
          </el-table-column>
          <el-table-column
            label="面积"
            prop="fwjzmj">
          </el-table-column>
          <el-table-column
            align="center"
            label="单价"
            prop="fwdj">           
          </el-table-column>
         <el-table-column
            align="center"
            label="购房总额"
            prop="gfze">           
          </el-table-column>
          <el-table-column
            align="center"
            label="首付金额"
            prop="sfk">           
          </el-table-column>
          <el-table-column
            align="center"
            label="已添加资金"
            prop="ytjje">           
          </el-table-column>
          <el-table-column
            align="center"
            label="未添加资金"
            prop="wtjje">           
          </el-table-column>
          <el-table-column
            align="center"
            label="已监管资金"
            prop="yjgje">           
          </el-table-column>
          <el-table-column
            align="center"
            label="未纳入监管资金"
            prop="status">           
          </el-table-column>
          <el-table-column
            align="center"
            label="合同状态"
            prop="status">           
          </el-table-column>
          <el-table-column
            align="center"
            label="备案时间"
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
  import TjjgzjDialog from "@/views/menu_4/TjjgzjDialog";
 
  import {tjjgzjApi} from "@/api/menu_4/tjjgzj";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "tjjgzj",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType,TjjgzjDialog},
    data() {
      return{
       
        tableData: [
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        selectedIndex: 0,
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
      fetchData() {
       
        tjjgzjApi.getContract(this.$store.state.kfsRwbh).then(ret=>{
          this.tableData = ret.data.records;
         })
      },
    
     
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
