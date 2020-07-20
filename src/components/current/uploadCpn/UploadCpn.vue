<!--
  上传组件
   @props:
    url: 上传地址
    fieldName: 参数名
    enableUpload: 是否启用上传(仅做展示时候不用)
    enablePreview: 是否启用预览
-->
<template>
  <div class="upload">
    <el-upload
      ref="uploader"
      :action="url"
      :name="fieldName"
      :headers="{token:$store.state.loginInfo.token}"
      :file-list="fileList"
      :disabled="!enableUpload"
      :data="data"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-success="handleUpload"
      :on-remove="handleRemove">
      <i class="el-icon-plus"/>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible" append-to-body>
      <img width="100%" :src="dialogImageUrl" alt="">
    </el-dialog>
  </div>
</template>

<script>
  import {filesApi} from "@/api/files";

  export default {
    name: "UploadCpn",
    props: {
      url: {
        type: String,
        default: filesApi.upload
      },
      fieldName: {
        type: String,
        default: "files"
      },
      enablePreview: {
        type: Boolean,
        default: true
      },
      fileList: {
        type: Array,
        default: () => []
      },
      enableUpload:{
        type: Boolean,
        default: true
      },
      data:{
        type: Object,
        default: {}
      }
    },
    data() {
      return {
        dialogImageUrl: "",
        dialogVisible: false
      }
    },
    methods: {
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleUpload(event, file, fileList) {
        this.$emit("addFile", file)
      },
      handleRemove(file, fileList) {
        if(this.$listeners.delFile){
          this.$emit("delFile", file)
        }else{
          if (file.fujianId) {
            filesApi.delFile(file.fujianId)
          } else {
            filesApi.delFile(file.response.data[0].fujianId)
          }
        }
      },
    }
  }
</script>

<style scoped>

</style>