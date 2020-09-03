<template>
  <div class="TjjgzhDialog">
    <div v-if="dialogType===1||dialogType===3">
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form"
      >
        <el-form-item label="项目名称">
          <el-input v-model="form.zjjgzhXmmc"></el-input>
        </el-form-item>

        <el-form-item label="项目编号">
          <el-input v-model="form.xmxxXmbh"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form.zjjgzhGsmc"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.zjjgzhLxdh"></el-input>
        </el-form-item>
       
        <!-- <el-form-item
          label="住宅面积"
          class="area"
        >
          <el-input v-model="form.zjjgzhZzmj"></el-input>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input v-model="form.zjjgzhZzts"></el-input>
        </el-form-item>
        <el-form-item
          label="非住宅面积"
          class="area"
        >
          <el-input v-model="form.zjjgzhFzzmj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input v-model="form.zjjgzhFzzts"></el-input>
        </el-form-item> -->
        
        <el-form-item label="银行名称">
          <el-select
            style="width: 180px"
            v-model="form.zjjgzhYhid"
            placeholder="请选择监管银行"
          >
            <el-option
              v-for="(item,index) in zjjgzhYhid"
              :key="index"
              :label="item.yinhangTitle"
              :value="item.yinhangId"
              @click.native="getBankName(item.yinhangTitle)"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="监管方式">
                <template>
                    <el-radio v-model="form.zjjgzhJglx" :label=0 @change="changeMode">一户多栋</el-radio>
                    <el-radio v-model="form.zjjgzhJglx" :label=1 @change="changeMode">一户一栋</el-radio>
                </template>
       </el-form-item>
         <el-form-item label="楼栋名称"  v-if="this.mode===1">
          <el-select
            style="width: 180px"
            v-model="form.zjjgzhLdbh"
            placeholder="请选择楼栋"
          >
            <el-option
              v-for="(item,index) in zjjgzhLdbh"
              :key="index"
              :label="item.ldxxMc"
              :value="item.ldxxLdbh"
              @click.native="getLdName(item.ldxxMc,item.ldxxZzmj,item.ldxxZzts,item.ldxxFzzmj,item.ldxxFzzts)"
            >
            </el-option>
          </el-select>
        </el-form-item>
        
        <!-- <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item> -->
        <!-- <el-form-item label="监管账户名称">
          <el-input v-model="form.zjjgzhZhmc"></el-input>
        </el-form-item> -->
      </el-form>

      <div
        class="buttonGroup"
        style="margin:0 auto;width:80px;margin-top:20px"
      >
        <el-button-group class="buttons">
          <el-button
            type="primary"
            size="mini"
            @click="onSubmit"
          >保存
          </el-button>
        </el-button-group>
      </div>
    </div>
    <div
      class="detail myForm-mb5 myDialog"
      v-loading="loading"
      v-if="dialogType===2"
    >
      <!--详情部分-->
      <el-tabs
        type="border-card"
        value="first"
      >
        <el-tab-pane label="1.账户申请信息详情" name="first">

          <div class="dialogItem">
            <div class="itemIndex">1</div>
            <div class="itemTitle">账户申请信息详情</div>
          </div>
          <el-form
            label-position="right"
            label-width="150px"
            size="mini"
            inline
            :model="form1"
          >
            <el-form-item label="项目名称">
              <el-input v-model="form1.zjjgzhXmmc"></el-input>
            </el-form-item>
            <el-form-item label="项目编号">
              <el-input v-model="form1.xmxxXmbh"></el-input>
            </el-form-item>
            <el-form-item label="企业名称">
              <el-input v-model="form1.zjjgzhGsmc"></el-input>
            </el-form-item>
            <el-form-item label="联系电话">
              <el-input v-model="form1.zjjgzhLxdh"></el-input>
            </el-form-item>
            <!-- <el-form-item
              label="住宅面积"
              class="area"
            >
              <el-input v-model="form1.zjjgzhZzmj"></el-input>
            </el-form-item>
            <el-form-item label="住宅套数">
              <el-input v-model="form1.zjjgzhZzts"></el-input>
            </el-form-item>
            <el-form-item
              label="非住宅面积"
              class="area"
            >
              <el-input v-model="form1.zjjgzhFzzmj"></el-input>
            </el-form-item>
            <el-form-item label="非住宅套数">
              <el-input v-model="form1.zjjgzhFzzts"></el-input>
            </el-form-item> -->

            <el-form-item label="拟设监管银行">
              <el-input v-model="form1.zjjgzhYhmc"></el-input>
            </el-form-item>
            <el-form-item label="楼栋名称">
              <el-input v-model="form1.zjjgzhLdmc"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="2.收件情况" name="second">
          <ReceiveList ref="ref3"/>
        </el-tab-pane>
        <el-tab-pane label="3.审核意见" name="third">
         <OpinionList ref="ref4" />
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="dialogType===4">
      <ConfirmReceive ref="ref1" :ywzh="ywzh" type="YSZJJG_ZJJGZH"/>
    </div>
    <div v-if="dialogType===9">
      <ManageReceive ref="ref2"/>
    </div>
  </div>
</template>
<script>
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  import InfoList from "@/components/common/infoList/InfoList";
  import {businessApi} from "@/api/menu_3/__Business";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";
  import {filesApi} from "@/api/files";
  import ReceiveListPic from "@/components/current/manageReceive/ManageReceive";
  import {config} from "@/api/baseConfig";
  import WbTable from "@/components/common/wb-table/WbTable";
  import ConfirmReceive from "@/components/current/confirmReceive/ConfirmReceive";
  import ManageReceive from "@/components/current/manageReceive/ManageReceive";
  import ReceiveList from "@/components/current/receiveList/ReceiveList";
  import OpinionList from "@/components/current/opinionList/OpinionList";

  export default {
    name: "TjjgzhDialog",
    components: {ReceiveList, ManageReceive, ConfirmReceive,OpinionList, WbTable, ReceiveListPic, UploadCpn, InfoList, CenterButton},
    props: {
      zjjgzhId: {type: String}, //type: [String, Number]
      zjjgzhYwzh: {type: String},
      xmxxXmbh: {type: String},
      dialogType: {
        default: 1, // 添加
        enum: [1, 2 /*详情*/]
      }
    },
    data() {
      return {
        loading: false,
        mode:0,
        opinionList: [],
        ywlx: [],
        options: [],
        businessReceives: [],
        businessReceives2: [],
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
        form1: {},
        tableData: [],
        form: {
          xmxxXmbh: "",
          zjjgzhXmmc: "",
          zjjgzhGsmc: "",
          jgzhLxdh: "",
          zjjgzhZzmj: "",
          zjjgzhZzts: "",
          zjjgzhFzzmj: "",
          zjjgzhFzzts: "",
          zjjgzhLdmc: "",
          zjjgzhJglx:0,
        },
        formBlank: {
          xmxxXmbh: "",
          zjjgzhXmmc: "",
          zjjgzhGsmc: "",
          jgzhLxdh: "",
          zjjgzhZzmj: "",
          zjjgzhZzts: "",
          zjjgzhFzzmj: "",
          zjjgzhFzzts: "",
          zjjgzhLdmc: "",
          zjjgzhJglx:0,
        },
        tableData2: [],
        addList: [],
        retId: "",
        _ywzh: "",
      };
    },
    computed: {
      url() {
        return sqjgzhApi.upload
      }
    },
    filters: {
      sjxzFilter(val) {
        switch (val) {
          case 0:
            return "原件";
          case 1:
            return "复印件";
          case 2:
            return "扫描件"
        }
      },
      typeFilter(num) {
        switch (num) {
          case 0: return "原件";
          case 1: return "复印件";
          case 2: return "扫描件";
        }
      }
    },
    created() {
      // todo 这两个请求放到打开时候发送
      // this.getLd();
      // this.getBank();

    },
    methods: {
      reset() {
        Object.assign(this.$data, this.$options.data())
      },
      delFile(file){
        if(file.fujianId){
          filesApi.delFile(file.fujianId)
        }else{
          let id = file.response.data[0].fujianId
          filesApi.delFile(id)
        }
      },
      fetchAddList() {
        sqjgzhApi.getCertificateList().then(ret => {
          this.addList = ret.data.map(item => ({
            ...item,
            value: item.zhengjianName
          }))
        })
      },
      addFile() {
        this.tableData2.push({
          add: true,
          shoujianXuhao: "",
          shoujianTitle: "",
          shoujianFenshu: 1,
          shoujianYema: "",
          shoujianSjxz: "",
          zhengjianId: "",
        })
      },
      addFile2() {
        this.businessReceives2.push({
          add: true,
          ywsjYwzh: "",
          zhengjianId: "",
          ywsjTitle: "",
          ywsjFenshu: 1,
          ywsjSjxz: "",
        })
      },
      handleRemove(index) {  // 表里删除
        this.tableData2.splice(index, 1)
      },
      handleRemove2(index) {  // api删除
        let obj = this.businessReceives2[index];
        console.log(obj)
        sqjgzhApi.delOne(obj.ywsjId).then(ret => {
          if (ret.code === 200) {
            this.$message.success("删除成功");
            this.businessReceives2.splice(index, 1)
          }
        })
      },
      handleUpdate(index) {

      },
      resetR() {
        this.fetchShouJian(this.retId)
      },
      change(val, item) {
        item.shoujianTitle = val;
      },
      change2(val, item) {
        item.ywsjTitle = val;
      },
      getYwsj() {
        sqjgzhApi.getAllYwsj().then(ret => {
          this.businessReceives = ret.data;
        });
      },
      getLd() {
        sqjgzhApi.getLd(this.$store.state.projectData.xmxxXmbh).then(ret => {
          this.zjjgzhLdbh = ret.data;
        });
      },
      getBank() {
        sqjgzhApi.getBank().then(ret => {
          this.zjjgzhYhid = ret.data;
        });
      },
      _findIndex(list) {  // 确定是不是内置证件
        list.forEach((item1, index1) => {
          this.addList.some((item2, index2) => {
            if (item1.shoujianTitle === item2.zhengjianName) {
              item1.shoujianId = item2.zhengjianId;
              item1.shoujianXuhao = item2.zhengjianPx
              return
            }
          })
        })
      },
      getLdName(name,arg1,arg2,arg3,arg4) {
        this.ldName = name;
        this.form.zjjgzhZzmj=arg1;
        this.form.zjjgzhZzts=arg2;
        this.form.zjjgzhFzzmj=arg3;
        this.form.zjjgzhFzzts=arg4;

        console.log(this.ldName);
      },
      getBankName(name) {
        this.bankName = name;
        console.log(this.bankName);
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
      addData() {
        // let ywxlId = 0;

        // ywxlId = this.ywlx[1];
        sqjgzhApi.addAccount({
          ...this.form,
          zjjgzhLdmc: this.ldName,
          zjjgzhYhmc: this.bankName,
          kfsId: this.$store.state.projectData.kfsId,
          ywxlBh: 8002001
        })
          .then(ret => {
            if (ret.code === 200) {
              this.$message.success("添加成功");
              this.$emit("submitSuccess");
            }
          });
      },
      updateData() {  
       
        sqjgzhApi.updateAccount({
          ...this.form,
          zjjgzhLdmc: this.ldName,
          zjjgzhYhmc: this.bankName,
          kfsId: this.$store.state.projectData.kfsId,
          ywxlBh:8002001
        })
          .then(ret => {
            if (ret.code === 200) {
              this.$message.success("修改成功");
              this.$emit("submitSuccess");
            }
          });
      },
      DetailData(id) {
        sqjgzhApi.getAccountInfoById(id).then(ret => {
          //console.log(ret);
          this.form1 = ret.data.supervisedAccount;
        });
      },
      fetchOpinion() {
        filesApi.getAuditInfo(this.logId).then(ret => {
          this.opinionList = ret.data;
        })
      },
      fetchShouJian(id) {
        sqjgzhApi.queryReceiving(id).then(ret => {
          this.businessAttachments = ret.data.businessAttachments;
          this.businessReceives = ret.data.businessReceives;
          this.tableData2 = this.businessReceives
        })
      },
      handleAddOne(index, item) {

      },
      handleShouJian() {
        let flag = this.tableData2.some((item, index) => {
          if (!item.shoujianSjxz) {
            this.$message.error(`请选择${this.tableData2[index].shoujianTitle}资料类型`)
            return true
          }
        })
        if (flag) return;
        this._findIndex(this.tableData2)
        console.log(this.tableData2)
        let list = this.businessReceives.map(item => ({
          zhengjianId: item.shoujianId,
          ywsjTitle: item.shoujianTitle,
          ywsjFenshu: item.shoujianFenshu,
          ywsjSjxz: this._zjlx(item.shoujianSjxz),
          ywsjYwzh: this.zjjgzhYwzh,
          ywsjXh: item.shoujianXuhao
        }))
        console.log(list);
        sqjgzhApi.submitShouJian(list).then(ret => {
          if (ret.code === 200) {
            this.$message.success("收件成功")
            this.$emit("submitSuccess")
          }
        })
      },
      _zjlx(name) {
        switch (name) {
          case "原件":
            return 0;
          case "复印件":
            return 1;
          case "扫描件":
            return 2;
        }
      },
      fetchShouJianByYwzh(id) {
        sqjgzhApi.selectByYwzh(id).then(ret => {
          this.businessReceives = ret.data.map(item => ({
            shoujianTitle: item.ywsjTitle,
            shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
            shoujianFenshu: item.ywsjFenshu
          }))
        })
      },
      fetchShouJianByYwzh2(id) {
        sqjgzhApi.selectByYwzh(id).then(ret => {
          console.log(ret)
          this.businessReceives2 = ret.data.map(item => ({
            ...item,
            imgList: item.enclosures.map(item => ({
              title: item.fujianName,
              url: config.productMode ? item.fujianPath : sqjgzhApi.preview + item.fujianId,
              fujianId: item.fujianId
            }))
          }))
        })
      },
      onSubmit() {
        if (this.dialogType === 1) {
          this.addData();
        } else if (this.dialogType === 3) {
          this.updateData();
        }
      },
      setMode(mode, id, ...args) {
        if (mode === 1) {
          this.getLd();
          this.getBank();
          console.log(".....");
          this.form.xmxxXmbh = this.$store.state.projectData.xmxxXmbh;
          this.form.zjjgzhXmmc = this.$store.state.projectData.xmxxXmmc;
          this.form.zjjgzhGsmc = this.$store.state.projectData.xmxxKfs;

          this.getBussinessType();
        } else if (mode === 2) {
          this.DetailData(id);
          this.logId = args[0]
          this.$refs.ref4.fetchData(this.logId);

          this.$refs.ref3.fetchData(args[1])
        } else if (mode === 3) {
          this.getLd();
          this.getBank();
          console.log(".....");
          this.getBussinessType();
          sqjgzhApi.getAccountInfoById(id).then(ret => {
            //console.log(ret);
            this.form = ret.data.supervisedAccount;
            let dl = ret.data.supervisedAccount.ywxlBh.slice(0, 4);  // 8019001
            let xl = ret.data.supervisedAccount.ywxlBh.slice(4);  // 8019001
            this.ywlx = [dl, ret.data.ywxlBh]
          });
        } else if (mode === 4) {
          this.retId = id;
          this.ywzh = args[0]
          this.$refs.ref1.fetchDefault(id);
        } else if (mode === 9) {
          this.$refs.ref2.fetchConfirm(args[0])
        }
      },
      handleRemoveFile(obj) {
        console.log(obj)
        let id;
        if (obj.fujianId) {   // 原来就存在的
          id = obj.fujianId
        } else {  // 刚刚上传的
          id = obj.response.data[0].fujianId;
        }
        sqjgzhApi.delFile(id).then(ret => {
          if (ret.code === 200) {
            this.$message.info("删除成功")
          }
        })
      },
      handleUploadFile(obj) {
        this.$message.success("上传成功")
      },
      handleEnsure(index) {
        let obj = this.businessReceives2[index];
        if (!obj.ywsjTitle.trim()) {
          this.$message.warning("请输入收件名称");
          return
        }
        if (obj.ywsjSjxz === "") {
          this.$message.warning("请选择收件性质");
          return;
        }
        this.addList.some(item => {
          if (obj.ywsjTitle === item.value) {
            obj.ywsjId = item.zhengjianId;
            return true;
          }
        })
        obj.ywsjYwzh = this.zjjgzhYwzh;
        this.loading = true
        sqjgzhApi.addOne(obj).then(ret => {
          this.loading = false;
          if (ret.code === 200) {
            this.$set(this.businessReceives2, index, ret.data)
            this.$message.success("添加成功")
            obj.add = false;
          }
        })
      },
      handleCancel(index) {
        this.businessReceives2.splice(index, 1)
      },
      changeMode(val){
        console.log("radio="+val);
        if(val===0){
          this.mode=0;
        }else if(val===1){
          this.mode=1;
        }
        
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
  .item{
    width: 100%;
    display: flex;
    .s1{
      width: 40px;
      text-align: center;
      color: $info;
    }
    .s2{
      flex: 1;
      font-weight: 600;
      text-shadow: $box-shadow;
    }
    .s3{
      padding: 0 20px;
      text-shadow: $box-shadow;
    }
    .s4{
      padding: 0 20px;
    }
    .add{
      padding: 0 50px;
    }
  }
</style>