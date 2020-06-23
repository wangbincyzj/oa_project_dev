<template>
  <!-- 关联合同列表弹框 -->
  <div class="FwdDjglDialog">
    <TitleTable title="商品房买卖合同列表">
      <div slot="controls" style="background-color:#fdf6ec">
        <el-alert type="success" :closable="false">
          <div class="controls" id="search"></div>
        </el-alert>
        <el-alert type="warning" center :closable="false"></el-alert>
      </div>

      <el-table :data="tableData5" style="width: 100%" ref="refTable">
        <el-table-column label="买受人" prop="jiaocunMsrxm" align="center"></el-table-column>
        <el-table-column label="证件号码" prop="jiaocunMsrzjhm" width="180px" align="center"></el-table-column>
        <el-table-column label="栋号" prop="jiaocunLdmc" align="center"></el-table-column>
        <el-table-column label="房号" prop="jiaocunFwbh" align="center"></el-table-column>
        <el-table-column label="面积" prop="fwjzmj" align="center"></el-table-column>
        <el-table-column align="center" label="单价" prop="fwdj"></el-table-column>
        <el-table-column align="center" label="购房总额" prop="gfze"></el-table-column>
        <el-table-column align="center" label="首付金额" prop="sfk"></el-table-column>
        <el-table-column align="center" label="已添加资金" prop="ytjje"></el-table-column>
        <el-table-column align="center" label="未添加资金" prop="wtjje"></el-table-column>
        <el-table-column align="center" label="已监管资金" prop="yjgje"></el-table-column>
        <el-table-column align="center" label="未纳入监管资金" prop="wjgje" width="120px"></el-table-column>

        <el-table-column align="center" label="备案时间" prop="htAddtime"></el-table-column>
        <el-table-column label="操作" prop="desc" width="200px" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleDetail(scope.$index, scope.row)">选择</el-button>
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
      <el-dialog width="30%" title="选择" :visible.sync="innerVisible" append-to-body center>
        <span>是否关联合同</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="innerVisible = false">取 消</el-button>
          <el-button type="primary" @click="relation()">确 定</el-button>
        </span>
      </el-dialog>
    </TitleTable>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
// import TjjgzhDialog from "@/views/menu_4/TjjgzhDialog";

import { mixins } from "@/utils/mixins";

import { fwdjglApi } from "@/api/menu_4/fwdjgl";

import { mapState } from "vuex";

export default {
  name: "tjjgzj",
  // mixins: [mixins.dialogMixin],
  components: {
    TitleTable,
    ContainerTwoType
    // TjjgzhDialog
  },
  data() {
    return {
      tableData: [],
      tableData5: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 1,
      currentPage: 1, //分页
      pageSize: 10,
      total: 20,
      pages: 1,
      listQuery: {
        jiaocunMsrxm: null,
        Msrzjhm: null,
        Htbh: null
      },
      innerVisible: false,
      htShzt:0,
    };
  },
  computed: {
    ...mapState(["rwbh"])
  },
  methods: {
    //列表信息
    getlist() {
      // console.log(this.rwbh)
      fwdjglApi.getdata(this.rwbh,this.htShzt).then(res => {
        this.tableData5 = res.data;
        // debugger
      });
    },
    //打印合同
    handlePrint(index, row) {},
    //弹出框
    submitSuccess() {
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.dialogVisible = false;
    },
    handleDetail(index,row) {
      console.log('合同列表',row)
      this.innerVisible = true;
    },
    relation(){
     //关联 
     fwdjglApi.relationData().then(res=>{

     })
     this.innerVisible = false;
    },
    currentChange(num) {
      this.currentPage = num;
    }
  },
  created() {
    //列表信息
    this.getlist();
  },
  mounted() {},
  filters: {}
};
</script>

<style>
</style>