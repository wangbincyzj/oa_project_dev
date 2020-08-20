<template>
 <div class="dialog">
    <el-tabs
      type="border-card"
      value="first"
    >
      <el-tab-pane label="1.账户申请信息详情" name="first">
       
          <div class="dialogItem">
            <div class="itemIndex">1</div>
            <div class="itemTitle">账户申请信息详情</div>
          </div>
           <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1"
      >
        <el-form-item label="项目名称">
          <el-input v-model="form1.zjjgzhXmmc"></el-input>
        </el-form-item>
        <el-form-item label="项目编号">
          <el-input v-model="form1.xmxxXmbh"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form1.zjjgzhGsmc"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form1.zjjgzhLxdh"></el-input>
        </el-form-item>
        <el-form-item
          label="住宅面积"
          class="area"
        >
          <el-input v-model="form1.zjjgzhZzmj"></el-input>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input v-model="form1.zjjgzhZzts"></el-input>
        </el-form-item>
        <el-form-item
          label="非住宅面积"
          class="area"
        >
          <el-input v-model="form1.zjjgzhFzzmj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input v-model="form1.zjjgzhFzzts"></el-input>
        </el-form-item>
       
         <el-form-item label="拟设监管银行">
          <el-input v-model="form1.zjjgzhYhmc"></el-input>
        </el-form-item>
         <el-form-item label="楼栋名称">
          <el-input v-model="form1.zjjgzhLdmc"></el-input>
        </el-form-item>
         <el-form-item label="监管账户名称">
          <el-input v-model="form1.zjjgzhZhmc"></el-input>
        </el-form-item>
         <el-form-item label="监管账号">
          <el-input v-model="form1.zjjgzhYhzh"></el-input>
        </el-form-item>
        <el-form-item label="开户网点">
          <el-input v-model="form1.zjjgzhWdmc"></el-input>
        </el-form-item>
         <el-form-item label="网点地址">
          <el-input v-model="form1.zjjgzhWddz"></el-input>
        </el-form-item>
        <el-form-item label="开户人">
          <el-input v-model="form1.zjjgzhKhrxm"></el-input>
        </el-form-item>
         <el-form-item label="开户日期">
          <el-input v-model="form1.zjjgzhKhtime"></el-input>
        </el-form-item>
      </el-form>
       </el-tab-pane>

      <el-tab-pane label="2.收件情况" name="second"> 
        
          <div class="dialogItem">
            <div class="itemIndex">2</div>
            <div class="itemTitle">收件列表</div>
          </div>
          
      <ReceiveList ref="receiveList"/>
       
      </el-tab-pane>
      <el-tab-pane label="3.审核意见" name="third"> 
       
          <div class="dialogItem">
            <div class="itemIndex">3</div>
            <div class="itemTitle">审核意见</div>
          </div>
          <OpinionList ref="opinionList"/>
      </el-tab-pane>
    </el-tabs>
   
 </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoList from "@/components/common/infoList/InfoList";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  import ReceiveList from "@/components/current/receiveList/ReceiveList";
  import OpinionList from "@/components/current/opinionList/OpinionList";
  export default {
    name: "DykhtzdDialog",
    components: {CenterButton,InfoList,ReceiveList,OpinionList},
    props:{
     dialog:{
        default: 1 //模式,0详情 1,修改
      },
      zjjgzhId:{type:Number},
       zjjgzhYhzh:{type:String},
       zjjgzhYwzh:{type:String},
      zjjgzhWdmc:{type:String},
      zjjgzhWddz:{type:String},
      zjjgzhKhrxm:{type:String},
      zjjgzhKhtime:{type:String},
    },
    data() {
      return {
        form:{},
        form1:{},
        opinionList:[],
        businessReceives:[],
        tableData:{},
        loading: false
      }
    },
    methods:{
      reset() {
        this.form = {};
      },
      fetchDetail(id) {
       
        sqjgzhApi.getAccountInfoById(id).then(ret => {
         //console.log(ret);
          this.form1=ret.data.supervisedAccount;
          
        this.form1.zjjgzhYhzh=this.zjjgzhYhzh;
        this.form1.zjjgzhWdmc=this.zjjgzhWdmc;
        this.form1.zjjgzhWddz =this.zjjgzhWddz;
        this.form1.zjjgzhKhrxm=this.zjjgzhKhrxm;
        this.form1.zjjgzhKhtime=this.zjjgzhKhtime;
        })
      },
       fetchOpinion(id){
         sqjgzhApi.getShlcDetail(id).then(ret => {
          this.opinionList = ret.data
        })
       },
    fetchShouJianByYwzh(id){
         sqjgzhApi.selectByYwzh(id).then(ret => {
          this.businessReceives = ret.data.map(item => ({
            shoujianTitle: item.ywsjTitle,
            shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
            shoujianFenshu: item.ywsjFenshu
          }))
        })
      },
     setMode(mode, id,ywzh,logId) {
     if (mode === 2) {
       this.fetchDetail(id);
       console.log(this.$refs);       
       console.log("ywzh"+ywzh);
       console.log("logId"+logId);
       this.$nextTick(()=>{
        this.$refs.ReceiveList.fetchData(ywzh);
        this.$refs.OpinionList.fetchData(logId)
       })
    
      }
    }
    }
  }
</script>

<style scoped lang="scss">
  .title{
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }
 .area{
    position: relative;
    &::after{
      content: "M²";
      display: block;
      position: absolute;
      right: -20px;
    //   color: red;
      font-size: 14px;
      top: 6px;
    }
    }
  .count{
    position: relative;
    &::after{
      content: "(万元)";
      display: block;
      position: absolute;
      right: -32px;
      color: red;
      font-size: 12px;
      top: 8px;
    }
  }
</style>
<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .dialogItem {
    height: 30px;
    display: flex;
    margin-bottom: 20px;
    line-height: 30px;
    padding-left: 10px;

    .itemIndex {
      text-align: center;
      height: 30px;
      width: 30px;
      background: $brand;
      border-radius: 50%;
      color: white;
      font-size: 20px;
      font-weight: 600;
      margin-right: 10px;
    }

    .itemTitle {
      font-weight: 600;
      font-size: 18px;
    }
  }

  .title {
    font-weight: 600;
    line-height: 2;
    margin-top: 20px;
    font-size: 18px;
  }

  .receiveList {
    .item {
      background-color: rgba(228, 231, 237, 0.54);
      display: flex;
      height: 80px;
      margin: 5px 0;

      .no {
        width: 40px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-info;
      }

      .info {
        width: 600px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          font-weight: 600;
        }

        .attr {
          display: flex;

          div {
            margin-right: 20px;
            color: $text-info;

            span {
              color: $text-weight;
              font-weight: 600;
            }
          }
        }
      }

      .pics {
        padding: 10px 0;
        flex: 1;
        display: flex;

        div.selectImg {

        }
      }
    }
  }
</style>
