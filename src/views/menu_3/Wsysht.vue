<template>
  <div>
    <TitleTable title="待上报合同">
      <el-alert :closable='false' center>注意：合同签订后首先要通过“完善合同”将其他条款进行完善，确认无误后“上报”合同,点“打印合同”！</el-alert>
      <el-table
        v-loading="loading"
        style="width: 100%"
        :data="tableData">
        <el-table-column label="合同备案号" align="center" prop="htId" width="90"/>
        <el-table-column label="买受人" align="center" prop="htMc" width="80"/>
        <el-table-column label="证件号码" align="center" prop="htMc" width="80"/>
        <el-table-column label="楼栋名称" align="center" prop="htLdmc" width="80"/>
        <el-table-column label="房号" align="center" prop="htAddtime" width="80"/>
        <el-table-column label="面积" align="center" prop="htAddtime" width="80"/>
        <el-table-column label="单价" align="center" prop="htAddtime" width="80"/>
        <el-table-column label="挂牌单价" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="付款方式" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="监管状态" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="预售资金缴存情况" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="维修资金缴存" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="签订时间" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="状态" align="center" prop="htAddtime" width="100"/>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button size="mini" @click="handleContract(row)">完善合同</el-button>
            <el-button size="mini">上报</el-button>
            <el-button size="mini">草拟合同</el-button>
            <el-button size="mini">打印备案表</el-button>
            <el-button size="mini">详情</el-button>
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
        tableData:[{}],
        active: false,
        htId: null
      }
    },
    created() {
      this.fetchTableData()
    },
    methods:{
      handleContract(row) {
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(()=>{
          this.$refs.ref1.fetchData();
        })
      },
      close() {
        this.active = false
      },
      fetchTableData() {
        yushouContractApi.getContractList({kfsRwbh: this.$store.state.rwbh}).then(ret=>{
          console.log(ret);
          this.tableData = ret.data.records;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .main-bd{
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
  .bd-enter{
    left: 30%;
    opacity: 0;
    background-color: white;
  }
  .bd-leave-to{
    left: 30%;
    opacity: 0;
  }
</style>