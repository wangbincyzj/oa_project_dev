<template>
  <div class="centerButton">
    <el-button
      style="display: block; width: 100px; transform: translateX(-50px)"
      :loading="loading"
      size="mini"
      :icon="icon"
      :disabled="disabled"
      @click="$emit('btnClick')"
      :type="type">{{title}}
    </el-button>
  </div>
</template>

<script>
  export default {
    name: "CenterButton",
    props: {
      title: {
        type: String,
        required: true
      },
      type: {
        type: String,
        default: "primary"
      },
      loading: {
        type: Boolean,
        default: false
      },
      disabled:{
        type: Boolean,
        default: false
      },
      icon:{
        type: String,
        default: ""
      }
    }
  }
</script>

<style scoped lang="scss">
  .centerButton {
    padding-left: 50%;
    width: 100%;

  }
</style>