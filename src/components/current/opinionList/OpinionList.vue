<template>
  <el-table :data="opinionList" size="mini">
    <el-table-column label="流程" align="center" prop="processName"/>
    <el-table-column label="时间" align="center" prop="approveTime" width="150">
      <template #default="{row}">
        <div v-if="row.processName==='受理'">
          <div>{{row.approveTime}}</div>
          <div v-if="row.promiseDate">允诺时间:{{row.promiseDate}}</div>
        </div>
        <div v-else>
          <div>{{row.approveTime}}</div>
        </div>
      </template>
    </el-table-column>
    <el-table-column label="审核人" align="center" prop="approvePerson"/>
    <el-table-column label="结果" align="center" prop="processResult">
      <template #default="{row}">
        <div v-if="row.processResult===1 && row.processName!=='受理'">通过</div>
        <div v-if="row.processResult===1 && row.processName==='受理'">受理</div>
        <div class="danger" v-if="row.processResult===2 && row.processName!=='受理'">驳回</div>
        <div class="danger" v-if="row.processResult===2 && row.processName==='受理'">退件</div>
      </template>
    </el-table-column>
    <el-table-column label="意见" align="center" prop="approveOpinion" width="500"/>
  </el-table>
</template>

<script>
  import {filesApi} from "@/api/files";

  export default {
    name: "OpinionList",
    data() {
      return {
        opinionList: []
      }
    },
    methods:{
      fetchData(logId) {
        filesApi.getAuditInfo(logId).then(ret=>{
          this.opinionList = ret.data;
        })
      }
    }
  }
</script>

<style scoped>

</style>