<template>
  <div class="TjjgzhDialog">
    <div v-if="dialogType===1">
    <el-form
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      :model="form"
      
    >

      <el-form-item label="项目名称">
        <el-input v-model="form.zjjgzhXmmc"></el-input>
      </el-form-item>

      <el-form-item label="项目编号">
        <el-input v-model="form.xmxxXmbh"></el-input>
      </el-form-item>
      <el-form-item label="企业名称">
        <el-input v-model="form.zjjgzhGsmc"></el-input>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.zjjgzhLxdh"></el-input>
      </el-form-item>
      <el-form-item label="住宅面积" class="area">
        <el-input v-model="form.zjjgzhZzmj"></el-input>
      </el-form-item>
      <el-form-item label="住宅套数">
        <el-input v-model="form.zjjgzhZzts"></el-input>
      </el-form-item>
      <el-form-item label="非住宅面积" class="area">
        <el-input v-model="form.zjjgzhFzzmj"></el-input>
      </el-form-item>
       <el-form-item label="非住宅套数">
        <el-input v-model="form.zjjgzhFzzts"></el-input>
      </el-form-item>
       <el-form-item label="楼栋名称">
        <el-select style="width: 180px" v-model="form.zjjgzhLdbh" placeholder="请选择楼栋">
                <el-option
                v-for="(item,index) in zjjgzhLdbh" :key="index"
                :label="item.ldxxMc"
                :value="item.ldxxLdbh" 
                @click.native="getLdName(item.ldxxMc)">
                </el-option>
            </el-select>
      </el-form-item>
      <el-form-item label="银行名称">
        <el-select style="width: 180px" v-model="form.zjjgzhYhid" placeholder="请选择监管银行">
                <el-option
                v-for="(item,index) in zjjgzhYhid" :key="index"
                :label="item.yinhangTitle"
                :value="item.yinhangId" 
                @click.native="getBankName(item.yinhangTitle)">
                </el-option>
            </el-select>
      </el-form-item>
       <el-form-item label="监管账户名称">
        <el-input v-model="form.zjjgzhZhmc"></el-input>
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
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1">
       
        <el-form-item  label="项目名称" >
          <el-input v-model="form1.zjjgzhXmmc"></el-input>
        </el-form-item>
        <el-form-item  label="项目编号">
          <el-input v-model="form1.xmxxXmbh"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form1.zjjgzhGsmc"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form1.zjjgzhLxdh"></el-input>
        </el-form-item>
        <el-form-item label="住宅面积" class="area">
          <el-input v-model="form1.zjjgzhZzmj"></el-input>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input v-model="form1.zjjgzhZzts"></el-input>
        </el-form-item>
        <el-form-item label="非住宅面积" class="area">
          <el-input v-model="form1.zjjgzhFzzmj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input v-model="form1.zjjgzhFzzts"></el-input>
        </el-form-item>
        <el-form-item label="拟设监管银行" >
          <el-input v-model="form1.zjjgzhYhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管银行ID" >
          <el-input v-model="form1.zjjgzhYhid"></el-input>
        </el-form-item>
        <el-form-item label="楼栋名称">
          <el-input v-model="form1.zjjgzhLdmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form1.zjjgzhZhmc"></el-input>
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
        :model="form">
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
        <el-form-item label="监管编号">
          <el-input v-model="form.kfsYyzh"></el-input>
        </el-form-item>
        <el-form-item label="缮证时间">
          <el-input v-model="form.xmxxJtzl"></el-input>
        </el-form-item>
        <el-form-item label="开户网点" >
          <el-input v-model="form.xmxxZydmj"></el-input>
        </el-form-item>
        <el-form-item label="网点地址" >
          <el-input v-model="form.xmxxZzjmj"></el-input>
        </el-form-item>
        <el-form-item label="监管账户">
          <el-input v-model="form.xmxxGhxkmj"></el-input>
        </el-form-item>
        <el-form-item label="开户日期">
          <el-input v-model="form.xmxxGhxkds"></el-input>
        </el-form-item>     
         <el-form-item label="监管账户名称">
          <el-input v-model="form.xmxxhxkds"></el-input>
        </el-form-item>   
      </el-form>
      <!-- <CenterButton v-if="editMode===1" @btnClick="handleUpdate" title="保存"/> -->
   
  
    </div>
  </div>
</template>
<script>
import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
export default {
  name: "TjjgzhDialog",
  props: {
    zjjgzhId: { type: Number }, //type: [String, Number]
    xmxxXmbh:{type:String},
    dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    }
  },
  data() {
    return {
      zjjgzhLdbh:[],
      zjjgzhYhid:[],
      ldName:"",
      bankName:"",
      form1:{},
      tableData:[],
      form: {
        xmxxXmbh: "",
        zjjgzhXmmc:"",
        zjjgzhGsmc:"",
        jgzhLxdh: "",
        zjjgzhZzmj: "",
        zjjgzhZzts:"",
        zjjgzhFzzmj: "",
        zjjgzhFzzts: "",
        zjjgzhLdmc:"",
      },
      formBlank: {
        xmxxXmbh: "",
        zjjgzhXmmc:"",
        zjjgzhGsmc:"",
        jgzhLxdh: "",
        zjjgzhZzmj: "",
        zjjgzhZzts:"",
        zjjgzhFzzmj: "",
        zjjgzhFzzts: "",
        zjjgzhLdmc:"",
      }
    };
  },
  created(){
      this.getLd();
      this.getBank();
  },
  methods: {
    reset() {
      this.form = { ...this.formBlank };
    },
    getLd(){
            sqjgzhApi.getLd().then(ret=>{
                this.zjjgzhLdbh=ret.data;
            })
        },
     getBank(){
            sqjgzhApi.getBank().then(ret=>{
                this.zjjgzhYhid=ret.data;
            })
        },
       getLdName(name){
            this.ldName=name;
            console.log(this.ldName);
            
        },
        getBankName(name){
            this.bankName=name;
            console.log(this.bankName);
        },
    addData() {
      sqjgzhApi.addAccount({...this.form,zjjgzhLdmc:this.ldName,zjjgzhYhmc:this.bankName,kfsId:this.$store.state.projectData.kfsId}).then(ret => {
        if (ret.code !== 200) {
          this.$message.error(ret.message);
        } else {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        }
      });
    },
    DetailData(id) {
      
     sqjgzhApi.getAccountInfoById(id).then(ret => {
         //console.log(ret);
          this.form1=ret.data.supervisedAccount;
        })
    },
    onSubmit() {
      if (this.dialogType === 1) {
        this.addData();
      } 
      // else if (this.dialogType === 2) {
      //   this.DetailData();
      // }
    },
    setMode(mode, id) {
      if(mode===1){
     

        sqjgzhApi.getProjectById(id).then(ret=>{
          this.form.xmxxXmbh=ret.data.xmxxXmbh;
          this.form.zjjgzhXmmc=ret.data.xmxxXmmc;
          this.form.zjjgzhGsmc=ret.data.xmxxKfs;
        })
              }
      else if (mode === 2) {
       this.DetailData(id);
      }
    }
  }
};
</script>
<style scoped lang="scss">
  
  .area{
    position: relative;
    &::after{
      content: "M²";
      display: block;
      position: absolute;
      right: -20px;
    //   color: red;
      font-size: 15px;
      top: 6px;
    }
  }
  .title{
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }
  
</style>