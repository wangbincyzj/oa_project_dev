<template>
  <div class="sqjgzh">
   
      <TitleTable
        title="项目对应监管账户列表">
        
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="序号"
            type="index">
          </el-table-column>
          <el-table-column
            label="公司名称"
            prop="zjjgzhGsmc">
          </el-table-column>
          <el-table-column
            label="监管银行"
            prop="zjjgzhYhmc">
          </el-table-column>
          <el-table-column
            label="监管账户名称"
            prop="zjjgzhZhmc">
          </el-table-column>
          <el-table-column
            label="监管账号"
            prop="zjjgzhId">
          </el-table-column>
          <el-table-column
            align="center"
            label="开户日期"
            prop="zjjgzhAddtime">           
          </el-table-column>
          <el-table-column
            align="center"
            label="流程"
            prop="zjjgzhLczt">           
          </el-table-column>
         
          <el-table-column
            align="center"
            label="操作"
          >
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handlePrint(scope.$index, scope.row)">打印通知单
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
          <DykhtzdDialog
            ref="dialog"
            :dialog-type="dialogType"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
  </div> 
</template>

<!--<template>
<div id="exportPdf" ref="exportPdf" >

　　　　　　<p>明月照于山间</p>

　　　　　　<p>清风来于江上 </p>

　　　　</div>

　　　　<button @click="handlePrint">打印</button>      
</template>-->
<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import DykhtzdDialog from "@/views/menu_4/DykhtzdDialog";
 
   import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "sqjgzh",
    mixins: [mixins.dialogMixin],
    components: {DykhtzdDialog, TitleTable, ContainerTwoType},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
             { id:1,name:"别问"},
             { id:2,name:"问就是不知道"},
          ]
        },
        tableData: [
          {id:1,companyName:"company",bank:"中国工商银行",jgzhName:"监管",jgObject:"object",date:"去年",step:"初审"}
        ],
        search: "",
        currentRow:"",
        dialogVisible: false,
        currentPage:1,
        pageSize:10,
        total:20,
        pages:1,
        dialogTitle: "",
        dialogType: 0,
        selectedIndex: 0,        
        xmxxXmbh:"",
        xmxxid:"",
        zjjgzhId:"",
      }
    },
    created() {
      this.fetchNavInfo();
      this.fetchData();
    },
    methods:{
      fetchNavInfo() {
        this.navInfo.loading = true;
        sqjgzhApi.getProject(this.$store.state.rwbh).then(ret=>{
           this.navInfo.list = ret.data.records.map(item=>({
            ...item, id: item.xmxxXmbh, name: item.xmxxXmmc
          }));
          this.navInfo.list.unshift({id:0, name: "请选择项目名称"});
        })
         
      },
      fetchDataByxmId(id){
       
       sqjgzhApi.getAccountById(this.currentPage, this.pageSize,id).then(ret => {
         console.log(ret);
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
        })
     },
      fetchData(){
        console.log(this.$store.state.projectData.xmxxXmbh);
        
       sqjgzhApi.getYkhAccount(this.currentPage, this.pageSize,this.$store.state.projectData.xmxxXmbh,5).then(ret => {
         //console.log(ret);
         
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function (val) {
              if (val.zjjgzhLczt == 0) {
                val.zjjgzhLczt = '收件'
              } else if (val.zjjgzhLczt == 1) {
                val.zjjgzhLczt = '上报'
              } else if (val.zjjgzhLczt == 2) {
                val.zjjgzhLczt = '初审'
              } else if (val.zjjgzhLczt == 3) {
                val.zjjgzhLczt = '复审'
              } else if (val.zjjgzhLczt == 4) {
                val.zjjgzhLczt = '终审'
              } else if (val.zjjgzhLczt == 5) {
                val.zjjgzhLczt = '已开户'
              }  else if (val.zjjgzhLczt == 6) {
                val.zjjgzhLczt = '退件'
              }     
            })
          
        })
     },
    
      
      handleDetail(index, row){
        console.log(this.currentRow.zjjgzhId);
        
        this.dialogVisible = true;
        this.dialogTitle = "开户详情";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, this.currentRow.zjjgzhId);
          this.$refs.dialog.reset();
        })
      },
      handlePrint(){
        this.$PDFSave(this.$refs.exportPdf, "我的文件");

      },
      submitSuccess() {
         this.$nextTick(()=>{
                //this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
      },
      cellMouseEnter(row) {
        this.currentRow = row;
      },
      currentChange(num) {
         this.currentPage = num;
         if(this.selectedIndex===0)
         {this.fetchData();}
         else{
           this.fetchDataById(this.xmxxXmbh)
         }
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
