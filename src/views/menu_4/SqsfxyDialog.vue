<template>
  <div>
  <div  v-if="dialogType===1">
    <el-form
        label-position="right"
        label-width="160px"
        size="mini"
        inline
        :model="form">
        <!-- 0添加 1编辑 2查看-->
        <el-form-item  label="甲方(监管机构)">
          <el-input v-model="form.hetongJgjgmc"></el-input>
        </el-form-item>
        <el-form-item  label="项目所处行政区">
          <el-input v-model="form.hetongXzdq"></el-input>
        </el-form-item>
        <el-form-item label="乙方(银行名称)">
           <el-select style="width: 180px" v-model="form.hetongYhmc" placeholder="请选择监管银行">
                <el-option
                v-for="(item,index) in zjjgzhYhid" :key="index"
                :label="item.yinhangTitle"
                :value="item.yinhangTitle" 
               >
                </el-option>
            </el-select>
         
        </el-form-item>
        <el-form-item label="用地性质">
          <el-input v-model="form.hetongTdxz"></el-input>
        </el-form-item>
        <el-form-item label="丙方(开发企业)" >
          <el-input v-model="form.hetongKfsmc"></el-input>
        </el-form-item>
        <el-form-item label="建设规模面积" class="area">
          <el-input v-model="form.hetongGhmj"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-input v-model="form.hetongXmmc"></el-input>
        </el-form-item>
        <el-form-item label="项目坐落">
          <el-input v-model="form.hetongXmdz"></el-input>
        </el-form-item>
        <el-form-item label="建设用地规划许可证号" >
          <el-input v-model="form.hetongSjgcxkzh"></el-input>
        </el-form-item>
        <el-form-item label="国有土地使用面积" class="area">
          <el-input v-model="form.hetongTdsymj"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form.hetongZhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账号Id">
          <el-input v-model="form.zjjgzhId"></el-input>
        </el-form-item>       
      </el-form>
       <div
      class="buttonGroup"style="margin:0 auto;width:100px;margin-top:20px">
      <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </el-button-group>
    </div>
  </div>
    <div class="detail myForm-mb5 myDialog"  v-loading="loading" v-if="dialogType===2">
      <!--详情部分-->
      <!-- <h3 class="title">第一部分  项目信息</h3> -->
      <!--//模式,0详情 1,修改-->
      <el-form
        label-position="right"
        label-width="160px"
        size="mini"
        inline
        :model="form1">
        <!-- 0添加 1编辑 2查看-->
        <el-form-item  label="甲方(监管机构)">
          <el-input v-model="form.hetongJgjgmc"></el-input>
        </el-form-item>
        <el-form-item  label="项目所处行政区">
          <el-input v-model="form.hetongXzdq"></el-input>
        </el-form-item>
        <el-form-item label="乙方(银行名称)">
           <el-input v-model="form.hetongYhmc"></el-input>
        </el-form-item>
        <el-form-item label="用地性质">
          <el-input v-model="form.hetongTdxz"></el-input>
        </el-form-item>
        <el-form-item label="丙方(开发企业)" >
          <el-input v-model="form.hetongKfsmc"></el-input>
        </el-form-item>
        <el-form-item label="建设规模面积">
          <el-input v-model="form.hetongGhmj"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-input v-model="form.hetongXmmc"></el-input>
        </el-form-item>
        <el-form-item label="项目坐落">
          <el-input v-model="form.hetongXmdz"></el-input>
        </el-form-item>
        <el-form-item label="建设用地规划许可证号" >
          <el-input v-model="form.hetongSjgcxkzh"></el-input>
        </el-form-item>
        <el-form-item label="国有土地使用面积" class="area">
          <el-input v-model="form.hetongTdsymj"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form.hetongZhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账号">
          <el-input v-model="form.hetongJgzh"></el-input>
        </el-form-item>       
      </el-form>
      <h3 class="title">收件情况</h3>
       <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="序号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="收件名称"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="收件性质"
            prop="bank">
          </el-table-column>
          <el-table-column
            label="份数"
            prop="jgzhName">
          </el-table-column>
       </el-table>
          <h3 class="title">显示收件图片</h3> 
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form2">
        <!-- 0添加 1编辑 2查看-->
        <el-form-item  label="初审意见" >
          <el-input v-model="form.xmxxXmmmlx" style="width:520px"></el-input>
        </el-form-item>
        <el-form-item  label="初审人">
          <el-input v-model="form.xmxxXmmc"></el-input>
        </el-form-item>
        <el-form-item label="初审时间">
          <el-input v-model="form.xmxxKfs"></el-input>
        </el-form-item>
        <el-form-item label="复审意见">
          <el-input v-model="form.xmxxXmbh" style="width:520px"></el-input>
        </el-form-item>
        <el-form-item label="复审人" >
          <el-input v-model="form.xmxxXmfzr"></el-input>
        </el-form-item>
        <el-form-item label="复审时间">
          <el-input v-model="form.xmxxXsdh"></el-input>
        </el-form-item>
       <el-form-item label="终审意见">
          <el-input v-model="form.xmxxXmbh" style="width:520px"></el-input>
        </el-form-item>
        <el-form-item label="终审人" >
          <el-input v-model="form.xmxxXmfzr"></el-input>
        </el-form-item>
        <el-form-item label="终审时间">
          <el-input v-model="form.xmxxXsdh"></el-input>
        </el-form-item>
      </el-form>
      <!-- <CenterButton v-if="editMode===1" @btnClick="handleUpdate" title="保存"/> -->
    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {sqsfxyApi} from "@/api/menu_4/sqsfxy";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  export default {
    name: "SqsfxyDialog",
    components: {CenterButton},
    props:{
      dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    },
      zjjgzhId:{type:Number},
      zjjgzhZhmc:{type:String},
      zjjgzhGsmc:{type:String},
      zjjgzhYhmc:{type:String},
      zjjgzhXmmc:{type:String},
      kfsId:{type:Number},

    },
    data() {
      return {
        form:{},
        form1:{},
        form2:{},
        tableData:{},
        loading: false,
        zjjgzhYhid:[],
        }
    },
    created(){
      this.getBank();
    },
    methods:{
      reset() {
        this.form = {};
      },
      
      fetchDetail(id) {
         sqjgzhApi.getAccountInfoById(id).then(ret => {
         //console.log(ret);
          this.form=ret.data.supervisedAccount;
        })
      },
      getBank(){
            sqjgzhApi.getBank().then(ret=>{
                this.zjjgzhYhid=ret.data;
            })
        },
     onSubmit() {
          sqsfxyApi.addContract({...this.form,kfsId:this.kfsId}).then(ret => {
          if (ret.code !== 200) {
          this.$message.error(ret.message);
        } else {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        }
      });
    },
    getBankInfo(){
        console.log("1111111111111111");
        console.log(this.zjjgzhId);
        console.log(this.zjjgzhZhmc);
        this.form.zjjgzhId = this.zjjgzhId;
        this.form.hetongZhmc = this.zjjgzhZhmc;
        this.form.hetongKfsmc = this.zjjgzhGsmc;
        this.form.hetongYhmc = this.zjjgzhYhmc;
        this.form.hetongXmmc=this.zjjgzhXmmc;
        // sqsfxyApi.getProjectByName(this.zjjgzhXmmc).then(ret=>{
        //     //this.form.hetongTdxz=
        //     this.form.hetongGhmj=ret.data.xmxxGhxkmj;
        //     this.form.hetongXmdz=ret.data.xmxxJtzl;
        //     this.form.hetongSjgcxkzh=ret.data.kfsYyzh;
        //     //this.form.hetongTdsymj=
        // })
    },
    setMode(mode,id){
      console.log("00000000000");
      
      if(mode===1){
        this.getBankInfo();
      }else if(mode===2){

      }

    },
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