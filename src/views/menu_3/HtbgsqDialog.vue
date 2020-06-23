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
        <el-table-column align="center" #default="{row}" label="共有方式" width="100">
          {{row.fwsyqrGyfs===1?"比例":"面积"}}
        </el-table-column>
        <el-table-column align="center" label="共有比例" prop="fwsyqrGybl" width="100"/>
        <el-table-column align="center" label="联系电话" prop="fwsyqrLxdh" width="150"/>
        <el-table-column align="center" label="家庭地址" prop="fwsyqrJtdz" width="100"/>
        <el-table-column #default="{row}" align="center" label="买受人照片" prop="xsqrdZxyy" width="120">
          <div class="demo-image__preview" v-if="row.fwsyqrSqrpic">
            <el-image
              style="width: 100px; height: 80px"
              :src="firstImage(row.fwsyqrSqrpic)"
              :preview-src-list="allImage(row.fwsyqrSqrpic)">
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
      <div class="reason">
        <div class="title">变更原因</div>
        <div class="content">
          <el-input v-model="reason" type="textarea"/>
        </div>
      </div>
      <CenterButton @btnClick="handleSubmit" style="margin-top: 20px" title="提交"/>
    </div>
    <div v-if="mode===1">
      <div class="reason">
        <div class="title">变更内容</div>
        <div class="content">
          <el-input v-model="content" type="textarea"/>
        </div>
      </div>
      <div class="reason">
        <div class="title">变更原因</div>
        <div class="content">
          <el-input v-model="reason" type="textarea"/>
        </div>
      </div>
      <CenterButton style="margin-top: 15px" @btnClick="handleSubmit2" title="确认提交"/>
    </div>
    <el-dialog
      :visible.sync="dialogVisible"
      append-to-body
      width="1000px"
      :before-close="handleClose"
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
              :on-success="handleSuccess"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
          </InfoListPlusItem2>

        </template>
      </InfoListPlus>
      <CenterButton :title="addMode?'确认添加':'确认修改'" @btnClick="handleUpdateOne"/>
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
    props: ["htId"],
    data() {
      return {
        mode: null,  // 0变更买受人界面  1变更条款界面
        tableData: [],
        htBh: "",
        reason: "",
        content: "",
        form: {
          fwsyqrSyqr: "",
          fwsyqrZjhm: "",
          fwsyqrLxdh: "",
          fwsyqrHtbh: "",
          fwsyqrJtdz: "",
          fwsyqrSqrpic: "",
          fwsyqrGyfs: "",
          fwsyqrGybl: "",
          pics: ""
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
        addMode: false,
        fileList: []
      }
    },
    methods: {
      reset() {
        console.log(111)
      },
      setMode(mode, ...args) {
        this.mode = mode;
        if (mode === 0) {
          this.htBh = args[0];
          this.fetchTableData()
        }
      },
      handleSubmit() {
        this.tableData.forEach(item => {
          delete item["fwsyqrId"]
        })
        yushouContractApi.contractChangeOwner(this.htId, this.tableData, this.reason).then(ret => {
          if (ret.code === 200) {
            this.$message.success("买受人变更申请成功")
            this.$emit("submitSuccess");
            this.reason = ""
          } else {
            this.$message.error(ret.message||"操作失败")
          }
        })
      },
      handleSubmit2() {
        yushouContractApi.contractChangeContent(this.htId, this.reason, this.content).then(ret => {
          if (ret.code === 200) {
            this.$message.success("买受人变更申请成功")
            this.$emit("submitSuccess");
            this.reason = ""
            this.content = ""
          } else {
            this.$message.error(ret.message||"操作失败")
          }
        })
      },
      firstImage(item) {
        return yushouContractApi.previewPic + item.split(',')[0]
      },
      allImage(item) {
        return item.split(',').map(item => yushouContractApi.previewPic + item)
      },
      handleUpdate(scope) {
        this.dialogVisible = true;
        this.index = scope.$index;
        this.form = scope.row;
        console.log(scope.row)
        this.addMode = false;
        this.fileList = scope.row.fwsyqrSqrpic ? scope.row.fwsyqrSqrpic.split(",").map(id => ({
          name: "图片" + id,
          url: yushouContractApi.previewPic + id,
          fjid: id
        })) : []
        //yushouContractApi.selectByIdHouseOwner()
      },
      fetchTableData() {
        this.loading = true;
        yushouContractApi.selectHouseOwnerList(this.htBh).then(ret => {
          this.loading = false
          this.tableData = ret.data;
          this.tableData.forEach(item => {
            if (item.fwsyqrSqrpic) {
              item.pics = item.fwsyqrSqrpic.split(",").map(id => yushouContractApi.previewPic + id)
            } else {
              item.pics = []
            }
          })
        })
      },
      handleClose() {
        this.fileList = [];
        this.dialogVisible = false;
      },
      handleUpdateOne() {
        this.dialogVisible = false;
        console.log(this.fileList);
        this.$set(this.form, "fwsyqrSqrpic", this.fileList.map(item => item.fjid || item.response.data[0].fujianId).join(","))
        this.form.pics = this.form.fwsyqrSqrpic.split(",").map(id => yushouContractApi.previewPic + id)
        if (this.addMode) {
          this.tableData.push(this.form)
        } else {
          this.tableData[this.index] = this.form
          this.$message.warning("买受人信息修改完成,需提交新的买受人信息!")
        }
        console.log(this.tableData)
      },
      handleAddBuyer() {
        this.dialogVisible = true;
        this.form = this.formBlank
        this.addMode = true;
      },
      handleRemove(file, fileList) {
        this.fileList = fileList
        console.log(this.fileList)
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleSuccess(response, file, fileList) {
        this.fileList = fileList
        console.log(this.fileList)
      },
    }
  }
</script>

<style scoped lang="scss">
  .reason{
    display: flex;
    align-items: center;
    margin-top: 10px;
    .title{
      font-weight: 600;
      margin-right: 10px;
    }
    .content{
      flex: 1;
    }
  }
</style>