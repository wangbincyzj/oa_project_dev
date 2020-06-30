<template>
  <!-- 房屋定金统计====== 1049906948 -->
  <div class="FwdDjtj">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="对应缴款信息">
        <div slot="controls">
          <el-alert type="success" :closable="false">
            <div class="controls" id="search">
              <div class="searchbox searchbox0">
                <span>买受人:</span>
                <el-input size="mini" placeholder="按买受人搜索" style="width:200px;" />
              </div>
              <div class="searchbox searchbox1">
                <span>开始时间:</span>
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="dateList.dateStart"
                  style="width: 200px"
                  size="mini"
                ></el-date-picker>
              </div>
              <div class="searchbox searchbox2">
                <span>结束时间:</span>
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="dateList.dateEnd"
                  style="width: 200px"
                  size="mini"
                ></el-date-picker>
              </div>
              <div class="searchbox searchbox3">
                <el-button size="mini" type="success" @click="handleSearchList()">搜索</el-button>
                <el-button size="mini" type="success" @click="Printing()">打印明细</el-button>
              </div>
            </div>
          </el-alert>
          <el-alert type="warning" center :closable="false"></el-alert>
        </div>
        <!-- 定金表格 -->
        <el-table :data="tableData" style="width: 100%" border>
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="缴款时间" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="项目名称" prop="djXmmc"></el-table-column>
          <el-table-column align="center" label="缴款账户名称" prop="djJkzhmc"></el-table-column>
          <el-table-column align="center" label="缴款银行" prop="djJkyh"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
        </el-table>
      </TitleTable>

      <TitleTable title="对应缴款信息">
        <div slot="controls">
          <el-alert type="success" :closable="false">
            <div class="controls" id="search">
              <div class="searchbox searchbox0">
                <span>买受人:</span>
                <el-input size="mini" placeholder="按买受人搜索" style="width:200px;" />
              </div>
              <div class="searchbox searchbox1">
                <span>开始时间:</span>
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="dateList.dateStart"
                  style="width: 200px"
                  size="mini"
                ></el-date-picker>
              </div>
              <div class="searchbox searchbox2">
                <span>结束时间:</span>
                <el-date-picker
                  type="date"
                  placeholder="选择日期"
                  v-model="dateList.dateEnd"
                  style="width: 200px"
                  size="mini"
                ></el-date-picker>
              </div>
              <div class="searchbox searchbox3">
                <el-button size="mini" type="success" @click="handleSearchList()">搜索</el-button>
                <el-button size="mini" type="success" @click="Printing()">打印明细</el-button>
              </div>
            </div>
          </el-alert>
          <el-alert type="warning" center :closable="false"></el-alert>
        </div>
        <!-- 表格 -->
        <el-table :data="tableData2" style="width: 100%" border>
         <el-table-column align="center" label="退款金额" prop="djsySbje"></el-table-column>
          <el-table-column align="center" label="申请人姓名" prop="djsySqrxm"></el-table-column>
          <el-table-column align="center" label="收款银行" prop="djsyHrzhyh"></el-table-column>
          <el-table-column align="center" label="收款账号" prop="djsyHrzhzh"></el-table-column>
          <el-table-column align="center" label="发放日期" prop="djsyFfrq"></el-table-column>
          <el-table-column align="center" label="项目名称" prop="djsyXmmc"></el-table-column>
        </el-table>

      </TitleTable>
      <!-- <TitleTable title=""> -->
      <!-- 表格 -->
       <el-table :data="tableData3" style="width: 100%" border>
        <el-table-column align="center" label="缴款总余额" prop="TotalCount"></el-table-column>
        <el-table-column align="center" label="退款总额"   prop="fundUseCount"></el-table-column>
        <el-table-column align="center" label="定金总额"   prop="depositCount"></el-table-column>
      </el-table>
      <!-- </TitleTable> -->
    </ContainerTwoType>
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import axios from "axios";
import { fwdjglApi } from "@/api/menu_4/fwdjgl";

import { fwddjtklApi } from "@/api/menu_4/fwddjtk";

export default {
  name: "FwdDjtj",
  components: {
    TitleTable,
    ContainerTwoType
  },
  data() {
    return {
      navInfo: {
        loading: false,
        title: "监管账户",
        selectedIndex: 0,
        list: []
      },
      tableData: [],
      tableData2: [],
      tableData3: {},
      dateList: {},
      selectedIndex: null
    };
  },
  computed: {
    selectedBuilding() {
      //切换数据
      // console.log(this.navInfo.list)
      if (!this.navInfo.list.length) return null;
      if (this.selectedIndex === 0) return null;
      return this.navInfo.list[this.selectedIndex];
      this.fetchTableData(this.navInfo.list[index].zjjgzhYhzh)
    }
  },
  created() {
    this.fetchNavInfo();
    // this.fetchTableData();
  },
  methods: {
    fetchNavInfo() {
      fwdjglApi.getzjzh().then(async res => {
        const navlist = res.data.records;
        this.navInfo.list = navlist.map(item => ({
          ...item,
          id: item.zjjgzhId,
          name: item.zjjgzhYhzh
        }));
        this.navInfo.list.unshift({
          id: -1,
          name: "监管账户"
        });
        await this.fetchTableData();
      });
    },
    fetchTableData(id) {
      // debugger;
      // alert("列表信息");
      // this.tableData = listck;
      fwddjtklApi.getstatisticsData(id).then(res=>{
          this.tableData = res.data.deposits;  //定金
          this.tableData2 = res.data.fundUses  //定金退款
          this.tableData3 = res.data
          console.log(this.tableData3,'定金统计')
      })
    },
    liClick(index) {
      this.selectedIndex = index;
      if (index === 0) return;
      this.selectedIndex = this.navInfo.list[index];
      this.fetchTableData(this.navInfo.list[index].zjjgzhYhzh);
    },
    handleSearchList() {
      alert("搜索");
    },
    Printing() {
      alert("打印明细");
      // window.open("/#/printView/Dymx");
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
    margin: 0 50px;

    // &.searchbox1 {
    //   // margin-left: 100px;
    // }
    // &.searchbox2 {
    //   // margin-left: 100px;
    // }
    // &.searchbox3 {
    //   // margin-left: 200px;
    // }
    span {
      margin-right: 20px;
    }
  }
}

.Ldzjxx {
  .titleTable {
    height: 50%;
  }
}
</style>
