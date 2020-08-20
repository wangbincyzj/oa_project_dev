<template>
  <div class="root">
   
     <TitleTable
        title="开发资质申请记录管理">
      <template #addButton>       
        <el-button @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加开发资质申请</el-button>
      </template>
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
                :disabled="row.zizhiShzt!==0&&row.zizhiShzt!==3">编辑
              </el-button>
             
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(row)"
                :disabled="row.zizhiShzt!==0&&row.zizhiShzt!==3">删除
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(row)"
                :disabled="row.zizhiShzt!==0&&row.zizhiShzt!==3">上报
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(row)">详情
              </el-button>

              <!-- <el-button
                size="mini"
                type="primary"
                @click="handlePrint(0, row)" @mouseover.native="fetchPrintData(row)">打印申请单
              </el-button> -->
          </ButtonsArea>
        </template>
   
      <el-table
        @cell-mouse-enter="cellMouseEnter"
        :data="tableData"
        :stripe="true"
        size="mini"
        ref="table"
        highlight-current-row
        @current-change="handleCurrentChange"
      >
        <!-- <el-table-column
          align="center"
          label="ID序号"
          prop="zizhiId">
        </el-table-column> -->
        <el-table-column
          align="center"
          label="申报等级"
          prop="zizhiSbzzdj">
        </el-table-column>
        <el-table-column
          align="center"
          label="申报事项"
          prop="zizhiSbsxN">
        </el-table-column>
        <el-table-column
         align="center"
          label="申报意见"
          prop="zizhiSbyjxx">          
        </el-table-column>
        <el-table-column
         align="center"
          label="申报日期"
          prop="zizhiAddtime">          
        </el-table-column>
        <el-table-column
         align="center"
          label="资质证号"
          prop="zizhiZzzh">          
        </el-table-column>
        <el-table-column
         align="center"
          label="审核流程"
          prop="zizhiLiucheng">          
        </el-table-column>
         <!-- <el-table-column
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
             :disabled="scope.row.zizhiShzt!==0">修改
            </el-button>
            <el-button
              size="mini"
              @click="handleInform(scope.$index, scope.row)"
             :disabled="scope.row.zizhiShzt!==0">上报
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              :disabled="scope.row.zizhiShzt!==0">删除
            </el-button>
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)"
              >详情
            </el-button> 
            
          </template>
        </el-table-column>-->
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
        width="1200px"
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
  </TitleTable>
  </div>
</template>
<script>
import KfzzglDialog from "@/views/menu_1/KfzzglDialog";
import {mixins} from "@/utils/mixins";
import {kfzzglApi} from "@/api/menu_1/kfzzgl";
import TitleTable from "@/components/current/titleTable/TitleTable";
import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
 export default {
     name:"Kfzzgl",
     components:{KfzzglDialog,ButtonsArea,TitleTable},
     mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
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
             zizhiYwzh:"",
             tableData:[
                
             ],
         }
     },
     created(){
         this.fetchData();
     },
    methods:{
        fetchData(){
           kfzzglApi.getQualification(this.currentPage,this.pageSize,this.$store.state.projectData.kfsId).then(ret=>{
            this.pages=ret.data.pages;
            this.total=ret.data.total;
            this.tableData=ret.data.records;
            this.tableData.forEach(function(val){
                if(val.zizhiSbsx===1){
                    val.zizhiSbsxN="开发资质申请"
                }else if(val.zizhiSbsx===2){
                    val.zizhiSbsxN="暂定资质申请"
                }
            })
             
          })
        },
        addClick(){
            this.title="添加开发资质申请";
            this.dialogVisible=true;
            this.dialogType=1;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(1,)
            });
        },
        handleUpdate(row){
            this.title="修改开发资质申请"
            this.dialogVisible=true;
            this.dialogType=2;
            this.$nextTick(()=>{
                this.$refs.dialog.setMode(2,row.zizhiId)
            });
            
        },
        
         
         handleInform(row){
        this.$confirm('确定要上报该开发资质申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
          kfzzglApi.confirmQualication(row.zizhiId).then(ret=>{
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
        
      handleDelete(row){
        this.$confirm('确定要删除该开发资质申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           kfzzglApi.deleteQualication(row.zizhiId).then(ret=>{
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
       handleGetFile(row){
         this.dialogVisible = true;
        this.title = "确认收件";
        this.zizhiYwzh=row.zizhiYwzh;
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, row.zizhiId,0,row.zizhiYwzh);
        })
      },
      handleManageFile(row) {
        this.dialogVisible = true;
        this.title = "管理收件";
         this.zizhiYwzh=row.zizhiYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, row.zizhiId,0,row.zizhiYwzh);
        })
      },
    handleDetail(row){
        this.title="开发资质详情";
        this.dialogType=3;
        this.dialogVisible=true;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3,row.zizhiId,row.logId,row.zizhiYwzh)
        })
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