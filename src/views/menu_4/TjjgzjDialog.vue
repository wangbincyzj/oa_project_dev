<template>
  <div class="TjjgzjDialog">
    <div v-if="dialogType===1">
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form"
      >
        <el-form-item label="项目名称">
          <el-input v-model="form.jiaocunXmmc"></el-input>
        </el-form-item>
        <el-form-item label="楼栋名称">
          <el-input v-model="form.jiaocunLdmc"></el-input>
        </el-form-item>
        <el-form-item label="合同编号">
            <el-input v-model="form.jiaocunHtbh"></el-input>     
        </el-form-item>
        <el-form-item label="付款方式">
            <el-input v-model="form.fkfs"></el-input>      
        </el-form-item>
        <el-form-item label="购房总额">
            <el-input v-model="form.gfze"></el-input>     
        </el-form-item>
        <el-form-item label="首付金额">
            <el-input v-model="form.sfk"></el-input>       
        </el-form-item>
        <el-form-item label="购房人">
            <el-input v-model="form.jiaocunMsrxm"></el-input>       
        </el-form-item>
        <el-form-item label="身份证号">
            <el-input v-model="form.jiaocunMsrzjhm"></el-input>         
        </el-form-item>
        <el-form-item label="监管银行">
            <el-input v-model="form.jiaocunKhyh"></el-input>         
        </el-form-item>
         <el-form-item label="账户名称">
            <el-input v-model="form.jiaocunZhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账户">
            <el-input v-model="form.jiaocunJkzh"></el-input>
        </el-form-item>
        
        <el-form-item label="缴款金额">
          <el-input v-model="form.jiaocunJkje" @input="count"></el-input>
        </el-form-item>
        <el-form-item label="截至缴款日期">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            style="width:190px"
            v-model="form.jiaocunJkrq"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="是否按揭款">
          <template>
            <el-radio v-model="form.jiaocunSfajk" :label=1>是</el-radio>
            <el-radio v-model="form.jiaocunSfajk" :label=0>否</el-radio>
          </template>
        </el-form-item>
        <el-form-item label="缴款事由">
          <el-input type="textarea" v-model="form.jiaocunJksy" style="width:200px"></el-input>
         
          <el-select style="width: 180px"  placeholder="首付款" v-model="jksySelect" @change="getName">
            <el-option v-for="(item,index) in jksyList"
              :key="index"
              :label="item"
              :value="item"
              >
              </el-option>
          </el-select>
     
        </el-form-item>
       
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:70px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="addData" size="mini">立即提交</el-button>
        </el-button-group>
       
      </div>
    </div>
  </div>
</template>

<script>

import { tjjgzjApi } from "@/api/menu_4/tjjgzj";
import CenterButton from "@/components/common/centerButton/CenterButton";
export default {
  name: "TjjgzjDialog",
  props: {
    // zjjgzhId: { type: String }, //type: [String, Number]
    // zjjgzhYwzh: { String },
    // xmxxXmbh: { type: String },
    dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    }
  },
  data(){
    return {
     jiaocunFh:"",
     jiaocunFwbh:"",
     jiaocunHtbah:"",
     jiaocunHtbh:"",
     jiaocunLdbh:"",
     fwjzmj:0,
     jiaocunYhid:0,
     wtjje:0,
      form: {
        jiaocunXmmc:"",
        jiaocunSfajk:2,
        jiaocunJksy:"",       
        jiaocunLdmc:"",
        jiaocunHtbh:"",
        fkfs:"",
        gfze:"",
        sfk:"",
        jiaocunMsrxm:"",
        jiaocunMsrzjhm:"",
        jiaocunKhyh:"",
        jiaocunZhmc:"",
        jiaocunJkzh:"",
        jiaocunJkje:"",   
      },
      formBlank:{
         jiaocunXmmc:"",
        jiaocunJksy:"",
        jiaocunSfajk:2,
        jiaocunLdmc:"",
        jiaocunHtbh:"",
        fkfs:"",
        gfze:"",
        sfk:"",
        jiaocunMsrxm:"",
        jiaocunMsrzjhm:"",
        jiaocunKhyh:"",
        jiaocunZhmc:"",
        jiaocunJkzh:"",
        jiaocunJkje:"",   
      },
      jksyList:["首付款","预付款"],
      jksySelect:"",
      rules: {
        jiaocunXmmc: {
          required: true,
          message: "项目名称不能为空",
          trigger: "blur"
        },
        jiaocunLdmc: {
          required: true,
          message: "楼栋名称不能为空",
          trigger: "blur"
        },
        jiaocunJkje: {
          required: true,
          message: "缴存金额不能为空",
          trigger: "blur"
        },
        jiaocunJkrq: {
          required: true,
          message: "缴款日期不能为空",
          trigger: "blur"
        }
      },
    }
  },
  methods:{
     reset() {
      this.form = { ...this.formBlank };
    },
    count(){
       if(this.form.jiaocunJkje>this.wtjje){
        this.$message({
          message: '金额不可超过可缴款金额最大值,请重新输入',
          type: 'warning'
        });
        this.form.jiaocunJkje="";
     }
    },
    addData() {
     
      tjjgzjApi.addDeposit({...this.form,jiaocunXmbh:this.$store.state.projectData.xmxxXmbh,jiaocunXxlyzt:0,
      jiaocunFh:this.jiaocunFh,
      jiaocunFwbh:this.jiaocunFwbh,
      jiaocunHtbah:this.jiaocunHtbah,
      jiaocunLdbh:this.jiaocunLdbh,
      jiaocunHtbh:this.jiaocunHtbh,
      jiaocunFwmj:this.fwjzmj,
      jiaocunYhid:this.jiaocunYhid,
      kfsRwbh:this.$store.state.projectData.kfsRwbh,
      }).then(res => {
          if (res.code == 200) {
            this.$message.success("添加成功");
            this.$emit("submitSuccess");
          } else {
            this.$message.error(res.message);
          }
        });
    },
   
    setMode(mode, id) {
      if(mode===1){
        console.log("taetae");
         tjjgzjApi.getDetail(this.$store.state.rwbh,id).then(ret => {
           console.log(ret);
          //this.form=ret.data[0];
          this.wtjje=ret.data[0].wtjje;
           this.form.jiaocunLdmc=ret.data[0].jiaocunLdmc;
           this.form.jiaocunHtbh=ret.data[0].jiaocunHtbh;
           this.form.fkfs=ret.data[0].fkfs;
           this.form.gfze=ret.data[0].gfze;
           this.form.sfk=ret.data[0].sfk;
           this.form.jiaocunMsrxm=ret.data[0].jiaocunMsrxm;
           this.form.jiaocunMsrzjhm=ret.data[0].jiaocunMsrzjhm;
           this.form.jiaocunKhyh=ret.data[0].jiaocunKhyh;
           this.form.jiaocunZhmc=ret.data[0].jiaocunZhmc;
           this.form.jiaocunJkzh=ret.data[0].jiaocunJkzh;
           this.form.jiaocunXmmc=this.$store.state.projectData.xmxxXmmc;
           this.jiaocunFh=ret.data[0].jiaocunFh;
           this.jiaocunFwbh=ret.data[0].jiaocunFwbh;
           this.jiaocunHtbah=ret.data[0].jiaocunHtbah;
           this.jiaocunHtbh=ret.data[0].jiaocunHtbh;
           this.jiaocunLdbh=this.jiaocunFwbh.slice(0,7);
           this.fwjzmj=ret.data[0].fwjzmj;
           this.jiaocunYhid=ret.data[0].jiaocunYhid;
           this.form.jiaocunJkje=this.form.sfk;
            //this.form.jiaocunJksy="";
           //this.form.jiaocunSfajk=1;
           
        });
      
        console.log(this.form.jiaocunXmmc);
        
    }
    },
    getName(name){
      //this.jksySelect=;

      this.form.jiaocunJksy=name;
      console.log(this.form.jiaocunJksy);
      
    },
    
   
  }
}
</script>
<style scoped lang="scss">
.area {
  position: relative;
  &::after {
    content: "M²";
    display: block;
    position: absolute;
    right: -20px;
    //   color: red;
    font-size: 15px;
    top: 6px;
  }
}
.title {
  font-weight: 600;
  line-height: 2;
  background-color: rgba(170, 170, 170, 0.18);
  margin-bottom: 20px;
  padding-left: 50px;
  font-size: 18px;
  margin-top: 20px;
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
      //color: $text-info;
    }

    .info {
      width: 500px;
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
          color: lightblue;

          span {
            color: burlywood;
            font-weight: 600;
          }
        }
      }
    }
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


