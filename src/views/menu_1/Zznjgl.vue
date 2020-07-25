<template>
  <div class="root">
    <div class="add">
      <span>年检记录管理</span> <el-button size="mini" type="primary" @click="addClick">添加记录</el-button>
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
          label="记录ID号"
          prop="nianjianId">
        </el-table-column>
        <el-table-column
          align="center"
          label="资质等级"
          prop="nianjianZzdj">
        </el-table-column>
        <el-table-column
          align="center"
          label="资质证号"
          prop="zizhiZzzh">
        </el-table-column>
        <el-table-column
         align="center"
          label="批准时间"
          prop="nianjianPzkssj">          
        </el-table-column>
        <el-table-column
         align="center"
          label="到期时间"
          prop="nianjianPzjssj">          
        </el-table-column>        
        <el-table-column
         align="center"
          label="审核状态"
          prop="">          
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
              @click="handleInform(scope.$index, scope.row)"
             >上报
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除
            </el-button>
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)"
              >详情
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
        <ZznjglDialog
          :dialogType="dialogType"
          ref="dialog"
          @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </div>
  </div>
</template>
<script>
import ZznjglDialog from "@/views/menu_1/ZznjglDialog";
import {mixins} from "@/utils/mixins";
import {zznjglApi} from "@/api/menu_1/zznjgl";
 export default {
     name:"zznjgl",
     components:{ZznjglDialog},
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
           zznjglApi.getInspection(this.currentPage,this.pageSize,this.$store.state.projectData.kfsId).then(ret=>{
            this.pages=ret.data.pages;
            this.total=ret.data.total;
            this.tableData=ret.data.records;
            
             
          })
        },
        addClick(){
            this.title="添加资质年检申请";
            this.dialogVisible=true;
            this.dialogType=1;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(1,)
            });
        },
        handleEdit(){
            this.title="修改资质年检申请"
            this.dialogVisible=true;
            this.dialogType=2;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(2,this.currentRow.nianjianId)
            });
            
        },
         
         
         handleInform(){
        this.$confirm('确定要上报该资质年检申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
          zznjglApi.confirmQualication(this.currentRow.nianjianId).then(ret=>{
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
        this.$confirm('确定要删除该资质年检申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           zznjglApi.deleteInspection(this.currentRow.nianjianId).then(ret=>{
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