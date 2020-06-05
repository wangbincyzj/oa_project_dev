<template>
  <div class="tjysmb">
    <h3 class="title">添加合同模板 <el-button size="mini" icon="el-icon-plus" type="default">保存模板</el-button> </h3>
    <p class="warning">注意：1、必须要有模板名称，名称中含项目名称，比如”世纪花城住宅模板“；2、添加模板不要一次性添加完成，可以添加几项后保存模板，然后在修改中完善。</p>

    <TjysmbForm style="margin: 20px 0"/>

    <TjysmbItem/>

    <div style="text-align: center; margin-bottom: 300px"><el-button  icon="el-icon-plus" type="success">保存模板</el-button></div>
  </div>
</template>

<script>
  import TjysmbForm from "@/views/menu_3/Tjysmb/TjysmbForm";
  import TjysmbItem from "@/views/menu_3/Tjysmb/TjysmbItem";
  export default {
    name: "Tjysmb",
    components: {TjysmbItem, TjysmbForm}
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjysmb{
    padding: 30px 50px;
    color: $text-normal;
    h3{
      text-align: center;
      font-weight: 600;
      font-size: 25px;
      line-height: 3em;
    }
    p{
      font-size: 12px;
      color: red;
      line-height: 3;
    }
  }
</style>