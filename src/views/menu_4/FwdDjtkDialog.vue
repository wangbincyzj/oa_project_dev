<template>
  <div class="FwdDjtkDialog">
    <div v-if="dialogType===1">
      <!-- 房屋定金   退款弹框    1049906948-->
      <el-form label-position="right" label-width="150px" size="mini" inline :model="ruleForm">
        <el-form-item label="开发商：">
          <el-input v-model="ruleForm.djsyKfs" disabled></el-input>
        </el-form-item>

        <el-form-item label="项目编号：">
          <el-input v-model="ruleForm.djsyXmbh" disabled></el-input>
        </el-form-item>

        <el-form-item label="项目名称：">
          <el-input v-model="ruleForm.djsyXmmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="入网编号：">
          <el-input v-model="ruleForm.kfsRwbh" disabled></el-input>
        </el-form-item>

        <el-form-item label="定金id：">
          <el-input v-model="ruleForm.djsyDjid" disabled></el-input>
        </el-form-item>

        <el-form-item label="汇入账户名称：">
          <el-input v-model="ruleForm.djsyHrzhmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管账户：">
          <el-input v-model="ruleForm.djsyJgzh" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管银行id：">
          <el-input v-model="ruleForm.djsyJgyhid" disabled></el-input>
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

        <el-form-item label="申报金额：" prop="djsySbje">
          <el-input v-model="ruleForm.djsySbje"></el-input>
        </el-form-item>

        <el-form-item label="监管银行名称：" prop="djsyJgzh">
          <el-input v-model="ruleForm.djsyJgzh"></el-input>
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

export default {
  name: "FwdDjtkDialog",
  props: {
    dialogType: {
      type: Number
    }
  },
  data() {
    return {
      ruleForm: {
        djsyKfs: "",
        djsySqrxm: "",
        djsyHrzhyh: "",
        djsyHrzhmc: "",
        djsyHrzhzh: "",
        djsyJgzh: "",
        djsyJgyhmc: "",
        djsyJgyhid: "",
        djsyYksy: "",
        djsySbje: "",
        djsyXmbh: "",
        djsyXmmc: "",
        kfsRwbh: "",
        djsyDjid: ""
      }
    };
  },
  methods: {
    getlist() {},
    submitForm() {
      let list = {
        djsyKfs: this.ruleForm.djsyKfs,
        djsySqrxm: this.ruleForm.djsySqrxm,
        djsyHrzhyh: this.ruleForm.djsyHrzhyh,
        djsyHrzhmc: this.ruleForm.djsyHrzhmc,
        djsyHrzhzh: this.ruleForm.djsyHrzhzh,
        djsyJgzh: this.ruleForm.djsyJgzh,
        djsyJgyhmc: this.ruleForm.djsyJgyhmc,
        djsyJgyhid: this.ruleForm.djsyJgyhid,
        djsyYksy: this.ruleForm.djsyYksy,
        djsySbje: this.ruleForm.djsySbje,
        djsyXmbh: this.ruleForm.djsyXmbh,
        djsyXmmc: this.ruleForm.djsyXmmc,
        kfsRwbh: this.ruleForm.kfsRwbh,
        djsyDjid: this.ruleForm.djsyDjid
      };
      fwddjtklApi.tkData(list).then(res => {
        if (res.code == 200) {
          this.$message.success(res.message);
        } else {
          this.$message.error(res.message);
        }
        this.$emit("submitSuccess")
      });
    },
    setMode(row) {
      // console.log('退款',row.djsyKfs)
      this.ruleForm.djsyKfs = row.djsyKfs;
      this.ruleForm.djsySqrxm = row.djsySqrxm;
      this.ruleForm.djsyHrzhyh = row.djsyHrzhyh;
      this.ruleForm.djsyHrzhmc = row.djsyHrzhmc;
      this.ruleForm.djsyHrzhzh = row.djsyHrzhzh;
      this.ruleForm.djsyJgzh = row.djsyJgzh;
      this.ruleForm.djsyJgyhmc = row.djsyJgyhmc;
      this.ruleForm.djsyJgyhid = row.djsyJgyhid;
      this.ruleForm.djsyYksy = row.djsyYksy;
      this.ruleForm.djsySbje = row.djsySbje;
      this.ruleForm.djsyXmbh = row.djsyXmbh;
      this.ruleForm.djsyXmmc = row.djsyXmmc;
      this.ruleForm.kfsRwbh = row.kfsRwbh;
      this.ruleForm.djsyDjid = row.djsyDjid;
      // console.log('退款sss', this.form.djsyKfs)
    }
  },
  created() {}
};
</script>

<style>
</style>