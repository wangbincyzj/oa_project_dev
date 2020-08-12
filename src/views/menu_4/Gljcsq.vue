<template>
  <div class="gljcsq">
   
      <TitleTable
        title="资金监管解除管理">
         <template #controls>
          <ButtonsArea :row="row" @cancel="setCurrent">
             <el-button
                size="mini"
                type="primary"
                @click="handleGetFile(row)">确认收件
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleManageFile(row)">管理收件
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(row)"
                :disabled="row.jczjjgShzt!==0&&row.jczjjgShzt!==3">编辑
              </el-button>
              <el-button
                size="mini"                
                type="primary"
                @click="handleDelete(row)"
                :disabled="row.jczjjgShzt!==0&&row.jczjjgShzt!==3">删除
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(row)"
                :disabled="row.jczjjgShzt!==0&&row.jczjjgShzt!==3">上报
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(row)">详情
              </el-button>

          </ButtonsArea>
        </template>
        
        <el-table
          :data="tableData"
          size="mini"
          ref="table"
          highlight-current-row
           @current-change="handleCurrentChange"
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
          
          <!-- <el-table-column
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
          </el-table-column> -->
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
  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
  import Why from "@/components/common/why/Why";

  export default {
    name: "gljcsq",
    mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
    components: { TitleTable, ContainerTwoType,GljcsqDialog,ButtonsArea,Why},
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
           this.total=ret.data.total;
          this.pages=ret.data.pages;
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
     
     handleUpdate(row){
        this.dialogVisible = true;
        this.dialogTitle = "修改解除监管申请";
        this.dialogType = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,rRow.jczjjgId)
        })
     },
     
    handleDelete(row){
        this.$confirm('确定要删除该解除监管申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
            gljcsqApi.deleteSq(row.jczjjgId).then(ret=>{
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
       handleInform(row){
        this.$confirm('确定要上报该解除监管申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
             gljcsqApi.informSq(row.jczjjgId).then(ret=>{
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
      handleDetail(row){
        this.dialogVisible = true;
        this.dialogTitle = "解除监管申请详情";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2,row.jczjjgId,row.logId,row.jcjzjgYwzh)
        })
      },
      handleGetFile( row){
         this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.jcjzjgYwzh=row.jcjzjgYwzh;
        console.log("jcjzjgYwzh="+this.jcjzjgYwzh);
        
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, row.jczjjgId,0,row.jcjzjgYwzh);
        })
      },
      handleManageFile( row) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
         this.jcjzjgYwzh=row.jcjzjgYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, row.jczjjgId,0,row.jcjzjgYwzh);
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
