<template>
  <div class="FwdDjtkglDialog">
    <div v-if="dialogType===1">
      <el-form label-position="right" label-width="150px" size="mini" inline :model="form">
        <el-form-item label="开发商">
          <el-input v-model="form.djsyKfs" disabled></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form.djsyXmmc" disabled></el-input>
        </el-form-item>
        <el-form-item label="监管银行名称">
          <el-input v-model="form.djsyJgyhmc" disabled></el-input>
        </el-form-item>

        <el-form-item label="监管账户">
          <el-input v-model="form.djsyJgzh" disabled></el-input>
        </el-form-item>

        <el-form-item label="汇入账户名称">
          <el-input v-model="form.djsyHrzhmc"></el-input>
        </el-form-item>

        <el-form-item label="申请人姓名">
          <el-input v-model="form.djsySqrxm"></el-input>
        </el-form-item>
        <el-form-item label="汇入账户银行" >
          <el-input v-model="form.djsyHrzhyh"></el-input>
        </el-form-item>

        <el-form-item label="汇入账户" >
          <el-input v-model="form.djsyHrzhzh"></el-input>
        </el-form-item>

        <el-form-item label="申报金额">
          <el-input v-model="form.djsySbje" disabled></el-input>
        </el-form-item>

        <el-form-item label="用款事由">
          <el-input type="textarea" v-model="form.djsyYksy"></el-input>
        </el-form-item>
      </el-form>


      <div class="buttonGroup" 
      style="margin:0 auto;width:100px;margin-top:20px"
      v-if="">
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
            <div class="itemIndex">1</div> 
            <div class="itemTitle">定金退款详情</div>
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
            <el-form-item label="申请人联系电话" >
              <el-input v-model="form1.djsySqrlxdh" disabled></el-input>
            </el-form-item>
            <el-form-item label="汇入账户名称">
              <el-input v-model="form1.djsyHrzhmc" disabled></el-input>
            </el-form-item>
            <el-form-item label="汇入账户" >
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
      <ConfirmReceive ref="ref1" :ywzh="djsyYwzh" type="DJ_SHENBAO"/>
    </div>
    <div v-if="dialogType===9">
      <ManageReceive ref="ref2"/>
    </div>

  </div>
</template>

<script>
import InfoList from "@/components/common/infoList/InfoList";
import CenterButton from "@/components/common/centerButton/CenterButton";
import {businessApi} from "@/api/menu_3/__Business";
import { djtkglApi } from "@/api/menu_4/djtkgl";  
import {authApi} from "@/api/menu_4/auth"; 
import ConfirmReceive from "@/components/current/confirmReceive/ConfirmReceive";
import ManageReceive from "@/components/current/manageReceive/ManageReceive";
import ReceiveList from "@/components/current/receiveList/ReceiveList";
//查看接口


export default {
  name: "DjtkglDialog",
  components: { InfoList, CenterButton,ConfirmReceive,ManageReceive,ReceiveList },
  props: {
    dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    },
    djsyYwzh:"",
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
     djsyId:0,
      url: "http://192.168.1.161:8090/data_center/common/upload"
    };
  },
  methods: {
   
    setMode(mode, id,logId,ywzh) {
      if (mode === 1) {
       this.fetchDetail(id);
       this.djsyId=id;
      } else if (mode === 2) {
       this.fetchDetail1(id);
       this.fetchOpinion(logId)
      this.$refs.ref3.fetchData(ywzh);
        }else if (mode === 4) {
          this.retId = id;
          this.$refs.ref1.fetchDefault(id);
        } else if (mode === 9) {
          this.$refs.ref2.fetchConfirm(ywzh)
        }
    },
    
    fetchDetail(id) {
      //详情
      djtkglApi.getfundUseDetail(id).then(ret => {
        this.form = ret.data.fundUse;
      });
    },
    fetchDetail1(id) {
      //详情
      djtkglApi.getfundUseDetail(id).then(ret => {
        this.form1 = ret.data.fundUse;
      });
    },
    fetchOpinion(id){
          authApi.getAuditInfo(id).then(ret => {
          this.opinionList = ret.data;
        })
    },
    updateData() {
      djtkglApi.updatefundUse({...this.form,djsyId:this.djsyId}).then(res => {
        if (res.code == 200) {
          this.$message.success(res.message);
          this.$emit("submitSuccess");
        } else {
          this.$message.error(res.message);
        }
      });
    },
    onSubmit() {
      if(this.dialogType===1){
        this.updateData();
      }
      
    }
  },
  created() {
  }
};
</script>

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