<template>
  <div class="why">
    <el-tooltip placement="top"  effect="light">
      <div slot="content">
        <slot></slot>
      </div>
      <svg class="icon" aria-hidden="true" v-if="type==='why'">
        <use xlink:href="#iconwenhao"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-if="type==='warning'">
        <use xlink:href="#iconjinggao"></use>
      </svg>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: "Why",
  props: {
    type: {
      type: String,
      default: "why"
    }
  }
}
</script>

<style scoped lang="scss">
.why{
  display: inline-block;
  margin: 0 5px;
  padding: 10px;
}
</style>