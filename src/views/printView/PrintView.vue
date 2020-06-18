<template>
  <div class="printView">
    <Dyyshtmb v-if="args==='yshtmb'" args="yshtmb"/>
    <Dyyshtmb v-if="args==='ysht'" args="ysht" :ba="true"/>
  </div>
</template>

<script>
  import Dyyshtmb from "@/views/printView/chilidren/Dyyshtmb";
  export default {
    name: "PrintView",
    components: {Dyyshtmb},
    computed:{
      args() {
        return this.$route.params.args
      }
    }
  }
</script>

<style scoped lang="scss">

</style>