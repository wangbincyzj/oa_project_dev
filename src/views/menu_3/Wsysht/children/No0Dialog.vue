<template>
  <div>
    <div v-if="mode===0">
      <InfoListPlus>
        <template>
          <InfoListPlusItem name="购买人"><input v-model="form.fwsyqrSyqr" type="text"></InfoListPlusItem>
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
          <InfoListPlusItem name="证件号码">
            <input v-model="form.fwsyqrZjhm" type="text">
            <!--            <div>-->
            <!--              <el-button size="mini" type="primary">读取身份证</el-button>-->
            <!--              <input v-model="form.fwsyqrZjhm" style="outline: none; border-bottom: 1px #909399 solid" type="text">-->
            <!--            </div>-->
          </InfoListPlusItem>
          <!--<InfoListPlusItem2 name="人员相片">
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
          </InfoListPlusItem2>-->
        </template>
      </InfoListPlus>
      <CenterButton @btnClick="handleAdd" style="margin-top: 30px" title="添加"/>
    </div>
    <div v-if="mode===1" class="myTable">
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
        <el-table-column align="center" label="买受人照片" prop="xsqrdZxyy" width="120">
          <template #default="{row}">
            <el-button size="mini" @click="handlePic(row)">管理</el-button>
          </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
          <template #default="scope">
            <el-button size="mini" @click="handleUpdate(scope.row)">修改</el-button>
            <el-button size="mini" @click="handleDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog :visible.sync="picVisible" append-to-body>
      <UploadCpn :file-list="fileList" :data="{logId: logId}" @delFile="delFile"/>
    </el-dialog>
  </div>
</template>

<script>
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import InfoListPlusItem2 from "@/components/common/infoListPlus/InfoListPlusItem2";
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";
  import WbTable from "@/components/common/wb-table/WbTable";
  import {filesApi} from "@/api/files";
  import {config} from "@/api/baseConfig";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";

  export default {
    name: "No0Dialog",
    components: {WbTable, UploadCpn, InfoListPlusItem2, CenterButton, InfoListPlusItem, InfoListPlus},
    props: ["htBh", "htId", "htmm"],
    data() {
      return {
        loading: false,
        mode: 0,
        tableData: [],
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
        fileList: [],
        dialogImageUrl: '',
        dialogVisible: false,
        picVisible: false,
        logId: "",
      }
    },
    methods: {
      reset() {
        Object.keys(this.form).forEach(key => {
          this.form[key] = ""
        });
        this.fileList = [];
        this.dialogImageUrl = ""
      },
      setMode(mode) {
        this.mode = mode; // 0添加 1管理
        this.form.fwsyqrHtbh = this.htBh;
        if (mode === 1) {
          this.fetchTableData()
        }
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
      handlePic(item) {
        console.log(item)
        filesApi.getFiles(item.logId).then(ret => {
          let temp = ret.data.map(item => ({
            title: item.fujianName,
            url: config.productMode ? item.fujianPath : filesApi.preview + item.fujianId,
            fujianId: item.fujianId
          }))
          this.$set(item, "fileList", temp)
          this.fileList = item.fileList
        })
        this.logId = item.logId
        this.picVisible = true
      },
      delFile(file){
        if(file.fujianId){
          filesApi.delFile(file.fujianId)
        }else{
          let id = file.response.data[0].fujianId
          filesApi.delFile(id)
        }
      },
      handleAdd() {
        this.form.fwsyqrSqrpic = this.fileList.map(item => item.fjid || item.response.data[0].fujianId).join(",")
        yushouContractApi.saveHouseOwner(this.form).then(ret => {
          if (ret.code === 200) {
            this.$message.success("添加成功");
            Object.keys(this.form).forEach(key => {
              this.form[key] = ""
            })
            this.$emit("submitSuccess")
          } else {
            this.$message.error(ret.message || "未知错误")
          }
        })
      },
      handleUpdate(item) {
        // todo
      },
      handleDel(item) {
        this.$confirm('确定要删除吗?一旦删除无法恢复', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          console.log(item)
          yushouContractApi.delByIdHouseOwner(item.fwsyqrId).then(ret => {
            if (ret.code === 200) {
              this.$message.success("删除成功");
              this.fetchTableData()
            } else {
              this.$message.error(ret.message || "未知错误")
            }
          })
        })

      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleUpload(event, file, fileList) {

      },
      handleSuccess(response, file, fileList) {
        console.log(response)
        console.log(file)
        this.fileList = fileList
      },
      handleFileList() {
        console.log(this.fileList)
      }
    }
  }
</script>

<style scoped lang="scss">
  .radio {
    display: flex;
    align-items: center;

    input:nth-child(2) {
      margin-left: 10px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }

  .item {
    display: flex;
  }
</style>