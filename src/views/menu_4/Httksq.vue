<template>
  <div class="httksq">
   
      <TitleTable
        title="已撤备案未解除监管的合同列表">
        <div slot="controls">
         <div class="controls" style="background-color:#fdf6ec">
           <el-alert
            type="warning"
            center
            :closable="false">
        <span style="margin-left:100px">买受人:</span><el-input size="mini" v-model="person" placeholder="按买受人搜索" style="width:200px;margin-right:100px;" />
        <span>证件号码:</span><el-input size="mini" v-model="certificate" placeholder="按证件号码搜索" style="width:200px;margin-right:100px"/>
        <span>备案号:</span><el-input size="mini" v-model="code" placeholder="按备案号搜索" style="width:200px;margin-right:100px"/>
        <el-button size="mini" type="success" @click="search">搜索</el-button>
           </el-alert>
        <div class="controls">
            <el-alert
            type="warning"
            center
            :closable="false">
            <span class="warning" style="color: red">注意：已经备案的房间必须是撤销完合同后才能退款！</span>
          </el-alert>
        </div>
        </div>
      </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
           
          <el-table-column
            label="备案号"
            prop="jiaocunHtbah">
          </el-table-column>
          <el-table-column
            label="买受人"
            prop="jiaocunMsrxm">
          </el-table-column>
          <el-table-column
            label="证件号码"
            prop="jiaocunMsrzjhm">
          </el-table-column>
          <el-table-column
            label="项目名称"
            prop="xmmc">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="jiaocunLdmc">
            <!-- 栋号 -->
          </el-table-column>
          <el-table-column
            label="房号"
            prop="jiaocunFh">
          </el-table-column>
          <el-table-column
            label="变更时间"
            prop="htBgsj">
          </el-table-column>
          <el-table-column
            align="center"
            label="变更原因"
            prop="htBgyy">           
          </el-table-column>
         <el-table-column
            align="center"
            label="纳入监管资金"
            prop="jkje">           
          </el-table-column>
         
          <el-table-column
            align="center"
            label="操作"
          >
           
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleWithdraw(scope.$index, scope.row)">申请退款
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
          <HttksqDialog
            ref="dialog"
            :dialog-type="dialogType"
            :jiaocunHtbh="jiaocunHtbh"
            :jiaocunHtbah="jiaocunHtbah"
            :jiaocunMsrxm="jiaocunMsrxm"
            :jiaocunMsrzjhm="jiaocunMsrzjhm"
            :jiaocunLdmc="jiaocunLdmc"
            :jiaocunFh="jiaocunFh"
            :jkje="jkje"
            :gfze="gfze"
            :jiaocunYhzh="jiaocunYhzh"
            :jiaocunKhyy="jiaocunKhyy"
            :ldbh="ldbh"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
  
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import HttksqDialog from "@/views/menu_4/HttksqDialog";
  import {httksqApi} from "@/api/menu_4/httksq";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "httksq",
    mixins: [mixins.dialogMixin],
    components: { TitleTable, ContainerTwoType,HttksqDialog},
    data() {
      return{
       
        tableData: [
          {id:1}
        ],
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        person:"",
        certificate:"",
        code:"",
        jiaocunHtbh:"",
        jiaocunHtbah:"",
        jiaocunMsrxm:"",
        jiaocunMsrzjhm:"",
        jiaocunLdmc:"",
        jiaocunFh:"",
        jkje:0,
        gfze:0,
        jiaocunYhzh:"",
        jiaocunKhyy:"",
        ldbh:"",
      }
    },
    created() {
      this.fetchData();
    },
    methods:{
       fetchData(){
         httksqApi.getAllContract(this.currentPage,this.pageSize,this.$store.state.rwbh).then(ret=>{
           
           this.tableData = ret.data;
           this.total=ret.total;
           this.pages=ret.data.pages;
          });
      },
      searchData(arg1,arg2,arg3){
        //  httksqApi.getContractBySearch(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh,arg1,arg2,arg3).then(ret=>{
        //   this.tableData = ret.data.records
        //   });
      },
     search(){
       searchData(this.person,this.certificate,this.code);
     },
      handleWithdraw(){
        this.dialogVisible=true;
        this.dialogTitle="添加退款申请";
        this.dialogType=1;
        this.jiaocunHtbh=this.currentRow.jiaocunHtbh;
        this.jiaocunHtbah=this.currentRow.jiaocunHtbah;
        this.jiaocunMsrxm=this.currentRow.jiaocunMsrxm;
        this.jiaocunMsrzjhm=this.currentRow.jiaocunMsrzjhm;
        this.jiaocunLdmc=this.currentRow.jiaocunLdmc;
        this.jiaocunFh=this.currentRow.jiaocunFh;
        this.jkje=this.currentRow.jkje;
        this.gfze=this.currentRow.gfze;
        this.jiaocunYhzh=this.currentRow.jiaocunYhzh;
        this.jiaocunKhyy=this.currentRow.jiaocunKhyy;
        this.ldbh=this.currentRow.ldbh;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1);
        })
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
        this.fetchData;
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
