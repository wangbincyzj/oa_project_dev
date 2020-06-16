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
            prop="id">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="htId">
          </el-table-column>
          <el-table-column
            label="申请金额"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="申请类型"
            prop="itemName">
          </el-table-column>
          <el-table-column
            label="申报日期"
            prop="ldName">
          </el-table-column>
          <el-table-column
            label="划拨用户"
            prop="phone">
          </el-table-column>
          <el-table-column
            align="center"
            label="划拨账号"
            prop="status">           
          </el-table-column>
         <el-table-column
            align="center"
            label="审核状态"
            prop="status">           
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
                @click="handleUpdate(scope.$index, scope.row)">编辑
              </el-button>
              <el-button
                size="mini"
                @click="uploadPic(scope.$index, scope.row)">传图
              </el-button>
              <el-button
                size="mini"
                @click="managePic(scope.$index, scope.row)">管图
              </el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
               <el-button
                size="mini"
                @click="handleInform(scope.$index, scope.row)">上报
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
 
  //import {tjrwyhApi} from "@/api/menu_4/tjrwyh";
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
    },
    methods:{
     
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
          this.$refs.dialog.setMode(1,this.currentRow.id)
        })
      },
      handleDelete(index,row){},
      handleInform(index,row){},
      handleDetail(index,row){},

      printPaper(index,row){},
      managePic(index,row){},
      uploadPic(index,row){},

      submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
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
