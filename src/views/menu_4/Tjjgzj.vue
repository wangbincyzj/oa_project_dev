<template>
  <div class="tjjgzj" id="tjjgzjs">
    <TitleTable title="商品房买卖合同列表"  style="overflow-y:scroll">
      <div  slot="controls"
            style="background-color:#fdf6ec"
      >
        <!-- <el-alert
          type="success"
          :closable="false"
        > -->
          <div
            class="controls"
            id="search"
          >
            <div class="searchbox">
              <span>买受人:</span>
              <el-input
                size="mini"
                placeholder="按买受人搜索"
                v-model="listQuery.jiaocunMsrxm"
                style="width:200px;"
              />
            </div>
            <div class="searchbox">
              <span>证件号码:</span>
              <el-input
                size="mini"
                placeholder="按证件号码搜索"
                v-model="listQuery.Msrzjhm"
                style="width:200px;"
              />
            </div>

            <div class="searchbox">
              <span>备案号:</span>
              <el-input
                size="mini"
                placeholder="按备案号搜索"
                v-model="listQuery.Htbh"
                style="width:200px;"
              />
            </div>

            <div class="searchbox">
              <el-button
                size="mini"
                type="success"
                @click="handleSearchList()">搜索</el-button>
            </div>
          </div>
        <!-- </el-alert> -->
        <el-alert
          type="warning"
          center
          :closable="false"
        ></el-alert>
      </div>

      <el-table
        :data="tableData"
        style="width: 100%"
        @expand-change="openExpand"
        ref="refTable"
      >
      <el-table-column type="expand">
        <template slot-scope="props">
         <div>
              <table>
            <tr>
              <td style="width:150px;text-align:center;font-size:20px;background-color:#EEF7FD">资金列表</td>
              <td >
              <el-table
              :data="props.row.recordTable"
              style="width:100%"
             >
             
                <el-table-column
                prop="jiaocunJkje"
                label="添加金额"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunJksy"
                label="缴款事由"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunMsrxm"
                label="添加人"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunXxlyzt"
                label="数据来源"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunJkrq"
                label="时间"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunJkzt"
                label="资金状态"
                align="center"
              ></el-table-column>
              </el-table>
              </td>
              </tr>
              </table>
          </div>
          
      </template>
    </el-table-column>
        

        <el-table-column
          label="备案号"
          prop="jiaocunHtbh"
          align="center"
        ></el-table-column>
        <el-table-column
          label="买受人"
          prop="jiaocunMsrxm"
          align="center"
        ></el-table-column>
        <el-table-column
          label="证件号码"
          prop="jiaocunMsrzjhm"
          align="center"
        ></el-table-column>
        <el-table-column
          label="栋号"
          prop="jiaocunLdmc"
          align="center"
        ></el-table-column>
        <el-table-column
          label="房号"
          prop="jiaocunFh"
          align="center"
        ></el-table-column>
        <el-table-column
          label="面积"
          prop="fwjzmj"
          align="center"
        ></el-table-column>
        <el-table-column
          align="center"
          label="单价"
          prop="fwdj"
        ></el-table-column>
        <el-table-column
          align="center"
          label="购房总额"
          prop="gfze"
        ></el-table-column>
        <el-table-column
          align="center"
          label="首付金额"
          prop="sfk"
        ></el-table-column>
        <el-table-column
          align="center"
          label="已添加资金"
          prop="ytjje"
        ></el-table-column>
        <el-table-column
          align="center"
          label="未添加资金"
          prop="wtjje"
        ></el-table-column>
        <el-table-column
          align="center"
          label="已监管资金"
          prop="yjgje"
        ></el-table-column>
        <el-table-column
          align="center"
          label="未纳入监管资金"
          prop="wjgje"
          width="120px"
        ></el-table-column>
        <el-table-column
          align="center"
          label="合同状态"
          prop="htBazt">
        </el-table-column>
        <el-table-column
          align="center"
          label="备案时间"
          prop="htAddtime"
        ></el-table-column>
        <el-table-column
          label="操作"
          prop="desc"
          width="200px"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              @click="open(scope.row)"
              type="text"
              size="small"
            >查看记录</el-button>
            <el-button
              size="mini"
              type="primary"
              @click="handleAdd(scope.$index, scope.row)">新增缴存</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination> -->

      <el-dialog
        :title="dialogTitle"
        center
        width="800px"
        :before-close="closeConfirm"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <TjjgzjDialog
          ref="dialog"
          :dialog-type="dialogType"
          @submitSuccess="submitSuccess"
        />
      </el-dialog>
    </TitleTable>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import TjjgzjDialog from "@/views/menu_4/TjjgzjDialog";
  import { mixins } from "@/utils/mixins";
  import { tjjgzjApi } from "@/api/menu_4/tjjgzj";

  export default {
    name: "tjjgzj",
    mixins: [mixins.dialogMixin],
    components: {
      TitleTable,
      ContainerTwoType,
      TjjgzjDialog
    },
    data() {
      return {
        tableData: [],
        recordTable: [
           {jiaocunJkje:""},
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 1,
        currentPage: 1, //分页
        pageSize: 10,
        total: 0,
        pages: 1,
        row:[],
        htbh:"",
        mergeSpanArr: [], // 空数组，记录每一行的合并数
        mergeSpanArrIndex: "", // mergeSpanArr的索引
        listQuery: {
          jiaocunMsrxm: null,
          Msrzjhm: null,
          Htbh: null
        }
      };
    },

    methods: {
      //获取下拉列表信息
      fetchRecord(row,htbh) {
        this.row=row;
        this.htbh=htbh;
        tjjgzjApi.fetchlist(htbh)
          .then(ret => {
            //this.recordTable = res.data.records;
            this.$set(row, "recordTable", ret.data)
            row.recordTable.map(function (val) {
              if (val.jiaocunXxlyzt == 0) {
                val.jiaocunXxlyzt = '开发商'
              } else if (val.jiaocunXxlyzt == 1) {
                val.jiaocunXxlyzt = '银行端'
              }
              if (val.jiaocunJkzt == 0) {
                val.jiaocunJkzt = '新建'
              } else if (val.jiaocunJkzt == 1) {
                val.jiaocunJkzt = '上报'
              } else if (val.jiaocunJkzt == 2) {
                val.jiaocunJkzt = '入账'
              }

            })
          })

      },
   
      //列表信息
      getlist() {
        // console.log(this.rwbh)
        tjjgzjApi.getlist(this.$store.state.rwbh).then(ret => {
          this.tableData = ret.data.map(item => ({
            ...item,
            recordTable:[],
          }))
        });
      },
      //打印合同
      handlePrint(index, row) {},
      //弹出框
      submitSuccess(){
        this.$nextTick(()=>{
          this.$refs.dialog.reset();
        });
        this.dialogVisible=false;
        this.fetchRecord();
      },
      handleAdd(index, row) {
        this.dialogVisible = true;
        this.dialogTitle = "添加缴款记录";
        this.dialogType = 1;
        this.$nextTick(() => {
          this.$refs.dialog.reset();
          this.$refs.dialog.setMode(1, row.jiaocunHtbh);
        });
      },
      handleSearchList() {
        //搜索功能
        this.getlist();
      },
      currentChange(num) {
        this.currentPage = num;
      },
      open(row) {
        this.$refs.refTable.toggleRowExpansion(row);
      },
      openExpand(row) {
        //下拉列表信息
        this.fetchRecord(row,row.jiaocunHtbh);
      },
      objectSpanMethod(){},

    },
    created() {
      //列表信息
      this.getlist();
    },

    mounted() {},
    filters: {
      formStatus(htBazt) {
        switch (htBazt) {
          case 0:
            return "新建";
          case 1:
            return "上报";
          case 2:
            return "已备案";
        }
      }
    }
  };
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry {
    padding: $pm;
  }

  #search {
    display: flex;
    width: 100%;

    .searchbox {
      margin-left: 150px;

      span {
        margin-right: 20px;
      }
    }
  }
</style>


<style lang="scss">
  #tjjgzjs {
    .el-table__expand-icon {
      display: none;
    }
  }
</style>
