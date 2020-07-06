<template>
  <div class="FwdDjjcDialog">
    <div v-if="dialogType===1||dialogType===2">
      <el-form label-position="right" 
      label-width="150px" 
      size="mini" inline 
      :model="form">
        <el-form-item label="开发商">
          <el-input v-model="form.djKfstitle" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.djXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行">
          <el-input v-model="form.djJkyh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行账户">
          <el-input v-model="form.djJkyhzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款账户名称">
          <el-input v-model="form.djJkzhmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人姓名">
          <el-input v-model="form.djDgrxm"></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码">
          <el-input v-model="form.djDgrzjhm"></el-input>
        </el-form-item>

        <el-form-item label="缴款金额">
          <el-input v-model="form.djJkje"></el-input>
        </el-form-item>

        <el-form-item label="缴款事由">
          <el-input type="textarea" v-model="form.djJksy"></el-input>
        </el-form-item>
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
        <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </el-button-group>
      </div>
    </div>
    <div v-if="dialogType===3">
      <!-- 查看詳情 -->
      <el-form label-position="right" label-width="150px" size="mini" inline ref="form1">
        <el-form-item label="开发商：">
          <el-input v-model="form1.djKfstitle" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称：">
          <el-input v-model="form1.djXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人姓名：">
          <el-input v-model="form1.djDgrxm" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：">
          <el-input v-model="form1.djDgrzjhm" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款金额：">
          <el-input v-model="form1.djJkje" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款事由：">
          <el-input v-model="form1.djJksy" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <el-input v-model="form1.djJkyh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <el-input v-model="form1.djJkyhzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <el-input v-model="form1.djJkzhmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款时间：">
          <el-input v-model="form1.djJksj" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
   
     
    </div>
  </div>
</template>
<script>
 import CenterButton from "@/components/common/centerButton/CenterButton";
import { djjcApi } from "@/api/menu_4/djjc";

export default {
  name: "FwdDjjcDialog",
  components: {CenterButton},
  props: {
    dialogType: {
      type: Number
    }
  },
  data() {
    return {
     
      form: {
      djKfstitle:"",
      },
      formBlank:{},
      form1:{},
     djJkyhid:0,
     kfsRwbh:"",
     kfsId:"",
     djXmbh:"",
    };
  },
  methods: {
     reset() {
      this.form = { ...this.formBlank };
    },
    addData() {
      djjcApi.addDeposit({...this.form,djJkyhid:this.djJkyhid,kfsRwbh:this.kfsRwbh,kfsId:this.kfsId,djXmbh:this.djXmbh}).then(res => {
        if (res.code == 200) {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    onSubmit(){
       if (this.dialogType === 1) {
          this.addData();
        } else if (this.dialogType === 2) {
          this.updateData();
        }
    },
   
    updateData() {
      djjcApi.updateDeposit({...this.form}).then(res => {
      
        if (res.code == 200) {
          this.$message.success("修改成功");
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    setMode(mode, id) {
      if (mode === 1) {
         djjcApi.getAccountDetail(id).then(ret => {
           console.log(ret);
           this.form.djXmmc=ret.data.supervisedAccount.zjjgzhXmmc;
          this.form.djKfstitle=ret.data.supervisedAccount.zjjgzhGsmc;
          this.form.djJkyh=ret.data.supervisedAccount.zjjgzhYhmc;
          this.form.djJkyhzh=ret.data.supervisedAccount.zjjgzhYhzh;
          this.form.djJkzhmc=ret.data.supervisedAccount.zjjgzhZhmc;
          this.djJkyhid=ret.data.supervisedAccount.zjjgzhYhid; 
          this.djXmbh=ret.data.supervisedAccount.xmxxXmbh; 
          console.log(this.djJkyhid);
          
          this.kfsId=ret.data.supervisedAccount.kfsId; 
          this.kfsRwbh=ret.data.supervisedAccount.kfsRwbh; 
        });
      
       
      } else if (mode === 2) {
         djjcApi.getDepositDetail(id).then(ret => {
           console.log(ret);
           this.form=ret.data;
         
        });
      } else if (mode === 3) {
          djjcApi.getDepositDetail(id).then(ret => {
           console.log(ret);
           this.form1=ret.data;
         
        });
      }
    }
  },
 
};
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


