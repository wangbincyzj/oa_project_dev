<template>
   <!-- 房屋定金退款1049906948 -->
  <div class="FwdDjtk">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金退款">
        <template #addButton>
           <el-button @click="multiWithdraw()" size="mini" type="primary" :disabled="selectedIndex===0">批量退款</el-button>
        </template>
          
        <el-table :data="tableData" style="width: 100%"  @selection-change="handleSelectionChange" >
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <!--<el-table-column align="center" label="申请人姓名" prop="djsySqrxm"></el-table-column> -->
          <!--<el-table-column align="center" label="监管账户" prop="djsyJgzh"></el-table-column> -->
          <!--<el-table-column align="center" label="申报金额" prop="djsySbje"></el-table-column>
          <el-table-column align="center" label="监管银行名称" prop="djsyJgyhmc"></el-table-column>
          <el-table-column align="center" label="用款事由" prop="djsyYksy"></el-table-column>
          <el-table-column align="center" label="流程状态" prop="djsyLczt"></el-table-column>
          <el-table-column align="center" label="汇入账户" prop="djsyHrzhzh"></el-table-column>
          <el-table-column align="center" label="汇入账户银行" prop="djsyHrzhyh"></el-table-column> -->
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJkyh"></el-table-column>
          <!-- <el-table-column align="center" label="银行id" prop="djJksj"></el-table-column> -->
          <el-table-column align="center" label="缴款日期" prop="djJkrq"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="handleWithdraw(scope.$index, scope.row)">退款</el-button>
            </template>
          </el-table-column>
        </el-table>


          <el-dialog
          :title="dialogTitle"
          center
          width="800px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
        
          @close="dialogVisible = false"
        >
          <DjtkDialog ref="dialog" 
          :dialog-type="dialogType" 
          :amount="amount"
          :jgyh="jgyh"
          :djsyJgzh="djsyJgzh"
          :djsyJgyhid="djsyJgyhid"
          @submitSuccess="submitSuccess" />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>
<script>

import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import DjtkDialog from "@/views/menu_4/DjtkDialog";
import { mixins } from "@/utils/mixins";
import { djtkApi } from "@/api/menu_4/djtk";
import { djglApi } from "@/api/menu_4/djgl";
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
import Why from "@/components/common/why/Why";


export default {
   name: "FwdDjtk",
  components: { TitleTable, ContainerTwoType,DjtkDialog,ButtonsArea,Why},
  mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
  data() {
    return {
      currentPage: 1, //分页
      pageSize: 10,
      total: null,
      pages: null,
      tableData: [],
      dialogVisible: false,
      dialogType: 1,
      dialogTitle: "",
      navInfo: {
        title: "监管账户",
        list: []
      },
     djsyDjidList:"",
     djsyJgzh:"",
     jgyh:"",
     selectedIndex: 0,
     amount:0,
     djsyJgyhid:0,
    };
  },
   created() {
    this.getNavInfo()
  },
  methods: {
    liClick(index) {
      this.selectedIndex = index;
      this.djsyJgzh=this.navInfo.list[index].name;
      this.jgyh=this.navInfo.list[index].zjjgzhYhmc;
      this.djsyJgyhid=this.navInfo.list[index].zjjgzhYhid;
      this.fetchData(this.djsyJgzh);
    },
     getNavInfo(){
      djtkApi.getAccount(this.$store.state.projectData.xmxxXmbh).then(ret => {
        console.log(ret);
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh            
          }));
          
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
    },
     fetchData(id) {
      djtkApi.getfundUse(this.currentPage, this.pageSize,id,this.$store.state.projectData.xmxxXmbh).then(ret => {
        console.log(ret)
        this.total = ret.data.total;
        this.tableData = ret.data.records;
      });
    },
    handleWithdraw(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "新增退款记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1,row.djId);
      });
    },

    multiWithdraw(){
      this.dialogVisible = true;
      this.dialogTitle = "批量新增退款记录"; 
       this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1,this.djsyDjidList);
      });
    },
    handleSelectionChange(selection){
      console.log(selection);
      let array=[];
      let money=0;
      selection.forEach(item => {
        
        array.push(item.djId);
        money=money+item.djJkje;
       
      });
      this.djsyDjidList=array.join(";");
      this.amount=money;
      console.log(this.djsyDjidList);
      console.log(money);
      
      
           
      
    },
    currentChange(num) {
      this.currentPage = num;
      this.fetchData(this.djsyJgzh);
    },
   handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchData(this.djsyJgzh);
      },
    submitSuccess() {
      this.dialogVisible = false;
       this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.fetchData(this.djsyJgzh);
    },
  },
}
 
</script>

<style>

</style>