<template>
  <div>
    <div v-if="dialogType===1">
      <el-form
        label-position="right"
        label-width="160px"
        size="mini"
        inline
        :model="form">
        <el-form-item label="公司名称">
          <el-input v-model="form.shiyongKfs"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.shiyongXmmc"></el-input>
        </el-form-item>
        <el-form-item label="本栋监管总额">
          <el-input v-model="form.shiyongJgze" disabled></el-input>
        </el-form-item>
        <el-form-item label="楼栋账面金额">
          <el-input v-model="form.shiyongZhye" disabled></el-input>
        </el-form-item>
        <el-form-item label="总使用金额">
          <el-input v-model="form.shiyongZsyje" disabled></el-input>
        </el-form-item>
        <el-form-item label="重点监管金额">
          <el-input v-model="form.zdzjjgje" disabled></el-input>
        </el-form-item>
        <el-form-item label="可使用资金">
          <el-input v-model="form.ksyje" disabled></el-input>
        </el-form-item>
        <el-form-item  label="监管银行" >
          <el-input v-model="form.shiyongJgyhmc" disabled></el-input>
        </el-form-item> 
        <el-form-item  label="监管账户">
          <el-input v-model="form.shiyongJgzhmc" disabled></el-input>
        </el-form-item>
        <el-form-item  label="监管账号">
          <el-input v-model="form.shiyongJgzh" disabled></el-input>
        </el-form-item>
        <el-form-item label="监管资金类型">
          <template>
            <el-radio v-model="form.shiyongBflx" :label=0 @click.native="caculate1">重点监管</el-radio>
            <el-radio v-model="form.shiyongBflx" :label=1 @click.native="caculate2">普通监管</el-radio>
          </template>
        </el-form-item>
        <br>
        <el-form-item label="划入账户名称">
          <el-input v-model="form.shiyongHrzhmc" style="width:130px"></el-input>
          <el-button @click="showAccount">选择</el-button>
        </el-form-item>
        <el-form-item label="划入账户账号">
          <el-input v-model="form.shiyongHrzhzh"></el-input>
        </el-form-item>
        <el-form-item label="划入账户银行">
          <el-input v-model="form.shiyongHrzhyh"></el-input>
        </el-form-item>
        <el-form-item label="申请使用金额">
          <el-input v-model="form.shiyongSbje" @input="count"></el-input>
        </el-form-item>
        <el-form-item label="经办人">
          <el-input v-model="form.shiyongSqrxm"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.shiyongSqrlxdh"></el-input>
        </el-form-item>
        <el-form-item label="经办人证件号码">
          <el-input v-model="form.shiyongSqrzjhm"></el-input>
        </el-form-item>
        <el-form-item label="本栋剩余金额">
          <el-input v-model="form.shiyongSyje"></el-input>
          <!-- </el-form-item>
            <el-form-item label="业务类别">
            <el-cascader
              clearable
              v-model="ywlx"
              :options="options"
              :props="{ expandTrigger: 'hover' }"
            ></el-cascader> -->
        </el-form-item>
        <el-form-item label="用款事由说明">
          <el-input v-model="form.shiyongYksy" type="textarea" style="width:200px"></el-input>
        </el-form-item>
        <!-- <el-form-item  label="项目进度描述">
          <el-input v-model="form.shiyongJdms" type="textarea" style="width:200px"></el-input>
        </el-form-item> -->

      </el-form>
      <el-dialog
        append-to-body
        :title="title"
        center
        width="800px"
        slot="dialog"
        :visible.sync="dialogVisible1"
        @close="dialogVisible1 = false"
      >
        <AccountDialog
          @selected="selectAccount"
          ref="dialog1"
        />
      </el-dialog>
      <div class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px">
        <el-button-group class="buttons">
          <el-button type="primary" @click="onSubmit">立即提交</el-button>
        </el-button-group>
      </div>
    </div>

    <div class="detail myForm-mb5 myDialog" v-if="dialogType===2">
      <!--详情部分-->
      <el-tabs
        type="border-card"
        value="first"
      >
        <el-tab-pane label="1.申报使用信息详情" name="first">

          <div class="dialogItem">
            <div class="itemIndex">1</div>
            <div class="itemTitle">申报使用信息详情</div>
          </div>
          <el-form
            label-position="right"
            label-width="150px"
            size="mini"
            inline
            :model="form1"
          >
            <el-form-item label="公司名称">
              <el-input v-model="form1.shiyongKfs"></el-input>
            </el-form-item>
            <el-form-item label="项目名称">
              <el-input v-model="form1.shiyongXmmc"></el-input>
            </el-form-item>
            <el-form-item label="划入账户名称">
              <el-input v-model="form1.shiyongHrzhmc"></el-input>
            </el-form-item>
            <el-form-item label="划入账户账号">
              <el-input v-model="form1.shiyongHrzhzh"></el-input>
            </el-form-item>
            <el-form-item label="划入账户银行">
              <el-input v-model="form1.shiyongHrzhyh"></el-input>
            </el-form-item>
            <el-form-item label="申请用款金额">
              <el-input v-model="form1.shiyongSbje"></el-input>
            </el-form-item>
            <!-- <el-form-item label="合同编号">
              <el-input v-model="form1.fzzksmj"></el-input>
            </el-form-item>
            <el-form-item label="房屋编号">
              <el-input v-model="form1.shiyongFwbh"></el-input>
            </el-form-item> -->
            <el-form-item label="监管银行">
              <el-input v-model="form1.shiyongJgyhmc"></el-input>
            </el-form-item>
            <el-form-item label="监管账号">
              <el-input v-model="form1.shiyongJgzh"></el-input>
            </el-form-item>
            <el-form-item label="用款事由说明">
              <el-input v-model="form1.shiyongYksy" type="textarea"></el-input>
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
           <ReceiveList ref="ref3"/>
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
      <ConfirmReceive ref="ref1" :ywzh="shiyongYwzh" type="YSZJJG_SHIYONG"/>
    </div>
    <div v-if="dialogType===9">
      <ManageReceive ref="ref2"/>
    </div>

  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoList from "@/components/common/infoList/InfoList";
  import {glsysbApi} from "@/api/menu_4/glsysb";   
  import {authApi} from "@/api/menu_4/auth";
  import AccountDialog from "@/views/menu_4/TjsysbDialog2";  
  import ConfirmReceive from "@/components/current/confirmReceive/ConfirmReceive";
  import ManageReceive from "@/components/current/manageReceive/ManageReceive";
  import ReceiveList from "@/components/current/receiveList/ReceiveList";

  export default {
    name: "GlsysbDialog",
    components: {CenterButton, InfoList, AccountDialog,ConfirmReceive,ManageReceive,ReceiveList},
    props: {
      dialogType: {
        default: 1, // 添加
        enum: [1, 2 /*详情*/]

      },
      shiyongYwzh:"",

    },
    data() {
      return {
        opinionList: [],
        ywlx: [],
        shiyongId: 0,
        options: [],
        tableData: [],
        businessReceives: [],
        businessAttachments: [],
        name: "",
        title: "",
        ywzh: "",
        ldxxId: 0,
        form: {},
        formBlank: {},
        form1: {shiyongKfs:""},
        form2: {},
        addForm: {},
        flag: "",
        loading: false,
        zjjgzhYhid: [],
        dialogVisible1: false,
        retId:0,

      }
    },
    created() {

    },
    methods: {
      reset() {
        this.form = {...this.formBlank};
        Object.assign(this.$data, this.$options.data());
      },
      selectAccount(arg) {
        this.dialogVisible1 = false;
        this.form.shiyongHrzhmc = arg.hbzhZhmc;
        this.form.shiyongHrzhzh = arg.hbzhZhhm;
        this.form.shiyongHrzhyh = arg.hbzhKhyh;

      },
      showAccount() {
        this.flag = this.xmxxXmbh
        this.title = "银行账户列表";
        this.dialogVisible1 = true;
      },
      caculate1() {
        this.form.shiyongBflx = 0;
      },
      caculate2() {
        this.form.shiyongBflx = 1;
      },
      count() {
        if (this.form.shiyongBflx == null) {
          this.$message({
            message: '请先选择监管资金类型',
            type: 'warning'
          });
        }
        if (this.form.shiyongBflx == 0) {
          if (this.form.shiyongSbje > this.form.zdzjjgje) {
            this.$message({
              message: '金额不可超过可申请金额最大值,请重新输入',
              type: 'warning'
            });
            this.form.shiyongSbje = "";
          } else {
            this.form.shiyongSyje = this.form.shiyongZhye - this.form.shiyongSbje;
          }
        } else if (this.form.shiyongBflx == 1) {
          if (this.form.shiyongSbje > this.form.ksyje) {
            this.$message({
              message: '金额不可超过可申请金额最大值,请重新输入',
              type: 'warning'
            });
            this.form.shiyongSbje = "";
          } else {
            this.form.shiyongSyje = this.form.shiyongZhye - this.form.shiyongSbje;
          }
        }
      },
       fetchOpinion(id){
          authApi.getAuditInfo(id).then(ret => {
          this.opinionList = ret.data;
        })
       },
      updateData() {
        glsysbApi.updateSysb({...this.form, shiyongId: this.shiyongId}).then(ret => {
          if (ret.code !== 200) {
            this.$message.error(ret.message);
          } else {
            this.$message.success("修改成功");
            this.$emit("submitSuccess");
          }
        });
      },


      onSubmit() {
        if (this.dialogType === 1) {
          this.updateData();
        } 
      },

      setMode(mode, id,logId,ywzh) {
        if (mode === 1 ) {
          this.shiyongId = id;
          glsysbApi.getSysbById(id).then(ret => {
            this.form = ret.data.presaleFundsUse;
            this.form.shiyongZsyje = ret.data.building.shiyongZsyje;
            this.form.zdzjjgje = ret.data.building.zdzjjgje;
            this.form.shiyongKfs = ret.data.building.shiyongKfs;
            this.form.ksyje = ret.data.building.ksyje;
          });
          this.fetchOpinion(logId);
        
        }else if(mode===2){
           this.shiyongId = id;
          glsysbApi.getSysbById(id).then(ret => {
            this.form1 = ret.data.presaleFundsUse;  //presaleFundsUse
            this.form1.shiyongZsyje = ret.data.building.shiyongZsyje;
            this.form1.zdzjjgje = ret.data.building.zdzjjgje;
            this.form1.shiyongKfs = ret.data.building.shiyongKfs;
            this.form1.ksyje = ret.data.building.ksyje;
          });
          this.fetchOpinion(logId);
          this.$refs.ref3.fetchData(ywzh);
        }else if (mode === 4) {
          this.retId = id;
          this.$refs.ref1.fetchDefault(id);
        } else if (mode === 9) {
          this.$refs.ref2.fetchConfirm(ywzh)
        }

      },
    }
  }
</script>

<style scoped lang="scss">
  .title {
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }

  .area {
    position: relative;

    &::after {
      content: "M²";
      display: block;
      position: absolute;
      right: -20px;
      //   color: red;
      font-size: 14px;
      top: 6px;
    }
  }

  .count {
    position: relative;

    &::after {
      content: "(万元)";
      display: block;
      position: absolute;
      right: -32px;
      color: red;
      font-size: 12px;
      top: 8px;
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