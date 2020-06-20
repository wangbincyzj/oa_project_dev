<template>
   <!-- 房屋定金退款 -->
  <div class="FwdDjtk">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="定金退款">
        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="selection" width="55" align="center"></el-table-column>
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
          <el-table-column align="center" label="监管银行" prop="djJksy"></el-table-column>
          <el-table-column align="center" label="银行id" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款日期" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="缴款说明" prop="djJksy"></el-table-column>
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

      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>

import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
// import FwdDjjcDialog from "@/views/menu_4/FwdDjjcDialog";
import { mixins } from "@/utils/mixins";

import axios from "axios";
import { fwddjtklApi } from "@/api/menu_4/fwddjtk";
// FwdDjglDialog
export default {
   name: "FwdDjtk",
  components: { TitleTable, ContainerTwoType,  },
  // mixins: [mixins.dialogMixin],
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
      this.getData(this.navInfo.list[index].zjjgzhYhzh);
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
     alert('退款')
    },
    currentChange(num) {
      this.currentPage = num;
      this.getData();
    },
    getData(id) {
      fwddjtklApi.getlist(this.currentPage, this.pageSize).then(res => {
        // debugger
        this.total = res.data.total;
        this.tableData = res.data.records;
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