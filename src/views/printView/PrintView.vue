<template>
  <div class="printView">
    <Dyyshtmb v-if="args==='yshtmb'"/>
    <Dyjkmds v-if="args==='Dyjkmds'"/>
    <Dymx v-if="args==='Dymx'"/>
  </div>
</template>

<script>
  import Dyyshtmb from "@/views/printView/chilidren/Dyyshtmb";
  import Dyjkmds from "@/views/printView/chilidren/Dyjkmds";
  import Dymx from "@/views/printView/chilidren/Dymx";
  export default {
    name: "PrintView",
    components: {Dyyshtmb,Dyjkmds,Dymx},
    computed:{
      args() {
        return this.$route.params.args
      }
    }
  }
</script>

<style scoped lang="scss">

</style>