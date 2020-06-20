<template>
  <div class="demo">
    <el-table
      :data="tableData"
      :span-method="objectSpanMethod"
      border
      style="width: 100%; margin-top: 20px"
    >
      <el-table-column label="资金列表" align="center">
        <template>
          <span>资金列表</span>
        </template>
      </el-table-column>
      <el-table-column prop="jiaocunAddtime" label="省份证" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="amount1" label="数值 1（元）"></el-table-column>
      <el-table-column prop="amount2" label="数值 2（元）"></el-table-column>
      <el-table-column prop="amount3" label="数值 3（元）"></el-table-column>
    </el-table>
  </div>
</template>

<script>

import axios from "axios";
export default {
  data() {
    return {
      tableData: [],
      mergeSpanArr: [], // 空数组，记录每一行的合并数
      mergeSpanArrIndex: "" // mergeSpanArr的索引
    };
  },
  methods: {
    //合并行或列的计算方法
    /**
     * row  行 id 姓名  数值     横向
     * column 列 id             纵向
     * rowIndex  行索引         横向索引
     * columnIndex  列索引      纵向索引
     */
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        // 合并第二列所有行
        const _row = this.mergeSpanArr[rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    // 生成一个与行数相同的数组，记录每一行设置的合并数
    setMergeArr(data) {
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.mergeSpanArr.push(1);
          this.mergeSpanArrIndex = 0;
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i].name === data[i - 1].name) {
            this.mergeSpanArr[this.mergeSpanArrIndex] += 1;
            this.mergeSpanArr.push(0);
          } else {
            this.mergeSpanArr.push(1);
            this.mergeSpanArrIndex = i;
          }
        }
      }
    },
    async getlist() {
      axios
        .get(
          "http://192.168.1.155:8093/data-presale-funds/jiaocun/selectByCondition",
          {
            params: {
              jiaocunHtbh: "900300108820200611111436" //根据合同编号查询
            }
          }
        )
        .then(res => {
           this.tableData = res.data.records;
          //  debugger
        }).finally(()=>{
             this.setMergeArr(this.tableData);
        })
    }
  },
  created() {
      this.getlist()
  },
  mounted() {}
};
</script>

<style>
</style>
