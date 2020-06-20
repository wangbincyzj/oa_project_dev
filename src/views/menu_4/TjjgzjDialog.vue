<template>
	<!-- 添加监管资金弹窗 -->
  <div class="TjjgzjDialog">
    <div v-if="dialogType===1">
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
      >
        <el-form-item label="项目名称：" prop="jiaocunXmmc">
          <el-input v-model="ruleForm.jiaocunXmmc"></el-input>
        </el-form-item>
        <el-form-item label="楼栋名称：" prop="jiaocunLdmc">
          <el-input v-model="ruleForm.jiaocunLdmc"></el-input>
        </el-form-item>
        <el-form-item label="合同编号：">
          <span style="width:172px;display:block">{{ form.jiaocunXmbh }}</span>
        </el-form-item>
        <el-form-item label="付款方式：">
          <span style="width:172px;display:block">{{ form.fkfs }}</span>
        </el-form-item>
        <el-form-item label="购房总额：">
          <span style="width:172px;display:block">{{ form.gfze }}</span>
        </el-form-item>
        <el-form-item label="首付金额：">
          <span style="width:172px;display:block">{{ form.sfje }}</span>
        </el-form-item>
        <el-form-item label="购房人：">
          <span style="width:172px;display:block">{{ form.gfr }}</span>
        </el-form-item>
        <el-form-item label="身份证号：">
          <span style="width:172px;display:block">{{ form.jiaocunMsrzjhm }}</span>
        </el-form-item>
        <el-form-item label="监管银行：">
          <span style="width:172px;display:block">{{ form.jiaocunKhyh }}</span>
        </el-form-item>
        <el-form-item label="监管账户：">
          <span style="width:172px;display:block">{{ form.jiaocunJkzh }}</span>
        </el-form-item>
        <el-form-item label="缴款金额：" prop="jiaocunJkje">
          <el-input v-model="ruleForm.jiaocunJkje"></el-input>
        </el-form-item>
        <el-form-item label="截至缴款日期：" prop="jiaocunJkrq">
          <el-date-picker
            type="date"
            placeholder="选择日期"
            v-model="ruleForm.jiaocunJkrq"
            style="width: 100%;"
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="缴款事由：">
          <el-input type="textarea" v-model="ruleForm.jiaocunJksy"></el-input>
          <el-select style="width: 180px" v-model="ruleForm.jiaocunJksy" placeholder="首付款：">
            <el-option label="首付款" value="首付款"></el-option>
            <el-option label="预付款" value="预付款"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="是否按揭款：">
          <el-radio-group v-model="radio">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="2">否</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        </el-button-group>
        <el-button-group class="buttons">
          <!-- <el-button type="primary" @click="dialogVisible = false">关闭</el-button> -->
        </el-button-group>
      </div>
    </div>
  </div>
</template>
<script>

import { tjjgzjApi } from "@/api/menu_4/tjjgzj";

import axios from "axios";

export default {
  name: "TjjgzjDialog",
  props: {
    zjjgzhId: { type: String }, //type: [String, Number]
    zjjgzhYwzh: { String },
    xmxxXmbh: { type: String },
    dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    }
  },
  data() {
    return {
      radio: 1,
      form: {},
      userinfo: {},
      ruleForm: {
        jiaocunXmmc: "",
        jiaocunLdmc: "",
        jiaocunJkje: "",
        jiaocunJkrq: "",
        jiaocunJksy: ""
      },
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
      }
    };
  },
  methods: {
    addData() {
      tjjgzjApi
        .addDeposit({
          // jiaocunXmmc: "龙庭花园",
          // jiaocunLdmc: "D1",
          // jiaocunJkje: 100000,
          // jiaocunJkrq: "2020-06-09",
          // jiaocunJksy: "首付款",//结束
          jiaocunXmmc: this.ruleForm.jiaocunXmmc,
          jiaocunLdmc: this.ruleForm.jiaocunLdmc,
          jiaocunJkje: this.ruleForm.jiaocunJkje,
          jiaocunJkrq: this.ruleForm.jiaocunJkrq,
          jiaocunJksy: this.ruleForm.jiaocunJksy, //结束
          jiaocunMsrxm: this.userinfo, //用户信息
          jiaocunMsrzjhm: "36040011111111111", //显示信息不可修改
          jiaocunXmbh: "6028",
          jiaocunLdbh: "6028001",
          jiaocunFh: "602",
          jiaocunFwbh: "6028001602",
          jiaocunFwmj: 100.12,
          jiaocunZhmc: "江西极地置业",
          jiaocunJkzh: "620001010101",
          jiaocunKhyh: "九江银行",
          jiaocunYhid: 11111,
          jiaocunHtbh: "2020060911111",
          jiaocunHtbah: "202006096567576",
          kfsRwbh: "6009",
          jiaocunXxlyzt: 0
        })
        .then(res => {
          if (res.code == 200) {
            this.$message.success("添加成功");
            this.$emit("submitSuccess");
          } else {
            this.$message.error(res.message);
          }
        });
    },
    submitForm(formName) {
      //  debugger
      if (this.dialogType === 1) {
        this.$refs[formName].validate(valid => {
          if (valid) {
            this.addData();
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      }
    },
    setMode(mode, id) {
      // debugger
    },
    storeInfo() {
      //储存新增缴存信息已有信息
      let forminfo = {
        jiaocunXmbh: "合同编号储存",
        fkfs: "付款方式储存",
        gfze: "购房总额",
        sfje: "首付金额",
        gfr: "购房人",
        jiaocunMsrzjhm: "身份证号",
        jiaocunKhyh: "监管银行",
        jiaocunJkzh: "监管账户"
      };
      this.form.jiaocunXmbh = forminfo.jiaocunXmbh;
      this.form.fkfs = forminfo.fkfs;
      this.form.gfze = forminfo.gfze;
      this.form.sfje = forminfo.sfje;
      this.form.gfr = forminfo.gfr;
      this.form.jiaocunMsrzjhm = forminfo.jiaocunMsrzjhm;
      this.form.jiaocunKhyh = forminfo.jiaocunKhyh;
      this.form.jiaocunJkzh = forminfo.jiaocunJkzh;
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
    }
  },
  created() {
    //储存新增缴存信息已有信息
    this.storeInfo();
    //储存新增缴存修改信息
    this.listInfo();
    //储存用户信息
    this.userbtn();
  }
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


