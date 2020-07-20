<template>
  <div class="myDialog myForm-mb5">
    <el-tabs value="first">
      <el-tab-pane label="一.项目信息" name="first">
        <el-form
          label-position="right"
          label-width="150px"
          size="mini"
          inline
          :disabled="editMode===0"
          :model="form">
          <!-- 0添加 1编辑 2查看-->
          <el-form-item label="项目命名性质" v-if="editMode===0">
            <el-input v-model="form.xmxxXmmmlx"></el-input>
          </el-form-item>
          <el-form-item label="项目名称" >
            <el-input v-model="form.xmxxXmmc" disabled></el-input>
          </el-form-item>
          <el-form-item label="项目开发商">
            <el-input v-model="form.xmxxKfs" disabled></el-input>
          </el-form-item>
          <el-form-item label="项目编号" >
            <el-input v-model="form.xmxxXmbh" disabled></el-input>
          </el-form-item>
          <el-form-item label="项目负责人">
            <el-input v-model="form.xmxxXmfzr"></el-input>
          </el-form-item>
          <el-form-item label="销售电话">
            <el-input v-model="form.xmxxXsdh"></el-input>
          </el-form-item>
          <el-form-item label="用地规划许可证号" >
            <el-input v-model="form.xmxxYdghxkzh"></el-input>
          </el-form-item>
          <el-form-item label="项目地址">
            <el-input v-model="form.xmxxJtzl"></el-input>
          </el-form-item>
          <el-form-item label="总用地面积" class="area">
            <el-input v-model="form.xmxxZydmj"></el-input>
          </el-form-item>
          <el-form-item label="总建筑面积" class="area">
            <el-input v-model="form.xmxxZzjmj"></el-input>
          </el-form-item>
          <el-form-item label="规划许可面积" class="area">
            <el-input v-model="form.xmxxGhxkmj"></el-input>
          </el-form-item>
          <el-form-item label="规划许可栋数">
            <el-input v-model="form.xmxxGhxkds"></el-input>
          </el-form-item>
          <el-form-item label="规划住宅面积">
            <el-input v-model="form.xmxxGhxkzzmj"></el-input>
          </el-form-item>
          <el-form-item label="规划住宅套数">
            <el-input v-model="form.xmxxGhxkzzts"></el-input>
          </el-form-item>
          <el-form-item label="规划商业面积">
            <el-input v-model="form.xmxxGhxksymj"></el-input>
          </el-form-item>
          <el-form-item label="规划商业套数">
            <el-input v-model="form.xmxxGhxksyts"></el-input>
          </el-form-item>
          <el-form-item label="规划办公面积">
            <el-input v-model="form.xmxxGhxkbgmj"></el-input>
          </el-form-item>
          <el-form-item label="规划办公套数">
            <el-input v-model="form.xmxxGhxkbgts"></el-input>
          </el-form-item>
          <el-form-item label="规划其他面积">
            <el-input v-model="form.xmxxGhxkqtmj"></el-input>
          </el-form-item>
          <el-form-item label="规划其他套数">
            <el-input v-model="form.xmxxGhxkqtts"></el-input>
          </el-form-item>
          <el-form-item label="土地投资" class="count">
            <el-input v-model="form.xmxxTdtze"></el-input>
          </el-form-item>
          <el-form-item label="计划总投资" class="count">
            <el-input v-model="form.xmxxJhztz"></el-input>
          </el-form-item>
          <el-form-item label="容积率">
            <el-input v-model="form.xmxxXmrjl"></el-input>
          </el-form-item>
          <el-form-item label="车位数">
            <el-input v-model="form.xmxxXmcws"></el-input>
          </el-form-item>
          <el-form-item label="密度">
            <el-input v-model="form.xmxxXmjzmd"></el-input>
          </el-form-item>
          <el-form-item label="绿化率">
            <el-input v-model="form.xmxxXmlhl"></el-input>
          </el-form-item>
          <el-form-item label="物业用房面积">
            <el-input v-model="form.xmxxWyyfmj"></el-input>
          </el-form-item>
          <el-form-item label="其他公用设施用房">
            <el-input v-model="form.xmxxGyssyf"></el-input>
          </el-form-item>
          <el-form-item label="社区服务面积">
            <el-input v-model="form.xmxxSqfwmj"></el-input>
          </el-form-item>
          <el-form-item label="活动用房面积">
            <el-input v-model="form.xmxxHdyfmj"></el-input>
          </el-form-item>
          <el-form-item label="项目介绍">
            <el-input v-model="form.xmxxXmxxjj"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="二.不动产权信息" name="second">
        <el-form
          label-position="right"
          label-width="150px"
          size="mini"
          inline
          :disabled="editMode===0"
          :model="form">
          <el-form-item label="取得方式">
            <el-select v-model="form.xmxxQdfs" placeholder="请选择取得方式">
              <el-option label="出让" value="出让"></el-option>
              <el-option label="划拨" value="划拨"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="土地编号">
            <el-input v-model="form.xmxxTdbh"></el-input>
          </el-form-item>
          <el-form-item label="不动产权证号">
            <el-input v-model="form.xmxxTdsyqh"></el-input>
          </el-form-item>
          <el-form-item label="批准时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.xmxxTdpzsj"></el-date-picker>
          </el-form-item>
          <el-form-item label="转让文号">
            <el-input v-model="form.xmxxTdzrwh"></el-input>
          </el-form-item>
          <el-form-item label="土地面积" class="area">
            <el-input v-model="form.xmxxTdmj"></el-input>
          </el-form-item>
          <el-form-item label="共有情况">
            <el-select v-model="form.xmxxGyqk" placeholder="请选择">
              <el-option label="共同共有" value="共同共有"></el-option>
              <el-option label="按份共有" value="按份共有"></el-option>
              <el-option label="单独所有" value="单独所有"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="权利类型">
            <el-select v-model="form.xmxxQllx" placeholder="请选择">
              <el-option label="国家建设用地使用权" value="国家建设用地使用权"></el-option>
              <el-option label="集体土地使用权" value="集体土地使用权"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="地段类别">
            <el-select v-model="form.xmxxDdlb" placeholder="地段类别">
              <el-option label="一类" value="一类"></el-option>
              <el-option label="二类" value="二类"></el-option>
              <el-option label="三类" value="三类"></el-option>
              <el-option label="四类" value="四类"></el-option>
              <el-option label="五类" value="五类"></el-option>
              <el-option label="未划分" value="未划分"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="所属区域">
            <el-input v-model="form.xmxxSsqy"></el-input>
          </el-form-item>
          <el-form-item label="用地起始时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.xmxxTdqssj"></el-date-picker>
          </el-form-item>
          <el-form-item label="用地截止时间">
            <el-date-picker type="date" placeholder="选择日期" v-model="form.xmxxTdjzsj"></el-date-picker>
          </el-form-item>
          <el-form-item label="使用年限">
            <el-input v-model.number="form.xmxxTdsynx"></el-input>
          </el-form-item>
          <el-form-item label="规划用途">
            <el-input v-model="form.xmxxGhyt"></el-input>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="三.图片附件" name="third">
        <UploadCpn
          :enable-upload="editMode===1"
          :url="url"
          :file-list="fileList"
          :data="{logId: form.logId}"
          @delFile="delFile"
          @addFile="addFile"/>
      </el-tab-pane>
    </el-tabs>
    <CenterButton v-if="editMode===1" @btnClick="handleUpdate" title="保存"/>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {filesApi} from "@/api/files";
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";

  export default {
    name: "WsfcxmDialog",
    components: {UploadCpn, CenterButton},
    props: {
      editMode: {
        default: 1 //模式,0详情 1,修改
      }
    },
    computed: {
      url() {
        return filesApi.upload
      }
    },
    data() {
      return {
        form: {},
        loading: false,
        fileList: []
      }
    },
    methods: {
      reset() {
        Object.assign(this.$data, this.$options.data())
      },
      fetchDetail(id) {
        this.loading = true;
        wsfcxmApi.getProjectDetailById(id).then(ret => {
          console.log(ret)
          this.loading = false;
          this.form = ret.data;
          this.fetchFileList()
        })
      },
      handleUpdate() {
        wsfcxmApi.updateProjectDetail({...this.form}).then(ret => {
          if (ret.code === 200) {
            this.$message.success(ret.message)
            this.$emit("submitSuccess")
          } else {
            this.$message.error(ret.message)
          }
        })
      },
      addFile(file) {
        if(file.response.code===200){
          this.$message.success("上传成功")
        }else {
          this.$message.error(file.response.message||"上传失败")
        }
      },
      delFile(file) {
        let fujianId;
        if(file.fujianId){
          fujianId = file.fujianId;
        }else{
          fujianId = file.response.data[0].fujianId
        }
        filesApi.delFile(fujianId).then(ret=>{
          if(ret.code===200){
            this.$message.success("删除成功")
          }else{
            this.$message.error("操作失败")
          }
        })
      },
      fetchFileList() {
        filesApi.getFiles(this.form.logId).then(ret => {
          console.log(ret)
          this.fileList = ret.data.map(item => (
            {
              url: filesApi.preview + item.fujianId,
              fujianId: item.fujianId
            }))
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .title {
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }

  .area {
    position: relative;

    &::after {
      content: "(平方米)";
      display: block;
      position: absolute;
      right: -45px;
      color: red;
      font-size: 12px;
      top: 8px;
    }
  }

  .count {
    position: relative;

    &::after {
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