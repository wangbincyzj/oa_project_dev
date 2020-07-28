<template>
 <div>
  <div  v-if="dialogType===1||dialogType===2">
    <el-form
        label-position="right"
        label-width="160px"
        size="mini"
        inline
        :model="form">
        <!-- 0添加 1编辑 2查看-->
         <el-form-item label="甲方(工程监理企业)" >
          <el-input v-model="form.hetongJgjgmc"></el-input>
        </el-form-item>
        <el-form-item  label="甲方地址">
          <el-input v-model="form.hetongJgjgdz"></el-input>
        </el-form-item>
        <el-form-item  label="甲方法定代表人">
          <el-input v-model="form.hetongJgjgfr"></el-input>
        </el-form-item>
        <el-form-item  label="甲方联系方式">
          <el-input v-model="form.hetongJgjglxdh"></el-input>
        </el-form-item> 
        <el-form-item label="乙方(银行名称)">
           <el-select style="width: 180px" v-model="form.hetongYhmc" placeholder="请选择监管银行">
                <el-option
                v-for="(item,index) in zjjgzhYhid" :key="index"
                :label="item.yinhangTitle"
                :value="item.yinhangTitle" 
               >
                </el-option>
            </el-select>         
        </el-form-item>
        <el-form-item  label="银行地址">
          <el-input v-model="form.hetongYhdz"></el-input>
        </el-form-item>
        <el-form-item  label="乙方法定代表人">
          <el-input v-model="form.hetongYhdlr"></el-input>
        </el-form-item>
        <el-form-item  label="乙方联系方式">
          <el-input v-model="form.hetongYhdlrlxdh"></el-input>
        </el-form-item>       
        <el-form-item  label="丙方(企业名称)">
          <el-input v-model="form.hetongKfsmc"></el-input>
        </el-form-item>
        <el-form-item  label="企业地址">
          <el-input v-model="form.hetongKfsdz"></el-input>
        </el-form-item>
        <el-form-item  label="丙方法定代表人">
          <el-input v-model="form.hetongKfxm"></el-input>
        </el-form-item>
        <el-form-item  label="丙方联系方式">
          <el-input v-model="form.hetongKflxdh"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-input v-model="form.hetongXmmc"></el-input>
        </el-form-item>
         <el-form-item label="项目坐落">
          <el-input v-model="form.hetongXmdz"></el-input>
        </el-form-item>
        <el-form-item label="国有土地所有权证" >
          <el-input v-model="form.hetongTdsyqz"></el-input>
        </el-form-item>
        <el-form-item label="国有土地使用面积" class="area">
          <el-input v-model="form.hetongTdsymj"></el-input>
        </el-form-item>
         <el-form-item label="建设工程规划许可证" >
          <el-input v-model="form.hetongSjgcxkzh"></el-input>
        </el-form-item>
        <el-form-item label="总建筑面积" class="area">
          <el-input v-model="form.hetongGhzjzmj"></el-input>
        </el-form-item>
        <el-form-item label="预售建筑面积" class="area">
          <el-input v-model="form.hetongYsxkmj"></el-input>
        </el-form-item>
        <el-form-item label="预算清册总额" class="count">
          <el-input v-model="form.hetongXsysze"></el-input>
        </el-form-item>
        <el-form-item label="预计销售总额" class="count">
          <el-input v-model="form.hetongYsze"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form.hetongZhmc"></el-input>
        </el-form-item>
         <!-- <el-form-item label="业务类别">
          <el-cascader
            clearable
            v-model="ywlx"
            :options="options"
            :props="{ expandTrigger: 'hover' }"
          ></el-cascader>
        </el-form-item>    -->
      </el-form>
      <div class="buttonGroup" style="margin:0 auto;width:100px;margin-top:20px">
      <el-button-group class="buttons">
        <el-button type="primary" @click="onSubmit">立即提交</el-button>
      </el-button-group>
      </div>
      </div>
   
    <div class="detail myForm-mb5 myDialog" v-if="dialogType===3" >
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
        :model="form"
      >
        <el-form-item label="甲方(工程监理企业)" >
          <el-input v-model="form.hetongJgjgmc"></el-input>
        </el-form-item>
        <el-form-item  label="甲方地址">
          <el-input v-model="form.hetongJgjgdz"></el-input>
        </el-form-item>
        <el-form-item  label="甲方法定代表人">
          <el-input v-model="form.hetongJgjgfr"></el-input>
        </el-form-item>
        <el-form-item  label="甲方联系方式">
          <el-input v-model="form.hetongJgjglxdh"></el-input>
        </el-form-item> 
        <el-form-item label="乙方(银行名称)">
           <el-input v-model="form.hetongYhmc"></el-input>
        </el-form-item>
        <el-form-item  label="银行地址">
          <el-input v-model="form.hetongYhdz"></el-input>
        </el-form-item>
        <el-form-item  label="乙方法定代表人">
          <el-input v-model="form.hetongYhdlr"></el-input>
        </el-form-item>
        <el-form-item  label="乙方联系方式">
          <el-input v-model="form.hetongYhdlrlxdh"></el-input>
        </el-form-item>       
        <el-form-item  label="丙方(企业名称)">
          <el-input v-model="form.hetongKfsmc"></el-input>
        </el-form-item>
        <el-form-item  label="企业地址">
          <el-input v-model="form.hetongKfsdz"></el-input>
        </el-form-item>
        <el-form-item  label="丙方法定代表人">
          <el-input v-model="form.hetongKfxm"></el-input>
        </el-form-item>
        <el-form-item  label="丙方联系方式">
          <el-input v-model="form.hetongKflxdh"></el-input>
        </el-form-item>
        <el-form-item label="项目名称" >
          <el-input v-model="form.hetongXmmc"></el-input>
        </el-form-item>
         <el-form-item label="项目坐落">
          <el-input v-model="form.hetongXmdz"></el-input>
        </el-form-item>
        <el-form-item label="国有土地所有权证" >
          <el-input v-model="form.hetongTdsyqz"></el-input>
        </el-form-item>
        <el-form-item label="国有土地使用面积" class="area">
          <el-input v-model="form.hetongTdsymj"></el-input>
        </el-form-item>
         <el-form-item label="建设工程规划许可证" >
          <el-input v-model="form.hetongSjgcxkzh"></el-input>
        </el-form-item>
        <el-form-item label="总建筑面积" class="area">
          <el-input v-model="form.hetongGhzjzmj"></el-input>
        </el-form-item>
        <el-form-item label="预售建筑面积" class="area">
          <el-input v-model="form.hetongYsxkmj"></el-input>
        </el-form-item>
        <el-form-item label="预算清册总额" class="count">
          <el-input v-model="form.hetongXsysze"></el-input>
        </el-form-item>
        <el-form-item label="预计销售总额" class="count">
          <el-input v-model="form.hetongYsze"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form.hetongZhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账号">
          <el-input v-model="form.hetongJgzh"></el-input>
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
      <!-- <info-list :title="业务宗号:" /> -->
      <h3 class="title">
        <el-button-group>
          <el-button size="mini" @click="addFile" type="primary" icon="el-icon-plus">添加收件</el-button>
          <el-button size="mini" @click="resetR" type="warning" icon="el-icon-warning-outline">重置默认</el-button>
        </el-button-group>
      </h3>
      <!--
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
      </div>-->

      <div class="controls">

      </div>

      <el-table :data="tableData2">
        <el-table-column type="selection" width="50" align="center"/>
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
      <el-table :data="businessReceives2" >
        <el-table-column type="expand" width="50">
          <template #default="{row}">
            <UploadCpn
              :file-list="row.imgList"
              :url="url"
              :data="{logId: row.logId}"
              @addFile="handleUploadFile"
              @delFile="handleRemoveFile"
            />
          </template>
        </el-table-column>
        <el-table-column align="left" label="收件名称" prop="ywsjTitle">
          <!--v-model="scope.row.shoujianTitle"-->
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
      </el-table>
    </div>
        
 
 </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoList from "@/components/common/infoList/InfoList";
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";
  import {businessApi} from "@/api/menu_3/__Business";
  import {sqsfxyApi} from "@/api/menu_4/sqsfxy";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";   
  import {authApi} from "@/api/menu_4/auth";
  export default {
    name: "SqsfxyDialog",
    components: {CenterButton,InfoList},
    props:{
      dialogType: {
      default: 1, // 添加
      enum: [1, 2 /*详情*/]
    },
      zjjgzhId:{type:Number},
      zjjgzhZhmc:{type:String},
      zjjgzhGsmc:{type:String},
      zjjgzhYhmc:{type:String},
      zjjgzhXmmc:{type:String},
      zjjgzhYhzh:{type:String},
      xmxxXmbh: { type: String },
      kfsId:{type:Number},
      hetongYwzh:{type:String},
      hetongLczt:{type:Number}

    },
    data() {
      return {
      opinionList:[],
      ywlx: [],
      hetongId:0,
      options: [],
      businessReceives: [],
      businessAttachments:[],      
      businessReceives2: [],
      name: "",
      ywzh:"",
      addForm: {
        name: "",
        attr: "原件",
        count: 1
      },
        form:{},
        form1:{},
        form2:{},
        tableData:[],
        loading: false,
        zjjgzhYhid:[],
        tableData2:[],
        addList: [],
        retId: ""
        }
    },
    created(){
      this.getBank();
    },
    methods:{
      reset() {
        this.form = {...formBlank};
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
    fetchCertificate(){
       sqsfxyApi.fetchCertificate().then(ret=>{
         this.addList=ret.data.map(item=>({
           ...item,
           value:item.zhengjianName,
         }));
       })
    },
      fetchDetail(id) {
         sqsfxyApi.getContractInfoById(id).then(ret => {
         //console.log(ret);
          this.form=ret.data;
          console.log(this.form);
          
          let dl = ret.data.ywxlBh.slice(0, 4);  // 8019001
          let xl = ret.data.ywxlBh.slice(4);  // 8019001
          this.ywlx = [dl, ret.data.ywxlBh]
          console.log(this.ywlx);
        })
      },
      getBank(){
            sqjgzhApi.getBank().then(ret=>{
                this.zjjgzhYhid=ret.data;
            })
        },
     addData() {
         
      // let ywxlId = 0;
      //   if (this.ywlx.length < 2) {
      //     this.$message.error("请选择业务类型")
      //     return
      //   };
      // ywxlId = this.ywlx[1];
          sqsfxyApi.addContract({...this.form,kfsId:this.kfsId,ywxlBh:8003001,zjjgzhId:this.zjjgzhId,hetongJgzh:this.zjjgzhYhzh}).then(ret => {
          if (ret.code !== 200) {
          this.$message.error(ret.message);
        } else {
          this.$message.success("添加成功");
          this.$emit("submitSuccess");
        }
      });
    },
     updateData() {
       //let ywxlId = 0;
    //     if (this.ywlx.length < 2) {
    //       this.$message.error("请选择业务类型")
    //       return
    //     };
    //  let ywxlId = this.ywlx[1];
    //  console.log(this.form);
     
      sqsfxyApi.updateContract({
          ...this.form,
         ywxlBh:8003001,
         hetongId:this.hetongId,
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
     fetchOpinion(id){
          authApi.getAuditInfo(id).then(ret => {
          this.opinionList = ret.data;
        })
       },
      
       fetchShouJian(id) {
        sqsfxyApi.queryReceiving(id).then(ret => {
          this.businessAttachments = ret.data.businessAttachments;
          this.businessReceives = ret.data.businessReceives;
        })
      },
       handleShouJian() {
        // 组装一个List
        console.log("taetae");
        
        console.log(this.businessReceives)
        let list = this.businessReceives.map(item => ({
          zhengjianId: item.shoujianId,
          ywsjTitle: item.shoujianTitle,
          ywsjFenshu: item.shoujianFenshu,
          ywsjSjxz: item.shoujianSjxz === "原件" ? 0 : 1,
          ywsjYwzh: this.hetongYwzh,
          ywsjXh: item.shoujianXuhao
        }))
        sqsfxyApi.submitShouJian(list).then(ret=>{
          if (ret.code===200){
            this.$message.success("收件成功")
            this.$emit("submitSuccess")
          }else{
            this.$message.error(ret.message)
          }
        })
      },
       fetchShouJianByYwzh(id){
         sqsfxyApi.selectByYwzh(id).then(ret => {
          this.businessReceives = ret.data.map(item => ({
            shoujianTitle: item.ywsjTitle,
            shoujianSjxz: item.ywsjSjxz === 0 ? "原件" : "复印件",
            shoujianFenshu: item.ywsjFenshu
          }))
        })
      }, 
    onSubmit() {
      if (this.dialogType === 1) {
        this.addData();
      } else if (this.dialogType === 2) {
        console.log("dialog");
        this.updateData();
      }
    },
    getBankInfo(){
        console.log("1111111111111111");
        console.log(this.zjjgzhId);
        console.log(this.zjjgzhZhmc);
        this.form.zjjgzhId = this.zjjgzhId;
        this.form.hetongZhmc = this.zjjgzhZhmc;
        this.form.hetongKfsmc = this.$store.state.projectData.xmxxKfs;
        console.log(this.$store.state.xmxxKfs);
        
        this.form.hetongYhmc = this.zjjgzhYhmc;
        this.form.hetongXmmc=this.zjjgzhXmmc;
        // sqsfxyApi.getProjectByName(this.zjjgzhXmmc).then(ret=>{
        //     //this.form.hetongTdxz=
        //     this.form.hetongGhmj=ret.data.xmxxGhxkmj;
        //     this.form.hetongXmdz=ret.data.xmxxJtzl;
        //     this.form.hetongSjgcxkzh=ret.data.kfsYyzh;
        //     //this.form.hetongTdsymj=
        // })
    },
    setMode(mode,id,logId){
      console.log("00000000000");
      
      if(mode===1){
        //this.getBankInfo();
        sqsfxyApi.fetchBeforeAdd(id).then(ret => {
          this.form = ret.data;
          this.form.hetongZhmc = this.zjjgzhZhmc;
          //this.form.hetongKfsmc = ret.data.xmxxKfs;
          
        });
        this.getBussinessType();
      }else if(mode===2){
        this.hetongId=id;
        this.fetchDetail(id);
        this.getBussinessType();

      }else if(mode===3){
        this.fetchDetail(id);
         this.fetchOpinion(logId);
        this.fetchShouJianByYwzh(this.hetongYwzh);
      }else if(mode===4){
        this.fetchShouJian(id);
        this.fetchCertificate();
      }

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