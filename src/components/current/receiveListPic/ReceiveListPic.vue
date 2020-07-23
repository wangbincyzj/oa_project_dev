<template>
  <el-collapse accordion @change="handleChange">
    <el-collapse-item v-for="(item, index) in receiveList" :name="index">
      <template slot="title">
        <div class="item" >
          <div class="index">{{index+1}}</div>
          <div class="title">{{item.ywsjTitle}}</div>
          <div class="type">{{item.ywsjSjxz|typeFilter}}</div>
          <div class="num">{{item.ywsjFenshu}}份</div>
        </div>
      </template>
      <div class="add">
        <UploadCpn :file-list="item.imgList" :data="{logId:item.logId}"/>
      </div>
    </el-collapse-item>
  </el-collapse>
</template>

<script>
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";

  export default {
    name: "ReceiveListPic",
    components: {UploadCpn},
    props:{
      receiveList: {
        default: ()=>[],
        type: Array
      }
    },
    filters:{
      typeFilter(num) {
        switch (num) {
          case 1: return "原件";
          case 2: return "复印件";
          case 3: return "扫描件";
        }
      }
    },
    methods:{
      handleChange(index) {
        console.log(index)
      },

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .item{
    width: 100%;
    display: flex;
    .index{
      width: 40px;
      text-align: center;
      color: $info;
    }
    .title{
      flex: 1;
      font-weight: 600;
      text-shadow: $box-shadow;
    }
    .type{
      padding: 0 20px;
      text-shadow: $box-shadow;
    }
    .num{
      padding: 0 20px;
    }
    .add{
      padding: 0 50px;
    }
  }
</style>