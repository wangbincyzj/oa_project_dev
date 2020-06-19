<template>
  <div>
    <div v-if="mode===0">

    </div>
    <div v-if="mode===1">

    </div>
  </div>
</template>

<script>
  export default {
    name: "HtbgsqDialog",
    data() {
      return{
        mode: null  // 0变更买受人界面  1变更条款界面
      }
    },
    methods:{
      setMode(mode, ...args){
        this.mode = mode;
      }
    }
  }
</script>

<style scoped lang="scss">

</style>