<template>
  <div class="djtkgl" id="djtkgl">
    <TitleTable title="定金退款管理" style="overflow-y:scroll">
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
        <template slot-scope="props">
         <div>
              <table>
            <tr>
              <td style="width:150px;text-align:center;font-size:20px;background-color:#EEF7FD">定金列表</td>
              <td >
              <el-table
              :data="props.row.recordTable"
              style="width:100%"
             >
              <!-- :header-cell-style="{background:'#EEF7FD'}" -->
                 <el-table-column
                prop="djDgrxm"
                label="订购人"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="djDgrzjhm"
                label="证件号码"
                align="center"
              ></el-table-column>
              
              <el-table-column
                prop="djJkje"
                label="缴款金额"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="djJkyh"
                label="监管银行"
                align="center"
              ></el-table-column>
               
              </el-table>
              </td>
              </tr>
              </table>
          </div>
          
      </template>
    </el-table-column>
        <!-- <el-table-column type="expand">
          <template>
            <table>
            <tr>
              <td>  <template>
                  <span>资金列表</span>
                </template></td>
                <td>
            <el-table
              :data="recordTable"
              style="width: 100%"
              border
              :span-method="objectSpanMethod"
            >
          
            
              <el-table-column
                prop="djDgrxm"
                label="订购人"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="djDgrzjhm"
                label="证件号码"
                align="center"
              ></el-table-column>
              
              <el-table-column
                prop="djJkje"
                label="缴款金额"
                align="center"
              ></el-table-column>
              <el-table-column
                prop="djJkyh"
                label="监管银行"
                align="center"
              ></el-table-column>
             
            </el-table>
                </td>
            </tr>
            </table>
          </template>
        </el-table-column>-->
        <el-table-column label="项目名称" prop="djsyXmmc"></el-table-column>
        <el-table-column label="监管账号" prop="djsyJgzh"></el-table-column>
        <el-table-column label="监管银行名称" prop="djsyJgyhmc"></el-table-column>
        <el-table-column label="申请人姓名" prop="djsySqrxm"></el-table-column>
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
                :disabled="scope.row.djsyShzt!==0">编辑
              </el-button>
              <el-button
                size="mini"
                @click="uploadPic(scope.$index, scope.row)"
                :disabled="scope.row.djsyShzt!==0">传图
              </el-button>
              <el-button
                size="mini"
                @click="managePic(scope.$index, scope.row)"
                :disabled="scope.row.djsyShzt!==0">管图
              </el-button>
              <el-button
                size="mini"
                @click="handleDelete(scope.$index, scope.row)"
                :disabled="scope.row.djsyShzt!==0">删除
              </el-button>
               <el-button
                size="mini"
                @click="handleInform(scope.$index, scope.row)"
                :disabled="scope.row.djsyShzt!==0">上报
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
        <DjtkglDialog
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
import DjtkglDialog from "@/views/menu_4/DjtkglDialog";
import { mixins } from "@/utils/mixins";
import { djtkglApi } from "@/api/menu_4/djtkgl";

export default {
  name: "djtkgl",
  mixins: [mixins.dialogMixin],
  components: {
    TitleTable,
    ContainerTwoType,
    DjtkglDialog
  },
  data() {
    return {
      tableData: [],
      recordTable: [
        {djDgrxm:"",}
      ],
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
    fetchRecord(row,id) {
      djtkglApi.getfundUseDetail(id)
        .then(ret => {
          this.$set(row, "recordTable", ret.data.deposits)
          
        
        })
       
    },
    //列表信息
    getlist() {
      // console.log(this.rwbh)
      djtkglApi.getfundUse(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh).then(ret => {
          this.total=ret.data.total;
          this.pages=ret.data.pages;
          this.tableData = ret.data.records.map(item => ({
            ...item,
            recordTable:{},
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
            this.getlist();
        },
    handleUpdate(index, row) {
      this.dialogVisible = true;
      this.dialogTitle = "编辑退款记录";
      this.dialogType = 1;
      this.$nextTick(() => {
        this.$refs.dialog.setMode(1, row.djsyId,row.logId);
      });
    },
    handleDetail(index, row){
        this.dialogVisible = true;
        this.dialogTitle = "详情";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, row.djsyId,row.logId);
        })
      },
       handleDelete(index,row){
        this.$confirm('确定要删除该定金退款申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
            djtkglApi.deleteFundUse( row.djsyId).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功");
                 this.getlist();
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
       handleInform(index,row){
        this.$confirm('确定要上报该定金退款申请吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
             djtkglApi.confirmFundUse(row.djsyId).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功");
                this.getlist();
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
    handleSearchList() {
      //搜索功能
      this.getlist();
    },
    currentChange(num) {
      this.currentPage = num;
      this.getlist(num);
    },
    open(row) {
      this.$refs.refTable.toggleRowExpansion(row);
    },
    openExpand(row) {
      //下拉列表信息
      this.fetchRecord(row,row.djsyId);
    },
     objectSpanMethod(){},
   
  },
  created() {
    //列表信息
    this.getlist();
  },
 
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
