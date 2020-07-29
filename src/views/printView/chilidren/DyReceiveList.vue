<template>
  <div style="font-size: 16px">
    <h1 data-v-3354cfcc="" style="text-align: center; font-weight: bold; font-size: 20px">{{$route.query.title}}收件清单</h1>
    <table data-v-3354cfcc="" id="printTable" border="1" cellspacing="0"
           style="width: 700px; margin: 0px auto; text-align: center; font-size: 16px;">
      <thead data-v-3354cfcc="">
      <tr data-v-3354cfcc="">
        <td data-v-3354cfcc="">序号</td>
        <td data-v-3354cfcc="">收件名称</td>
        <td data-v-3354cfcc="">收件性质</td>
        <td data-v-3354cfcc="">收件份数</td>
      </tr>
      </thead>
      <tbody data-v-3354cfcc="">
      <tr v-for="(item,index) in receiveList">
        <th data-v-3354cfcc="">{{index+1}}</th>
        <th data-v-3354cfcc="">{{item.ywsjTitle}}</th>
        <th data-v-3354cfcc="">{{item.ywsjSjxz|sjxzFilter}}</th>
        <th data-v-3354cfcc="">{{item.ywsjFenshu}}</th>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import {filesApi} from "@/api/files";

  export default {
    name: "DyReceiveList",
    data() {
      return {
        receiveList: []
      }
    },
    created() {
      this.fetchReceiveList()
    },
    filters:{
      sjxzFilter(val) {
        switch (val) {
          case 0: return "原件";
          case 1: return "复印件";
          case 2: return "扫描件";
        }
      }
    },
    methods: {
      fetchReceiveList() {
        filesApi.queryConfirm(this.$route.query.id).then(ret => {
          this.receiveList = ret.data.businessAttachments
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  h1{
    line-height: 3em;
  }
  td, th{
    height: 30px;
  }
</style>