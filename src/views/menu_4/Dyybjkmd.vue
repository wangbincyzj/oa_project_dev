<template>
  <!-- 打印预备缴款名单 -->
  <div class="Dyybjkmd">
    <TitleTable title="打印预备缴款名单">
      <div slot="controls">
        <el-alert type="warning" center :closable="false">
          <div class="controls">
            <!-- <span class="warning">【{{this.$store.state.projectData.xmxxXmmc}}】</span> -->
            <el-button @click="handlePrint" size="mini" type="primary">打印缴款名单</el-button>
          </div>
        </el-alert>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%"
        ref="multipleTable"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="55" align="center"></el-table-column>
        <el-table-column align="center" label="合同编号" prop="jiaocunHtbh"></el-table-column>
        <el-table-column align="center" label="买受人" prop="jiaocunMsrxm"></el-table-column>
        <el-table-column align="center" label="证件号码" prop="jiaocunMsrzjhm"></el-table-column>
        <el-table-column align="center" label="幢号" prop="jiaocunLdmc"></el-table-column>
        <el-table-column align="center" label="房号" prop="jiaocunFh"></el-table-column>
        <el-table-column align="center" label="面积" prop="jiaocunFwmj"></el-table-column>
        <el-table-column align="center" label="缴款金额" prop="jiaocunJkje"></el-table-column>
        <el-table-column align="center" label="监管银行" prop="jiaocunKhyh"></el-table-column>
        <el-table-column align="center" label="监管账号" prop="jiaocunJkzh"></el-table-column>
        <el-table-column align="center" label="添加日期" prop="jiaocunJkrq"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination>
    </TitleTable>
     <div id="printData" style="width:800px;margin:0 auto;display:none">
     
       <table style="width:800px;margin:0 auto;text-align:center;font-size:16px;text-height:25px" border="1" cellspacing="0"> 
            <thead>
                <th style="text-align:center" colspan="7">预备缴款名单表</th>
                <tr>
                    <td>买受人</td>
                    <td>项目名称</td>
                    <td>楼栋名称</td>
                    <td>房号</td>
                    <td>缴款金额</td>
                    <td>监管银行</td>
                    <td>监管账户</td>
                </tr>
                
            </thead>
            <tbody>
               <tr v-for="(item, index) in multipleSelection" :key="index" >
                    <th>{{item.jiaocunMsrxm}}</th>
                    <th>{{item.jiaocunXmmc}}</th>
                    <th>{{item.jiaocunLdmc}}</th>
                    <th>{{item.jiaocunFh}}</th>
                    <th>{{item.jiaocunJkje}}</th>
                    <th>{{item.jiaocunKhyh}}</th>                    
                    <th>{{item.jiaocunJkzh}}</th>
                </tr>
            </tbody>
            <th style="text-align:center" >总数</th><th style="text-align:center" colspan="3">{{this.rowNum}}</th>
            <th style="text-align:center" >总金额</th><th style="text-align:center" colspan="2">{{this.count}}</th>
      </table>
       </div>


  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";

import { gljgzjApi } from "@/api/menu_4/gljgzj";

import axios from "axios";

import { mixins } from "@/utils/mixins";



export default {
  name: "Dyybjkmd",
  mixins: [mixins.dialogMixin],
  components: { TitleTable, ContainerTwoType },
  data() {
    return {
      tableData: [],
      search: "",      
      multipleSelection: [],
      currentPage: 1, //分页
      pageSize: 10,
      total:0,
      pages:0,
      rowNum:0,
      count:0,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
       gljgzjApi.apaymentlist(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh,1)
        .then(res => {
          // debugger
          this.tableData = res.data.records;
          this.total = res.data.total;
        });
    },
 
    handlePrint() {
       
        let obj=document.getElementById('printData');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
        this.count=0;
        this.rowNum=0;
    
    },
   
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.rowNum=val.length;
      this.count=0;
      for(let i=0;i<val.length;i++){
          this.count=this.count+val[i].jiaocunJkje;
          console.log(this.count);
          
      };
      console.log(val);
      
    },
     currentChange(num) {
      this.currentPage = num;
      this.fetchData();
    }
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.tjrwry {
  padding: $pm;
}
</style>
