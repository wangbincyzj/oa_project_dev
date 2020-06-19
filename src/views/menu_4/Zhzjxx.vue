<template>
  <!-- 账户资金信息 -->
  <div class="Zhzjxx">
    <TitleTable title="【康师傅】监管资金汇总">
      <div slot="controls" style="background-color:#fdf6ec">
        <el-alert type="success" :closable="false">
          <div class="controls" id="search">
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
      <el-table
        :data="tableData"
        style="width: 100%"
        border
        show-summary
        :summary-method="getSummaries"
      >
        <el-table-column align="center" type="index" label="序号" width="200px"></el-table-column>
        <!-- <el-table-column align="center" label="序号" prop="htbh"></el-table-column> -->
        <el-table-column align="center" label="账户名称" prop="msr"></el-table-column>
        <el-table-column align="center" label="监管账号" prop="zjhm"></el-table-column>
        <el-table-column align="center" label="缴存金额" prop="zh"></el-table-column>
        <el-table-column align="center" label="使用金额" prop="fh"></el-table-column>
        <el-table-column align="center" label="剩余金额" prop="mj"></el-table-column>
      </el-table>
    </TitleTable>
  </div>
</template>

<script>
import TitleTable from "@/components/current/titleTable/TitleTable";
import { mixins } from "@/utils/mixins";

const listck = [
  {
    htbh: "序号",
    msr: "账户名称",
    zjhm: "监管账号",
    zh: "50",
    fh: "70",
    mj: "50"
  },
  {
    htbh: "序号",
    msr: "账户名称",
    zjhm: "监管账号",
    zh: "100",
    fh: "200",
    mj: "20"
  }
];

export default {
  name: "Zhzjxx",
  mixins: [mixins.dialogMixin],
  components: { TitleTable },
  data() {
    return {
      tableData: [],
      dateList: []
    };
  },
  methods: {
    fetchNavInfo() {
      this.tableData = listck;
    },
    handleSearchList() {
      alert("搜索");
    },
    Printing() {
      // alert('打印明细')
      window.open("/#/printView/Dymx");
    },
    //尾行显示
    getSummaries(param) {
      //列  数据
      const { columns, data } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = "汇总信息";
          return;
        }
        const values = data.map(item => {
          return Number(item[column.property]);
        });
        const dataValuse = values.every(function(value) {
          return isNaN(value);
        });
        if (!dataValuse) {
          sums[index] = values.reduce((prev, curr) => {
            const value = Number(curr);
            if (!isNaN(value)) {
              return prev + curr;
            } else {
              return prev;
            }
          }, 0);
          sums[index] += "";
        } else {
          sums[index] = data.length;
        }
      });
      return sums;
    }
  },
  created() {
    this.fetchNavInfo();
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
    &.searchbox1 {
      margin-left: 150px;
    }
    &.searchbox2 {
      margin-left: 100px;
    }
    &.searchbox3 {
      margin-left: 300px;
    }
    span {
      margin-right: 20px;
    }
  }
}
</style>

<style lang="scss">
//   .Zhzjxx{
//        #search {
//            el-date-picker{
//                height: 20px;
//            }
//        }
//   }
</style>