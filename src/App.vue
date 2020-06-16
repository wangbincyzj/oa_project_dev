<template>
  <div id="app">
    <Login v-if="!login"/>

    <PrintView v-else-if="printView"/>


    <BaseLayout v-else-if="$store.state.buildingInfo&&$store.state.projectData"/>

  </div>
</template>


<script>
  import BaseLayout from "@/views/layout/BaseLayout";
  import Login from "@/views/login/Login";
  import PrintView from "@/views/printView/PrintView";
  import storage from "good-storage";


  export default {
    name: "App",
    components: {PrintView, Login, BaseLayout},
    computed: {
      printView() {
        return this.$route.path.indexOf("printView") > 0
      },
      login() {
        if (!this.$store.state.loginInfo.loginStatus) {
          let info = storage.session.storage.getItem("__info__")
          if (info) {
            info = JSON.parse(info)
            this.$store.dispatch("login", info)   // 用 session storage登录
          }


        }
        return this.$store.state.loginInfo.loginStatus;
      }
    },
    created() {
    }
  };
</script>

<style lang="scss">
  #app {
    height: 100%;
  }
</style>