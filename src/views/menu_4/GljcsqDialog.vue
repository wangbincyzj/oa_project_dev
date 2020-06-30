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
            <div class="pics">
              <el-image
                style="width: 60px; height: 60px"
                src="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                :preview-src-list="srcList">
              </el-image>
              <div class="selectImg">
                <i class="el-icon-plus"/>
                <div>选择图片上传</div>
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
    <div>
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
      <div  style="width:80px;margin:0 auto">
          <el-button
            type="primary"
            size="mini"
            icon="el-icon-plus"
           
          >添加</el-button></div>
        <div class="receiveList">
          <div
            class="item"
            v-for="(item,index) in businessReceives"
          >
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
           <div  style="width:80px;margin:0 auto">
        <el-button
          @click="handleShouJian"
          type="primary"
          size="mini"
        >确认收件
        </el-button></div>
        </div>
        
      </div>
  </div>
  </div>
</template>
<script>
import { gljcsqApi } from "@/api/menu_4/gljcsq";
import InfoList from "@/components/common/infoList/InfoList";
import {businessApi} from "@/api/menu_3/__Business";
import CenterButton from "@/components/common/centerButton/CenterButton";
export default {
  name: "GljcsqDialog",
  components: {InfoList, CenterButton},
  props: {
    zjjgzhId: { type: String }, //type: [String, Number]
    zjjgzhYwzh:{String},
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
       this.ywlx = [];
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

    // DetailData(id) {
    //   sqjgzhApi.getAccountInfoById(id).then(ret => {
    //     //console.log(ret);
    //     this.form1 = ret.data.supervisedAccount;
    //   });
    // },
    //  fetchOpinion(id){
    //      sqjgzhApi.getShlcDetail(id).then(ret => {
    //       this.opinionList = ret.data
    //     })
    //    },
    //    fetchShouJian(id) {
    //     sqjgzhApi.queryReceiving(id).then(ret => {
    //       this.businessAttachments = ret.data.businessAttachments;
    //       this.businessReceives = ret.data.businessReceives;
    //     })
    //   },
   
    //  handleShouJian() {
    //     // 组装一个List
    //     console.log("taetae");
        
    //     console.log(this.businessReceives)
    //     let list = this.businessReceives.map(item => ({
    //       zhengjianId: item.shoujianId,
    //       ywsjTitle: item.shoujianTitle,
    //       ywsjFenshu: item.shoujianFenshu,
    //       ywsjSjxz: item.shoujianSjxz === "原件" ? 0 : 1,
    //       ywsjYwzh: this.zjjgzhYwzh,
    //       ywsjXh: item.shoujianXuhao
    //     }))
    //     sqjgzhApi.submitShouJian(list).then(ret=>{
    //       if (ret.code===200){
    //         this.$message.success("收件成功")
    //         this.$emit("submitSuccess")
    //       }else{
    //         this.$message.error(ret.message)
    //       }
    //     })
    //   },
    //  fetchShouJianByYwzh(id){
    //      sqjgzhApi.selectByYwzh(id).then(ret => {
    //       this.businessReceives = ret.data.map(item => ({
    //         shoujianTitle: item.ywsjTitle,
    //         shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
    //         shoujianFenshu: item.ywsjFenshu
    //       }))
    //     })
    //   }, 
    onSubmit() {
      if (this.dialogType === 1) {
        this.updateData();
      }
    },
    setMode(mode, id) {
     if (mode === 1) {
          this.getBussinessType();
        gljcsqApi.getSqDetail(id).then(ret => {
          //console.log(ret);
          this.form = ret.data;
          let dl = ret.data.xxBh.slice(0, 4);  // 8019001
          let xl = ret.data.xxBh.slice(4);  // 8019001
          this.ywlx = [dl, ret.data.xxBh]
        });
      }else if(mode===4){
        this.fetchShouJian(id);
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