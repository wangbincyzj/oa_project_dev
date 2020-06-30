<template>
  <!-- 添加记录 1049906948-->
  <div class="FwdDjjcDialog">
    <div v-if="dialogType===1">
      <el-form label-position="right" label-width="150px" size="mini" inline :model="tableData1">
        <el-form-item label="开发商：">
          <el-input v-model="tableData1.djKfstitle" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称：">
          <el-input v-model="tableData1.djXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <el-input v-model="tableData1.djJkyh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <el-input v-model="tableData1.djJkyhzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <el-input v-model="tableData1.djJkzhmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人姓名：" prop="djDgrxm">
          <el-input v-model="tableData1.djDgrxm"></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：" prop="djDgrzjhm">
          <el-input v-model="tableData1.djDgrzjhm"></el-input>
        </el-form-item>

        <el-form-item label="缴款金额：" prop="djJkje">
          <el-input v-model="tableData1.djJkje"></el-input>
        </el-form-item>

        <el-form-item label="缴款事由：">
          <el-input type="textarea" v-model="tableData1.djJksy"></el-input>
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
      <el-form label-position="right" label-width="150px" size="mini" inline ref="form">
        <el-form-item label="开发商：">
          <el-input v-model="form.djKfstitle" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称：">
          <el-input v-model="form.djXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人姓名：">
          <el-input v-model="form.djDgrxm" disabled></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：">
          <el-input v-model="form.djDgrzjhm" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款金额：">
          <el-input v-model="form.djJkje" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款事由：">
          <el-input v-model="form.djJksy" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <el-input v-model="form.djJkyh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <el-input v-model="form.djJkyhzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <el-input v-model="form.djJkzhmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款时间：">
          <el-input v-model="form.djJksj" disabled></el-input>
        </el-form-item>
      </el-form>
    </div>
    <div v-if="dialogType===3">
      <!-- 编辑页面 -->
      <el-form label-position="right" label-width="150px" size="mini" inline :model="form">
        <el-form-item label="开发商：">
          <el-input v-model="form.djKfstitle" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称：">
          <el-input v-model="form.djXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行：">
          <el-input v-model="form.djJkyh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款银行账户：">
          <el-input v-model="form.djJkyhzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="缴款账户名称：">
          <el-input v-model="form.djJkzhmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="订购人姓名：" prop="djDgrxm">
          <el-input v-model="ruleForm.djDgrxm"></el-input>
        </el-form-item>
        <el-form-item label="订购人证件号码：" prop="djDgrzjhm">
          <el-input v-model="ruleForm.djDgrzjhm"></el-input>
        </el-form-item>

        <el-form-item label="缴款金额：">
          <el-input v-model="ruleForm.djJkje"></el-input>
        </el-form-item>

         <el-form-item label="缴款银行账户：">
          <el-input v-model="ruleForm.djJkyhzh"></el-input>
        </el-form-item>

         <el-form-item label="缴款账户名称：">
          <el-input v-model="ruleForm.djJkzhmc"></el-input>
        </el-form-item>

        <el-form-item label="缴款银行id：">
          <el-input v-model="ruleForm.djJkyhid"></el-input>
        </el-form-item>


        <el-form-item label="缴款银行：">
          <el-input v-model="ruleForm.djJkyh"></el-input>
        </el-form-item>

         <el-form-item label="缴款事由：">
          <el-input type="textarea" v-model="ruleForm.djJksy"></el-input>
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
      tableData1: {
        djKfstitle: "",
        djXmmc: "",
        djJkyhzh:""
      },
      idcs:''
    };
  },
  methods: {
    addData() {
       console.log(this.tableData1.djJkyhzh,'缴款银行账户')
      //   console.log(this.tableData1.djJkyhzh,'缴款银行账户',row.zjjgzhYhzh)
      // debugger
      const list = {
        djKfstitle: this.$store.state.projectData.xmxxKfs, //开发商
        djXmmc: this.tableData1.djXmmc, //项目名称 ###
        djXmbh: this.$store.state.projectData.xmxxXmbh, //项目编号
        djDgrxm: this.tableData1.djDgrxm, //订购人姓名 ###
        djDgrzjhm: this.tableData1.djDgrzjhm, //证件号码 ###
        djJkje: this.tableData1.djJkje, //缴款金额 ###
        djJksy: this.tableData1.djJksy, //缴款事由 ###
        djJkyhzh: this.tableData1.djJkyhzh, //缴款银行账户###
        djJkzhmc: this.tableData1.djJkzhmc, // 缴款账户名称 ##
        djJkyhid: this.tableData1.djJkyhid, //缴款银行id
        djJkyh: this.tableData1.djJkyh, //缴款银行 ###
        kfsId: this.tableData1.kfsId, // 开发商id
        kfsRwbh: this.$store.state.rwbh //入网编号
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
    //显示信息
    listInfo(row) {
      // 新增显示接口
      // 显示信息
      this.tableData1.djKfstitle = this.$store.state.projectData.xmxxKfs; //开发商
      this.tableData1.djXmmc = row.zjjgzhXmmc; //项目名称
      this.tableData1.djJkyhzh = row.zjjgzhYhzh, //缴款银行账户
      this.tableData1.djJkzhmc = row.zjjgzhZhmc, // 缴款账户名称
      this.tableData1.djJkyh = row.zjjgzhYhmc, //缴款银行
      // 影藏信息
      this.tableData1.kfsId= row.kfsId // 开发商id
      this.tableData1.djJkyhid = row.zjjgzhYhid  //银行id
      //传输信息
      console.log(this.tableData1, "账户显示信息");
      // this.tableData1.djXmbh = row.xmxxXmbh; //项目编号
      console.log(this.$store.state.projectData.xmxxXmbh, "项目显示信息");
    },
    // //储存用户信息
    // userbtn() {
    //   let userlist = {
    //     jiaocunMsrxm: "张三丰"
    //   };
    //   this.userinfo = userlist.jiaocunMsrxm;
    // },
    updateData(ids) {

      localStorage.setItem('idc',ids)
      this.idcs = localStorage.getItem('ids')

      const list = {
        djId:this.idcs,
        djDgrxm: this.ruleForm.djDgrxm,
        djDgrzjhm: this.ruleForm.djDgrzjhm,
        djJkje: this.ruleForm.djJkje,
        djJksy: this.ruleForm.djJksy,
        djJkyhzh: this.ruleForm.djJkyhzh,
        djJkzhmc:this.ruleForm.djJkzhmc,
        djJkyhid:this.ruleForm.djJkyhid,
        djJkyh:this.ruleForm.djJkyh,
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
      if (mode === 1) {
        this.listInfo(id);
      } else if (mode === 2) {
        this.storeInfo(id);
      } else if (mode === 3) {
        this.storeInfo(id);
        this.updateData(id);
      }
    }
  },
  created() {
    //储存新增缴存信息已有信息
    this.storeInfo();
    //储存新增缴存修改信息
    this.listInfo();
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


