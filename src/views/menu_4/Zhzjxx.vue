<template>
  <div class="httksq">
   
      <TitleTable
        :title="`【${this.$store.state.projectData.xmxxKfs}】监管资金汇总`" >
        <template #addButton>
         
          <el-button class="title-btn"  size="mini" type="primary"  @click="handlePrint" @mouseover.native = "getDate">打印明细</el-button>
        </template>
        <el-table
          :data="tableData"
          show-summary
          sum-text="汇总信息"
          :summary-method="getSummaries"
          style="width: 100%">
          
          <el-table-column
            label="账户名称"
            prop="zhmc">
          </el-table-column>
          <el-table-column
            label="监管账号"
            prop="jgzh">
          </el-table-column>
          <el-table-column
            label="缴存金额"
            prop="jkje">
          </el-table-column>
          <el-table-column
            label="使用金额"
            prop="sbje">
          </el-table-column>
          <el-table-column
            label="剩余金额"
            prop="syje">
          </el-table-column>
          
         
        </el-table>
        <!-- <el-pagination
          background
          layout="prev, pager, next, total"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total">
        </el-pagination> -->
      
      </TitleTable>
  <div id="printData" style="width:700px;margin:0 auto;display:none">
     
       <table style="width:700px;margin:0 auto;text-align:center;font-size:16px;text-height:25px" border="1" cellspacing="0"> 
            <thead>
                <th style="text-align:center" colspan="8">【{{this.xmxxKfs}}】截止到{{this.date}}期间的缴存记录</th>
                <tr>
                    <td>账户名称</td>
                    <td>监管账号</td>
                    <td>缴存金额</td>
                    <td>使用金额</td>
                    <td>剩余金额</td>
                </tr>
                
            </thead>
            <tbody>
               <tr v-for="(item, index) in tableData" :key="index" >
                    <th>{{item.zhmc}}</th>
                    <th>{{item.jgzh}}</th>
                    <th>{{item.jkje}}</th>
                    <th>{{item.sbje}}</th>
                    <th>{{item.syje}}</th>
                </tr>
            </tbody>
            <th style="text-align:center">汇总信息</th><th style="text-align:center" >{{this.rowNum}}</th>
            <th style="text-align:center" >{{this.amount1}}</th><th style="text-align:center" >{{this.amount2}}</th>
            <th style="text-align:center" >{{this.amount3}}</th>
      </table>
       </div>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {zhzjxxApi} from "@/api/menu_4/zhzjxx";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "zhzjxx",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType},
    data() {
      return{
       
        tableData: [
         
        ],
        search: "",
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        selectedIndex: 0,
        startTime:"",
        endTime:"",
        date:"",
       xmxxKfs:"",
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
      fetchData() {
        zhzjxxApi.getInfo(this.$store.state.projectData.xmxxXmbh).then(ret => {
         console.log(ret);
         console.log("where is my ...");
          this.tableData = ret.data;    
           this.rowNum=this.tableData.length;      
        })
        this.xmxxKfs=this.$store.state.projectData.xmxxKfs;
       
      },
       handlePrint(){
        let obj=document.getElementById('printData');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
     },
     getDate(){
       let myDate = new Date();
      this.date=myDate.toLocaleDateString();
     },
      getSummaries(param) {
        let { columns, data } = param;
        let sums = [];
        columns.forEach((column, index) => {            
          if (index === 0) {
            sums[index] = "汇总信息";
            return;
          }
          if (index === 1) {
             
            sums[index] = this.rowNum;
            return;
          }
          
        let values = data.map(item => Number(item[column.property]));  
          if (!values.every(value => isNaN(value))) {
            sums[index] = values.reduce((prev, curr) => {
              const value = Number(curr);
              if (!isNaN(value)) {
                return prev + curr;
              } else {
                return prev;
              }
            }, 0);
            sums[index] += "";
          } else {
            sums[index] = '';
          }
        });
        this.amount1=sums[2];
        this.amount2=sums[3];
        this.amount3=sums[4];
        
        return sums;
      },
      currentChange(num) {
        this.currentPage = num;
        this.fetchData()
      },
       cellMouseEnter(row) {
        this.currentRow = row;
      },
       submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
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
