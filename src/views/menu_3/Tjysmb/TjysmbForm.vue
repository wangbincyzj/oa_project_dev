<template>
  <div class="myForm-mb5 myForm-tjysmb">
    <el-form
      ref="form"
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      :model="form">
      <el-form-item required label="模板名称">
        <el-input v-model="form.htMc"/>
      </el-form-item>
      <br/>
      <el-form-item required label="项目名称">
        <el-input v-model="form.htXmmc"/>
      </el-form-item>
      <el-form-item required label="楼栋名称">
        <el-input v-model="form.htLdmc"/>
      </el-form-item>
      <el-form-item label="委托代理人">
        <el-input v-model="form.htMfwtdlr"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.htMfdllxdh"/>
      </el-form-item>
      <el-form-item label="委托代理地址">
        <el-input v-model="form.htMfwtdldz"/>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.htMfdlyzbm"/>
      </el-form-item>
      <el-form-item label="委托代理机构">
        <el-input v-model="form.htMfwtdljg"/>
      </el-form-item>
      <el-form-item label="营业执照注册号">
        <el-input v-model="form.htMfwtdljgzch"/>
      </el-form-item>
      <el-form-item label="注册地址">
        <el-input v-model="form.htMfdljgdz"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.htMfdljgddh"/>
      </el-form-item>
      <el-form-item label="法定代表人">
        <el-input v-model="form.htMfdljgfr"/>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.htMfdljgyzbm"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "TjysmbForm",
    data() {
      return {
        form: {
          htXslx: 0,  // 0 预售  1现售
          htMc: "",
          htLdmc: "",
          htXmmc: "",
          kfsRwbh: "",
          htMfwtdlr: "",
          htMfdllxdh: "",
          htMfwtdldz: "",
          htMfdlyzbm: "",
          htMfwtdljg: "",
          htMfwtdljgzch: "",
          htMfdljgdz: "",
          htMfdljgddh: "",
          htMfdljgfr: "",
          htMfdljgyzbm: "",
        }
      }
    },
    methods:{
      setData(_form) {
        this.form = _form
      }
    }
  }
</script>

<style scoped>

</style>