<template>
<div class="KfzzglDialog">
    <el-form
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      :model="form">
      
      
     <el-form-item label="公司名称" >
        <el-input v-model="form.cqxzName" ></el-input>
      </el-form-item>
      <el-form-item label="公司法人">
        <el-input v-model="form.cqxzPx" ></el-input>
      </el-form-item>
       <el-form-item label="联系人">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" >
        <el-input v-model="form.cqxzName" ></el-input>
      </el-form-item>
      <el-form-item label="注册地址">
        <el-input v-model="form.cqxzPx" ></el-input>
      </el-form-item>
       <el-form-item label="注册资金">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
      <el-form-item label="营业证号" >
        <el-input v-model="form.cqxzName" ></el-input>
      </el-form-item>
      <el-form-item label="注册日期">
        <el-input v-model="form.cqxzPx" ></el-input>
      </el-form-item>
       <el-form-item label="开户银行">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
       <el-form-item label="银行账户">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
       <el-form-item label="资质等级">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
       <el-form-item label="资质证号">
        <el-input v-model="form.cqxzGzyy"></el-input>
      </el-form-item>
       <el-form-item label="审批日期">
        <el-date-picker v-model="value1"  type="date" placeholder="选择日期" style="width:200px"></el-date-picker>
    </el-date-picker>
      </el-form-item>
       <el-form-item label="截止日期">
       <el-date-picker v-model="value1"  type="date" placeholder="选择日期" style="width:200px"></el-date-picker>
      </el-form-item>
       <el-form-item label="申报等级">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="申报等级">
        <el-select v-model="value" placeholder="请选择">
            <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
      </el-form-item>
 </el-form>

    <div  class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px">
      <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit" >立即提交</el-button>
      </el-button-group>
    </div>
</div>
</template>
<script>
import {kfzzglApi} from "@/api/menu_1/kfzzgl";
export default {
    name:"TjcqxzDialog",
    props:{
        cqxzId: {type:Number},//type: [String, Number]
        dialogType: {
            default: 1,  // 添加
            enum: [1, 2/*更正*/]
      }
    },
    data(){
        return{

            form:{
                cqxzName:"",
                cqxzPx:0,
            },
            formBlank:{
                cqxzName:"",
                cqxzPx:0,
            }

        }
    },
    methods:{
        reset(){
            this.form={...this.formBlank};
        },
        addData(){
            tjcqxzApi.addCqxz(this.form).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("添加成功");
            this.$emit("submitSuccess")
          }
        })
        },
        updateData(){
             tjcqxzApi.updateCqxz(this.form).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("修改成功");
            this.$emit("submitSuccess")
          }
        })
        },
         correctData(){
             tjcqxzApi.correctCqxz(this.form).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("更正成功");
            this.$emit("submitSuccess")
          }
        })
        },

        onSubmit(){
        if (this.dialogType === 1) {
          this.addData();
        } else if (this.dialogType === 2) {
          this.updateData();
        }else if (this.dialogType === 3) {
          this.correctData();}
        },
        setMode(mode,id){
          if(mode===1){
            tjcqxzApi.getMaxXh().then(ret => {
           this.form.cqxzPx=ret.data;
         })
          }else if(mode===2||mode===3){
                 this.cqxzId = id;
                 tjcqxzApi.getCqxzInfoById(id).then(ret => {
                 this.form = {...ret.data}; //
                 } ) 
        }
        },
    }
}
</script>