<template>
  <div class="myTable-p0">
    <TitleTable title="待上报合同">
      <el-alert :closable='false' center>注意：合同签订后首先要通过“完善合同”将其他条款进行完善，确认无误后“上报”合同,点“打印合同”！</el-alert>
      <ButtonsArea  :row.sync="row" @cancel="setCurrent">
        <template v-if="row&&(row.htBazt===0||row.htBazt===3)">
          <el-button size="mini" type="primary" @click="handleContract(row)">完善合同</el-button>
          <el-button size="mini" type="primary" @click="handleSubmit(row)">上报</el-button>
        </template>
        <el-button @click="handlePrint(row)" type="primary" size="mini">打印草拟合同</el-button>
        <el-button @click="handlePrint2(row)" type="primary" size="mini">打印备案申请表</el-button>
        <el-button size="mini" type="primary" @click="handleDetail(row)">详情</el-button>
      </ButtonsArea>
      <el-table
        v-loading="loading"
        size="mini"
        style="width: 100%"
        highlight-current-row
        ref="singleTable"
        @current-change="handleCurrentChange"
        :data="tableData">
        <el-table-column label="合同备案号" align="center" prop="htBah" width="70"/>
        <el-table-column label="买受人" #default="{row}" align="center" prop="htMc" width="80">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrSyqr}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="证件号码" #default="{row}" align="center" prop="htMc" width="180">
          <ul>
            <li v-for="item in row.houseOwners">{{item.fwsyqrZjhm}}</li>
          </ul>
        </el-table-column>
        <el-table-column label="楼栋名称" align="center" prop="ldMc" />
        <el-table-column label="房号" align="center" prop="roomFh" />
        <el-table-column label="面积" align="center" prop="roomMj" />
        <el-table-column label="单价" align="center" prop="roomDj" width="80"/>
        <el-table-column label="挂牌单价" align="center" prop="roomGpdj" />
        <el-table-column label="付款方式" align="center" prop="htFkfs" />
        <el-table-column label="监管状态" align="center" prop="roomZjjgzt" >
          <template #default="{row}">
            <i class="el-icon-check" v-if="row.roomZjjgzt"/>
            <i class="el-icon-close" v-else/>
          </template>
        </el-table-column>
        <el-table-column label="缴存情况" align="center" prop="htFkfs" >
          <el-table-column label="预售资金" align="center" prop="htYsjkzt">
            <template #default="{row}">
              <i class="el-icon-check" v-if="row.htYsjkzt||row.ldxxZjjgzt===0"/>
              <i class="el-icon-close" v-else/>
            </template>
          </el-table-column>
          <el-table-column label="维修资金" align="center" prop="roomWxzjjczt" >
            <template #default="{row}">
              <i class="el-icon-check" v-if="row.roomWxzjjczt"/>
              <i class="el-icon-close" v-else/>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="签订时间" align="center" prop="htQdsj" width="200"/>
        <el-table-column label="流程" align="center" #default="{row}">
          {{row.htBazt|shztFilter}}
        </el-table-column>
      </el-table>
      <template #pager>
        <el-pagination
            background
            layout="prev, pager, next, total, sizes"
            @current-change="mixinCurrentChange"
            @size-change="mixinSizeChange"
            :page-sizes="[10, 20, 30, 40]"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
        </el-pagination>
      </template>
    </TitleTable>
    <transition name="bd">
      <div class="main-bd" v-if="active">
        <WsyshtLayout ref="ref1" :htId="htId" @close="close" :read-only="readOnly"/>
      </div>
    </transition>
    <el-dialog :visible.sync="dialogVisible" width="1200px" title="合同上报确认" center>
      <WsyshtDialog :htId="htId" @submitSuccess="submitSuccess" ref="dialog"/>
    </el-dialog>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import WsyshtLayout from "@/views/menu_3/Wsysht/WsyshtLayout";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import WsyshtDialog from "@/views/menu_3/WsyshtDialog";
  import ButtonsArea from "@/components/common/buttonsArea/ButtonsArea";

  export default {
    name: "Wsysht",
    mixins: [mixins.dialogMixin, mixins.myPagerMixin, mixins.tableMixin],
    components: {ButtonsArea, WsyshtDialog, WsyshtLayout, TitleTable},
    data() {
      return {
        loading: false,
        tableData: [],
        active: false,
        htId: null,
        readOnly: false,
        dialogTitle: "",
        row: {},
      }
    },
    created() {
      this.fetchTableData()
    },
    methods: {
      handleContract(row) {
        this.active = true;
        this.htId = row.htId;
        this.readOnly = false;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleDetail(row) {
        this.active = true;
        this.htId = row.htId;
        this.readOnly = true;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      close() {
        this.active = false;
        this.fetchTableData()
      },
      fetchTableData() {
        this.loading = true;
        yushouContractApi.getContractList({kfsRwbh: this.$store.state.rwbh, htBazt:0, current: this.currentPage, size: this.pageSize}).then(ret => {
          this.loading = false;
          this.tableData = ret.data.records;
          this.total = ret.data.total
        })
      },
      handleSubmit(item) {
        if(!item.roomZjjgzt){
          this.$message.warning("未设置合同监管状态,不能备案合同")
          return
        }
        if(item.ldxxZjjgzt&&!item.htYsjkzt){
          this.$message.warning("未缴存预售资金,不能备案合同")
          return
        }
        this.htId = item.htId;
        this.dialogVisible = true;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchDetail()
        })
      },
      handlePrint(item){
        window.open(`#/printView/ysht?id=${item.htId}`)
      },
      handlePrint2(item){
        window.open(`#/printView/bab?id=${item.htId}`)
      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchTableData()
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .main-bd {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    background-color: $border-4;
    z-index: 99;
    left: 0;
    opacity: 1;
    transition: all 0.5s ease-in-out;
  }

  .bd-enter {
    left: 30%;
    opacity: 0;
    background-color: white;
  }

  .bd-leave-to {
    left: 30%;
    opacity: 0;
  }
</style>