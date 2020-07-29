<!--
  解决element-table的table传图bug
-->
<template>
  <div>
    <h3 class="title_">
      <el-button size="mini" @click="handleAdd" type="primary" icon="el-icon-plus">新增收件</el-button>
      <el-button size="mini" @click="handlePrint" type="primary" icon="el-icon-printer">打印收件</el-button>
      <el-link :underline="false">点击收件项可进行收件图片管理类</el-link>
    </h3>

    <el-collapse accordion @change="handleChange">
      <el-collapse-item v-for="(item, index) in receiveList" :name="index">
        <template #title>
          <div class="item" style="width: 100%" title="点击展开/收起传图" v-if="!item.add">
            <div class="index">{{index+1}}</div>
            <div class="title">{{item.ywsjTitle}}</div>
            <div class="xz">{{item.ywsjSjxz|sjxzFilter}}</div>
            <div class="count">{{item.ywsjFenshu}}份</div>
            <div class="del">
              <el-button size="mini" @click.stop="handleDel(item, index)">删除</el-button>
            </div>
          </div>
          <div class="item" v-else>
            <div class="index">{{index+1}}</div>
            <div class="title" style="display: flex; flex: 1">
              <div style="flex: 3; padding-right: 20px;" @click.stop>
                <el-input size="mini" v-model="item.ywsjTitle"/>
              </div>
              <div style="width: 100px">
                <el-select
                    size="mini"
                    value=""
                    @change="change($event, item)"
                    placeholder="添加证件"
                >
                  <el-option v-for="item in addList" :value="item.value">{{item.value}}</el-option>
                </el-select>
              </div>
            </div>
            <div class="xz">
              <el-select v-model="item.ywsjSjxz" size="mini" placeholder="收件性质">
                <el-option :value="0" label="原件"></el-option>
                <el-option :value="1" label="复印件"></el-option>
                <el-option :value="2" label="扫描件"></el-option>
              </el-select>
            </div>
            <div class="count">
              <el-select v-model="item.ywsjFenshu" size="mini">
                <el-option value="1">1</el-option>
                <el-option value="2">2</el-option>
                <el-option value="3">3</el-option>
                <el-option value="4">4</el-option>
                <el-option value="5">5</el-option>
              </el-select>
            </div>
            <div class="confirm">
              <el-button size="mini" @click.stop="handleConfirm($event,item)">确认</el-button>
              <el-button size="mini" @click.stop="handleCancel($event,index)">取消</el-button>
            </div>
          </div>
        </template>
        <template #default v-if="!item.add">
          <UploadCpn :file-list="item.fileList" :data="{logId:item.logId}" @delFile="delFile"/>
        </template>
      </el-collapse-item>
    </el-collapse>

  </div>
</template>

<script>
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";
  import {filesApi} from "@/api/files";
  import {config} from "@/api/baseConfig";

  export default {
    name: "ManageReceive",
    components: {UploadCpn},
    data() {
      return {
        receiveList: [],
        ywzh: "",
        addList: []
      }
    },
    filters:{
      sjxzFilter(val) {
        switch (val) {
          case 0: return "原件";
          case 1: return "复印件";
          case 2: return "扫描件";
        }
      }
    },
    methods: {
      handleChange(index) {
        console.log(index)
      },
      fetchConfirm(ywzh) {
        this.ywzh = ywzh;
        filesApi.queryConfirm(ywzh).then(ret => {
          this.receiveList = ret.data.businessAttachments;
          this.addList = ret.data.certificateSettings.map(item => ({
            ...item,
            value: item.zhengjianName
          }))
          this.receiveList.forEach(item=>{
            filesApi.getFiles(item.logId).then(ret => {
              let temp = ret.data.map(item => ({
                title: item.fujianName,
                url: config.productMode ? item.fujianPath : filesApi.preview + item.fujianId,
                fujianId: item.fujianId
              }))
              this.$set(item, "fileList", temp)
            })
          })
        })
      },
      delFile(file){
        if(file.fujianId){
          filesApi.delFile(file.fujianId)
        }else{
          let id = file.response.data[0].fujianId
          filesApi.delFile(id)
        }
      },
      handlePrint() {
        window.open(`/#/printView/receiveList?id=${this.ywzh}&title=申请预售许可证`)
      },
      handleAdd() {
        this.receiveList.push(({
          add: true,
          ywsjTitle: "",
          ywsjFenshu: 1,
          ywsjSjxz: null
        }))
      },
      change(val, item) {
        console.log(val, item)
        item.ywsjTitle = val;
      },
      handleCancel(e,item) {
        this.receiveList.splice(item, 1)
      },
      handleConfirm(e,item) {
        if(!item.ywsjTitle||item.ywsjSjxz===null){
          this.$message.error("请填写完整收件信息")
        }else{

          filesApi.addReceive(this.ywzh, item.ywsjTitle, item.ywsjFenshu, item.ywsjSjxz).then(ret=>{
            if(ret.code===200){
              item.add = false
              this.$message.success("新增收件成功")
              this.fetchConfirm(this.ywzh)
            }else{
              this.$message.error(ret.message)
            }
          })
        }
      },
      handleDel(item, index){
        this.$confirm('此操作将同时删除该条数据上传的图片, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          this.loading = true;
          filesApi.delReceive(item.ywsjId).then(ret=>{
            if(ret.code===200){
              this.$message.success("删除成功")
              this.receiveList.splice(index, 1)
            }else{
              this.$message.error(ret.message||"删除失败")
            }
          }).finally(()=>{
            this.loading = false
          })
        })

      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .title_ {
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }
  .item{
    width: 100%;
    display: flex;
    .index{
      width: 30px;
      text-align: center;
    }
    .title{
      flex: 1;
      text-shadow: $box-shadow;
    }
    .xz{
      width: 120px;
      text-align: center;
      padding: 0 10px;
    }
    .count{
      width: 120px;
      text-align: center;
      padding: 0 10px;
    }
  }
</style>