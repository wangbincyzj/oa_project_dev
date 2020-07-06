<template>
  <div class="djtkgl" id="djtkgl">
    <TitleTable title="定金退款管理">
      <div  slot="controls"
        style="background-color:#fdf6ec"
      >
        <el-alert
          type="success"
          :closable="false"
        >
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
        </el-alert>
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
          <template>
            <el-table
              :data="recordTable"
              style="width: 100%"
              border
              :span-method="objectSpanMethod"
            >
              <el-table-column
                label="资金列表"
                align="center"
              >
                <template>
                  <span>资金列表</span>
                </template>
              </el-table-column>

              <el-table-column
                prop="djsySqrxm"
                label="订购人"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="jiaocunJksy"
                label="证件号码"
                align="center"
              ></el-table-column>
              
              <el-table-column
                prop="jiaocunXxlyzt"
                label="缴款金额"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="djsyHrzhyh"
                label="监管银行"
                align="center"
              ></el-table-column>
             
            </el-table>
          </template>
        </el-table-column>
        <el-table-column label="项目名称" prop="djsyXmmc"></el-table-column>
        <el-table-column label="监管账号" prop="djsyJgzh"></el-table-column>
        <el-table-column label="监管银行名称" prop="djsyJgyhmc"></el-table-column>
        <el-table-column label="申请人姓名" prop="djsySqrlxdh"></el-table-column>
        <el-table-column label="汇入账户" prop="djsyHrzhzh"></el-table-column>
        <el-table-column label="汇入账户银行" prop="djsyHrzhyh"></el-table-column>
        <el-table-column align="center" label="申报金额" prop="djsySbje"></el-table-column>
        <el-table-column align="center" label="添加时间" prop="djsyAddtime"></el-table-column>
         <el-table-column
            align="center"
            label="收件操作"
            width="150"
          >           
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="GetFile(scope.$index, scope.row)">收件
              </el-button>
              <el-button
                size="mini"
                @click="DelFile(scope.$index, scope.row)">清除
              </el-button>
              <el-button
                size="mini"
                @click="PrintFile(scope.$index, scope.row)">打印收件
              </el-button>
            </template>
          </el-table-column>
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
            >定金明细</el-button>
           <el-button
                size="mini"
                @click="handleUpdate(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">编辑
              </el-button>
              <el-button
                size="mini"
                @click="uploadPic(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">传图
              </el-button>
              <el-button
                size="mini"
                @click="managePic(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">管图
              </el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">删除
              </el-button>
               <el-button
                size="mini"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.shiyongShzt==1">上报
              </el-button>

              <el-button
                size="mini"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>

              <el-button
                size="mini"
                @click="printPaper(scope.$index, scope.row)">打印申请单
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
import { djtkglApi } from "@/api/menu_4/djtkgl";

export default {
  name: "djtkgl",
  mixins: [mixins.dialogMixin],
  components: {
    TitleTable,
    ContainerTwoType,
    TjjgzjDialog
  },
  data() {
    return {
      tableData: [],
      recordTable: [],
      search: "",
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 1,
      currentPage: 1, //分页
      pageSize: 10,
      total: 0,
      pages: 1,
      

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
    fetchRecord(id) {
      djtkglApi.getfundUseDetail(id)
        .then(res => {
          this.recordTable = res.data.fundUse;
        //   this.recordTable.map(function (val) {
        //       if (val.jiaocunXxlyzt == 0) {
        //         val.jiaocunXxlyzt = '开发商'
        //       } else if (val.jiaocunXxlyzt == 1) {
        //         val.jiaocunXxlyzt = '银行端'
        //       } 
        //       if (val.jiaocunJkzt == 0) {
        //         val.jiaocunJkzt = '新建'
        //       } else if (val.jiaocunJkzt == 1) {
        //         val.jiaocunJkzt = '上报'
        //       } else if (val.jiaocunJkzt == 2) {
        //         val.jiaocunJkzt = '入账'
        //       } 
          
        // })
        })
       
    },
    //列表信息
    getlist() {
      // console.log(this.rwbh)
      djtkglApi.getfundUse(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh).then(res => {
        this.tableData = res.data.records;
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
            this.fetchData();
        },
    handleAdd(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "添加缴款记录";
      this.dialogType = 1;
      this.$nextTick(() => {
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
      this.fetchRecord(row.djsyId);
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
#djtkgl {
  .el-table__expand-icon {
    display: none;
  }
}
</style>
