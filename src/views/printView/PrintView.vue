<template>
  <div class="printView">
    <Dyyshtmb v-if="args==='yshtmb'" args="yshtmb"/>  <!--预售合同模板-->
    <Dyyshtmb v-if="args==='ysht'" args="ysht" :ba="true"/> <!--预售合同-->
    <Dyjkmds v-if="args==='Dyjkmds'"/>  <!---->
    <Dymx v-if="args==='Dymx'"/>  <!---->
    <DyXscns v-if="args==='xscns'"/>  <!--销售承诺书-->
    <DyBab v-if="args==='bab'"/>  <!--完善预售合同-打印备案表-->
    <DyReceiveList v-if="args==='receiveList'"/> <!--打印收件清单-->
  </div>
</template>

<script>
  import Dyyshtmb from "@/views/printView/chilidren/Dyyshtmb";
  import Dyjkmds from "@/views/printView/chilidren/Dyjkmds";
  import Dymx from "@/views/printView/chilidren/Dymx";
  import DyXscns from "@/views/printView/chilidren/DyXscns";
  import DyBab from "@/views/printView/chilidren/DyBab";
  import DyReceiveList from "@/views/printView/chilidren/DyReceiveList";
  export default {
    name: "PrintView",
    components: {DyReceiveList, DyBab, DyXscns, Dyyshtmb,Dyjkmds,Dymx},
    computed:{
      args() {
        return this.$route.params.args
      }
    }
  }
</script>

<style scoped lang="scss">

</style>