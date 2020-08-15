<template>
<div class="KfzzglDialog">
    <el-form
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      :model="form" v-if="dialogType===1||dialogType===2">
     <el-form-item label="公司名称" >
        <el-input v-model="form.zizhiGsmc" ></el-input>
      </el-form-item>
      <el-form-item label="公司法人">
        <el-input v-model="form.zizhiFrxm" ></el-input>
      </el-form-item>
       <el-form-item label="联系人">
        <el-input v-model="form.zizhiLxrxm"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" >
        <el-input v-model="form.zizhiLxdh" ></el-input>
      </el-form-item>
      <el-form-item label="注册地址">
        <el-input v-model="form.zizhiZcdz" ></el-input>
      </el-form-item>
       <el-form-item label="注册资金">
        <el-input v-model="form.zizhiZczj" class="count"></el-input>
      </el-form-item>
      <el-form-item label="营业证号" >
        <el-input v-model="form.zizhiYyzh" ></el-input>
      </el-form-item>
      <el-form-item label="注册日期">
        <el-input v-model="form.zizhiZcrq" ></el-input>
      </el-form-item>
       <el-form-item label="开户银行">
        <el-input v-model="form.zizhiKhyh"></el-input>
      </el-form-item>
       <el-form-item label="银行账户">
        <el-input v-model="form.zizhiYhzh"></el-input>
      </el-form-item>
       <el-form-item label="资质等级">
        <el-input v-model="form.zizhiZzdj"></el-input>
      </el-form-item>
       <el-form-item label="资质证号">
        <el-input v-model="form.zizhiZzzh"></el-input>
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
      </el-form-item>
       <el-form-item label="截止日期">
       <el-date-picker v-model="form.zizhiJzrq"  type="date" placeholder="选择日期" style="width:180px"></el-date-picker>
      </el-form-item>
       <el-form-item label="申报等级">
        <el-select v-model="form.zizhiSbzzdj" placeholder="请选择" style="width:180px">
            <el-option
            v-for="item in sbdjList"
            :key="item"
            :label="item"
            :value="item">
            </el-option>
        </el-select>
      </el-form-item>
       <el-form-item label="申报类型">
        <el-select v-model="form.zizhiSbsx" placeholder="请选择" style="width:180px">
            <el-option
            v-for="(item,index) in sblxList"
            :key="item"
            :label="item"
            :value="index+1">
            </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="申报意见">
        <el-input v-model="form.zizhiSbyjxx" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-input v-model="form.zizhiBzxx" type="textarea"></el-input>
      </el-form-item>
 </el-form>

    <div  class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px" v-if="dialogType===1||dialogType===2">
      <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit" >立即提交</el-button>
      </el-button-group>
    </div>
     <div v-if="dialogType===4">
      <ConfirmReceive ref="ref1" :ywzh="zizhiYwzh" type="CYZT_ZIZHI"/>
    </div>
    <div v-if="dialogType===9">
      <ManageReceive ref="ref2"/>
    </div>
    <div v-if="dialogType===3" >
    <el-tabs
      type="border-card"
      value="first"
    >
      <el-tab-pane label="1.开发资质申请信息" name="first">
       
      <el-form
            disabled
            v-loading="loading"
            label-position="right"
            label-width="150px"
            size="mini"
            inline
            :model="form">
            <el-form-item label="公司名称" >
        <el-input v-model="form.zizhiGsmc" ></el-input>
      </el-form-item>
      <el-form-item label="公司法人">
        <el-input v-model="form.zizhiFrxm" ></el-input>
      </el-form-item>
       <el-form-item label="联系人">
        <el-input v-model="form.zizhiLxrxm"></el-input>
      </el-form-item>
      <el-form-item label="联系电话" >
        <el-input v-model="form.zizhiLxdh" ></el-input>
      </el-form-item>
      <el-form-item label="注册地址">
        <el-input v-model="form.zizhiZcdz" ></el-input>
      </el-form-item>
       <el-form-item label="注册资金">
        <el-input v-model="form.zizhiZczj" class="count"></el-input>
      </el-form-item>
      <el-form-item label="营业证号" >
        <el-input v-model="form.zizhiYyzh" ></el-input>
      </el-form-item>
      <el-form-item label="注册日期">
        <el-input v-model="form.zizhiZcrq" ></el-input>
      </el-form-item>
       <el-form-item label="开户银行">
        <el-input v-model="form.zizhiKhyh"></el-input>
      </el-form-item>
       <el-form-item label="银行账户">
        <el-input v-model="form.zizhiYhzh"></el-input>
      </el-form-item>
       <el-form-item label="资质等级">
        <el-input v-model="form.zizhiZzdj"></el-input>
      </el-form-item>
       <el-form-item label="资质证号">
        <el-input v-model="form.zizhiZzzh"></el-input>
      </el-form-item>
       <el-form-item label="截止日期">
         <el-input v-model="form.zizhiJzrq" ></el-input>  
      </el-form-item>
       <el-form-item label="申报等级">
        <el-input v-model="form.zizhiSbzzdj" ></el-input>        
      </el-form-item>
       <el-form-item label="申报类型">
        <el-input v-model="form.zizhiSbsx" ></el-input>
      </el-form-item>
      <el-form-item label="申报意见">
        <el-input v-model="form.zizhiSbyjxx" type="textarea"></el-input>
      </el-form-item>
      <el-form-item label="备注信息">
        <el-input v-model="form.zizhiBzxx" type="textarea"></el-input>
      </el-form-item>
    </el-form>
      
      </el-tab-pane>      
      <el-tab-pane label="2.收件列表" name="second">
        <ReceiveList ref="receiveList"/>
      </el-tab-pane>
      <el-tab-pane label="3.审核意见" name="third">
        <OpinionList ref="opinionList"/>
      </el-tab-pane>
    </el-tabs>
    </div>
</div>

</template>
<script>
import {kfzzglApi} from "@/api/menu_1/kfzzgl";
import {businessApi} from "@/api/menu_3/__Business";
import ConfirmReceive from "@/components/current/confirmReceive/ConfirmReceive";
import ManageReceive from "@/components/current/manageReceive/ManageReceive";
import ReceiveList from "@/components/current/receiveList/ReceiveList";
import OpinionList from "@/components/current/opinionList/OpinionList";
export default {
    name:"KfzzglDialog",
     components: {ConfirmReceive,ManageReceive,ReceiveList,OpinionList},
    props:{
        zizhiId: {type:Number},//type: [String, Number]
        dialogType: {
            default: 1,  // 添加
            enum: [1, 2/*更正*/]
      }
    },
    data(){
        return{
            ywxl:[],
            options:[],
            zizhiYwzh:"",
            sbdjList:["一级","二级","三级","暂定级"],
            sblxList:["开发资质申请","暂定资质申请"],
            form:{
                zizhiGsmc:"",
                zizhiFrxm:"",
                zizhiLxrxm:"",
                zizhiLxdh:"",
                zizhiZcdz:"",
                zizhiZczj:"",
                zizhiYyzh:"",
                zizhiZcrq:"",
                zizhiKhyh:"",
                zizhiYhzh:"",
                zizhiZzdj:"",
                zizhiZzzh:"",
                zizhiJzrq:"",
                zizhiSbzzdj:"",
                zizhiSbsx:"",
                zizhiSbyjxx:"",
                zizhiBzxx:"",

            },
            formBlank:{
               zizhiGsmc:"",
                zizhiFrxm:"",
                zizhiLxrxm:"",
                zizhiLxdh:"",
                zizhiZcdz:"",
                zizhiZczj:"",
                zizhiYyzh:"",
                zizhiZcrq:"",
                zizhiKhyh:"",
                zizhiYhzh:"",
                zizhiZzdj:"",
                zizhiZzzh:"",
                zizhiJzrq:"",
                zizhiSbzzdj:"",
                zizhiSbsx:"",
                zizhiSbyjxx:"",
                zizhiBzxx:"",
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
      
      
            kfzzglApi.addQualification({...this.form,kfsId:this.$store.state.projectData.kfsId}).then(ret => {
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
             kfzzglApi.updateQualification({...this.form,kfsId:this.$store.state.projectData.kfsId}).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message)
          } else {
            this.$message.success("修改成功");
            this.$emit("submitSuccess")
          }
        })
        },
         fetchDetail(id){
             kfzzglApi.getQualicationById(id).then(ret => {
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
        setMode(mode,id,logId,ywzh){
          this.zizhiYwzh=ywzh;
          if(mode===1){
          kfzzglApi.getkfsDetail(this.$store.state.projectData.kfsId).then(ret => {
              console.log(ret);
              this.form.zizhiGsmc =ret.data.enterprises.rwqyxxTitle; 
              this.form.zizhiFrxm=ret.data.enterprises.rwqyxxFaren; 
              this.form.zizhiLxrxm=ret.data.enterprises.rwqyxxLxrxm;
              this.form.zizhiLxdh=ret.data.enterprises.rwqyxxLxdh;
              this.form.zizhiZcdz=ret.data.enterprises.rwqyxxZcdz;
              this.form.zizhiZczj=ret.data.enterprises.rwqyxxZczj;
              this.form.zizhiYyzh=ret.data.enterprises.rwqyxxYyzh;
              this.form.zizhiZcrq=ret.data.enterprises.rwqyxxZcrq;
              this.form.zizhiZzdj=ret.data.enterprises.rwqyxxZzdj;
              this.form.zizhiZzzh=ret.data.enterprises.rwqyxxZzbh;
              console.log(this.form.zizhiZcrq);
              
          } ) 
         
          }else if(mode===2){
                this.fetchDetail(id);
        }else if(mode===3){
                this.fetchDetail(id);
                this.$refs.receiveList.fetchData(ywzh);
                this.$refs.opinionList.fetchData(logId);
        }else if (mode === 4) {
          this.retId = id;
          this.$refs.ref1.fetchDefault(id);
        } else if (mode === 9) {
          this.$refs.ref2.fetchConfirm(ywzh)
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
