<template>
  <!-- 添加记录 -->
  <div class="FwdDjjcDialog">
    <div v-if="dialogType===1">
      <el-form label-position="right" label-width="150px" size="mini" inline :model="ruleForm">

        <el-form-item label="开发商：">
          <span style="width:172px;display:block">{{ form.djKfstitle }}</span>
        </el-form-item>
        <el-form-item label="项目名称：">
          <span style="width:172px;display:block">{{ form.djXmmc }}</span>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <span style="width:172px;display:block">{{ form.djJkyh }}</span>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <span style="width:172px;display:block">{{ form.djJkyhzh }}</span>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <span style="width:172px;display:block">{{ form.djJkzhmc }}</span>
        </el-form-item>
        <el-form-item label="订购人姓名：" prop="djDgrxm">
          <el-input v-model="ruleForm.djDgrxm"></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：" prop="djDgrzjhm">
          <el-input v-model="ruleForm.djDgrzjhm"></el-input>
        </el-form-item>

        <el-form-item label="缴款金额：" prop="djJkje">
          <el-input v-model="ruleForm.djJkje"></el-input>
        </el-form-item>

        <el-form-item label="缴款事由：">
          <el-input type="textarea" v-model="ruleForm.djJksy"></el-input>
          <el-select style="width: 180px" v-model="ruleForm.djJksy" placeholder="首付款：">
            <el-option label="首付款" value="首付款"></el-option>
            <el-option label="预付款" value="预付款"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="submitForm1()">立即提交</el-button>
        </el-button-group>
      </div>
    </div>
    <div v-if="dialogType===2">
      <!-- 查看詳情 -->
      <el-form label-position="right" label-width="150px" size="mini" inline ref="ruleForm">
        <el-form-item label="开发商：">
          <span style="width:172px;display:block">{{ form.djKfstitle }}</span>
        </el-form-item>
        <el-form-item label="项目名称：">
          <span style="width:172px;display:block">{{ form.djXmmc }}</span>
        </el-form-item>
        <el-form-item label="订购人姓名：">
          <span style="width:172px;display:block">{{ form.djDgrxm }}</span>
        </el-form-item>
        <el-form-item label="订购人证件号码：">
          <span style="width:172px;display:block">{{ form.djDgrzjhm }}</span>
        </el-form-item>
        <el-form-item label="缴款金额：">
          <span style="width:172px;display:block">{{ form.djJkje }}</span>
        </el-form-item>
        <el-form-item label="缴款事由：">
          <span style="width:172px;display:block">{{ form.djJksy }}</span>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <span style="width:172px;display:block">{{ form.djJkyh }}</span>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <span style="width:172px;display:block">{{ form.djJkyhzh }}</span>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <span style="width:172px;display:block">{{ form.djJkzhmc }}</span>
        </el-form-item>
        <el-form-item label="缴款时间：">
          <span style="width:172px;display:block">{{ form.djJksj }}</span>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="dialogType===3">
      <!-- 编辑页面 -->
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="ruleForm"
      >
         <el-form-item label="开发商：">
          <span style="width:172px;display:block">{{ form.djKfstitle }}</span>
        </el-form-item>
        <el-form-item label="项目名称：">
          <span style="width:172px;display:block">{{ form.djXmmc }}</span>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <span style="width:172px;display:block">{{ form.djJkyh }}</span>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <span style="width:172px;display:block">{{ form.djJkyhzh }}</span>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <span style="width:172px;display:block">{{ form.djJkzhmc }}</span>
        </el-form-item>
        <el-form-item label="订购人姓名：" prop="djDgrxm">
          <el-input v-model="ruleForm.djDgrxm"></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：" prop="djDgrzjhm">
          <el-input v-model="ruleForm.djDgrzjhm"></el-input>
        </el-form-item>

        <el-form-item label="缴款金额：" prop="djJkje">
          <el-input v-model="ruleForm.djJkje"></el-input>
        </el-form-item>

        <el-form-item label="缴款事由：">
          <el-input type="textarea" v-model="ruleForm.djJksy"></el-input>
          <el-select style="width: 180px" v-model="ruleForm.djJksy" placeholder="首付款：">
            <el-option label="首付款" value="首付款"></el-option>
            <el-option label="预付款" value="预付款"></el-option>
          </el-select>
        </el-form-item>
         </el-form>
        <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
          <el-button-group class="buttons">
            <el-button type="primary" @click="submitForm2()">立即提交</el-button>
          </el-button-group>
        </div>
    </div>
  </div>
</template>
<script>
import { fwdjglApi } from "@/api/menu_4/fwdjgl";

import axios from "axios";

export default {
  name: "FwdDjjcDialog",
  props: {
    dialogType: {
      type: Number
    }
  },
  data() {
    return {
      radio: 1,
      form: {},
      userinfo: {},
      ruleForm: {},
    };
  },
  methods: {
    addData() {
      const list = {
        djDgrxm: this.ruleForm.djDgrxm,
        djDgrzjhm: this.ruleForm.djDgrzjhm,
        djJkje: this.ruleForm.djJkje,
        djJksy: this.ruleForm.djJksy,
        djId: 1,
        djKfstitle: "开发商",
        djXmmc: "项目名称",
        djJkyhzh: 123214,
        djJkyhid: 12,
        djJkyh: "工商银行",
        djJkzhmc: "缴款账户名称",
        kfsId: 6001,
        kfsRwbh: 60019003,
        djXmbh: 57
      };
      fwdjglApi.addDeposit(list).then(res => {
        if (res.code == 200) {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    submitForm1() {
       this.addData();
    },
    submitForm2() {
        this.updateData();
    },
    storeInfo(id) {
      //根据定金id查看信息
      fwdjglApi.getProjectById(id).then(res => {
        // debugger
        this.$set(this.form, "djKfstitle", res.data.djKfstitle);
        this.$set(this.form, "djXmmc", res.data.djXmmc);
        this.$set(this.form, "djDgrxm", res.data.djDgrxm);
        this.$set(this.form, "djDgrzjhm", res.data.djDgrzjhm);
        this.$set(this.form, "djJkje", res.data.djJkje);
        this.$set(this.form, "djJksy", res.data.djJksy);
        this.$set(this.form, "djJkyh", res.data.djJkyh);
        this.$set(this.form, "djJkyhzh", res.data.djJkyhzh);
        this.$set(this.form, "djJkzhmc", res.data.djJkzhmc);
        this.$set(this.form, "djJksj", res.data.djJksj);
      });
    },
    //储存新增缴存修改信息
    listInfo() {
      let listinfo = {
        jiaocunXmmc: "龙庭花园",
        jiaocunLdmc: "D1",
        jiaocunJkje: 100000,
        jiaocunJkrq: "2020-06-09",
        jiaocunJksy: "首付款" //结束
      };
      this.ruleForm.jiaocunXmmc = listinfo.jiaocunXmmc;
      this.ruleForm.jiaocunLdmc = listinfo.jiaocunLdmc;
      this.ruleForm.jiaocunJkje = listinfo.jiaocunJkje;
      this.ruleForm.jiaocunJkrq = listinfo.jiaocunJkrq;
      this.ruleForm.jiaocunJksy = listinfo.jiaocunJksy;
    },
    //储存用户信息
    userbtn() {
      let userlist = {
        jiaocunMsrxm: "张三丰"
      };
      this.userinfo = userlist.jiaocunMsrxm;
    },
    updateData(id) {
      debugger
      //  alert('修改')
      const list = {
        djKfstitle: "开发商",
        djXmmc: "项目名称",
        djJkyhzh: 123214,
        djJkyhid: 12,
        djJkyh: "工商银行",
        djJkzhmc: "缴款账户名称",
        kfsId: 6001,
        kfsRwbh: 60019003,
        djXmbh: 57,
        id:id,
        djDgrxm: this.ruleForm.djDgrxm,
        djDgrzjhm: this.ruleForm.djDgrzjhm,
        djJkje: this.ruleForm.djJkje,
        djJksy: this.ruleForm.djJksy,
        djJkyhzh:this.ruleForm.djJkyhzh
      };
      fwdjglApi.updateDeposit(list).then(res => {
        // debugger
        if (res.code == 200) {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }

      });
    },
    setMode(mode, id) {
      if (mode === 2) {
        this.storeInfo(id);
      } else if (mode === 3) {
        this.updateData(id);
      }
    }
  },
  created() {
    //储存新增缴存信息已有信息
    // this.storeInfo();
    //储存新增缴存修改信息
    // this.listInfo();
    //储存用户信息
    // this.userbtn();
  },
  mounted() {}
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


