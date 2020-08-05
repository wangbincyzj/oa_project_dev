<template>
  <div>
    <transition name="grow">
      <div class="buttons" v-if="canShow">
        <span class="cancel" @click="handleCancel">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-lujing131"></use>
          </svg>
          <span>取消</span>
        </span>
        <slot/>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "ButtonsArea",
  props: {
    isShow: {
      default: false,
      type: Boolean
    },
    row: {
      required: true
    }
  },
  computed: {
    canShow() {
      return !(!this.row || Object.keys(this.row).length === 0);
    }
  },
  methods: {
    handleCancel() {
      this.$emit("cancel")
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
  background-color: rgba(248, 248, 248, 1);

  span.cancel{
    flex-shrink: 0;
    cursor: pointer;
    font-size: 14px;
    width: 54px;
    height: 20px;
    line-height: 20px;
    color:rgba(0,133,235,1);
    padding: 0 4px;
    margin: 0 30px;
    svg{
      width: 14px;
      height: 14px;
      margin-right: 4px;
    }
  }
}

.grow-enter-active, .grow-leave-active {
  transition: all 0.5s;
  width: 100%;
}

.grow-enter, .grow-leave-to {
  height: 0;
  width: 0;
}
</style>