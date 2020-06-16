<template>
  <div class="ldzjxx">
     <ContainerTwoType
      class="container"
      :nav-info="navInfo"
      @liClick="liClick"
    >
   
      <TitleTable
        title="对应的缴款列表"
        style="height:50%;overflow-y:scroll;">
       <div class="controls" style="background-color:#fdf6ec;width:100%;margin:0 auto">
        <span>买受人:</span><el-input  v-model="person" size="mini" placeholder="按买受人搜索" style="width:200px;" />
        <span>开始时间:</span> <el-date-picker v-model="startTime1" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
        <span>结束时间:</span><el-date-picker v-model="endTime1" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
        <el-button size="mini" type="success" @click="search">查找</el-button>
        <el-button size="mini" type="success" @click="handlePrint">打印明细</el-button>
       </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="买受人"
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="证件号码"
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="项目名称"
            prop="hetongKfsmc">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="hetongZhmc">
          </el-table-column>
          <el-table-column
            label="房号"
            prop="hetongXmmc">
          </el-table-column>
          <el-table-column
            align="center"
            label="建筑面积"
            prop="hetongLczt">           
          </el-table-column>
          <el-table-column
            align="center"
            label="缴款金额"
            prop="hetongLczt">           
          </el-table-column><el-table-column
            align="center"
            label="缴款说明"
            prop="hetongLczt">           
          </el-table-column><el-table-column
            align="center"
            label="缴款日期"
            prop="hetongLczt">           
          </el-table-column>
          
        </el-table>
        <!-- <el-pagination
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
          <SqsfxyDialog
            ref="dialog"
            :dialog-type="dialogType"
            :zjjgzhId="zjjgzhId"
            :zjjgzhYhzh="zjjgzhYhzh"
            :zjjgzhZhmc="zjjgzhZhmc"
            :zjjgzhGsmc="zjjgzhGsmc"
            :zjjgzhYhmc="zjjgzhYhmc"
            :zjjgzhXmmc="zjjgzhXmmc"
            :kfsId="kfsId"
            :hetongYwzh="hetongYwzh"
            @submitSuccess="submitSuccess"
          />
        </el-dialog> -->
      </TitleTable>

       <TitleTable
        title="对应的使用信息"
        style="height:50%;overflow-y:scroll;">
       <div class="controls" style="background-color:#fdf6ec;width:100%">
        <span style="margin-left:100px">开始时间:</span> <el-date-picker v-model="startTime2" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
        <span>结束时间:</span><el-date-picker v-model="endTime2" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
        <el-button size="mini" type="success" @click="search">查找</el-button>
        <el-button size="mini" type="success" @click="handlePrint">打印明细</el-button>
       </div>
        <el-table
          :data="tableData1"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="申报金额"
            align="center"
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="划出帐号"
            align="center"
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="发放日期"
            align="center"
            prop="hetongKfsmc">
          </el-table-column>
         
        </el-table>
      </TitleTable>

       <el-table
          :data="tableData2"
          style="width:100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="缴款总金额"
            align="center"
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="使用总金额"
            align="center"
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="账户总金额"
            align="center"
            prop="hetongKfsmc">
          </el-table-column>
         
        </el-table>
      </ContainerTwoType>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
 import {ldzjxxApi} from "@/api/menu_4/ldzjxx";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "ldzjxx",
    mixins: [mixins.dialogMixin],
    components: {TitleTable, ContainerTwoType},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
            //  { id:1,name:"别问"},
            //  { id:2,name:"问就是不知道"},
          ]
        },
        tableData: [
        ],
        tableData1: [
        ],
        tableData2: [
        ],
        person:"",
        startTime1:"",
        endTime1:"",
        startTime2:"",
        endTime2:"",
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 1,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        selectedIndex: 0,
        xmxxXmbh:"",
        ldxxLdbh:"",
        ldxxMc:"",



      }
    },
    
    created() {
      this.fetchNavInfo();
      //this.fetchData();
    },
    methods:{
      fetchNavInfo() {
      this.xmxxXmbh=this.$store.state.projectData.xmxxXmbh;
      
        ldzjxxApi.getBuildingByXmbh(this.xmxxXmbh).then(ret => {
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.ldxxLdbh, name: item.ldxxMc
          }));
          this.navInfo.list.unshift({id:-1, name: "请选择楼栋"});
        })
      },
     
     fetchDataByAccountId(id){
       
       ldzjxxApi.getContractByAccount(this.currentPage, this.pageSize,this.kfsId,id).then(ret => {
         console.log(ret);
         console.log("where is my ...");
         
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function (val) {
             
            })
        })
     },
      liClick(index) {
        this.selectedIndex = index;
        console.log("index:"+index);
        console.log(this.$store.state.projectData.xmxxXmbh);
        
         this.selectedIndex = this.navInfo.list[index];
         this.ldxxLdbh=this.navInfo.list[index].id;
         this.ldxxMc=this.navInfo.list[index].name;
         //this.kfsId=this.navInfo.list[index].kfsId;
         //this.fetchDataByAccountId(this.ldxxLdbh);        
      },
      
      addClick() {
        this.dialogVisible = true;
        this.dialogTitle = "添加合同";
        this.dialogType = 1;
        //this.zjjgzhId=this.currentRow.zjjgzhId;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1,this.$store.state.projectData.xmxxId);
        })
      },
      handleUpdate(index,row){
        this.dialogVisible = true;
        this.dialogTitle = "修改合同";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2,this.currentRow.hetongId);
        })
      },
      handleDetail(index, row){
        this.dialogVisible = true;
        this.dialogTitle = "三方协议申请信息";
        this.dialogType = 3;
        this.hetongYwzh=this.currentRow.hetongYwzh;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, this.currentRow.hetongId);
          this.$refs.dialog.reset();
        })
      },
      handleInform(index, row){
          if(window.confirm("确定要上报该三方协议吗?")){
            sqsfxyApi.informContract(this.currentRow.hetongId).then(ret => {
              if (ret.code === 200) {
                this.$message.success("上报成功");
               this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      handleDelete(index, row){
          if(window.confirm("确定要删除该三方协议吗?")){
            sqsfxyApi.deleteContract(this.currentRow.hetongId).then(ret => {
              if (ret.code === 200) {
                this.$message.success("删除成功");
                this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      loadPic(){},
      managePic(){},
      handlePrint(index, row){
        
      },
      handleGetFile(index, row){
         this.dialogVisible = true;
        this.dialogTitle = "业务收件操作";
        this.hetongYwzh=this.currentRow.hetongYwzh;
        this.dialogType = 4;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, this.currentRow.hetongId);
        })
      },
      handleDelFile(){
        if(window.confirm("确定要清除收件吗?")){
            sqsfxyApi.deleteSj(this.currentRow.hetongYwzh).then(ret => {
              if (ret.code === 200) {
                this.$message.success("删除成功");
                this.fetchDataByAccountId(this.zjjgzhYhzh);
              } else {
                
                this.$message.error(ret.message)
              }
            })
          }
      },
      handlePrintFile(){},
      submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
            this.fetchDataByAccountId(this.zjjgzhYhzh);
        this.dialogVisible = false;
      },
       cellMouseEnter(row) {
        this.currentRow = row;
      },
      currentChange(num) {
         this.currentPage = num;         
           this.fetchDataByAccountId(this.zjjgzhYhzh)
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
