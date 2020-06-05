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
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <br/>
      <el-form-item required label="项目名称">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item required label="楼栋名称">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="委托代理人">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="委托代理地址">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="委托代理机构">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="营业执照注册号">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="注册地址">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="法定代表人">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
      <el-form-item label="邮政编码">
        <el-input v-model="form.xkzZzmj"/>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: "TjysmbForm",
    data() {
      return {
        form: {}
      }
    }
  }
</script>

<style scoped>

</style>