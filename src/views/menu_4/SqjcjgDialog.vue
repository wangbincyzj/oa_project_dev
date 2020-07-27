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
       <!-- <el-dialog
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
      </el-dialog> -->
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
            <div class="itemTitle">楼栋信息详情</div>
          </div>
           <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1"
      >
        <el-form-item label="楼栋名称" >
          <el-input v-model="form1.ldxxMc"></el-input>
        </el-form-item>
        <el-form-item label="建筑面积" >
          <el-input v-model="form1.ldxxJzmj"></el-input>
        </el-form-item>
        <el-form-item label="可售面积" >
          <el-input v-model="form1.ldxxKsmj"></el-input>
        </el-form-item>
        <el-form-item label="房屋结构" >
          <el-input v-model="form1.fwjgName"></el-input>
        </el-form-item>
        <el-form-item label="住宅可售面积" >
          <el-input v-model="form1.zzksmj"></el-input>
        </el-form-item>
        <el-form-item label="住宅套数" >
          <el-input v-model="form1.zzksts"></el-input>
        </el-form-item>
        <el-form-item label="非住宅可售面积" >
          <el-input v-model="form1.fzzksmj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅套数" >
          <el-input v-model="form1.fzzksts"></el-input>
        </el-form-item>
        <el-form-item label="住宅均价" >
          <el-input v-model="form1.ldxxZzjj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅均价" >
          <el-input v-model="form1.ldxxFzzjj"></el-input>
        </el-form-item>
        <el-form-item label="规划用途" >
          <el-input v-model="form1.fwytName"></el-input>
        </el-form-item>
        <el-form-item label="房屋类型" >
          <el-input v-model="form1.ldxxFwlx"></el-input>
        </el-form-item>
        <el-form-item label="住宅层数" >
          <el-input v-model="form1.ldxxZgcs"></el-input>
        </el-form-item>
        <el-form-item label="起始层名" >
          <el-input v-model="form1.ldxxZgqsc"></el-input>
        </el-form-item>
        <el-form-item label="单 元 数" >
          <el-input v-model="form1.ldxxDys"></el-input>
        </el-form-item>
        <el-form-item label="一梯几户" >
          <el-input v-model="form1.ldxxYtjh	"></el-input>
        </el-form-item>
        <el-form-item label="地上层数" >
          <el-input v-model="form1.ldxxDscs"></el-input>
        </el-form-item>
        <el-form-item label="地下层数" >
          <el-input v-model="form1.ldxxDxcs"></el-input>
        </el-form-item>
        <el-form-item label="规划许可证号" >
          <el-input v-model="form1.ldxxGhxkzh"></el-input>
        </el-form-item>
        <el-form-item label="施工许可证号" >
          <el-input v-model="form1.ldxxSgxkzh"></el-input>
        </el-form-item>
        <el-form-item label="房号含单元号" >
          <el-input v-model="form1.ldxxDyhzt"></el-input>
        </el-form-item>
        <el-form-item label="施工单位" >
          <el-input v-model="form1.ldxxSgdw"></el-input>
        </el-form-item>
        <el-form-item label="土地证号" >
          <el-input v-model="form1.ldxxTdzh"></el-input>
        </el-form-item>
        <el-form-item label="土地编号" >
          <el-input v-model="form1.ldxxTdbh"></el-input>
        </el-form-item>
        <el-form-item label="土地面积" >
          <el-input v-model="form1.ldxxTdmj"></el-input>
        </el-form-item>
        <el-form-item label="土地年限" >
          <el-input v-model="form1.ldxxTdnx"></el-input>
        </el-form-item>
        <el-form-item label="房屋性质" >
          <el-input v-model="form1.ldxxFwxz"></el-input>
        </el-form-item>
        <el-form-item label="交房日期" >
          <el-input v-model="form1.ldxxJgrq"></el-input>
        </el-form-item>
        <el-form-item label="电梯情况" >
          <el-input v-model="form1.ldxxSfydt"></el-input>
        </el-form-item>
        <el-form-item label="启用资金监管状态" >
          <el-input v-model="form1.ldxxZjjgzt"></el-input>
        </el-form-item>
        <el-form-item label="重点资金监管方式" >
          <el-input v-model="form1.ldxxZjjgfs"></el-input>
        </el-form-item>
        <el-form-item label="重点监管资金总额" >
          <el-input v-model="form1.ldxxZdjgzjze"></el-input>
        </el-form-item>
        <el-form-item label="重点监管资金比例" >
          <el-input v-model="form1.ldxxZdjgzjbl"></el-input>
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
    
 
 </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoList from "@/components/common/infoList/InfoList";
  import {tjsysbApi} from "@/api/menu_4/tjsysb";
  import {businessApi} from "@/api/menu_3/__Business";
   import {sqjcjgApi} from "@/api/menu_4/sqjcjg";
  export default {
    name: "tjsysbDialog",
    components: {CenterButton,InfoList,},
    props:{
      dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
      
    },
     ldbh:{},
        ldxxMc:{},
        jianguanJe:0,
        shiyongJe:0,
        shengyuJe:0,
        jiaocunJkje:0,
        jiaocunJkzh:{},
        jiaocunKhyh:{},
        jiaocunYhid:{},
        shiyongSbje:0,
        jiaocunZhmc:{},
        ldbh:{},
        ldxxId:0,
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
      xmxxXmbh:"",
      ldxxId:0,
        form:{
          jczjjgKfs:"",
          jczjjgXmmc:"",
          jczjjgLdmc:"",
          jczjjgJgze:0,
          jczjjgSyze:0,
          jczjjgZmye:0,
          jczjjgYhmc:"",
          jczjjgZhmc:"",
          jczjjgJgzh:"",
          jczjjgDjzmh:"",
          jczjjgDjrq:"",
        },
         formBlank:{
          jczjjgKfs:"",
          jczjjgXmmc:"",
          jczjjgLdmc:"",
          jczjjgJgze:0,
          jczjjgSyze:0,
          jczjjgZmye:0,
          jczjjgYhmc:"",
          jczjjgZhmc:"",
          jczjjgJgzh:"",
          jczjjgDjzmh:"",
          jczjjgDjrq:"",
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
      this.getBussinessType();
    },
    methods:{
      reset() {
        this.form = {...this.formBlank};
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
     
      
     addData() {
         
      let ywxlId = 0;
        if (this.ywlx.length < 2) {
          this.$message.error("请选择业务类型")
          return
        };
      ywxlId = this.ywlx[1];
          sqjcjgApi.addApplication({...this.form,xxBh:ywxlId,kfsRwbh:this.$store.state.projectData.kfsRwbh,ldLdbh:this.ldbh,ldxxId:this.ldxxId}).then(ret => {
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
        this.form.jczjjgKfs=this.$store.state.projectData.xmxxKfs;
        this.form.jczjjgXmmc=this.$store.state.projectData.xmxxXmmc
        this.form.jczjjgLdmc=this.ldxxMc;
        this.form.jczjjgJgze=this.jianguanJe;
        this.form.jczjjgSyze=this.shiyongJe;
        this.form.jczjjgZmye=this.shengyuJe;
        this.form.jczjjgYhmc=this.jiaocunKhyh;
        this.form.jczjjgZhmc=this.jiaocunZhmc;
        this.form.jczjjgJgzh=this.jiaocunJkzh;     
       
      }else if(mode===2){
         sqjcjgApi.getLdDetail(id).then(ret => {
           console.log(ret);
           console.log(ret.data.ldxxZjjgzt);
           
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
        //  szldjgzjApi.getSupervisionByLdid(id).then(ret => {
        //   this.tableData=ret.data.buildingFundsSupervisions;
        //   console.log(ret.data.buildingFundsSupervisions);
          
        //    this.tableData.map(function (val) {
             
        //        if (val.zjjgszjlZjjgzt == 0) {
        //         val.zjjgszjlZjjgzt = '不启动'
        //       } else if (val.zjjgszjlZjjgzt == 1) {
        //         val.zjjgszjlZjjgzt = '启动'
        //       } 
        //        if (val.zjjgszjlZjjgfs == 1) {
        //         val.zjjgszjlZjjgfs = '按固定金额监管'
        //       } else if (val.zjjgszjlZjjgfs == 2) {
        //         val.zjjgszjlZjjgfs = '按预售总价比例监管 '
        //       } else if (val.zjjgszjlZjjgfs == 3) {
        //         val.zjjgszjlZjjgfs = '按实时缴存房款比例监管'
        //       } else if (val.zjjgszjlZjjgfs == 4) {
        //         val.zjjgszjlZjjgfs = '按合同成交比例监管'
        //       } 
        //     });
        // });
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