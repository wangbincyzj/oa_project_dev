<template>
  <div class="gljgzj">
    <TitleTable title="待上报监管资金列表">
       <template #controls>
          <ButtonsArea :row="row" @cancel="setCurrent">
             <el-button size="mini" type="primary" @click="handleUpdate(0, row)"
            :disabled="row.jiaocunJkzt!==0">修改</el-button>
            <el-button size="mini"  type="primary"  @click="handleInform(0, row)"
            :disabled="row.jiaocunJkzt!==0">上报</el-button>
            <el-button size="mini" type="danger"  @click="handleDel(0, row)"
            :disabled="row.jiaocunJkzt!==0">删除</el-button>
          </ButtonsArea>
        </template>
      <el-table :data="tableData" style="width: 100%"  @cell-mouse-enter="cellMouseEnter"
      size="mini"
        ref="table"
        highlight-current-row
        @current-change="handleCurrentChange">
        <el-table-column align="center" label="合同编号" prop="jiaocunHtbh"></el-table-column>
        <el-table-column align="center" label="买受人" prop="jiaocunMsrxm"></el-table-column>
        <el-table-column align="center" label="证件号码" prop="jiaocunMsrzjhm"></el-table-column>
        <el-table-column align="center" label="幢号" prop="jiaocunLdmc"></el-table-column>
        <el-table-column align="center" label="房号" prop="jiaocunFh"></el-table-column>
        <el-table-column align="center" label="面积" prop="jiaocunFwmj"></el-table-column>
        <el-table-column align="center" label="缴款金额" prop="jiaocunJkje"></el-table-column>
        <el-table-column align="center" label="监管银行" prop="jiaocunKhyh"></el-table-column>
        <el-table-column align="center" label="监管账号" prop="jiaocunJkzh"></el-table-column>
        <el-table-column align="center" label="缴款说明" prop="jiaocunJksy"></el-table-column>
        <!--<el-table-column align="center" label="操作" width="250px">
            <template slot-scope="scope">
           <el-button size="mini" @click="handlePrint(scope.$index, scope.row)">打印合同</el-button> -->
            <!-- <el-button
              size="mini"
              :type="StatusColor(scope.row)"
              :disabled="!_enable(scope.row)"
              @click="report(scope.$index, scope.row)"
            >{{ scope.row.jiaocunJkzt | formStatus }}</el-button> 
            <el-button size="mini"  @click="handleUpdate(scope.$index, scope.row)"
            :disabled="scope.row.jiaocunJkzt!==0">修改</el-button>
            <el-button size="mini"  @click="handleInform(scope.$index, scope.row)"
            :disabled="scope.row.jiaocunJkzt!==0">上报</el-button>
            <el-button size="mini" type="danger" @click="handleDel(scope.$index, scope.row)"
            :disabled="scope.row.jiaocunJkzt!==0">删除</el-button>
            
          </template>
        </el-table-column>-->
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
        width="800px"
        :before-close="closeConfirm"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <GljgzjDialog
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
import GljgzjDialog from "@/views/menu_4/GljgzjDialog";
import { gljgzjApi } from "@/api/menu_4/gljgzj";
import { mixins } from "@/utils/mixins"; 
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
import Why from "@/components/common/why/Why";



export default {
  name: "gljgzj",
  mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
  components: { TitleTable, ContainerTwoType,GljgzjDialog,ButtonsArea,Why },
  data() {
    return {
      tableData: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 0,
      selectedIndex: 0,
      currentPage: 1, //分页
      pageSize:10,
      total:0,
      pages:0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      gljgzjApi
        .getProjectById(
          this.currentPage,
          this.pageSize,
          this.$store.state.projectData.xmxxXmbh
        )
        .then(res => {
          // debugger
          this.total = res.data.total;
          this.pages = res.data.pages;
          this.tableData = res.data.records;
        });
    },
    handleDel(){
        this.$confirm('确定要删除该监管资金吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
            gljgzjApi.deleteDeposit(this.currentRow.jiaocunId).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功");
                this.fetchData();
            }else{
              this.$message.error(ret.message||"操作失败")
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作'
          });
        });
    },
    handleInform(){
        this.$confirm('确定要上报该监管资金吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
            gljgzjApi.informDeposit({
              jiaocunId:this.currentRow.jiaocunId,
              jiaocunJkzt:1}).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功");
                this.fetchData();
            }else{
              this.$message.error(ret.message||"操作失败")
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作'
          });
        });
    },
    handleUpdate(index,row){
       this.dialogVisible = true;
      this.dialogTitle = "修改缴款记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, row.jiaocunId);
      });
    },
    cellMouseEnter(row) {
        this.currentRow = row;
        
      },

     submitSuccess(){
            this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
            this.dialogVisible=false;
            this.fetchData();
        },

    handlePrint(index, row) {},
    report(index, row) {
      //确认上报
      const list = {
        jiaocunId: row.jiaocunId,
        jiaocunJkzt: "1"
      };
      gljgzjApi.addDeposit(list).then(res => {
        //  debugger;
        this.fetchNavInfo();
      });
    },
     currentChange(num) {
         this.currentPage = num;
         this.fetchData()
       },
       handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchData();
      },
    _enable(row) {
      return row.jiaocunJkzt === 0;
    },
    StatusColor(row) {
      switch (row.jiaocunJkzt) {
        case 0:
          return "success";
        case 1:
          return "info";
        case 2:
          return "warning";
      }
    },
    deletes(index, row) {
      debugger;
      alert("删除");
    },
   
  },
  filters: {
    formStatus(jiaocunJkzt) {
      switch (jiaocunJkzt) {
        case 0:
          return "待上报";
        case 1:
          return "已上报";
        case 2:
          return "已入账";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.tjrwry {
  padding: $pm;
}
</style>
