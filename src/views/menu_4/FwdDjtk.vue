<template>
   <!-- 房屋定金退款1049906948 -->
  <div class="FwdDjtk">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金退款">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column align="center" label="申请人姓名" prop="djsySqrxm"></el-table-column>
          <!-- <el-table-column align="center" label="监管账户" prop="djsyJgzh"></el-table-column> -->
          <el-table-column align="center" label="申报金额" prop="djsySbje"></el-table-column>
          <el-table-column align="center" label="监管银行名称" prop="djsyJgyhmc"></el-table-column>
          <el-table-column align="center" label="用款事由" prop="djsyYksy"></el-table-column>
          <el-table-column align="center" label="流程状态" prop="djsyLczt"></el-table-column>
          <el-table-column align="center" label="汇入账户" prop="djsyHrzhzh"></el-table-column>
          <el-table-column align="center" label="汇入账户银行" prop="djsyHrzhyh"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="refund(scope.$index, scope.row)">退款</el-button>
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
          <FwdDjtkDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
        </el-dialog>

      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>

import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";

import FwdDjtkDialog from "@/views/menu_4/FwdDjtkDialog";

import { mixins } from "@/utils/mixins";

import axios from "axios";
import { fwddjtklApi } from "@/api/menu_4/fwddjtk";
// FwdDjglDialog
export default {
   name: "FwdDjtk",
  components: { TitleTable, ContainerTwoType,FwdDjtkDialog},
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
        selectedIndex: 0,
        list: []
      },
      djDjglzt:0,
      djJkzt:2,
      djDjtkzt:0,
    };
  },
  methods: {
    liClick(index) {
      // debugger
      this.selectedIndex = index;
       if (this.selectedIndex === 0) {
           return index = null
      }
      this.getData(this.navInfo.list[index].zjjgzhYhzh);
      // console.log(this.navInfo.list[index].zjjgzhYhzh)
    },
    getnavInfo(){
        axios.get('http://192.168.1.161:8093/data-presale-funds/supervisedAccount/selectPage').then(async res=>{
            const navlist = res.data.records
            this.navInfo.list = navlist.map( item => ({...item,id:item.zjjgzhId,name: item.zjjgzhYhzh}))
            this.navInfo.list.unshift({id: -1, name: "监管账户"})
            await this.getData()
        })
    },
    refund(index, row) {
    //  alert('退款') 
      this.dialogVisible = true;
      this.dialogTitle = "新增记录";
      this.dialogType = 1;
       this.$nextTick(() => {
        this.$refs.dialog.setMode(row);
      });
    },
    currentChange(num) {
      this.currentPage = num;
      this.getData();
    },
    getData(id) {
      fwddjtklApi.getlist(this.currentPage, this.pageSize,this.djDjglzt,this.djJkzt,this.djDjtkzt,id).then(res => {
        // debugger
        this.total = res.data.total;
        this.tableData = res.data.records;
      });
    },
    submitSuccess() {
      this.dialogVisible = false;
    },
  },
  created() {
    this.getnavInfo()
    this.getData();
    // console.log(this.$store.state.projectData.xmxxXmbh)
  },
  filters: {}
};
</script>

<style>

</style>