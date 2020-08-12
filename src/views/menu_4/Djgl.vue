<template>
  <div class="fwdDjgl">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金关联">
         <template #addButton>
           <el-button @click="multiRelate()" size="mini" type="primary" :disabled="selectedIndex===0">批量关联</el-button>
        </template>
       
        <el-table :data="tableData" style="width: 100%" @cell-mouse-enter="cellMouseEnter"
        @selection-change="handleSelectionChange">
          <el-table-column type="selection" width="55"></el-table-column>
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJkyh"></el-table-column>
          <el-table-column align="center" label="银行id" prop="djJkyhid"></el-table-column>
          <el-table-column align="center" label="缴款日期" prop="djJkrq"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="relation(scope.$index, scope.row)">关联</el-button>
            </template>
          </el-table-column>
        </el-table>
        <template #pager>
          <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="currentChange"
            @size-change="handleSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
          </el-pagination>
        </template>
        <el-dialog
          :title="dialogTitle"
          center
          width="1500px"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <DjglDialog 
          ref="dialog" 
          :dialog-type="dialogType" 
          :djId="djId"
          @submitSuccess="submitSuccess" />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import DjglDialog from "@/views/menu_4/DjglDialog";
import { mixins } from "@/utils/mixins";
import { djglApi } from "@/api/menu_4/djgl";
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
import Why from "@/components/common/why/Why";

export default {
  name: "fwdDjgl",
  components: { TitleTable, ContainerTwoType, DjglDialog ,ButtonsArea,Why},
  mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
  data() {
    return {
      currentPage: 1, //分页
      pageSize: 10,
      total: 0,
      pages: 0,
      tableData: [],
      dialogVisible: false,
      dialogType: 1,
      dialogTitle: "",
      djId:0,
      navInfo: {
        title: "",
        
        list: []
      },
      djDjglzt:0,
      djJkzt:2,
      djDjtkzt:0,
      selectedIndex: 0,
      djIdlist:"",
    }
  },
  created() {
    this.getNavInfo();
    
  },
  methods: {
    liClick(index) {
      this.selectedIndex = index;
      this.djJkyhzh=this.navInfo.list[index].name;
      this.zjjgzhId=this.navInfo.list[index].id;
      this.fetchData(this.djJkyhzh);
    },
    getNavInfo(){
      djglApi.getAccount(this.$store.state.projectData.xmxxXmbh).then(ret => {
        console.log(ret);
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh
            
            
          }));
          
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
    },
     fetchData(djJkyhzh){
       djglApi.getDepositByAccount(this.currentPage, this.pageSize,djJkyhzh).then(ret => {
         console.log(ret);
         console.log("where is my ...");
         
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
         
        })
    },
    relation(index, row) {
      console.log(row)
      this.dialogVisible = true;
      this.dialogTitle = "合同列表"; 
      this.djId=row.djId;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1,this.djId);
      });
    },
    multiRelate(){
      this.dialogVisible = true;
      this.dialogTitle = "合同列表"; 
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2,this.djIdlist);
      });
    },
    handleSelectionChange(selection){
      console.log(selection);
      let array=[];
      selection.forEach(item => {
        
        array.push(item.djId);
        console.log(item);
        console.log(array);
       
      });
      this.djIdlist=array.join(";");
           
      
    },
    currentChange(num) {
      this.currentPage = num;
     this.fetchData(this.djJkyhzh);
    },
    handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchData(this.djJkyhzh);
      },
    cellMouseEnter(row) {
        this.currentRow = row;
      },
    submitSuccess() {
      this.dialogVisible = false;
      // this.$nextTick(() => {
      //   this.$refs.dialog.reset();
      // });
      this.fetchData(this.djJkyhzh);
    },
  
  }
}
</script>

<style>
</style>