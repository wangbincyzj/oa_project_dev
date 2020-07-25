<template>
<div class="KfzzglDialog">
    <el-form
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      :model="form">
      
      
     <el-form-item label="公司名称" >
        <el-input v-model="form.nianjianGsmc" ></el-input>
      </el-form-item>
      <el-form-item label="年检年度">
        <el-input v-model="form.nianjianSznf" ></el-input>
      </el-form-item>
       <el-form-item label="资质等级">
        <el-select v-model="form.nianjianZzdj" placeholder="请选择" style="width:180px">
            <el-option
            v-for="item in zzdjList"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="资质编号" >
        <el-input v-model="form.zizhiZzzh" ></el-input>
      </el-form-item>
      <el-form-item label="批准日期">
         <el-date-picker v-model="form.nianjianPzkssj" type="date" placeholder="选择日期" style="width:185px"></el-date-picker>
      </el-form-item>
       <el-form-item label="截止日期">
       <el-date-picker v-model="form.nianjianPzjssj" type="date" placeholder="选择日期" style="width:185px"></el-date-picker>
      </el-form-item>
     
       <!-- <el-form-item label="审批日期">
        <el-date-picker v-model="form.value1"  type="date" placeholder="选择日期" style="width:180px"></el-date-picker>
    </el-date-picker> 
    <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>-->
      
       <el-form-item label="备注信息">
        <el-select v-model="form.nianjianBzxx" placeholder="请选择" style="width:185px">
            <el-option
            v-for="item in bzxxList"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
      </el-form-item>
       
      <el-form-item label="上传资质">
        <el-input v-model="form.nianjianZspic" style="width:160px"></el-input><el-button>上传</el-button>
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
import {zznjglApi} from "@/api/menu_1/zznjgl";
import {businessApi} from "@/api/menu_3/__Business";
export default {
    name:"KfzzglDialog",
    props:{
        cqxzId: {type:Number},//type: [String, Number]
        dialogType: {
            default: 1,  // 添加
            enum: [1, 2/*更正*/]
      }
    },
    data(){
        return{
            ywxl:[],
            options:[],
            zzdjList:["一级","二级","三级","暂定级"],
            bzxxList:["开发资质延期","资质等级升级"],
            form:{
               nianjianGsmc:"",
               nianjianSznf:"",
               nianjianZzdj:"",
               zizhiZzzh:"",
               nianjianPzkssj:"",
               nianjianPzjssj:"",
               nianjianBzxx:"",
               nianjianZspic:"",
            },
            formBlank:{
               nianjianGsmc:"",
               nianjianSznf:"",
               nianjianZzdj:"",
               zizhiZzzh:"",
               nianjianPzkssj:"",
               nianjianPzjssj:"",
               nianjianBzxx:"",
               nianjianZspic:"",
            }

        }
    },
    methods:{
        reset(){
            this.form={...this.formBlank};
        },
        getBussinessType() {
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
        addData(){
                        
            // let ywxlId = 0;
            //     if (this.ywlx.length < 2) {
            //     this.$message.error("请选择业务类型")
            //     return
            //     };
            // ywxlId = this.ywlx[1];
            // console.log(this.ywlx);
            // console.log("ywxlId="+ywxlId);
      
      
            zznjglApi.addInspection({...this.form,kfsId:this.$store.state.projectData.kfsId}).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("添加成功");
            this.$emit("submitSuccess")
          }
        })
        },
        updateData(){
                
    //   let ywxlId = 0;
    //     if (this.ywlx.length < 2) {
    //       this.$message.error("请选择业务类型")
    //       return
    //     };
    //   ywxlId = this.ywlx[1];
             zznjglApi.updateInspection({...this.form,kfsId:this.$store.state.projectData.kfsId}).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("修改成功");
            this.$emit("submitSuccess")
          }
        })
        },
         fetchDetail(id){
             zznjglApi.getInspectionById(id).then(ret => {
                this.form=ret.data;
        })
        },

        onSubmit(){
        if (this.dialogType === 1) {
          this.addData();
        } else if (this.dialogType === 2) {
          this.updateData();
        }
        },
        setMode(mode,id){
          if(mode===1){
              this.form.nianjianGsmc=this.$store.state.projectData.xmxxKfs;
        
          //this.getBussinessType();
         
          }else if(mode===2||mode===3){
                this.fetchDetail(id);
                
        }
        },
    }
}
</script>
<style scoped lang="scss">
 .count {
    position: relative;

    &::after {
      content: "万元";
      display: block;
      position: absolute;
      right: -30px;
      //   color: red;
      font-size: 14px;
      top: 1px;
    }
  }
</style>
