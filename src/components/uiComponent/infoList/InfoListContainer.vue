<template>
  <div class="container">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "InfoListContainer",
  props:{
    rowCount:{
      type: Number,
      default: 4
    },
    data:{
      type: Object,
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    display: flex;
    flex-flow: row wrap;
  }
</style>