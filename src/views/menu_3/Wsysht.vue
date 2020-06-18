<template>
  <div class="myTable-p0">
    <TitleTable title="待上报合同">
      <el-alert :closable='false' center>注意：合同签订后首先要通过“完善合同”将其他条款进行完善，确认无误后“上报”合同,点“打印合同”！</el-alert>
      <el-table
        v-loading="loading"
        style="width: 100%"
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
        <el-table-column label="楼栋名称" align="center" prop="ldMc" width="80"/>
        <el-table-column label="房号" align="center" prop="roomFh" width="60"/>
        <el-table-column label="面积" align="center" prop="roomMj" width="80"/>
        <el-table-column label="单价" align="center" prop="" width="80"/>
        <el-table-column label="挂牌单价" align="center" prop="roomGpdj" width="100"/>
        <el-table-column label="付款方式" align="center" prop="htFkfs" width="50"/>
        <el-table-column label="监管状态" align="center" prop="htZjjgzt" width="100"/>
        <el-table-column label="预售资金缴存情况" align="center" prop="htYsjkzt" width="60"/>
        <el-table-column label="维修资金缴存" align="center" prop="roomWxzjjczt" width="100"/>
        <el-table-column label="签订时间" align="center" prop="htQdsj" width="100"/>
        <el-table-column label="审核状态" align="center" #default="{row}" width="100">
          {{row.htShzt|shztFilter}}
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <template v-if="row.htShzt===0||row.htShzt===3">
              <el-button size="mini" @click="handleContract(row)">完善合同</el-button>
              <el-button size="mini" @click="handleSubmit(row)">上报</el-button>
            </template>
            <el-button @click="handlePrint(row)" size="mini">草拟合同</el-button>
            <el-button size="mini">打印备案表</el-button>
            <el-button size="mini" @click="handleDetail(row)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialogTitle"
        center
        width="1200px"
        :before-close="closeConfirm"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >

      </el-dialog>
    </TitleTable>
    <transition name="bd">
      <div class="main-bd" v-if="active">
        <WsyshtLayout ref="ref1" :htId="htId" @close="close"/>
      </div>
    </transition>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import WsyshtLayout from "@/views/menu_3/Wsysht/WsyshtLayout";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "Wsysht",
    mixins: [mixins.dialogMixin],
    components: {WsyshtLayout, TitleTable},
    data() {
      return {
        loading: false,
        tableData: [{}],
        active: false,
        htId: null
      }
    },
    created() {
      this.fetchTableData()
    },
    methods: {
      handleContract(row) {
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      handleDetail(row) {
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },
      close() {
        this.active = false
      },
      fetchTableData() {
        this.loading = true;
        yushouContractApi.getContractList({kfsRwbh: this.$store.state.rwbh}).then(ret => {
          this.loading = false;
          this.tableData = ret.data.records;
        })
      },
      handleSubmit(item) {
        yushouContractApi.submitContract(item.htId).then(ret => {
          if (ret.code === 200) {
            this.$message.success("上报成功");
            this.fetchTableData()
          } else {
            this.$message.error(ret.message || "未知错误")
          }
        })
      },
      handlePrint(item){
        window.open(`#/printView/ysht?id=${item.htId}`)
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