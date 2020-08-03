<template>
  <div class="gljcsq">
   
      <TitleTable
        title="资金监管解除管理">
        
        <el-table
          :data="tableData"
           @cell-mouse-enter="cellMouseEnter"
           
          style="width: 100%">
          <el-table-column
            label="项目名称"
            prop="jczjjgXmmc">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="jczjjgLdmc">
          </el-table-column>
          <el-table-column
            label="监管余额"
            prop="jczjjgZmye">
          </el-table-column>
          <el-table-column
            label="不动产证号"
            prop="jczjjgDjzmh">
          </el-table-column>
          <el-table-column
            label="登记日期"
            prop="jczjjgDjrq">
          </el-table-column>
          <el-table-column
            label="审核状态"
            prop="jczjjgShztN">
          </el-table-column>
          
          <el-table-column
            align="center"
            label="收件操作"
            width="300px"
          >           
            <template slot-scope="scope">
               <el-button
                size="mini"
                type="primary"
                @click="handleGetFile(scope.$index, scope.row)">确认收件
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleManageFile(scope.$index, scope.row)">管理收件
              </el-button>
             
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"            
            width="300px"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0&&scope.row.jczjjgShzt!==3">编辑
              </el-button>
              <el-button
                size="mini"                
                type="primary"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0&&scope.row.jczjjgShzt!==3">删除
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0&&scope.row.jczjjgShzt!==3">上报
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>


            </template>
          </el-table-column>
        </el-table>
       <el-pagination
          background
          layout="sizes,prev, pager, next, total"
          @current-change="currentChange"
          @size-change="handleSizeChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[10, 20]"
          :total="total">
        </el-pagination>
        <el-dialog
          :title="dialogTitle"
          center
          width="800px"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <GljcsqDialog
            ref="dialog"
            :dialog-type="dialogType"
            :jcjzjgYwzh="jcjzjgYwzh"
            @submitSuccess="submitSuccess"

          />
        </el-dialog>
      </TitleTable>
  
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import GljcsqDialog from "@/views/menu_4/GljcsqDialog";
 
  import {gljcsqApi} from "@/api/menu_4/gljcsq";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "gljcsq",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType,GljcsqDialog},
    data() {
      return{
       
        tableData: [
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        selectedIndex: 0,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        jcjzjgYwzh:"",
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
     
       fetchData(){
         gljcsqApi.getAllApplication(this.currentPage,this.pageSize,this.$store.state.projectData.kfsRwbh).then(ret=>{
           this.tableData=ret.data.records;
          //  this.total=ret.records.total;
          //  this.pages=ret.records.pages;
          this.tableData.forEach(function(val){
            if(val.jczjjgShzt===0){
              val.jczjjgShztN="新建"
            }else if(val.jczjjgShzt===1){
              val.jczjjgShztN="审核中"
            }else if(val.jczjjgShzt===2){
              val.jczjjgShztN="审核通过"
            }else if(val.jczjjgShzt===3){
              val.jczjjgShztN="驳回"
            }
          })
         })

       },
     
     handleUpdate(){
        this.dialogVisible = true;
        this.dialogTitle = "修改解除监管申请";
        this.dialogType = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,this.currentRow.jczjjgId)
        })
     },
     
    handleDelete(){
        this.$confirm('确定要删除该解除监管申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
            gljcsqApi.deleteSq(this.currentRow.jczjjgId).then(ret=>{
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
        this.$confirm('确定要上报该解除监管申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
             gljcsqApi.informSq(this.currentRow.jczjjgId).then(ret=>{
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
      handleDetail(index,row){
        this.dialogVisible = true;
        this.dialogTitle = "解除监管申请详情";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2,this.currentRow.jczjjgId,row.logId,this.currentRow.jcjzjgYwzh)
        })
      },
      handleGetFile(index, row){
         this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.jcjzjgYwzh=this.currentRow.jcjzjgYwzh;
        console.log("jcjzjgYwzh="+this.jcjzjgYwzh);
        
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, this.currentRow.jczjjgId,0,this.currentRow.jcjzjgYwzh);
        })
      },
      handleManageFile(index, item) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
         this.jcjzjgYwzh=this.currentRow.jcjzjgYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, this.currentRow.jczjjgId,0,this.currentRow.jcjzjgYwzh);
        })
      },
     submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
        this.fetchData();
      },
      handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchData();
      },
       cellMouseEnter(row) {
        this.currentRow = row;
      },
         currentChange(num) {
         this.currentPage = num;
         this.fetchData()
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
