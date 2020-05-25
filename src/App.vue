<template>
  <div id="app">

    <BaseLayout v-if="login"/>

    <Login v-else/>
  </div>
</template>


<script>
  import BaseLayout from "@/views/layout/BaseLayout";
  import Login from "@/views/login/Login";
  export default {
    name: "App",
    components: {Login, BaseLayout},
    data() {
      return{
        login: true
      }
    },
    created() {
      this.$store.dispatch("fetchBaseData", this.$store.state.rwbh).then(ret=>{
        if(ret.code===200){
          this.$message.success("请求数据成功")
        }
      })
    }
  }
</script>

<style lang="scss">
  #app{
    height: 100%;
  }
</style>