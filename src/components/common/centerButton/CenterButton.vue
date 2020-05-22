<template>
  <div class="centerButton">
    <el-button
      style="display: block; width: 150px; transform: translateX(-50px)"
      :loading="loading"
      size="mini"
      :disabled="disabled"
      @click="$emit('btnClick')"
      type="primary">{{title}}
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