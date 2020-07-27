<template>
  <div class="sqjcjg">
    <!-- <ContainerTwoType
     
      :nav-info="navInfo"
      @liClick="liClick"> -->
    <!-- > :loading="navInfo.loading" -->
      <TitleTable
        :title="`项目【${this.$store.state.projectData.xmxxXmmc}】对应楼栋列表`">
        <div slot="controls">
          <el-alert
            type="warning"
            center
            :closable="false">
            <span class="warning" style="color: red">备注：商品房预售资金监管账户撤销条件，除该商品房取得房地产初始登记外，还必须取得房屋物业承接查验备案证明相关文件！</span>
          </el-alert>
        </div>
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter"
          @expand-change="showAccount">

           <el-table-column type="expand">
        <template slot-scope="props">
         <div>
              <table>
            <tr>
              <td style="width:150px;text-align:center;font-size:20px;background-color:#EEF7FD">监管信息</td>
              <td >
              <el-table
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
                  align="center"
                  label="操作"
                >
            <template slot-scope="scope">
              <el-button
                size="mini"
                 type="primary"
                @click="handleApply(scope.$index, scope.row)">申请解除监管
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
            prop="ldxxMc">
          </el-table-column>
          <el-table-column
            label="建筑面积"
            prop="ldxxJzmj">
          </el-table-column>
          <el-table-column
            label="监管总额"
            prop="jianguanJe">
          </el-table-column>
          <el-table-column
            label="使用总额"
            prop="shiyongJe">
          </el-table-column>
          <el-table-column
            label="退款总额"
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
             
              <el-button
                size="mini"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>
            </template>
          </el-table-column>
        </el-table>
         <el-pagination
          background
          layout="sizes,prev, pager, next, total"
          @current-change="currentChange"
          @size-change="handleSizeChange"
          :current-page="currentPage"
          :page-size="pageSize"
          :page-sizes="[10, 20]"
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
          <SqjcjgDialog
            ref="dialog"
            :ldxxMc="ldxxMc"
            :jianguanJe="jianguanJe"
            :shiyongJe="shiyongJe"
            :shengyuJe="shengyuJe"
            :jiaocunJkje="jiaocunJkje"
            :jiaocunJkzh="jiaocunJkzh"
            :jiaocunKhyh="jiaocunKhyh"
            :jiaocunYhid="jiaocunYhid"
            :shiyongSbje="shiyongSbje"
            :jczjjgDjzmh="jczjjgDjzmh"
            :jczjjgDjrq="jczjjgDjrq"
            :jiaocunZhmc="jiaocunZhmc"
            :dialog-type="dialogType"
            :ldbh="ldbh"
            :ldxxId="ldxxId"
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
  import SqjcjgDialog from "@/views/menu_4/SqjcjgDialog";
 
  import {sqjcjgApi} from "@/api/menu_4/sqjcjg";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "sqjcjg",
    mixins: [mixins.dialogMixin],
    components: {SqjcjgDialog, TitleTable, ContainerTwoType},
    data() {
      return{
       
        tableData: [
        ],
        AccountTable:[],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        selectedIndex: 0,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        ldbh:"",
        ldxxMc:"",
        jianguanJe:0,
        shiyongJe:0,
        shengyuJe:0,
        jiaocunJkje:0,
        jiaocunJkzh:"",
        jiaocunKhyh:"",
        jiaocunYhid:"",
        shiyongSbje:0,
        jczjjgDjzmh:"",
        jczjjgDjrq:"",
        jiaocunZhmc:"",
        ldxxId:0,
      }
    },
    created() {
     this.fetchData();
    },
    methods:{

      fetchData(){
        console.log("11111");
        
         sqjcjgApi.getBuildingByXmbh(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh).then(ret=>{
          this.total=ret.total;
          this.pages=ret.data.pages;
          this.tableData = ret.data.map(item => ({
            ...item,
            AccountTable:[],
          }))
          });
          console.log("taetae");
          
      },

      showAccount(row,expandRow){
          console.log(row);
          console.log(expandRow);
          this.ldxxMc=row.ldxxMc;
          this.ldxxId=row.ldId;
          this.jianguanJe=row.jianguanJe;
          this.shiyongJe=row.shiyongJe;
          this.shengyuJe=row.shengyuJe;
          this.jczjjgDjzmh=row.jczjjgDjzmh;
          this.jczjjgDjrq=row.jczjjgDjrq;
          this.ldbh=row.ldxxLdbh;
          console.log("taetae");
           sqjcjgApi.getAccountByLd(row.ldxxLdbh).then(ret=>{
          // row.AccountTable = ret.data
          this.$set(row, "AccountTable", ret.data)
          console.log(row);
          });
      },

      handleApply(index,row) {
        console.log(row);
        this.jiaocunJkje=row.jiaocunJkje;
        this.jiaocunJkzh=row.jiaocunJkzh;
        this.jiaocunKhyh=row.jiaocunKhyh;
        this.jiaocunYhid=row.jiaocunYhid;
        this.jiaocunZhmc=row.jiaocunZhmc;
        this.dialogVisible = true;
        this.dialogTitle = "申请解除监管";
        this.dialogType = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1)
        })
      },
      handleDetail(index, row){
        this.dialogVisible = true;
        this.dialogTitle = "详情";
        this.dialogType = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, this.currentRow.ldId);
        })
      },
      submitSuccess() {
         this.$nextTick(()=>{
                this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
        this.fetchData();
      },
        cellMouseEnter(row) {
        this.currentRow = row;
        
      },
       handleSizeChange(val){
        console.log(val);
        this.pageSize=val;
        this.fetchData();
      },
      currentChange(num) {
         this.currentPage = num;
         this.fetchData()
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
