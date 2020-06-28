<template>
  <div class="FwdDjtkDialog">
    <div v-if="dialogType===1">
      <!-- 房屋定金   退款弹框    1049906948-->
      <el-form label-position="right" label-width="150px" size="mini" inline :model="ruleForm">
        <el-form-item label="开发商：">
          <el-input v-model="form.djKfstitle" disabled></el-input>
        </el-form-item>

        <!-- <el-form-item label="项目编号：">
          <el-input v-model="ruleForm.djsyXmbh" disabled></el-input>
        </el-form-item>-->

        <el-form-item label="项目名称：">
          <el-input v-model="form.djXmmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管银行名称：">
          <el-input v-model="form.djJkyh" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管账户：">
          <el-input v-model="form.djJkyhzh" disabled></el-input>
        </el-form-item>

        <el-form-item label="汇入账户名称：">
          <el-input v-model="ruleForm.djsyHrzhmc"></el-input>
        </el-form-item>

        <el-form-item label="申请人姓名：" prop="djsySqrxm">
          <el-input v-model="ruleForm.djsySqrxm"></el-input>
        </el-form-item>
        <el-form-item label="汇入账户银行：" prop="djsyHrzhyh">
          <el-input v-model="ruleForm.djsyHrzhyh"></el-input>
        </el-form-item>

        <el-form-item label="汇入账户：" prop="djsyHrzhzh	">
          <el-input v-model="ruleForm.djsyHrzhzh"></el-input>
        </el-form-item>

        <el-form-item label="申报金额：">
          <el-input v-model="form.djJkje" disabled></el-input>
        </el-form-item>

        <el-form-item label="用款事由：">
          <el-input type="textarea" v-model="ruleForm.djsyYksy"></el-input>
        </el-form-item>
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:200px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="submitForm()">立即提交</el-button>
        </el-button-group>
      </div>
    </div>
  </div>
</template>

<script>
import { fwddjtklApi } from "@/api/menu_4/fwddjtk";

//查看接口
import { fwdjglApi } from "@/api/menu_4/fwdjgl";

export default {
  name: "FwdDjtkDialog",
  props: {
    dialogType: {
      type: Number
    }
  },
  data() {
    return {
      form: {},
      ruleForm: {}
    };
  },
  methods: {
    submitForm() {

      console.log(this.form)
      let list = {
        djsyKfs: this.form.djKfstitle, //开发商8

        djsySqrxm: this.ruleForm.djsySqrxm,//10
        djsyHrzhyh: this.ruleForm.djsyHrzhyh,//3
        djsyHrzhmc: this.ruleForm.djsyHrzhmc,
        djsyHrzhzh: this.ruleForm.djsyHrzhzh,//4
        djsyJgzh: this.form.djJkyhzh, //监管账户//7
        djsyJgyhmc: this.form.djJkyh, //6

        djsyJgyhid: this.form.djJkyhid, //监管银行id5

        djsyYksy: this.ruleForm.djsyYksy,//11
        djsySbje: this.form.djJkje, //需要多个id 计算9

        djsyXmbh: this.form.djXmbh, //项目编号//
        djsyXmmc: this.form.djXmmc, //项目名称2
        kfsRwbh: this.form.kfsRwbh, //入网编号//12
        djsyDjid: this.form.djId //定金id(样例：“123;234;345”)1
      };
      fwddjtklApi.tkData(list).then(res => {
        if (res.code == 200) {
          this.$message.success(res.message);
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    //显示信息
    listInfo(id) {
      //根据定金id查看信息
      fwdjglApi.getProjectById(id).then(res => {
        console.log(res.data, "查看信息");

        // debugger
        this.$set(this.form, "djKfstitle", res.data.djKfstitle); //开发商
        this.$set(this.form, "djXmmc", res.data.djXmmc); //项目名称
        this.$set(this.form, "djJkyh", res.data.djJkyh); // 监管银行名称  === 缴款银行
        this.$set(this.form, "djJkyhzh", res.data.djJkyhzh); // 监管账户  === 银行账户

        //影藏显示
        this.$set(this.form, "djJkyhid", res.data.djJkyhid); // 监管银行id  ===== 缴款银行id
        this.$set(this.form, "djXmbh", res.data.djXmbh); // 项目编号
        this.$set(this.form, "kfsRwbh", res.data.kfsRwbh); // 入网编号
        this.$set(this.form, "djId", res.data.djId); // 入网编号

        this.$set(this.form, "djJkje", res.data.djJkje); //申报金额

        //   this.$set(this.form, "djDgrxm", res.data.djDgrxm);
        //   this.$set(this.form, "djDgrzjhm", res.data.djDgrzjhm);
        //   this.$set(this.form, "djJkje", res.data.djJkje);
        //   this.$set(this.form, "djJksy", res.data.djJksy);
        //  this.$set(this.form, "djsyJgyhmc", res.data.djsyJgyhmc);
        //   this.$set(this.form, "djJkzhmc", res.data.djJkzhmc);
        //  this.$set(this.form, "djJksj", res.data.djJksj);
      });
    },
    setMode(index, id) {
      // debugger

      this.listInfo(id);
    }
  },
  created() {
    this.listInfo();
    
  }
};
</script>

<style>
</style>