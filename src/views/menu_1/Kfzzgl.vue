<template>
  <div class="root">
    <div class="add">
      <span>开发资质申请记录管理</span> <el-button size="mini" type="primary" @click="addClick">添加开发资质申请</el-button>
    </div>
    <div class="tableWrapper">
      <el-table
        @cell-mouse-enter="cellMouseEnter"
        :data="tableData"
        :stripe="true"
        border
      >
        <el-table-column
          align="center"
          label="ID序号"
          prop="cqxzId">
        </el-table-column>
        <el-table-column
          align="center"
          label="申报等级"
          prop="cqxzName">
        </el-table-column>
        <el-table-column
          align="center"
          label="申报事项"
          prop="cqxzPx">
        </el-table-column>
        <el-table-column
         align="center"
          label="申报意见"
          prop="cqxzRkztN">          
        </el-table-column>
        <el-table-column
         align="center"
          label="申报日期"
          prop="cqxzRkztN">          
        </el-table-column>
        <el-table-column
         align="center"
          label="资质证号"
          prop="cqxzRkztN">          
        </el-table-column>
        <el-table-column
         align="center"
          label="审核流程"
          prop="cqxzRkztN">          
        </el-table-column>
         <el-table-column
          align="center" label="操作"
           width="250">
          
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleGetFile(scope.$index, scope.row)"
            >确认收件
            </el-button>
            <el-button
              size="mini"
              @click="handleManageFile(scope.$index, scope.row)"
              >管理收件
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDeleteFile(scope.$index, scope.row)"
              >清除收件
            </el-button>
            
          </template>
        </el-table-column>
        <el-table-column
          align="center" label="操作"
           width="250">
          
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)"
             >修改
            </el-button>
            <el-button
              size="mini"
              @click="handleRecord(scope.$index, scope.row)"
             >入库
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
            <el-button
              size="mini"
              @click="handleUpdate(scope.$index, scope.row)"
              >更正
            </el-button>
            <!-- <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)"
              v-if="scope.row.cqxzRkzt==1">详情
            </el-button> -->
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
        :title="title"
        center
        width="800px"
        
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <KfzzglDialog
          :dialogType="dialogType"
          ref="dialog"
          @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </div>
  </div>
</template>
<script>
import KfzzglDialog from "@/views/menu_1/KfzzglDialog";
import {mixins} from "@/utils/mixins";
import {kfzzglApi} from "@/api/menu_1/kfzzgl";
 export default {
     name:"Kfzzgl",
     components:{KfzzglDialog},
     mixins: [mixins.dialogMixin],
     data(){
         return{
             title:"",
             dialogVisible:false,
             currentPage:1,
             pageSize:10,
             total:0,
             pages:1,
             dialogType:1,
             currentRow: null,
             tableData:[
                
             ],
         }
     },
     created(){
         this.fetchData();
     },
    methods:{
        fetchData(){
           tjcqxzApi.getAllCqxz(this.currentPage,this.pageSize).then(ret=>{
            this.pages=ret.data.pages;
            this.total=ret.data.total;
            this.tableData=ret.data.records;
             
          })
        },
        addClick(){
            this.title="添加开发资质申请";
            this.dialogVisible=true;
            this.dialogType=1;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(1,this.currentRow.cqxzId)
            });
        },
        handleEdit(){
            this.title="修改产权性质"
            this.dialogVisible=true;
            this.dialogType=2;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(2,this.currentRow.cqxzId)
            });
            
        },
         handleUpdate(){
            this.title="更正产权性质"
            this.dialogVisible=true;
            this.dialogType=3;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(3,this.currentRow.cqxzId)
            });
            
        },
         
         handleRecord(){
        this.$confirm('确定要入库该产权性质吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
          tjcqxzApi.confirmCqxz(this.currentRow.cqxzId).then(ret=>{
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
        
      handleDelete(){
        this.$confirm('确定要删除该产权性质吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           tjcqxzApi.deleteCqxz(this.currentRow.cqxzId).then(ret=>{
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
       handleGetFile(){

       },
        handleManageFile(){

       },
        handleDeleteFile(){

       },
        submitSuccess(){
            this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
            this.dialogVisible=false;
            this.fetchData();
        },
        
        cellMouseEnter(row) {
        this.currentRow = row;
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


<style  scoped lang="scss">
 .root{
    .add{
      text-align: center;
      padding: 10px 0;
      span{
        color: var(--brand);
        font-weight: 600;
        letter-spacing: 1.5em;
      }
    }
    .tableWrapper{
      max-width: 1280px;
      margin: 0 auto;
    }
  }
</style>