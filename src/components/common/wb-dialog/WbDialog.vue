<template>
  <div class="dialog" v-if="visible">
    <div class="hide" @click.self="hideClick">
        <div class="wrapper" :style="{width}" v-if="init">
          <div class="title">
            {{title}}
            <div class="close" @click="closeClick"><i class="el-icon-close"/></div>
          </div>
          <div class="content">
            <slot/>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "WbDialog",
    props: {
      visible: {
        type: Boolean,
      },
      title: {
        type: String,
      },
      width: {
        type: String,
        default: "800px"
      }
    },
    data() {
      return{
        init: false
      }
    },
    watch:{
      visible(newVal){
        this.init = newVal
      }
    },
    created() {
      this.init = true
    },
    methods: {
      hideClick() {
        this.$emit("update:visible", false)
      },
      closeClick() {
        this.$emit("update:visible", false)
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .dialog {
    .hide {
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.65);
      display: flex;
      align-items: center;
      justify-content: center;

      .wrapper {
        width: 800px;
        max-height: 80%;
        overflow-y: auto;
        background-color: rgba(240, 240, 240);
        z-index: 1000;
        border-radius: 3px;
        box-shadow: $box-shadow;

        .title {
          position: relative;
          height: 25px;
          line-height: 25px;
          text-align: center;
          background-color: gainsboro;
          color: $text-weight;

          .close {
            position: absolute;
            height: 100%;
            right: 0;
            top: 0;
            width: 25px;
            background-color: #007fff;
            cursor: pointer;

            &:hover {
              background-color: red;
              color: white;
            }
          }
        }
      }
    }


  }
</style>