<template>
  <div>
    <transition name="grow">
      <div class="buttons" v-if="isShow">
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "WbButtonsArea",
  props: {
    isShow: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.buttons {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: $brand-light;
  padding-left: 10px;
}
.grow-enter-active, .grow-leave-active{
  transition: all 0.5s;
  width: 100%;
}
.grow-enter, .grow-leave-to{
  height: 0;
  width: 0;
}
</style>