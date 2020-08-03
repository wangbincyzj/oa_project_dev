<template>
  <div class="confirmBtn">
    <el-button
      :type="type"
      :size="size"
      :style="{marginTop: marginTop}"
      @click="$emit('click')"
    >{{ title }}</el-button>
  </div>
</template>

<script>
export default {
  name: "ConfirmBtn",
  props: {
    title: {default: "确认提交"},
    type: {default: "primary"},
    size: {default: "small"},
    marginTop: {default: "14px"}
  }
}
</script>

<style scoped lang="scss">
div.confirmBtn {
  display: flex;
  justify-content: center;
}
</style>