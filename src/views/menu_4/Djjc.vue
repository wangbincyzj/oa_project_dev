<template>
  <div class="FwdDjjc">
    <!-- 定金缴存1049906948-->
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金缴款">
        <div slot="controls">
          <el-alert type="warning" center :closable="false">
            <div class="controls">
              <el-button @click="addClick()" size="mini" type="primary">新增记录</el-button>
            </div>
          </el-alert>
        </div>
        <el-table :data="tableData" style="width: 100%" @cell-mouse-enter="cellMouseEnter">
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJkyh"></el-table-column>
          <el-table-column align="center" label="银行id" prop="djJkyhid"></el-table-column>
          <el-table-column align="center" label="缴款日期" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="操作" width="400px">
            <template slot-scope="scope">
              <!-- <el-button
                size="mini"
                :type="StatusColor(scope.row)"
                :disabled="!_enable(scope.row)"
                @click="report(scope.$index, scope.row)"
              >{{ scope.row.djJkzt | formStatus }}</el-button> -->
              <el-button size="mini"  @click="handleUpdate(scope.$index, scope.row)">修改</el-button>
              <el-button size="mini" @click="handleInform(scope.$index, scope.row)">上报</el-button>
              <el-button size="mini"  @click="handleDetail(scope.$index, scope.row)">详情</el-button>
              <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              <!-- <el-button size="mini" type="danger" @click="deletes(scope.$index, scope.row)">关联</el-button> -->
            </template>
          </el-table-column>
        </el-table>

        <el-pagination
          background
          layout="prev, pager, next, total"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :total="total"
        ></el-pagination>

        <el-dialog
          :title="dialogTitle"
          center
          width="800px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <DjjcDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import DjjcDialog from "@/views/menu_4/DjjcDialog";
import { mixins } from "@/utils/mixins";

import axios from "axios";
import { djjcApi } from "@/api/menu_4/djjc";

export default {
  name: "FwdDjjc",
  components: {TitleTable, ContainerTwoType, DjjcDialog},
  mixins: [mixins.dialogMixin],
  data() {
    return {
      currentPage: 1, //分页
      pageSize: 10,
      total: null,
      pages: null,
      tableData: [],
      dialogVisible: false,
      dialogType: 1,
      dialogTitle: "",
      navInfo: {
        title: "监管账户",
       
        list: []
      },
       selectedIndex: 0,
     djJkyhzh:"",
     zjjgzhId:0,
    };
  },
   created() {
    this.getNavInfo();
  },
  methods: {
    liClick(index) {
      this.selectedIndex = index;
      this.djJkyhzh=this.navInfo.list[index].name;
      this.zjjgzhId=this.navInfo.list[index].id;
      this.fetchData(this.djJkyhzh);
    },
    getNavInfo() {
      djjcApi.getAccount(this.$store.state.projectData.xmxxXmbh).then(ret => {
          console.log(ret);
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh
          }));
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
    },
    fetchData(djJkyhzh){
       djjcApi.getDepositByAccount(this.currentPage, this.pageSize,djJkyhzh).then(ret => {
         console.log(ret);
         console.log("where is my ...");
         
          this.pages=ret.data.pages;
          this.tableData = ret.data.records;
          this.total = ret.data.total;
         
        })
    },
   
    addClick() {
      // alert('新增记录')
      this.dialogVisible = true;
      this.dialogTitle = "新增记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, this.zjjgzhId);
      });
    },


    handleDetail(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "查看詳情";
      this.dialogType = 3;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(3, row.djId);
      });
    },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "编辑信息";
      this.dialogType = 2;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2,row.djId);
      });
    },
    handleInform(index, row) {
      this.$confirm('确定要上报该定金缴款吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           djjcApi.confirmDeposit(this.currentRow.djId).then(ret=>{
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
    handleDelete(index, row) {
      this.$confirm('确定要删除该定金缴款吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           djjcApi.deleteDeposit(this.currentRow.djId).then(ret=>{
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
    currentChange(num) {
      this.currentPage = num;
     this.fetchData(this.djJkyhzh);
    },
    cellMouseEnter(row) {
        this.currentRow = row;
      },
    submitSuccess() {
      this.dialogVisible = false;
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.fetchData(this.djJkyhzh);
    },
   
  },
 
  
};
</script>

<style>
</style>
