<template>
  <div>
    <div v-if="mode===0">
      <el-alert :closable="false" type="warning">修改或新增买受人信息后,需要点击提交!</el-alert>
      <el-table
        v-loading="loading"
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column align="center" label="产权人" prop="fwsyqrSyqr" width="100"/>
        <el-table-column align="center" label="证件号码" prop="fwsyqrZjhm" width="200"/>
        <el-table-column align="center" #default="{row}" label="共有方式"  width="100">
          {{row.fwsyqrGyfs===1?"比例":"面积"}}
        </el-table-column>
        <el-table-column align="center" label="共有比例" prop="fwsyqrGybl" width="100"/>
        <el-table-column align="center" label="联系电话" prop="fwsyqrLxdh" width="150"/>
        <el-table-column align="center" label="家庭地址" prop="fwsyqrJtdz" width="100"/>
        <el-table-column #default="{row}" align="center" label="买受人照片" prop="xsqrdZxyy" width="120">
          <div class="demo-image__preview" v-if="row.pics&&row.pics.length">
            <el-image
              style="width: 100px; height: 80px"
              :src="row.pics[0]"
              :preview-src-list="row.pics">
            </el-image>
          </div>
          <div v-else>未上传</div>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template slot="header" slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleAddBuyer">添加买受人</el-button>
          </template>
          <template #default="scope">
            <el-button size="mini" @click="handleUpdate(scope)" type="warning">修改</el-button>
            <el-button size="mini" @click="handleDel(scope.row)" disabled type="danger">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
      <CenterButton style="margin-top: 20px" title="提交"/>
    </div>
    <div v-if="mode===1"></div>
    <el-dialog
      :visible.sync="dialogVisible"
      append-to-body
      width="1000px"
    >
      <InfoListPlus>
        <template slot="title">买受人信息</template>
        <template>
          <InfoListPlusItem name="所有权人"><input v-model="form.fwsyqrSyqr" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="联系电话"><input v-model="form.fwsyqrLxdh" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="家庭地址"><input v-model="form.fwsyqrJtdz" type="text"></InfoListPlusItem>

          <InfoListPlusItem name=""></InfoListPlusItem>
          <InfoListPlusItem name="共有方式">
            <div class="radio">
              <input type="radio" v-model="form.fwsyqrGyfs" :value="1">比例
              <input type="radio" v-model="form.fwsyqrGyfs" :value="2">面积
            </div>
          </InfoListPlusItem>
          <InfoListPlusItem name="共有份额"><input v-model="form.fwsyqrGybl" type="text"></InfoListPlusItem>
          <InfoListPlusItem name="证件号码" oneline>
            <!--<div>
              <el-button size="mini" type="primary">读取身份证</el-button>
              <input v-model="form.fwsyqrZjhm" style="outline: none; border-bottom: 1px #909399 solid" type="text">
            </div>-->
            <input v-model="form.fwsyqrZjhm" type="text">
          </InfoListPlusItem>

          <InfoListPlusItem2 name="人员相片">
            <el-upload
              action="http://192.168.1.153:8094/data-presale-license/contract/upload"
              name="files"
              :headers="{token:$store.state.loginInfo.token}"
              :file-list="fileList"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-progress="handleUpload"
              :on-success="handleSuccess"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible" append-to-body>
              <img width="100%" :src="dialogImageUrl" alt="">
            </el-dialog>
          </InfoListPlusItem2>

        </template>
      </InfoListPlus>
      <CenterButton  :title="addMode?'确认添加':'确认修改'" @btnClick="handleUpdateOne"/>
    </el-dialog>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import {mixins} from "@/utils/mixins";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import InfoListPlusItem2 from "@/components/common/infoListPlus/InfoListPlusItem2";

  export default {
    name: "HtbgsqDialog",
    mixins: [mixins.dialogMixin],
    components: {InfoListPlusItem2, CenterButton, InfoListPlusItem, InfoListPlus},
    data() {
      return{
        mode: null,  // 0变更买受人界面  1变更条款界面
        tableData: [],
        htBh:"",
        form: {
          fwsyqrSyqr: "",
          fwsyqrZjhm: "",
          fwsyqrLxdh: "",
          fwsyqrHtbh: "",
          fwsyqrJtdz: "",
          fwsyqrSqrpic: "",
          fwsyqrGyfs: "",
          fwsyqrGybl: "",
        },
        formBlank: {
          fwsyqrSyqr: "",
          fwsyqrZjhm: "",
          fwsyqrLxdh: "",
          fwsyqrHtbh: "",
          fwsyqrJtdz: "",
          fwsyqrSqrpic: "",
          fwsyqrGyfs: "",
          fwsyqrGybl: "",
        },
        index: 0,
        addMode: false
      }
    },
    methods:{
      setMode(mode, ...args){
        this.mode = mode;
        if(mode===0){
          this.htBh = args[0];
          this.fetchTableData()
        }
      },
      handleUpdate(scope){
        this.dialogVisible = true;
        this.index = scope.$index;
        this.form = scope.row;
        this.addMode = false;
        //yushouContractApi.selectByIdHouseOwner()
      },
      fetchTableData() {
        this.loading = true;
        yushouContractApi.selectHouseOwnerList(this.htBh).then(ret=>{
          this.loading = false
          this.tableData = ret.data;
          this.tableData.forEach(item=>{
            if(item.fwsyqrSqrpic){
              item.pics = item.fwsyqrSqrpic.split(",").map(id=>yushouContractApi.previewPic+id)
            }else{
              item.pics = []
            }
          })
        })
      },
      handleUpdateOne(){
        this.dialogVisible = false;
        if(this.addMode){
          this.tableData.push(this.form)
        }else{
          this.tableData[this.index] = this.form
          this.$message.warning("买受人信息修改完成,需提交新的买受人信息!")
        }
      },
      handleAddBuyer() {
        this.dialogVisible = true;
        this.form = this.formBlank
        this.addMode = true;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>