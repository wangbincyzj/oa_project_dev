<template>
  <div class="sqsfxy">
    <ContainerTwoType
      class="container"
      :nav-info="navInfo"
      @liClick="liClick"
    >

      <TitleTable
        title="账户对应监管协议列表">
        <div slot="controls">
          <el-alert
            type="warning"
            center
            :closable="false">
            <div class="controls">
              <span class="warning" v-if="selectedIndex">当前选择 【{{selectedIndex.name}}】</span>
              <span class="warning" v-else>首先点击左边对应的监管账号，然后再点“添加合同”	</span>
              <el-button :disabled="selectedIndex===0" @click="addClick" icon="el-icon-plus" size="mini" type="primary">添加合同</el-button>
            </div>
          </el-alert>
          <el-alert
            type="warning"
            center
            :closable="false">
            <span class="warning" style="color: red">注意：资金监管账户审核通过才能申请“资金监管三方协议”</span>
          </el-alert>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="序号"
            width=50
            prop="hetongId">
          </el-table-column>
          <el-table-column
            label="银行名称"
            width=100
            prop="hetongYhmc">
          </el-table-column>
          <el-table-column
            label="企业名称"
            width=100
            prop="hetongKfsmc">
          </el-table-column>
          <el-table-column
            label="监管账户"
            width=100
            prop="hetongZhmc">
          </el-table-column>
          <el-table-column
            label="项目名称"
            width=100
            prop="hetongXmmc">
          </el-table-column>
          <el-table-column
            align="center"
            label="状态"
            width=80
            prop="hetongLczt">
          </el-table-column>
          <el-table-column
            align="center"
            label="收件操作"
            width=280
            prop="operation">
            <template slot-scope="scope" >
              <el-button
                size="mini"
                type="primary"
                @click="handleGetFile(scope.$index, scope.row)">收件
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelFile(scope.$index, scope.row)">清除
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handlePrintFile(scope.$index, scope.row)">打印收件
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
                type="primary"
                @click="handleUpdate(scope.$index, scope.row)">修改
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="loadPic(scope.$index, scope.row)">传图
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="managePic(scope.$index, scope.row)">管图
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleInform(scope.$index, scope.row)">上报
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handlePrint(scope.$index, scope.row)">查看合同
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
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import SqsfxyDialog from "@/views/menu_4/SqsfxyDialog";
  import {sqsfxyApi} from "@/api/menu_4/sqsfxy";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "sqsfxy",
    mixins: [mixins.dialogMixin],
    components: {SqsfxyDialog, TitleTable, ContainerTwoType},
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
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 1,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        selectedIndex: 0,
        zjjgzhId:"",
        zjjgzhZhmc:"",
        zjjgzhGsmc:"",
        zjjgzhYhmc:"",
        zjjgzhXmmc:"",
        kfsId:"",
        hetongYwzh:"",
        zjjgzhYhzh:"",
        xmxxXmbh:"",


      }
    },

    created() {
      this.fetchNavInfo();
      //this.fetchData();
    },
    methods:{
      fetchNavInfo() {
        this.xmxxXmbh=this.$store.state.projectData.xmxxXmbh;
        console.log("taetae");
        console.log(this.$store.state.projectData);

        console.log(this.$store.state.projectData.xmxxXmbh);
        sqsfxyApi.getYshAccount(1, 100,this.xmxxXmbh,).then(ret => {
          this.navInfo.list = ret.data.records.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh
          }));
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
      },

      fetchDataByAccountId(id){

        sqsfxyApi.getContractByAccount(this.currentPage, this.pageSize,this.kfsId,id).then(ret => {
          console.log(ret);
          console.log("where is my ...");

          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
          this.tableData.map(function (val) {
            if (val.hetongLczt == 0) {
              val.hetongLczt = '受理'
            } else if (val.hetongLczt == 1) {
              val.hetongLczt = '上报'
            } else if (val.hetongLczt == 2) {
              val.hetongLczt = '初审'
            } else if (val.hetongLczt == 3) {
              val.hetongLczt = '复审'
            } else if (val.hetongLczt == 4) {
              val.hetongLczt = '终审'
            } else if (val.hetongLczt == 5) {
              val.hetongLczt = '已终审'
            }  else if (val.hetongLczt == 6) {
              val.hetongLczt = '退件'
            }
          })
        })
      },
      liClick(index) {
        this.selectedIndex = index;
        console.log("index:"+index);
        console.log(this.$store.state.projectData.xmxxXmbh);

        this.selectedIndex = this.navInfo.list[index];
        this.zjjgzhId=this.navInfo.list[index].id;
        this.zjjgzhZhmc=this.navInfo.list[index].zjjgzhZhmc;
        this.zjjgzhGsmc=this.navInfo.list[index].zjjgzhGsmc;
        this.zjjgzhYhmc=this.navInfo.list[index].zjjgzhYhmc;
        this.zjjgzhXmmc=this.navInfo.list[index].zjjgzhXmmc;
        this.zjjgzhYhzh=this.navInfo.list[index].zjjgzhYhzh;
        this.kfsId=this.navInfo.list[index].kfsId;
        console.log(this.zjjgzhId);
        console.log(this.zjjgzhZhmc);
        console.log(this.zjjgzhGsmc);
        console.log(this.zjjgzhYhmc);
        this.fetchDataByAccountId(this.zjjgzhYhzh);
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
