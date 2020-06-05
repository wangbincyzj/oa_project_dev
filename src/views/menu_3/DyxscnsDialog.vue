<template>
  <div>
    <el-form size="mini" inline :model="formData">
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
      <el-form-item label="所在项目" ><el-input v-model="form.ldxxMc"></el-input></el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "DyxscnsDialog",
    data() {
      return {
        form:{ldxxMc:null}
      }
    }
  }
</script>

<style scoped>

</style>