<template>
  <div class="fwdDjgl">
    <!-- 定金关联1049906948 -->
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金关联">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="银行id" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款日期" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="操作" width="200px">
            <template slot-scope="scope">
              <el-button size="mini" type="danger" @click="relation(scope.$index, scope.row)">关联</el-button>
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
          width="1500px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <FwdDjglDialog ref="dialog" :dialog-type="dialogType" @submitSuccess="submitSuccess" />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import FwdDjglDialog from "@/views/menu_4/FwdDjglDialog";
import { mixins } from "@/utils/mixins";

import axios from "axios";
import { fwdjglApi } from "@/api/menu_4/fwdjgl";

export default {
  name: "fwdDjgl",
  components: { TitleTable, ContainerTwoType, FwdDjglDialog },
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
      this.selectedIndex = index;
      if (this.selectedIndex === 0) {
           return index = null
      }
      this.getData(this.navInfo.list[index].zjjgzhYhzh);
    },
    getnavInfo(){
       fwdjglApi.getzjzh()
        .then(async res=>{
            const navlist = res.data.records
            this.navInfo.list = navlist.map( item => ({...item,id:item.zjjgzhId,name: item.zjjgzhYhzh}))
            this.navInfo.list.unshift({id: -1, name: "监管账户"})
            await this.getData()
        })
    },
    relation(index, row) {
      // console.log('定金列表',row)
      this.dialogVisible = true;
      this.dialogTitle = "合同列表"; 
      this.$nextTick(() => {
        this.$refs.dialog.setMode(row);
      });
    },
    currentChange(num) {
      this.currentPage = num;
      this.getData();
    },
    getData(id) {
      // console.log()
      fwdjglApi.relationlist(this.currentPage, this.pageSize,this.djDjglzt,this.djJkzt,this.djDjtkzt,id).then(res => {
        this.total = res.data.total;
        this.tableData = res.data.records;
        // console.log(this.tableData)
      });
    },
    submitSuccess() {},
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