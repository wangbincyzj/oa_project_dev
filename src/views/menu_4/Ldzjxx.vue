<template>
  <div class="ldzjxx">
    <ContainerTwoType
      class="container"
      :nav-info="navInfo"
      @liClick="liClick"
    >

      <TitleTable
        title="对应的缴款列表"
        style="height:50%;overflow-y:scroll;">
        <el-alert
          type="warning"
          center
          :closable="false">
          <div class="controls" style="background-color:#fdf6ec;width:100%;margin:0 auto">
            <span>买受人:</span><el-input  v-model="person" size="mini" placeholder="按买受人搜索" style="width:200px;" />
            <span>开始时间:</span> <el-date-picker v-model="startTime1" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
            <span>结束时间:</span><el-date-picker v-model="endTime1" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
            <el-button size="mini" type="success" @click="search1">查找</el-button>
            <el-button size="mini" type="success" @click="handlePrint1" @mouseover.native = "getDate">打印明细</el-button>
          </div>
        </el-alert>
        <el-table
          :data="tableData"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="买受人"
            prop="jiaocunMsrxm">
          </el-table-column>
          <el-table-column
            label="证件号码"
            prop="jiaocunMsrzjhm">
          </el-table-column>
          <el-table-column
            label="项目名称"
            prop="jiaocunXmmc">
          </el-table-column>
          <el-table-column
            label="楼栋名称"
            prop="jiaocunLdmc">
          </el-table-column>
          <el-table-column
            label="房号"
            prop="jiaocunFh">
          </el-table-column>
          <el-table-column
            align="center"
            label="建筑面积"
            prop="jiaocunFwmj">
          </el-table-column>
          <el-table-column
            align="center"
            label="缴款金额"
            prop="jiaocunJkje">
          </el-table-column><el-table-column
          align="center"
          label="缴款说明"
          prop="jiaocunJksy">
        </el-table-column><el-table-column
          align="center"
          label="缴款日期"
          prop="jiaocunJkrq">
        </el-table-column>

        </el-table>
        <!-- <el-pagination
          background
          layout="prev, pager, next, total"
          @current-change="currentChange"
          :current-page="currentPage"
          :page-size="pageSize"
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
          <SqsfxyDialog
            ref="dialog"
            :dialog-type="dialogType"
            :zjjgzhId="zjjgzhId"
            :zjjgzhYhzh="zjjgzhYhzh"
            :zjjgzhZhmc="zjjgzhZhmc"
            :zjjgzhGsmc="zjjgzhGsmc"
            :zjjgzhYhmc="zjjgzhYhmc"
            :zjjgzhXmmc="zjjgzhXmmc"
            :kfsId="kfsId"
            :hetongYwzh="hetongYwzh"
            @submitSuccess="submitSuccess"
          />
        </el-dialog> -->
      </TitleTable>

      <TitleTable
        title="对应的使用信息"
        style="height:50%;overflow-y:scroll;">
        <el-alert
          type="warning"
          center
          :closable="false">
          <div class="controls" style="background-color:#fdf6ec;width:100%">
            <span style="margin-left:100px">开始时间:</span> <el-date-picker v-model="startTime2" type="date" placeholder="选择开始时间" size="mini"></el-date-picker>
            <span>结束时间:</span><el-date-picker v-model="endTime2" type="date" placeholder="选择结束时间" size="mini"></el-date-picker>
            <el-button size="mini" type="success" @click="search2">查找</el-button>
            <el-button size="mini" type="success" @click="handlePrint2" @mouseover.native = "getDate">打印明细</el-button>
          </div>
        </el-alert>
        <el-table
          :data="tableData1"
          style="width: 100%"
          @cell-mouse-enter="cellMouseEnter">
          <el-table-column
            label="申报金额"
            align="center"
            prop="shiyongSbje">
          </el-table-column>
          <el-table-column
            label="划出帐号"
            align="center"
            prop="shiyongJgzh">
          </el-table-column>
          <el-table-column
            label="发放日期"
            align="center"
            prop="shiyongFfrq">
          </el-table-column>

        </el-table>
      </TitleTable>

      <el-table
        :data="tableData2"
        style="width:100%"
        @cell-mouse-enter="cellMouseEnter">
        <el-table-column
          label="缴款总金额"
          align="center"
          prop="jiaocunCount">
        </el-table-column>
        <el-table-column
          label="使用总金额"
          align="center"
          prop="shiyongCount">
        </el-table-column>
        <el-table-column
          label="账户总金额"
          align="center"
          prop="totalCount">
        </el-table-column>

      </el-table>
    </ContainerTwoType>
    <div id="printData1" style="width:700px;margin:0 auto;display:none">
      <h2 style="text-align:center;font-weight:bold">预售资金监管</h2>

      <table style="width:700px;margin:0 auto;text-align:center;font-size:16px;text-height:25px" border="1" cellspacing="0">
        <thead>
        <th style="text-align:center" colspan="8">【{{this.ldxxMc}}】截止到{{this.date}}期间的缴存记录</th>
        <tr>
          <td>买受人</td>
          <td>证件号码</td>
          <td>项目名称</td>
          <td>楼栋名称</td>
          <td>房号</td>
          <td>建筑面积</td>
          <td>缴款金额</td>
          <td>缴款日期</td>
        </tr>

        </thead>
        <tbody>
        <tr v-for="(item, index) in tableData" :key="index" >
          <th>{{item.jiaocunMsrxm}}</th>
          <th>{{item.jiaocunMsrzjhm}}</th>
          <th>{{item.jiaocunXmmc}}</th>
          <th>{{item.jiaocunLdmc}}</th>
          <th>{{item.jiaocunFh}}</th>
          <th>{{item.jiaocunFwmj}}</th>
          <th>{{item.jiaocunJkje}}</th>
          <th>{{item.jiaocunJkrq}}</th>
        </tr>
        </tbody>
        <th style="text-align:center" colspan="4">总金额</th><th style="text-align:center" colspan="4">{{this.tableData2[0].jiaocunCount}}</th>
      </table>
    </div>

    <div id="printData2" style="width:700px;margin:0 auto;display:none">
      <h2 style="text-align:center;font-weight:bold">预售资金监管</h2>
      <table style="width:700px;margin:0 auto;text-align:center;font-size:16px;text-height:25px" border="1" cellspacing="0">
        <thead>
        <th style="text-align:center" colspan="8">【{{this.ldxxMc}}】截止到{{this.date}}期间的缴存记录</th>
        <tr>

          <td>项目名称</td>
          <td>楼栋名称</td>
          <td>申报金额</td>
          <td>划出账号</td>
          <td>发放日期</td>
        </tr>

        </thead>
        <tbody>

        <tr v-for="(item, index) in tableData1" :key="index" >

          <th>{{item.shiyongXmmc}}</th>
          <th>{{item.shiyongLdmc}}</th>
          <th>{{item.shiyongSbje}}</th>
          <th>{{item.shiyongJgzh}}</th>
          <th>{{item.shiyongFfrq}}</th>
        </tr>
        </tbody>
        <th style="text-align:center" colspan="2">缴存总额</th><th style="text-align:center" colspan="3">{{this.tableData2[0].shiyongCount}}</th>
      </table>
    </div>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {ldzjxxApi} from "@/api/menu_4/ldzjxx";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "ldzjxx",
    mixins: [mixins.dialogMixin],
    components: {TitleTable, ContainerTwoType},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
            //  { id:1,name:"别问"},
            //  { id:2,name:"问就是不知道"},
          ]
        },
        tableData: [
        ],
        tableData1: [
        ],
        tableData2: [
          {jiaocunCount:0,shiyongCount:0,totalCount:0}
        ],

        date:"",
        person:"",
        startTime1:"",
        endTime1:"",
        startTime2:"",
        endTime2:"",
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 1,
        currentPage:1,
        pageSize:10,
        total:0,
        pages:1,
        selectedIndex: 0,
        xmxxXmbh:"",
        ldxxLdbh:"",
        ldxxMc:"",
        xmxxXmmc:"",



      }
    },

    created() {
      this.fetchNavInfo();
      //this.fetchData();
    },
    methods:{
      fetchNavInfo() {
        this.xmxxXmbh=this.$store.state.projectData.xmxxXmbh;
        this.xmxxXmmc=this.$store.state.projectData.xmxxXmmc;
        ldzjxxApi.getBuildingByXmbh(this.xmxxXmbh).then(ret => {
          this.navInfo.list = ret.data.map(item=>({
            ...item, id: item.ldxxLdbh, name: item.ldxxMc
          }));
          this.navInfo.list.unshift({id:-1, name: "请选择楼栋"});
        })
      },

      fetchData(id){

        ldzjxxApi.getInfoByLd(id).then(ret => {
          console.log(ret);
          console.log("where is my ...");
          this.tableData = ret.data.jiaocuns;
          this.tableData1=ret.data.shiyongs;
          console.log("taetae");

          this.tableData2[0].jiaocunCount=ret.data.jiaocunCount;
          this.tableData2[0].shiyongCount=ret.data.shiyongCount;
          this.tableData2[0].totalCount=ret.data.totalCount;
          console.log(this.tableData2.shiyongCount);
          console.log(ret.data.shiyongCount);


        })
      },
      reset(){
        this.endTime1="";
        this.endTime2="";
        this.startTime1="";
        this.startTime2="";
        this.person="";
      },
      getDate(){
        let myDate = new Date();
        this.date=myDate.toLocaleDateString();
      },
      liClick(index) {
        this.reset();
        this.selectedIndex = index;
        console.log("index:"+index);
        console.log(this.$store.state.projectData.xmxxXmbh);
        this.selectedIndex = this.navInfo.list[index];
        this.ldxxLdbh=this.navInfo.list[index].id;
        this.ldxxMc=this.navInfo.list[index].name;
        this.fetchData(this.ldxxLdbh);
      },
      search1(){
        ldzjxxApi.getJcInfo(this.ldxxLdbh,this.person,this.startTime1,this.endTime1).then(ret => {
          console.log(ret);
          console.log("where is my ...");
          this.tableData = ret.data.jiaocuns;
        })
      },

      search2(){
        ldzjxxApi.getSyInfo(this.ldxxLdbh,this.startTime2,this.endTime2).then(ret => {
          console.log(ret);
          console.log("where is my ...");
          this.tableData = ret.data.shiyongs;
        })
      },

      handlePrint1(){
        let obj=document.getElementById('printData1');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
      },
      handlePrint2(){
        let obj=document.getElementById('printData2');
        let newWindow=window.open("打印窗口","_blank");
        let docStr = obj.innerHTML;
        newWindow.document.write(docStr);
        newWindow.document.close();
        newWindow.print();
      },
      cellMouseEnter(row) {
        this.currentRow = row;
      },
      currentChange(num) {
        this.currentPage = num;
        this.fetchDataByAccountId(this.zjjgzhYhzh)
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
