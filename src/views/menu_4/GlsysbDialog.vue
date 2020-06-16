<template>
 <div>
  <div  v-if="dialogType===1">
    <el-form
        label-position="right"
        label-width="160px"
        size="mini"
        inline
        :model="form">
        <el-form-item  label="公司名称">
          <el-input v-model="form.ldxxMc" ></el-input>
        </el-form-item>
        <el-form-item  label="项目名称">
          <el-input v-model="form.ldxxJzmj"></el-input>
        </el-form-item>
        <el-form-item  label="划入账户名称">
          <el-input v-model="form.ldxxZzmj" style="width:200px"></el-input>
           <el-button style="float:left" @click="showAccount">选择</el-button>
        </el-form-item>
        <el-form-item  label="划入账户账号" >
          <el-input v-model="form.ldxxFzzmj"></el-input>
        </el-form-item>
        <el-form-item  label="划入账户银行">
          <el-input v-model="form.ldxxZzjj"></el-input>
        </el-form-item>
        <el-form-item  label="本栋监管总额">
          <el-input v-model="form.ldxxFzzjj"></el-input>
        </el-form-item>
        <el-form-item  label="本栋成交总额" >
          <el-input v-model="form.ldxxYsze" disabled></el-input>
        </el-form-item>       
        <el-form-item label="使用金额" >
          <el-input v-model="form.zjjgszjlSdszdye" disabled></el-input>
        </el-form-item>
        <el-form-item  label="楼栋账面金额">
          <el-input v-model="form.zjjgszjlSdszdye" disabled></el-input>
        </el-form-item>
        <el-form-item  label="重点监管金额">
          <el-input v-model="form.ldxxZzjj" disabled></el-input>
        </el-form-item>
        <el-form-item  label="申请用款金额">
          <el-input v-model="form.ldxxFzzjj"></el-input>
        </el-form-item>
        <el-form-item  label="本栋剩余金额" >
          <el-input v-model="form.ldxxYsze"></el-input>
        </el-form-item>
        <el-form-item  label="用款事由说明" >
          <el-input v-model="form.ldxxYsze"></el-input>
        </el-form-item>       
       
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
          :xmxxXmbh="xmxxXmbh"
        />
      </el-dialog>
      <div class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px">
      <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </el-button-group>
      </div>
      </div>
   
    <div class="detail myForm-mb5 myDialog" v-if="dialogType===2" >
      <!--详情部分-->
    <el-tabs
      type="border-card"
      value="first"
    >
      <el-tab-pane label="1.楼栋信息详情" name="first">
       
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
        <el-form-item label="公司名称" >
          <el-input v-model="form1.ldxxMc"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-input v-model="form1.ldxxJzmj"></el-input>
        </el-form-item>
        <el-form-item label="划入账户名称" >
          <el-input v-model="form1.ldxxKsmj"></el-input>
        </el-form-item>
        <el-form-item label="划入账户账号" >
          <el-input v-model="form1.fwjgName"></el-input>
        </el-form-item>
        <el-form-item label="划入账户银行" >
          <el-input v-model="form1.zzksmj"></el-input>
        </el-form-item>
        <el-form-item label="申请用款金额" >
          <el-input v-model="form1.zzksts"></el-input>
        </el-form-item>
        <el-form-item label="合同编号" >
          <el-input v-model="form1.fzzksmj"></el-input>
        </el-form-item>
        <el-form-item label="房屋编号" >
          <el-input v-model="form1.fzzksts"></el-input>
        </el-form-item>
        <el-form-item label="监管银行" >
          <el-input v-model="form1.ldxxZzjj"></el-input>
        </el-form-item>
        <el-form-item label="监管账号" >
          <el-input v-model="form1.ldxxFzzjj"></el-input>
        </el-form-item>
        <el-form-item label="用款事由说明" >
          <el-input v-model="form1.fwytName"></el-input>
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
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoList from "@/components/common/infoList/InfoList";
  //import {szldjgzjApi} from "@/api/menu_3/szldzjjg";
  import AccountDialog from "@/views/menu_4/TjsysbDialog2";
  export default {
    name: "SqsfxyDialog",
    components: {CenterButton,InfoList,AccountDialog},
    props:{
      dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
      
    },
     

    },
    data() {
      return {
      opinionList:[],
      ywlx: [],
      hetongId:0,
      options: [],
      tableData:[],
      businessReceives: [],
      businessAttachments:[],
      name: "",
      title:"",
      ywzh:"",
      ldxxId:0,
        form:{
          ldxxMc:"",
          ldxxJzmj:0,
          zzksmj:0,
          fzzksmj:0,
          ldxxZzjj:0,
          ldxxFzzjj:0,
          ldxxYsze:0,
          zjjgszjlSdszdye:0,
          zjjgszjlZjjgzt:"1",
          zjjgszjlZjjgfs:"1",
          zjjgszjlZdjgzjze:0,
          zjjgszjlZdjgzjbl:0,
        },
         formBlank:{
          ldxxMc:"",
          ldxxJzmj:0,
          zzksmj:0,
          fzzksmj:0,
          ldxxZzjj:0,
          ldxxFzzjj:0,
          ldxxYsze:0,
          zjjgszjlSdszdye:0,
          zjjgszjlZjjgzt:"1",
          zjjgszjlZjjgfs:"1",
          zjjgszjlZdjgzjze:0,
          zjjgszjlZdjgzjbl:0,
        },
        form1:{},
        form2:{},
        title:"",
        flag:"",
        tableData:{},
        loading: false,
        zjjgzhYhid:[],
        dialogVisible1:false,
        
        }
    },
    created(){
      
    },
    methods:{
      reset() {
        this.form = {...this.formBlank};
      },
      selectAccount(arg) {
        this.dialogVisible1 = false;
        //this.form.zjjgszjlZjjgzhmc = arg.hbzhKhyh;  银行名称
        //this.form.zjjgszjlZjjgzh = arg.hbzhZhmc;   账户名称
         //this.form.zjjgszjlZjjgzhmc = arg.hbzhZhhm;  划拨账号
       
      },
      showAccount() {
        this.flag=this.xmxxXmbh
        this.title = "银行账户列表";
        this.dialogVisible1 = true;
      },
     addData() {
         
     
          tjsysbApi.add({...this.form,ldxxId:this.ldxxId}).then(ret => {
          if (ret.code !== 200) {
          this.$message.error(ret.message);
        } else {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        }
      });
    },
     
    
      
    onSubmit() {
      if (this.dialogType === 1) {
        this.addData();
      } else if (this.dialogType === 2) {
        
      }
    },
   
    setMode(mode,id){
      console.log("00000000000");
      
      if(mode===1){
        szldjgzjApi.getbuildingInfo(id).then(ret => {
          this.form.ldxxMc=ret.data.buildingInfo.ldxxMc;
          this.form.ldxxJzmj=ret.data.buildingInfo.ldxxJzmj;
          this.form.ldxxZzmj=ret.data.buildingInfo.ldxxZzmj;
          this.form.ldxxFzzmj=ret.data.buildingInfo.ldxxFzzmj;
          this.form.ldxxZzjj=ret.data.buildingInfo.ldxxZzjj;
          this.form.ldxxFzzjj=ret.data.buildingInfo.ldxxFzzjj;
          this.ldxxId=id;
          
        });
       
      }else if(mode===2){
         szldjgzjApi.getLdDetail(id).then(ret => {
          this.form1=ret.data;
          if(this.form1.ldxxFwlx=0){
            this.form1.ldxxFwlx="预售商品房"
          }else if(this.form1.ldxxFwlx=1){
            this.form1.ldxxFwlx="现房"
          };
           if (this.form1.ldxxZjjgzt == 0) {
                this.form1.ldxxZjjgzt = '不启动'
              } else if (this.form1.ldxxZjjgzt == 1) {
                this.form1.ldxxZjjgzt = '启动'
              };
           if(this.form1.ldxxZjjgfs=1){
            this.form1.ldxxZjjgfs="按固定金额监管"
            }else if(this.form1.ldxxZjjgfs=2){
              this.form1.ldxxZjjgfs="按预售总价比例监管"
            }else if(this.form1.ldxxZjjgfs=3){
              this.form1.ldxxZjjgfs="按实时缴存房款比例监管"
            }else if(this.form1.ldxxZjjgfs=4){
              this.form1.ldxxZjjgfs="按合同成交比例监管"
            };
            if(this.form1.ldxxSfydt=0){
              this.form1.ldxxSfydt="无"
            }else if(this.form1.ldxxSfydt=1){
              this.form1.ldxxSfydt="有"
            }
        });
         szldjgzjApi.getSupervisionByLdid(id).then(ret => {
          this.tableData=ret.data.buildingFundsSupervisions;
          console.log(ret.data.buildingFundsSupervisions);
          
           this.tableData.map(function (val) {
             
               if (val.zjjgszjlZjjgzt == 0) {
                val.zjjgszjlZjjgzt = '不启动'
              } else if (val.zjjgszjlZjjgzt == 1) {
                val.zjjgszjlZjjgzt = '启动'
              } 
               if (val.zjjgszjlZjjgfs == 1) {
                val.zjjgszjlZjjgfs = '按固定金额监管'
              } else if (val.zjjgszjlZjjgfs == 2) {
                val.zjjgszjlZjjgfs = '按预售总价比例监管 '
              } else if (val.zjjgszjlZjjgfs == 3) {
                val.zjjgszjlZjjgfs = '按实时缴存房款比例监管'
              } else if (val.zjjgszjlZjjgfs == 4) {
                val.zjjgszjlZjjgfs = '按合同成交比例监管'
              } 
            });
        });
      }

    },
    }
  }
</script>

<style scoped lang="scss">
  .title{
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }
 .area{
    position: relative;
    &::after{
      content: "M²";
      display: block;
      position: absolute;
      right: -20px;
    //   color: red;
      font-size: 14px;
      top: 6px;
    }
    }
  .count{
    position: relative;
    &::after{
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