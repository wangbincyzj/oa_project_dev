<template>
  <div class="myTable-p0">
    <TitleTable title="已备案的商品房买卖合同" bgc="#E4EDF9">
      <div class="controls" slot="controls" style="background-color:white;">
        <InfoListPlus :count="3">
          <InfoListPlusItem name="买受人"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
          <InfoListPlusItem name="证件号码"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
          <InfoListPlusItem name="备案号"><el-input size="mini" class="border__bottom"/></InfoListPlusItem>
        </InfoListPlus>
        <div style="height: 15px; background-color:#E4EDF9;"></div>
      </div>
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
        <el-table-column label="项目名称" align="center" prop="xmMc" width="80"/>
        <el-table-column label="楼栋名称" align="center" prop="ldMc" width="80"/>
        <el-table-column label="房号" align="center" prop="roomFh" width="60"/>
        <el-table-column label="面积" align="center" prop="roomMj" width="80"/>
        <el-table-column label="单价" align="center" prop="roomDj" width="80"/>
        <el-table-column label="状态" align="center"  width="80">
          已备案
        </el-table-column>
        <el-table-column label="备案时间" align="center" prop="htBasj" width="150"/>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <el-button @click="handlePrintContact(row)" size="mini">打印合同</el-button>
            <el-button @click="handlePrintBa(row)" size="mini">打印备案表</el-button>
            <el-button @click="handleDetail(row)" size="mini">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </TitleTable>
    <transition name="bd">
      <div class="main-bd" v-if="active">
        <WsyshtLayout ref="ref1" :htId="htId" :read-only="true" @close="active=false" />
      </div>
    </transition>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import WsyshtLayout from "@/views/menu_3/Wsysht/WsyshtLayout";

  export default {
    name: "Ckbaht",
    components: {WsyshtLayout, InfoListPlusItem, InfoListPlus, TitleTable},
    data() {
      return{
        tableData: [],
        loading: false,
        active: false,
        htId: null,
      }
    },
    created(){
      this.fetchTableData()
    },
    methods:{
      fetchTableData() {
        yushouContractApi.getAllContract({htBazt:2}).then(ret=>{
          this.tableData = ret.data.records;
        })
      },
      handlePrintContact(item){
        window.open(`#/printView/ysht?id=${item.htId}`)
      },
      handlePrintBa(item){

      },
      handleDetail(row){
        this.active = true;
        this.htId = row.htId;
        this.$nextTick(() => {
          this.$refs.ref1.fetchData();
        })
      },

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