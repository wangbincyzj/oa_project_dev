<template>
  <transition name="grow">
    <div class="my-dialog">
      <div class="titleWrapper" v-if="show">
        <div class="title">{{ title }}</div>
        <i class="close el-icon-close"></i>
      </div>
      <div class="contentWrapper" :style="{padding: padding}">

      </div>


    </div>
  </transition>

</template>

<script>
export default {
  name: "MyDialog",
  data() {
    return {
      show: false
    }
  },
  mounted() {
    this.show = true
  },
  props: {
    title: {type: String},
    padding: {type: String, default: "10px"}
  }
}
</script>

<style scoped lang="scss">
.my-dialog {
  width: 80%;
  height: 60%;
  position: fixed;
  z-index: 999;
  background-color: white;
  border: 1px slateblue solid;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .titleWrapper {
    position: relative;
    height: 40px;

    .title {
      font-weight: 600;
      font-size: 16px;
      line-height: 40px;
      text-align: center;
    }

    .close {
      position: absolute;
      font-size: 20px;
      cursor: pointer;
      right: 7px;
      top: 7px;
    }
  }

  .contentWrapper {
    flex: 1;
    background-color: slateblue;
  }
}

.grow-enter-active {
  transition: all 1s;
  opacity: 1;
}

.grow-enter {
  opacity: 0;
}

</style>