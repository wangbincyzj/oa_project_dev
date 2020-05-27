<template>
  <div class="dialog myDialog myForm-mb5">
    <div class="add" v-if="mode===1">
      <el-alert style="margin-bottom: 20px; line-height: 1.2" :closable="false">该楼栋必须具备以下四个条件才能在下面框中显示：1、楼栋已审核；2、一房一价已审核；3、设置好了预售资金监管方式；4、设置了维修资金缴存标准；如果你要选择的楼栋未在下面显示请你到“项目管理”——“楼盘上报审核”中查看下该栋房屋的某个状态是否有没有完成。</el-alert>
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1">
        <el-form-item label="楼栋名称">
          <el-select  value=""></el-select>
        </el-form-item>
        <el-form-item label="开盘日期">
          <el-date-picker :disabled="!form1.ldmc"  v-model="form1.ysxkKprq" placeholder="选择开盘日期"/>
        </el-form-item>
        <br/>
        <el-form-item label="住宅面积">
          <el-input disabled  v-model="form1.xkzZzmj"/>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input disabled v-model="form1.xkzZzts"/>
        </el-form-item>
        <el-form-item label="非住宅面积">
          <el-input disabled v-model="form1.xkzFzzmj"/>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input disabled v-model="form1.xkzFzzts"/>
        </el-form-item>
        <el-form-item label="预售总面积">
          <el-input disabled v-model="form1.ysxkZjzmj"/>
        </el-form-item>
        <el-form-item label="预售总套数">
          <el-input disabled v-model="form1.ysxkYsts"/>
        </el-form-item>
        <el-divider/>
        <el-form-item label="监管账户名称">
          <el-input :disabled="!form1.ldmc"  v-model="form1.xkzJgzhmc" style="width: 180px" type="textarea"/>
        </el-form-item>
        <el-form-item label="监管账户">
          <el-input :disabled="!form1.ldmc"  v-model="form1.xkzJgzh" style="width: 180px" type="textarea"/>
        </el-form-item>
        <el-form-item label="监管银行">
          <el-input :disabled="!form1.ldmc"  v-model="form1.xkzJgyh"  style="width: 180px" type="textarea"/>
        </el-form-item>

      </el-form>
      <CenterButton :disabled="!form1.ldmc" title="添加"/>
    </div>
    <div v-if="mode===2">
      <h3 class="name">业务收件操作</h3>

    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushowApi} from "@/api/menu_3/yushow";
  export default {
    name: "SqysxkDialog",
    components: {CenterButton},
    data() {
      return{
        mode: 1, // 1 预售申报  2业务收件操作
        form1:{
          ldmc: null,
          xkzZzmj: null,
          xkzZzts: null,
          xkzFzzmj: null,
          xkzFzzts: null,
          ysxkZjzmj: null,
          ysxkYsts: null,
          xkzLdid: null,
          xmxxId: null,
          kfsId: null,
          xkzJgzhmc: null,
          xkzJgzh: null,
          xkzJgyh: null,
          ysxkKprq: null,
          xkzLdmc: null,
          ldFwlx: 0,
        },
        name: ""
      }
    },
    methods:{
      setMode(mode){
        this.mode=mode;
        if(mode===1){
          this.fetchLdData()
        }
      },
      fetchLdData() {
        yushowApi.getReportBuildingsByProjectId(this.$store.state.projectData.xmxxId, 0).then(ret=>{
          console.log(ret)
        })
      }
    },

  }
</script>

<style scoped>

</style>