<template>
  <div class="gljgzj">
   
      <TitleTable
        title="楼栋退款申请管理">
        <template #controls>
          <ButtonsArea :row="row" @cancel="setCurrent">
            <el-button
                size="mini"
                type="primary"
                @click="handleGetFile(0, row)">确认收件
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleManageFile(0, row)">管理收件
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(0,row)"
                :disabled="row.shiyongShzt!==0&&row.shiyongShzt!==3">编辑
              </el-button>
             
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(0, row)"
                :disabled="row.shiyongShzt!==0&&row.shiyongShzt!==3">删除
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(0, row)"
                :disabled="row.shiyongShzt!==0&&row.shiyongShzt!==3">上报
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(0, row)">详情
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handlePrint(0, row)" @mouseover.native="fetchPrintData(row)">打印申请单
              </el-button>
          </ButtonsArea>
        </template>
        
        <el-table
          :data="tableData"
          style="width: 100%"
          size="mini"
          ref="table"
          highlight-current-row
          @current-change="handleCurrentChange"
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
            prop="shiyongShztN">           
          </el-table-column>
          <!-- <el-table-column
            align="center"
            label="收件操作"
            width="200"
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
            width="250"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt!==0&&scope.row.shiyongShzt!==3">编辑
              </el-button>
             
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt!==0&&scope.row.shiyongShzt!==3">删除
              </el-button>
               <el-button
                size="mini"
                type="primary"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt!==0&&scope.row.shiyongShzt!==3">上报
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>

              <el-button
                size="mini"
                type="primary"
                @click="handlePrint(scope.$index, scope.row)" @mouseover.native="fetchPrintData(scope.row)">打印申请单
              </el-button>

            </template>
          </el-table-column> -->

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
          width="1200px"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <GlsysbDialog
            ref="dialog"
            :shiyongYwzh="shiyongYwzh"
            :dialog-type="dialogType"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
      <div style="width:700px;margin:0 auto;display:none;" id="printData">
          
         <table style="width:700px;table-layout:fixed;border-collapse: collapse;text-align:center;height:800px " border="2">
           <tr><td colspan="4"><p style="font-size:20px;width:320px;margin:0 auto">商品房预售资金监管拨付审核确认单</p></td></tr>
           <tr><td>开发企业</td><td>{{print.shiyongKfs}}</td><td>项目名称</td><td>{{print.shiyongXmmc}}</td></tr>
          <tr><td>本栋缴存总额</td><td>{{print.jkze}}</td><td>本栋使用总额</td><td>{{print.sbze}}</td></tr>
          <tr><td>本栋监管余额</td><td>{{print.syze}}</td><td>楼栋名称</td><td>{{print.shiyongLdmc}}</td></tr>
           <tr><td>监管银行</td><td>{{print.shiyongJgyhmc}}</td><td>监管账户</td><td>{{print.shiyongJgzh}}</td></tr>
           <tr><td>申请拨付方式</td><td>{{print.shiyongSqsyfsN}}</td><td>申请拨付金额</td><td>{{print.shiyongSbje}}</td></tr>
           <tr><td>退款合同编号</td><td>{{print.shiyongHtbh}}</td><td>合同监管金额</td><td>{{print.jgje}}</td></tr>
            <tr><td>申请拨付时间</td><td>{{print.shiyongSbsj}}</td><td>审核拨付时间</td><td>{{print.shiyongShsysj}}</td></tr>
            <tr><td>拨付确认码</td><td>{{print.shiyongBfqrm}}</td><td colspan="2" rowspan="5"></td></tr>
            <tr><td>划拨账户</td><td >{{print.shiyongHrzhmc}}</td></tr>
            <tr><td>划拨账号</td><td>{{print.shiyongHrzhzh}}</td></tr>
            <tr><td>开户银行</td><td>{{print.shiyongHrzhyh}}</td></tr>
            <tr><td >打印时间</td><td>{{this.date}}</td></tr>
         </table>
          </div>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import GlsysbDialog from "@/views/menu_4/GlsysbDialog";
  import {glsysbApi} from "@/api/menu_4/glsysb";
  import {mixins} from "@/utils/mixins";
  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";
  import Why from "@/components/common/why/Why";

  export default {
    name: "glsysb",
    mixins: [mixins.dialogMixin,mixins.myPagerMixin, mixins.tableMixin],
    components: {GlsysbDialog, TitleTable, ContainerTwoType,ButtonsArea,Why},
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
        selectedIndex: 0,
        date:"",
        print:{},
        shiyongYwzh:"",
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
     fetchData(){
         glsysbApi.getAllSysb(this.currentPage,this.pageSize,this.$store.state.rwbh).then(ret=>{
           this.tableData = ret.data.records;
           this.total=ret.total;
           this.pages=ret.data.pages;
           this.tableData.forEach(function (val) {
              if (val.shiyongSqsyfs == 0) {
                val.shiyongSqsyfs = '正常使用'
              } else if (val.shiyongSqsyfs == 1) {
                val.shiyongSqsyfs = '撤销合同退款'
              } 
              if(val.shiyongShzt===0){
                val.shiyongShztN="新建"
              }else if(val.shiyongShzt===1){
                val.shiyongShztN="审核中"
              }else if(val.shiyongShzt===2){
                val.shiyongShztN="审核通过"
              }else if(val.shiyongShzt===3){
                val.shiyongShztN="驳回"
              }
              
            })

          });
      },
     handleGetFile(index, row){
         this.dialogVisible = true;
        this.dialogTitle = "确认收件";
        this.shiyongYwzh=row.shiyongYwzh;
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, row.shiyongId,0,row.shiyongYwzh);
        })
      },
      handleManageFile(index, row) {
        this.dialogVisible = true;
        this.dialogTitle = "管理收件";
         this.shiyongYwzh=row.shiyongYwzh;
        this.dialogType = 9;
        this.$nextTick(() => {
          this.$refs.dialog.setMode(9, row.shiyongId,0,row.shiyongYwzh);
        })
      },

      handleUpdate(index,row){
        this.dialogTitle="编辑申报使用";
        this.dialogType=1;
        this.dialogVisible=true;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,row.shiyongId)
        })
      },
       handleDelete(index,row){
        this.$confirm('确定要删除该使用申报吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           glsysbApi.delSysb(row.shiyongId).then(ret=>{
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

      handleInform(index,row){
        this.$confirm('确定要上报该使用申报吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           glsysbApi.informSysb(row.shiyongId).then(ret=>{
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
        this.dialogTitle="申报使用详情";
        this.dialogType=2;
        this.dialogVisible=true;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2,row.shiyongId,row.logId,row.shiyongYwzh)
        })
      },
      fetchPrintData(row){
       this.getDate();
       glsysbApi.getBfdDetail(row.shiyongId).then(ret=>{
          this.print=ret.data;
          if(ret.data.shiyongSqsyfs===0){
            this.print.shiyongSqsyfsN="正常使用"
          }else if(ret.data.shiyongSqsyfs===1){
            this.print.shiyongSqsyfsN="合同退款"
          }
       })

     },   
      handlePrint(index,row){
       let obj=document.getElementById('printData');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
    },
    getDate(){
        let myDate=new Date();
        this.date=myDate.toLocaleDateString();
        console.log(this.date);
        
    },
     

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
