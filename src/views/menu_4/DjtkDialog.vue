<template>
  <div class="FwdDjtkDialog">
    <div v-if="dialogType===1">
      <!-- 房屋定金   退款弹框    1049906948-->
      <el-form label-position="right" label-width="150px" size="mini" inline :model="form">
        <el-form-item label="开发商">
          <el-input v-model="form.djsyKfs" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.djsyXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="监管银行名称">
          <el-input v-model="form.djsyJgyhmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管账户">
          <el-input v-model="form.djsyJgzh" disabled></el-input>
        </el-form-item>

        <el-form-item label="汇入账户名称">
          <el-input v-model="form.djsyHrzhmc"></el-input>
        </el-form-item>

        <el-form-item label="申请人姓名">
          <el-input v-model="form.djsySqrxm"></el-input>
        </el-form-item>
        <el-form-item label="汇入账户银行" >
          <el-input v-model="form.djsyHrzhyh"></el-input>
        </el-form-item>

        <el-form-item label="汇入账户" >
          <el-input v-model="form.djsyHrzhzh"></el-input>
        </el-form-item>

        <el-form-item label="申报金额">
          <el-input v-model="form.djsySbje" disabled></el-input>
        </el-form-item>
        <el-form-item label="联系方式">
          <el-input v-model="form.djsySqrlxdh"></el-input>
        </el-form-item>
         <!-- <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>    -->
        <el-form-item label="用款事由">
          <el-input type="textarea" v-model="form.djsyYksy"></el-input>
        </el-form-item>
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="onSubmit" size="mini">立即提交</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { djtkApi } from "@/api/menu_4/djtk";
import {businessApi} from "@/api/menu_3/__Business";

export default {
  name: "FwdDjtkDialog",
  props: {
    dialogType: {
      type: Number
    },
    amount:{type:Number },
    jgyh:{type:String},
    djsyJgzh:{type:String},
    djsyJgyhid:{type:Number }

  },
  data() {
    return {
      form: {
        djsyKfs:"",
      },
      formBlank:{},
      djsyDjid:"",
      ywlx: [],
      options: [],
    };
  },
  created(){
    //this.getBussinessType();
  },
  methods: {
    reset(){
      this.form={...this.formBlank};
    },
    getBussinessType(){
      businessApi.getBusinessType().then(ret => {
          // value, label, children []
          this.options = ret.data.map(dl => {
            let obj = {};  // value同意用编号
            obj.label = dl.xtywdxName;
            obj.value = dl.xtywdxDxbh;
            obj.xtywdxDxbh = dl.xtywdxDxbh;
            obj.children = dl.children.map(zl => ({
              label: zl.xtywxxName,
              value: zl.xtywxxXxbh,
              xtywxxId: zl.xtywxxId
            }));
            return obj
          })
        })
      
    },
    onSubmit() {
     
        djtkApi.addfundUse({ ...this.form,djsyDjid:this.djsyDjid,djsyJgyhid:this.djsyJgyhid,
        djsyXmbh:this.$store.state.projectData.xmxxXmbh,
        kfsRwbh:this.$store.state.rwbh,
        ywxlBh:8026001}).then(ret => {
          if(ret.code===200){
            this.$message.success("操作成功");
            this.$emit("submitSuccess");
          }else{
            this.$message.error(ret.message||"操作失败")
          }
        })
    },  
    setMode(index, id) {
    this.djsyDjid=id;
    console.log(this.djsyDjid);
    
     this.form.djsyKfs=this.$store.state.projectData.xmxxKfs;
     this.form.djsyXmmc=this.$store.state.projectData.xmxxXmmc;
     this.form.djsySbje=this.amount;
     this.form.djsyJgyhmc=this.jgyh;
     this.form.djsyJgzh=this.djsyJgzh;


    }
  },
  
};
</script>

<style>
</style>