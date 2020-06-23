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
          prop="zjjgzhYhzh">
        </el-table-column>
        <el-table-column
          align="center"
          label="开户日期"
          prop="zjjgzhKhtime">
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
              @click="handlePrint(scope.$index, scope.row)">打印通知书
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
          :zjjgzhZhmc="zjjgzhZhmc"
          :zjjgzhYhzh="zjjgzhYhzh"
          :zjjgzhYwzh="zjjgzhYwzh"
          :zjjgzhWdmc="zjjgzhWdmc"
          :zjjgzhWddz="zjjgzhWddz"
          :zjjgzhKhrxm="zjjgzhKhrxm"
          :zjjgzhKhtime="zjjgzhKhtime"
          @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </TitleTable>
    <div id="print" style="width:700px;margin:0 auto;display:none">
      <div style="width:700px;margin:0 auto">
        <h1 style="text-align:center">新建商品房预售资金监管账户开户通知书</h1>
        <h2 style="margin-left:300px">受理编号：<span>{{zjjgzhYwzh}}</span></h2>
        <h2 style="text-indent:2em">{{zjjgzhYhmc}}：</h2>
        <h2 style="text-indent:2em">{{zjjgzhGsmc}}于{{zjjgzhKhtime}}申请{{zjjgzhZhmc}}项目的预售资金监管（监管编号为：{{zjjgzhJgbh}}），拟开户全名{{zjjgzhZhmc}}资金监管专户。经我局审查，该公司提供的材料符合开户条件，请贵单位办理预售资金监管账户的开设事宜。</h2>
        <h2 style="text-indent:2em">特此。</h2>
        <h2 style="margin-left:450px">房管交易所</h2>
        <h2 style="margin-left:450px">日期：{{date}}</h2>
      </div>
    </div>
  </div>
</template>

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
        zjjgzhYwzh:"",
        zjjgzhGsmc:"",
        zjjgzhYhmc:"",
        zjjgzhXmmc:"",
        zjjgzhYhzh:"",
        zjjgzhZhmc:"",
        zjjgzhJgbh:"",
        zjjgzhKhtime:"",
        date:"",
      }
    },
    created() {
      //this.fetchNavInfo();
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
        this.zjjgzhYwzh=this.currentRow.zjjgzhYwzh;
        this.zjjgzhYwzh = this.currentRow.zjjgzhYwzh;
        this.zjjgzhZhmc = this.currentRow.zjjgzhZhmc;
        this.zjjgzhYhzh = this.currentRow.zjjgzhYhzh;
        this.zjjgzhWdmc = this.currentRow.zjjgzhWdmc;
        this.zjjgzhWddz = this.currentRow.zjjgzhWddz;
        this.zjjgzhKhrxm = this.currentRow.zjjgzhKhrxm;
        this.zjjgzhKhtime = this.currentRow.zjjgzhKhtime;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, this.currentRow.zjjgzhId);
          this.$refs.dialog.reset();
        })
      },
      handlePrint(){
        let obj=document.getElementById('print');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
      },
      submitSuccess() {
        this.$nextTick(()=>{
          //this.$refs.dialog.reset();
        });
        this.dialogVisible = false;
      },
      cellMouseEnter(row) {
        this.currentRow = row;
        this.zjjgzhGsmc=this.currentRow.zjjgzhGsmc;
        this.zjjgzhYhmc=this.currentRow.zjjgzhYhmc;
        this.zjjgzhXmmc=this.currentRow.zjjgzhXmmc;
        this.zjjgzhYhzh=this.currentRow.zjjgzhYhzh;
        this.zjjgzhZhmc=this.currentRow.zjjgzhZhmc;
        this.zjjgzhYwzh=this.currentRow.zjjgzhYwzh;
        this.zjjgzhJgbh=this.currentRow.zjjgzhJgbh;
        this.zjjgzhKhtime=(this.currentRow.zjjgzhKhtime).slice(0,10);
        let myDate = new Date();
        this.date=myDate.toLocaleDateString();
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
