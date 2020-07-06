<template>
  <div class="FwdDjtj" >
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="对应定金信息" style="height:50%;overflow-y:scroll;">
       <el-alert
            type="warning"
            center
            :closable="false">
       <div class="controls" style="background-color:#fdf6ec;width:100%;margin:0 auto">
        <span>订购人:</span><el-input  v-model="person1" size="mini" placeholder="按订购人搜索" style="width:150px;" />
        <span>证件号码:</span><el-input  v-model="certificate" size="mini" placeholder="按证件搜索" style="width:150px;" />
        <span>开始时间:</span> <el-date-picker v-model="startTime1" type="date" placeholder="选择开始时间" size="mini" style="width:150px;"></el-date-picker>
        <span>结束时间:</span><el-date-picker v-model="endTime1" type="date" placeholder="选择结束时间" size="mini" style="width:150px;"></el-date-picker>
        <el-button size="mini" type="success" @click="search1">查找</el-button>
        <el-button size="mini" type="success" @click="reset1">重置</el-button>
        <el-button size="mini" type="success" @click="handlePrint1" @mouseover.native = "">打印明细</el-button>
       </div>
       </el-alert>
        <!-- 定金表格 -->
        <el-table :data="tableData" style="width: 100%" border >
          <el-table-column align="center" label="订购人" prop="djDgrxm"></el-table-column>
          <el-table-column align="center" label="缴款时间" prop="djJksj"></el-table-column>
          <el-table-column align="center" label="项目名称" prop="djXmmc"></el-table-column>
          <el-table-column align="center" label="缴款账户名称" prop="djJkzhmc"></el-table-column>
          <el-table-column align="center" label="缴款银行" prop="djJkyh"></el-table-column>
          <el-table-column align="center" label="证件号码" prop="djDgrzjhm"></el-table-column>
          <el-table-column align="center" label="缴款金额" prop="djJkje"></el-table-column>
        </el-table>
      </TitleTable>

      <TitleTable title="对应退款信息" style="height:50%;overflow-y:scroll;">
         <el-alert
            type="warning"
            center
            :closable="false">
       <div class="controls" style="background-color:#fdf6ec;width:100%">
        <span>退款申请人:</span><el-input  v-model="person2" size="mini" placeholder="按退款申请人搜索" style="width:200px;" />
        <span style="">开始时间:</span> <el-date-picker v-model="startTime2" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
        <span>结束时间:</span><el-date-picker v-model="endTime2" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
        <el-button size="mini" type="success" @click="search2">查找</el-button>        
        <el-button size="mini" type="success" @click="reset2">重置</el-button>
        <el-button size="mini" type="success" @click="handlePrint2" >打印明细</el-button>
       </div>
       </el-alert>
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
import { djtjApi } from "@/api/menu_4/djtj";

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
      tableData3:[
        {TotalCount:0,}
      ],
      dateList: {},
      date:"",
      person1:"",
      certificate:"",
      startTime1:"",
      endTime1:"",
      person2:"",
      startTime2:"",
      endTime2:"",
      selectedIndex: 0,
      jgzh:"",
    };
  },
 
  created() {
    this.getNavInfo();
  },
  methods: {
    getNavInfo(){
      djtjApi.getAccount(this.$store.state.projectData.xmxxXmbh).then(ret => {
        console.log(ret);
           this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.zjjgzhId, name: item.zjjgzhYhzh            
          }));
          
          this.navInfo.list.unshift({id:-1, name: "请选择监管账号"});
        })
    },
     fetchData(id) {
      djtjApi.getDeposit(id).then(ret => {
        console.log(ret)
        this.tableData = ret.data.deposits;
        this.tableData2 = ret.data.fundUses;
        this.tableData3[0].TotalCount=ret.data.TotalCount;
        this.tableData3[0].fundUseCount=ret.data.fundUseCount;
        this.tableData3[0].depositCount=ret.data.depositCount;
      });
    },
    liClick(index) {
      this.selectedIndex = index;
      if (index === 0) return;
      this.selectedIndex = this.navInfo.list[index];
      this.jgzh=this.navInfo.list[index].zjjgzhYhzh;
      this.fetchData(this.navInfo.list[index].zjjgzhYhzh);
    },
   search1(){
        djtjApi.getDepositByCondition1(this.jgzh,this.person1,this.certificate,this.startTime1,this.endTime1).then(ret => {
        console.log(ret)
        this.tableData = ret.data.deposits;
      });
      },

      search2(){
         djtjApi.getDepositByCondition2(this.jgzh,this.person2,this.startTime2,this.endTime2).then(ret => {
        console.log(ret)
        this.tableData2 = ret.data.fundUses;
      });
      },
      reset1(){
        this.person1="";
        this.certificate="";
        this.startTime1="";
        this.endTime1="";
      
      },
      reset2(){
        this.person2="";
        this.startTime2="";
        this.endTime2="";
      },
    handlePrint1(){},
    handlePrint2(){},
 
  }
};
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";



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
