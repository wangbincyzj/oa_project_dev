<template>
  <!-- 房屋定金退款管理弹窗1049906948 -->
  <div class="FwdDjtkglDialog">
    <div v-if="dialogType===1||dialogType===3">
      <el-form label-position="right" label-width="150px" size="mini" inline :model="ruleForm">
        <el-form-item label="开发商：">
          <el-input v-model="form.djsyKfs" disabled></el-input>
        </el-form-item>
        <!-- <el-form-item label="项目编号：">
          <el-input v-model="ruleForm.djsyXmbh" disabled></el-input>
        </el-form-item>-->
        <el-form-item label="项目名称：">
          <el-input v-model="form.djsyXmmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管银行名称：">
          <el-input v-model="form.djsyJgyhmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管账户：">
          <el-input v-model="form.djsyJgzh" disabled></el-input>
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
          <el-input v-model="form.djsySbje" disabled></el-input>
        </el-form-item>

        <el-form-item label="申请人联系电话：">
          <el-input v-model="form.djsySqrlxdh"></el-input>
        </el-form-item>

        <el-form-item label="用款事由：">
          <el-input type="textarea" v-model="ruleForm.djsyYksy"></el-input>
        </el-form-item>
      </el-form>

      <!-- <el-form-item label="监管账户名称">
          <el-input v-model="form.zjjgzhZhmc"></el-input>
      </el-form-item>-->
      <!-- </el-form> -->

      <div class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="onSubmit">立即提交</el-button>
        </el-button-group>
      </div>
    </div>

    <div class="detail myForm-mb5 myDialog" v-loading="loading" v-if="dialogType===2">
      <!--详情部分-->
      <el-tabs type="border-card" value="first">
        <el-tab-pane label="1.定金退款详情" name="first">
          <div class="dialogItem">
            <!-- <div class="itemIndex">1</div> -->
            <div class="itemTitle">账户申请信息详情</div>
          </div>
          <el-form label-position="right" label-width="150px" size="mini" inline :model="form1">
            <el-form-item label="项目名称">
              <el-input v-model="form1.djsyXmmc" disabled></el-input>
            </el-form-item>
            <el-form-item label="监管账户">
              <el-input v-model="form1.djsyJgzh" disabled></el-input>
            </el-form-item>
            <el-form-item label="监管银行名称">
              <el-input v-model="form1.djsyJgyhmc" disabled></el-input>
            </el-form-item>
            <el-form-item label="申请人姓名">
              <el-input v-model="form1.djsySqrxm" disabled></el-input>
            </el-form-item>
            <el-form-item label="申请人联系电话" class="area">
              <el-input v-model="form1.djsySqrlxdh" disabled></el-input>
            </el-form-item>
            <el-form-item label="汇入账户名称">
              <el-input v-model="form1.djsyHrzhmc" disabled></el-input>
            </el-form-item>
            <el-form-item label="汇入账户" class="area">
              <el-input v-model="form1.djsyHrzhzh" disabled></el-input>
            </el-form-item>
            <el-form-item label="汇入账户银行">
              <el-input v-model="form1.djsyHrzhyh" disabled></el-input>
            </el-form-item>
            <el-form-item label="申报金额">
              <el-input v-model="form1.djsySbje" disabled></el-input>
            </el-form-item>
            <el-form-item label="用款事由">
              <el-input v-model="form1.djsyYksy" disabled></el-input>
            </el-form-item>
            <el-form-item label="添加时间">
              <el-input v-model="form1.djsyAddtime" disabled></el-input>
            </el-form-item>
            <el-form-item label="发放日期">
              <el-input v-model="form1.djsyFfrq" disabled></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="2.收件情况" name="second">
          <div class="receiveList">
            <div class="dialogItem">
              <!-- <div class="itemIndex">2</div> -->
              <div class="itemTitle">收件列表</div>
            </div>
            <div class="item" v-for="(item,index) in businessReceives">
              <div class="no">
                <span>{{index+1}}</span>
              </div>
              <div class="info">
                <div class="name">{{item.shoujianTitle}}</div>
                <div class="attr">
                  <div>
                    性质:
                    <span>{{item.shoujianSjxz}}</span>
                  </div>
                  <div>
                    份数:
                    <span>{{item.shoujianFenshu}}</span>
                  </div>
                </div>
              </div>
              <div class="pics">
                <el-image
                  style="width: 60px; height: 60px"
                  src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                  :preview-src-list="srcList"
                ></el-image>
                <div class="selectImg">
                  <i class="el-icon-plus" />
                  <div>选择图片上传</div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="3.审核意见" name="third">
          <div>
            <div class="dialogItem">
              <!-- <div class="itemIndex">3</div> -->
              <div class="itemTitle">审核意见</div>
            </div>
            <InfoList
              v-for="(item, index) in opinionList"
              :info="[
              {key:'审批人', value: item.approvePerson},
              {key: '审核时间', value: item.approveTime},
              {key: '审批意见', value: item.approveOpinion}]"
            />
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="dialogType===4">
      <!-- <info-list :title="业务宗号:" /> -->
      <h3 class="title">添加新收件</h3>
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        style="float:left"
        :model="addForm"
      >
        <el-form-item label="收件名称">
          <el-input v-model="addForm.name"></el-input>
        </el-form-item>
        <el-form-item label="收件性质">
          <el-radio v-model="addForm.attr" label="原件">原件</el-radio>
          <el-radio v-model="addForm.attr" label="复印件">复印件</el-radio>
        </el-form-item>
        <el-form-item label="收件份数">
          <el-input v-model="addForm.count"></el-input>
        </el-form-item>
      </el-form>
      <div style="width:80px;margin:0 auto">
        <el-button type="primary" size="mini" icon="el-icon-plus">添加</el-button>
      </div>
      <div class="receiveList">
        <div class="item" v-for="(item,index) in businessReceives" :key="item">
          <div class="no">
            <span>{{index+1}}</span>
          </div>
          <div class="info">
            <div class="name">{{item.shoujianTitle}}</div>
            <div class="attr">
              <div>
                性质:
                <span>{{item.shoujianSjxz}}</span>
              </div>
              <div>
                份数:
                <span>{{item.shoujianFenshu}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width:80px;margin:0 auto">
        <el-button @click="handleShouJian" type="primary" size="mini">确认收件</el-button>
      </div>
    </div>
    <div class="detail myForm-mb5 myDialog" v-loading="loading" v-if="dialogType===5">
      <el-form label-position="right" label-width="150px" size="mini" inline>
        <el-upload
          :action="url"
          list-type="picture-card"
          :file-list="fileList"
           with-credentials
          :before-upload="beforeUpload"
          :on-remove="afterRemove"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt />
        </el-dialog>
      </el-form>
    </div>
  </div>
</template>

<script>
import InfoList from "@/components/common/infoList/InfoList";
import CenterButton from "@/components/common/centerButton/CenterButton";

import { djtkApi } from "@/api/menu_4/djtk";

//查看接口


export default {
  name: "FwdDjtkglDialog",
  components: { InfoList, CenterButton },
  props: {
    dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl:'',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      loading: false,
      opinionList: [],
      ywlx: [],
      options: [],
      businessReceives: [],
      businessAttachments: [],
      name: "",
      ywzh: "",
      addForm: {
        name: "",
        attr: "原件",
        count: 1
      },
      zjjgzhLdbh: [],
      zjjgzhYhid: [],
      ldName: "",
      bankName: "",
      tableData: [],
      form: {},
      form1: {},
      ruleForm: {},
      formBlank: {
        xmxxXmbh: "",
        zjjgzhXmmc: "",
        zjjgzhGsmc: "",
        jgzhLxdh: "",
        zjjgzhZzmj: "",
        zjjgzhZzts: "",
        zjjgzhFzzmj: "",
        zjjgzhFzzts: "",
        zjjgzhLdmc: ""
      },
      url: "http://192.168.1.161:8090/data_center/common/upload"
    };
  },
  methods: {
    beforeUpload(file) {
      var code = 600320200624173558;
    //   var code = 14;
      let fd = new FormData(); //通过form数据格式来传
      fd.append("files", file); //传文件
      fd.append("ywzh", code); //传其他参数
      axios.post(this.url, fd,{
           headers: {
              "Content-Type": "multipart/form-data"
            }
      }).then(res => {
        //    debugger
      });
    },
    afterRemove() {},
    setMode(mode, id) {
      if (mode === 1) {
        // sqjgzhApi.getProjectById(id).then(ret => {
        //   this.form.xmxxXmbh = this.$store.state.projectData.xmxxXmbh;
        //   this.form.zjjgzhXmmc = this.$store.state.projectData.xmxxXmmc;
        //   this.form.zjjgzhGsmc = this.$store.state.projectData.xmxxKfs;
        // });
        // this.getBussinessType();
      } else if (mode === 2) {
        //debugger
        //查看详情
        this.DetailData(id);

        // this.fetchOpinion(this.zjjgzhYwzh);
        // this.fetchShouJianByYwzh(this.zjjgzhYwzh);
      } else if (mode === 3) {
        //修改
        // this.editData();
        // sqjgzhApi.getAccountInfoById(id).then(ret => {
        //   //console.log(ret);
        //   this.form = ret.data.supervisedAccount;
        //   let dl = ret.data.supervisedAccount.ywxlBh.slice(0, 4); // 8019001
        //   let xl = ret.data.supervisedAccount.ywxlBh.slice(4); // 8019001
        //   this.ywlx = [dl, ret.data.ywxlBh];
        // });
        djtkApi.getAccountInfoById(id).then(ret => {
          this.form = ret.data.fundUse;
        });
      } else if (mode === 4) {
        //收件
        this.fetchShouJian(id);
      }else if (mode === 5) {
        //传图
        this.fetchShouJian(id);
      }
    },
    fetchShouJian() {},
    handleShouJian() {
      //确认收件
    },
    DetailData(id) {
      //详情
      djtkApi.getAccountInfoById(id).then(ret => {
        this.form1 = ret.data.fundUse;
      });
    },
    editData() {
      const list = {
        djsyId: this.form.djsyId,
        djsySqrxm: this.ruleForm.djsySqrxm,
        djsyHrzhyh: this.ruleForm.djsyHrzhyh,
        djsyHrzhmc: this.ruleForm.djsyHrzhmc,
        djsyHrzhzh: this.ruleForm.djsyHrzhzh,
        djsyJgzh: this.form.djsyJgzh,
        djsyJgyhmc: this.form.djsyJgyhmc,
        djsyJgyhid: this.form.djsyJgyhid,
        djsyYksy: this.ruleForm.djsyYksy,
        djsySbje: this.form.djsySbje,
        djsySqrlxdh: this.form.djsySbje
      };
      //修改
      djtkApi.geteditData(list).then(res => {
        if (res.code == 200) {
          this.$message.success(res.message);
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    onSubmit() {
      //修改确认
      this.editData();
    }
  },
  created() {
    console.log(this.url, "地址");
  }
};
</script>

<style>
</style>