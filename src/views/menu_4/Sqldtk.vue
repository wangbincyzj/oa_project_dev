<template>
  <div class="sqldtk">
    <!-- <ContainerTwoType
     
      :nav-info="navInfo"
      @liClick="liClick"> -->
    <!-- > :loading="navInfo.loading" -->
    <TitleTable
        :title="`【${this.$store.state.projectData.xmxxXmmc}】项目应楼栋列表`">
      <el-table
          size="mini"
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter"
          @expand-change="showAccount"
      >
        <!-- @cell-row-click="showAccount" -->
        <el-table-column type="expand">
          <template slot-scope="props">
            <div>
              <table>
                <tr>
                  <td style="width:150px;text-align:center;font-size:16px;background-color:#EEF7FD">监管信息</td>
                  <td>
                    <el-table
                        size="mini"
                        :data="props.row.AccountTable"
                        style="width:100%"
                    >
                      <!-- :header-cell-style="{background:'#EEF7FD'}" -->
                      <el-table-column
                          label="银行名称"
                          prop="jiaocunKhyh">
                      </el-table-column>
                      <el-table-column
                          label="开户账号"
                          prop="jiaocunJkzh">
                      </el-table-column>
                      <el-table-column
                          label="监管金额"
                          prop="jiaocunJkje">
                      </el-table-column>
                      <el-table-column
                          label="使用金额"
                          prop="shiyongSbje">
                      </el-table-column>
                      <el-table-column
                          label="余额"
                          prop="syje">
                      </el-table-column>
                      <el-table-column
                          align="center"
                          label="操作"
                      >
                        <template slot-scope="scope">
                          <el-button
                              size="mini"
                              type="primary"
                              @click="handleAdd(scope.$index, scope.row)">申请退款
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </td>
                </tr>
              </table>
            </div>

          </template>
        </el-table-column>
        <el-table-column
            label="楼栋名称"
            align="center"
            prop="ldxxMc">
        </el-table-column>
        <el-table-column
            label="建筑面积"
            align="center"
            prop="ldxxJzmj">
        </el-table-column>
        <el-table-column
            label="监管总额"
            align="center"
            prop="jianguanJe">
        </el-table-column>
        <el-table-column
            label="使用总额"
            align="center"
            prop="shiyongJe">
        </el-table-column>
        <el-table-column
            label="退款总额"
            align="center"
            prop="tuikuanJe">
        </el-table-column>
        <el-table-column
            align="center"
            label="剩余总额"
            prop="shengyuJe">
        </el-table-column>

        <el-table-column
            align="center"
            label="操作"
        >
          <template slot-scope="scope">
            <!-- <el-button
                size="mini"
                type="primary"
                @click="handleAdd(scope.$index, scope.row)">申请退款
            </el-button> -->
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
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
      >
        <SqldtkDialog
            ref="dialog"
            :dialog-type="dialogType"
            :jiaocunYhid="jiaocunYhid"
            :shiyongSbje="shiyongSbje"
            :jiaocunKhyh="jiaocunKhyh"
            :jiaocunJkje="jiaocunJkje"
            :jiaocunZhmc="jiaocunZhmc"
            :jiaocunJkzh="jiaocunJkzh"
            @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </TitleTable>
    <!-- </ContainerTwoType> -->
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import SqldtkDialog from "@/views/menu_4/SqldtkDialog";
import {sqldtkApi} from "@/api/menu_4/sqldtk";
import {mixins} from "@/utils/mixins";

export default {
  name: "sqldtk",
  mixins: [mixins.dialogMixin],
  components: {SqldtkDialog, TitleTable, ContainerTwoType},
  data() {
    return {
      navInfo: {
        loading: false,
        list: [
          {id: 1, name: "别问"},
          {id: 2, name: "问就是不知道"},
        ]
      },
      tableData: [
        {id: 1},
        {id: 2}
      ],
      AccountTable: [
        {name: "中国工商银行", account: "1234567", money1: 7890, money2: 2344},
        {name: "中国工商银行", account: "1234567", money1: 7890, money2: 2344},
        {name: "中国工商银行", account: "1234567", money1: 7890, money2: 2344},
      ],
      search: "",
      currentRow: [],
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 0,
      currentPage: 1,
      pageSize: 10,
      total: 0,
      pages: 1,
      selectedIndex: 0,
      ldbh: "",
      jiaocunYhid: 0,
      shiyongSbje: "",
      jiaocunKhyh: "",
      jiaocunJkje: 0,
      jiaocunZhmc: "",
      jiaocunJkzh: "",
    }
  },
  created() {
    this.fetchData();
  },
  methods: {

    fetchData() {
      sqldtkApi.getBuildingByXmbh(this.currentPage, this.pageSize, this.$store.state.projectData.xmxxXmbh,0).then(ret => {
        this.total = ret.total;
        this.pages = ret.data.pages;
        this.tableData = ret.data.map(item => ({
          ...item,
          AccountTable: [],
        }))
      });
    },


    handleAdd(index, row) {
      console.log(row);
      this.dialogVisible = true;
      this.dialogTitle = "申请楼栋退款";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, row.ldbh,row.jiaocunJkzh)
      })
    },
    handleDetail(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "详情";
      this.dialogType = 2;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(2, row.ldId);
      })
    },
    showAccount(row, expandRow) {
      console.log(row.ldxxLdbh);
      this.ldbh = row.ldxxLdbh;
      console.log("taetae");
      sqldtkApi.getAccountByLd(row.ldxxLdbh).then(ret => {
        this.$set(row, "AccountTable", ret.data)
      
      });


    },
    submitSuccess() {
      this.$nextTick(() => {
        this.$refs.dialog.reset();
      });
      this.dialogVisible = false;
      this.fetchData();
    },
    currentChange(num) {
      this.currentPage = num;
      this.fetchData()
    },
    cellMouseEnter(row) {
      this.currentRow = row;

    },
    handleDelete(flag, row) {
      console.log(flag, row)
    },
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.tjrwry {
  padding: $pm;
}

</style>
