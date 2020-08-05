<template>
  <div class="printView">
    <Dyyshtmb v-if="args==='yshtmb'" args="yshtmb"/>  <!--预售合同模板-->
    <Dyyshtmb v-if="args==='ysht'" args="ysht" :ba="true"/> <!--预售合同-->
    <Dyjkmds v-if="args==='Dyjkmds'"/>  <!---->
    <Dymx v-if="args==='Dymx'"/>  <!---->
    <DyXscns v-if="args==='xscns'"/>  <!--销售承诺书-->
    <DyBab v-if="args==='bab'"/>  <!--完善预售合同-打印备案表-->
    <DyReceiveList v-if="args==='receiveList'"/> <!--打印收件清单-->
    <Dytkbfd v-if="args==='dytkbfd'"/> <!--打印退款拨付单-->

  </div>
</template>

<script>
  import Dyyshtmb from "@/views/printView/children/Dyyshtmb";
  import Dyjkmds from "@/views/printView/children/Dyjkmds";
  import Dymx from "@/views/printView/children/Dymx";
  import DyXscns from "@/views/printView/children/DyXscns";
  import DyBab from "@/views/printView/children/DyBab";
  import DyReceiveList from "@/views/printView/children/DyReceiveList";
  import Dytkbfd from "@/views/printView/children/Dytkbfd";
  export default {
    name: "PrintView",
    components: {DyReceiveList, DyBab, DyXscns, Dyyshtmb,Dyjkmds,Dymx,Dytkbfd},
    computed:{
      args() {
        return this.$route.params.args
      }
    }
  }
</script>

<style scoped lang="scss">

</style>