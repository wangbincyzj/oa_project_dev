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
        <el-form-item label="楼栋名称">
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
        <el-form-item
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
        </el-form-item>
        
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
        
        <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>
        <!-- <el-form-item label="监管账户名称">
          <el-input v-model="form.zjjgzhZhmc"></el-input>
        </el-form-item> -->
      </el-form>

      <div
        class="buttonGroup"
        style="margin:0 auto;width:100px;margin-top:20px"
      >
        <el-button-group class="buttons">
          <el-button
            type="primary"
            @click="onSubmit"
          >立即提交
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
            <el-form-item
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
            </el-form-item>

            <el-form-item label="拟设监管银行">
              <el-input v-model="form1.zjjgzhYhmc"></el-input>
            </el-form-item>
            <el-form-item label="楼栋名称">
              <el-input v-model="form1.zjjgzhLdmc"></el-input>
            </el-form-item>
          </el-form>
        </el-tab-pane>

        <el-tab-pane label="2.收件情况" name="second">
          <div class="receiveList">
            <div class="dialogItem">
              <div class="itemIndex">2</div>
              <div class="itemTitle">收件列表</div>
            </div>
            <div class="item" v-for="(item,index) in businessReceives">
              <div class="no">
                <span>{{index+1}}</span>
              </div>
              <div class="info">
                <div class="name">{{item.shoujianTitle}}</div>
                <div class="attr">
                  <div>性质:<span>{{item.shoujianSjxz}}</span></div>
                  <div>份数:<span>{{item.shoujianFenshu}}</span></div>
                </div>
              </div>

            </div>
          </div>

        </el-tab-pane>
        <el-tab-pane label="3.审核意见" name="third">
          <div>
            <div class="dialogItem">
              <div class="itemIndex">3</div>
              <div class="itemTitle">审核意见</div>
            </div>
            <el-table :data="opinionList" size="mini">
              <el-table-column label="流程" align="center" prop="processName"/>
              <el-table-column label="时间" align="center" prop="approveTime" width="150">
                <template #default="{row}">
                  <div v-if="row.processName==='受理'">
                    <div>{{row.approveTime}}</div>
                    <div v-if="row.promiseDate">允诺时间:{{row.promiseDate}}</div>
                  </div>
                  <div v-else>
                    <div>{{row.approveTime}}</div>
                  </div>
                </template>
              </el-table-column>
              <el-table-column label="审核人" align="center" prop="approvePerson"/>
              <el-table-column label="结果" align="center" prop="processResult">
                <template #default="{row}">
                  <div v-if="row.processResult===1 && row.processName!=='受理'">通过</div>
                  <div v-if="row.processResult===1 && row.processName==='受理'">受理</div>
                  <div class="danger" v-if="row.processResult===2 && row.processName!=='受理'">驳回</div>
                  <div class="danger" v-if="row.processResult===2 && row.processName==='受理'">退件</div>
                </template>
              </el-table-column>
              <el-table-column label="意见" align="center" prop="approveOpinion" width="500"/>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div v-if="dialogType===4">
      <h3 class="title">
        <el-button-group>
          <el-button size="mini" @click="addFile" type="primary" icon="el-icon-plus">添加收件</el-button>
          <el-button size="mini" @click="resetR" type="warning" icon="el-icon-warning-outline">重置默认</el-button>
        </el-button-group>
      </h3>

      <el-table :data="tableData2" size="mini">
        <el-table-column
          type="index"
          width="50"/>
        <el-table-column align="left" label="收件名称" prop="shoujianTitle">
          <!--v-model="scope.row.shoujianTitle"-->
          <template #default="scope">
            <div v-if="scope.row.add" style="display: flex">
              <div style="flex: 3; padding-right: 20px;">
                <el-input size="mini" v-model="scope.row.shoujianTitle"/>
              </div>
              <div style="flex: 1">
                <el-select
                  size="mini"
                  value=""
                  @change="change($event, scope.row)"
                  placeholder="手动输入或选择收件"
                >
                  <el-option v-for="item in addList" :value="item.value">{{item.value}}</el-option>
                </el-select>
              </div>
            </div>
            <div v-else>
              {{scope.row.shoujianTitle}}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="份数" width="120">
          <template #default="{row}">
            <el-select v-model="row.shoujianFenshu" size="mini">
              <el-option value="1">1</el-option>
              <el-option value="2">2</el-option>
              <el-option value="3">3</el-option>
              <el-option value="4">4</el-option>
              <el-option value="5">5</el-option>
            </el-select>
          </template>

        </el-table-column>
        <el-table-column align="center" label="资料类型" width="120">
          <template #default="{row}">
            <el-select v-model="row.shoujianSjxz" size="mini">
              <el-option value="原件">原件</el-option>
              <el-option value="复印件">复印件</el-option>
              <el-option value="扫描件">扫描件</el-option>
            </el-select>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template #default="scope">
            <el-button size="mini" type="danger" @click="handleRemove(scope.$index)">删除收件</el-button>
          </template>
        </el-table-column>
      </el-table>

      <CenterButton @btnClick="handleShouJian" title="确认收件"/>
    </div>
    <div v-if="dialogType===9">
      <h3 class="title">
        <el-button-group>
          <el-button size="mini" @click="addFile2" type="primary" icon="el-icon-plus">添加收件</el-button>
        </el-button-group>
      </h3>
      <!--<el-table :data="businessReceives2" >
        <el-table-column type="expand" width="50">
          <template #default="{row}">
            <div>
              <UploadCpn
                :key="row.fujianId"
                :file-list="row.imgList"
                :url="url"
                :data="{logId: row.logId}"
                @addFile="handleUploadFile"
                @delFile="handleRemoveFile"
              />
            </div>
          </template>
        </el-table-column>
        <el-table-column align="left" label="收件名称" prop="ywsjTitle">
          &lt;!&ndash;v-model="scope.row.shoujianTitle"&ndash;&gt;
          <template #default="scope">
            <div v-if="scope.row.add" style="display: flex">
              <div style="flex: 3; padding-right: 20px;">
                <el-input size="mini" v-model="scope.row.ywsjTitle"/>
              </div>
              <div style="flex: 1">
                <el-select
                  size="mini"
                  value=""
                  @change="change2($event, scope.row)"
                  placeholder="手动输入或选择收件"
                >
                  <el-option v-for="item in addList" :value="item.value">{{item.value}}</el-option>
                </el-select>
              </div>
            </div>
            <div v-else>
              {{scope.row.ywsjTitle}}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="份数" width="120">
          <template #default="{row}">
            <div v-if="row.add">
              <el-select v-model="row.ywsjFenshu" size="mini">
                <el-option value="1">1</el-option>
                <el-option value="2">2</el-option>
                <el-option value="3">3</el-option>
                <el-option value="4">4</el-option>
                <el-option value="5">5</el-option>
              </el-select>
            </div>
            <div v-else>
              {{row.ywsjFenshu}}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="资料类型" width="120">
          <template #default="{row}">
            <div v-if="row.add">
              <el-select v-model="row.ywsjSjxz" size="mini" :disabled="!row.add">
                <el-option :value="0" label="原件">原件</el-option>
                <el-option :value="1" label="复印件">复印件</el-option>
                <el-option :value="2" label="扫描件">扫描件</el-option>
              </el-select>
            </div>
            <div v-else>
              {{row.ywsjSjxz|sjxzFilter}}
            </div>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作" width="200">
          <template #default="scope">
            <div v-if="scope.row.add">
              <el-button size="mini" type="primary" @click="handleEnsure(scope.$index)">确认</el-button>
              <el-button size="mini" type="primary" @click="handleCancel(scope.$index)">取消</el-button>
            </div>
            <div v-else>
              <el-button size="mini" type="danger" @click="handleRemove2(scope.$index)">删除</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>-->
      <ReceiveListPic :receive-list.sync="businessReceives2"/>
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
  import ReceiveListPic from "@/components/current/receiveListPic/ReceiveListPic";
  import {config} from "@/api/baseConfig";


  export default {
    name: "TjjgzhDialog",
    components: {ReceiveListPic, UploadCpn, InfoList, CenterButton},
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
          zjjgzhLdmc: ""
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
          zjjgzhLdmc: ""
        },
        tableData2: [],
        addList: [],
        retId: ""
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
          } else {
            this.$message.error(ret.message || "未知错误")
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
        let ywxlId = 0;

        ywxlId = this.ywlx[1];
        sqjgzhApi.addAccount({
          ...this.form,
          zjjgzhLdmc: this.ldName,
          zjjgzhYhmc: this.bankName,
          kfsId: this.$store.state.projectData.kfsId,
          ywxlBh: ywxlId
        })
          .then(ret => {
            if (ret.code !== 200) {
              this.$message.error(ret.message);
            } else {
              this.$message.success("添加成功");
              this.$emit("submitSuccess");
            }
          });
      },
      updateData() {
        let ywxlId = 0;


        ywxlId = this.ywlx[1];
        sqjgzhApi.updateAccount({
          ...this.form,
          zjjgzhLdmc: this.ldName,
          zjjgzhYhmc: this.bankName,
          kfsId: this.$store.state.projectData.kfsId,
          ywxlBh:ywxlId
        })
          .then(ret => {
            if (ret.code !== 200) {
              this.$message.error(ret.message);
            } else {
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
          } else {
            this.$message.error(ret.message)
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
          this.fetchOpinion();
          this.fetchShouJianByYwzh(this.zjjgzhYwzh);
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
          this.fetchAddList();
          this.retId = id;
          this.fetchShouJian(id);
        } else if (mode === 9) {
          this.fetchAddList();
          this.fetchShouJianByYwzh2(this.zjjgzhYwzh);
          this.fetchShouJian(id);
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
          } else {
            this.$message.error(ret.message || "未知错误")
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
      }
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