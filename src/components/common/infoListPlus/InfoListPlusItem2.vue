<template>
  <div class="item" >
    <div class="name" >
      <template v-if="name">
        {{name}}
      </template>
    </div>
    <div class="content">
      <div class="inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "InfoListPlusItem2",
    props:{
      name:{
        type: String
      }
    }
  }
</script>

<style scoped lang="scss">
  .item{
    width: 100%;
    display: flex;
    border: 1px solid #fff;
    .name{
      background: #E4EDF9;
      height: 100%;
      display: flex;
      font-size: 12px;
      font-weight: 600;
      justify-content: center;
      align-items: center;
      flex: 1;
    }
    .content{
      flex: 3;
      background-color: #EEF7FD;
      box-sizing: border-box;
      padding: 0 10px;
    }
  }

</style>