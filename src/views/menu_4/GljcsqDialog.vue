<template>
  <div class="TjjgzhDialog">
    <div v-if="dialogType===1">
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form"
      >
         <el-form-item  label="公司名称">
          <el-input v-model="form.jczjjgKfs" ></el-input>
        </el-form-item>
        <el-form-item  label="项目名称">
          <el-input v-model="form.jczjjgXmmc" ></el-input>
        </el-form-item>
        <el-form-item  label="楼栋名称">
          <el-input v-model="form.jczjjgLdmc" ></el-input>
        </el-form-item>
        <el-form-item  label="监管总额">
          <el-input v-model="form.jczjjgJgze" ></el-input>
        </el-form-item>
        <el-form-item  label="使用金额" >
          <el-input v-model="form.jczjjgSyze" ></el-input>
        </el-form-item> 
        <el-form-item  label="账面余额" >
          <el-input v-model="form.jczjjgZmye" ></el-input>
        </el-form-item>  
        <el-form-item  label="监管银行">
          <el-input v-model="form.jczjjgYhmc"></el-input>
        </el-form-item>
        <el-form-item  label="账户名称">
          <el-input v-model="form.jczjjgZhmc" ></el-input>
        </el-form-item>
        <el-form-item  label="监管账号">
          <el-input v-model="form.jczjjgJgzh" ></el-input>
        </el-form-item>
        <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>
        <el-form-item  label="首次登记证明号" >
          <el-input v-model="form.jczjjgDjzmh"></el-input>
        </el-form-item>       
         <el-form-item  label="首次登记日期" >
          <el-date-picker v-model="form.jczjjgDjrq" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item> 
          
        <el-form-item  label="备注信息">
          <el-input v-model="form.jczjjgBzxx" type="textarea" style="width:200px"></el-input>
        </el-form-item>
      </el-form>

      <div
        class="buttonGroup"
        style="margin:0 auto;width:100px;margin-top:20px"
      >
        <el-button-group class="buttons">
          <el-button
            type="primary"
            @click="onSubmit"
          >立即提交</el-button>
        </el-button-group>
      </div>
    </div>

    <div
      class="detail myForm-mb5 myDialog"
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
       <el-form-item label="公司名称">
          <el-input v-model="form1.jczjjgKfs"></el-input>
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="form1.jczjjgXmmc"></el-input>
        </el-form-item>
        <el-form-item label="楼栋名称">
          <el-input v-model="form1.jczjjgLdmc"></el-input>
        </el-form-item>
       
        <el-form-item label="监管总额">
          <el-input v-model="form1.jczjjgJgze"></el-input>
        </el-form-item>
        <el-form-item label="使用金额">
          <el-input v-model="form1.jczjjgSyze"></el-input>
        </el-form-item>
        <el-form-item label="账面余额">
          <el-input v-model="form1.jczjjgZmye"></el-input>
        </el-form-item>
        <el-form-item label="监管银行">
          <el-input v-model="form1.jczjjgYhmc"></el-input>
        </el-form-item>
        <el-form-item label="账户名称">
          <el-input v-model="form1.jczjjgZhmc"></el-input>
        </el-form-item>
         <el-form-item label="监管账号">
          <el-input v-model="form1.jczjjgJgzh"></el-input>
        </el-form-item>
         <el-form-item label="首次登记证明号">
          <el-input v-model="form1.jczjjgDjzmh"></el-input>
        </el-form-item>
          <el-form-item label="首次登记日期">
          <el-input v-model="form1.jczjjgDjrq"></el-input>
        </el-form-item>
          <el-form-item label="备注信息">
          <el-input v-model="form1.jczjjgBzxx" type="textarea"></el-input>
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
        <OpinionList ref="ref4" />
      </el-tab-pane>
    </el-tabs>
    </div>
    <div v-if="dialogType===4">
      <ConfirmReceive ref="ref1" :ywzh="jcjzjgYwzh" type="YSZJJG_JCZJJG"/>
    </div>
    <div v-if="dialogType===9">
      <ManageReceive ref="ref2"/>
    </div>

  </div>
</template>
<script>
import { gljcsqApi } from "@/api/menu_4/gljcsq";
import InfoList from "@/components/common/infoList/InfoList";
import {businessApi} from "@/api/menu_3/__Business"; 
import {authApi} from "@/api/menu_4/auth";
import CenterButton from "@/components/common/centerButton/CenterButton";
import ConfirmReceive from "@/components/current/confirmReceive/ConfirmReceive";
import ManageReceive from "@/components/current/manageReceive/ManageReceive";
import ReceiveList from "@/components/current/receiveList/ReceiveList";
import OpinionList from "@/components/current/opinionList/OpinionList";

export default {
  name: "GljcsqDialog",
  components: {InfoList, CenterButton,ConfirmReceive,ManageReceive,ReceiveList,OpinionList},
  props: {
    zjjgzhId: { type: String }, //type: [String, Number]
    jcjzjgYwzh:{String},
    xmxxXmbh: { type: String },
    dialogType: {
      default: 1, // 
      enum: [1, 2 /*详情*/]
    }
  },
  data() {
    return {
      opinionList:[],
       ywlx: [],
       options: [],
      businessReceives: [],
      businessAttachments:[],
      name: "",
      ywzh:"",
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
        
      },
      formBlank: {
        
      }
    };
  },
  created() {
   
  },
  methods: {
    reset() {
      this.form = { ...this.formBlank };
      
    },
    getYwsj() {
      sqjgzhApi.getAllYwsj().then(ret=>{
        this.businessReceives=ret.data;
      });
    },
   
   
    getBussinessType(){
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
   
    updateData() {
     
          gljcsqApi.updateApplication({...this.form,}).then(ret => {
          if (ret.code !== 200) {
          this.$message.error(ret.message);
        } else {
          this.$message.success("修改成功");
          this.$emit("submitSuccess");
        }
      });
    },

     fetchOpinion(id){
         authApi.getAuditInfo(id).then(ret => {
          this.opinionList = ret.data;
        })
       },
    
    onSubmit() {
      if (this.dialogType === 1) {
        this.updateData();
      }
    },
    setMode(mode, id,logId,ywzh) {
     if (mode === 1) {
          this.getBussinessType();
        gljcsqApi.getSqDetail(id).then(ret => {
          //console.log(ret);
          this.form = ret.data;
          let dl = ret.data.xxBh.slice(0, 4);  // 8019001
          let xl = ret.data.xxBh.slice(4);  // 8019001
          this.ywlx = [dl, ret.data.xxBh]
        });
      }else if(mode===2){
        gljcsqApi.getSqDetail(id).then(ret => {       
          this.form1 = ret.data;
        });
        this.$refs.ref4.fetchData(logId);
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