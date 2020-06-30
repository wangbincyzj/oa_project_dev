<template>
  <div class="gljgzj">
   
      <TitleTable
        title="资金申报管理">
        
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="项目名称"
            prop="shiyongXmmc">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="shiyongLdmc">
          </el-table-column>
          <el-table-column
            label="申请金额"
            prop="shiyongSbje">
          </el-table-column>
          <el-table-column
            label="申请类型"
            prop="shiyongSqsyfs">
          </el-table-column>
          <el-table-column
            label="申报日期"
            prop="shiyongAddtime">
          </el-table-column>
          <el-table-column
            label="划拨用户"
            prop="shiyongJgzhmc">
          </el-table-column>
          <el-table-column
            align="center"
            label="划拨账号"
            prop="shiyongJgzh">           
          </el-table-column>
         <el-table-column
            align="center"
            label="审核状态"
            prop="shiyongShzt">           
          </el-table-column>
          <el-table-column
            align="center"
            label="收件操作"
            width="150"
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
            width="250"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleUpdate(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">编辑
              </el-button>
              <el-button
                size="mini"
                @click="uploadPic(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">传图
              </el-button>
              <el-button
                size="mini"
                @click="managePic(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">管图
              </el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">删除
              </el-button>
               <el-button
                size="mini"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">上报
              </el-button>

              <el-button
                size="mini"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>

              <el-button
                size="mini"
                @click="printPaper(scope.$index, scope.row)">打印申请单
              </el-button>

            </template>
          </el-table-column>

        </el-table>
        <el-pagination
          background
          layout="prev, pager, next, total"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="pageSize"
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
          <GlsysbDialog
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
  import GlsysbDialog from "@/views/menu_4/GlsysbDialog";
  import {glsysbApi} from "@/api/menu_4/glsysb";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "glsysb",
    mixins: [mixins.dialogMixin],
    components: {GlsysbDialog, TitleTable, ContainerTwoType},
    data() {
      return{
       
        tableData: [
          {id:1},
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        authList: [],
        selectedIndex: 0,
        selectedIndex: null,
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
     fetchData(){
         glsysbApi.getAllSysb(this.currentPage,this.pageSize).then(ret=>{
           console.log(ret);
           
           this.tableData = ret.data.records;
           this.total=ret.total;
           this.pages=ret.data.pages;
           this.tableData.map(function (val) {
              if (val.shiyongSqsyfs == 0) {
                val.shiyongSqsyfs = '正常使用'
              } else if (val.shiyongSqsyfs == 1) {
                val.shiyongSqsyfs = '撤销合同退款'
              }     
            })

          });
      },
      GetFile(index,row){
        this.dialogVisible = true;
        this.dialogTitle = "业务收件操作";
        this.zjjgzhYwzh=this.currentRow.zjjgzhYwzh;
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, this.currentRow.zjjgzhId);
        })
      },
      DelFile(index,row){},
      PrintFile(index,row){},

      handleUpdate(index,row){
        this.dialogTitle="编辑申报使用";
        this.dialogType=1;
        this.dialogVisible=true;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,this.currentRow.shiyongId)
        })
      },
      
       handleDelete(){
        this.$confirm('确定要删除该使用申报吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           glsysbApi.delSysb(this.currentRow.shiyongId).then(ret=>{
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
        this.$confirm('确定要上报该使用申报吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           glsysbApi.informSysb(this.currentRow.shiyongId).then(ret=>{
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
      },

      printPaper(index,row){},
      managePic(index,row){},
      uploadPic(index,row){},

      submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
        this.fetchData();
      },
      currentChange(num) {
        this.currentPage = num;
        this.fetchData()
      },
       cellMouseEnter(row) {
        this.currentRow = row;
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
