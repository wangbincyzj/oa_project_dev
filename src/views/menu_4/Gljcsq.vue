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
            prop="jczjjgShzt">
          </el-table-column>
          
          <el-table-column
            align="center"
            label="收件操作"
          >           
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="GetFile(scope.$index, scope.row)">收件
              </el-button>
              <el-button
                size="mini"
                @click="DelFile(scope.$index, scope.row)">清除
              </el-button>
              <el-button
                size="mini"
                @click="PrintFile(scope.$index, scope.row)">打印收件
              </el-button>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleUpdate(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0">编辑
              </el-button>
              <el-button
                size="mini"
                @click="uploadPic(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0">传图
              </el-button>
              <el-button
                size="mini"
                @click="managePic(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0">管图
              </el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0">删除
              </el-button>
               <el-button
                size="mini"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.jczjjgShzt!==0">上报
              </el-button>

              <el-button
                size="mini"
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
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <GljcsqDialog
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
