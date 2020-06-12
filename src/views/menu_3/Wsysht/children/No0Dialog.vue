<template>
  <div>
    <div v-if="mode===0">
      <InfoListPlus>
        <template>
          <InfoListPlusItem name="所有权人"><input type="text"></InfoListPlusItem>
          <InfoListPlusItem name="联系电话"><input type="text"></InfoListPlusItem>
          <InfoListPlusItem name="家庭地址"><input type="text"></InfoListPlusItem>

          <InfoListPlusItem name=""></InfoListPlusItem>
          <InfoListPlusItem name="共有方式">
            <div class="radio">
              <input type="radio">比例
              <input type="radio">面积
            </div>
          </InfoListPlusItem>
          <InfoListPlusItem name="共有份额"><input type="text"></InfoListPlusItem>
          <InfoListPlusItem name="证件号码" oneline>
            <div>
              <el-button size="mini" type="primary">读取身份证</el-button>
              <input style="outline: none; border-bottom: 1px #909399 solid" type="text">
            </div>
          </InfoListPlusItem>

          <InfoListPlusItem name="人员相片" oneline>
            <div>
              <el-button  size="mini" type="primary">点击拍照</el-button>
              <el-button  size="mini" type="primary">上传</el-button>
            </div>
          </InfoListPlusItem>

        </template>
      </InfoListPlus>
      <CenterButton style="margin-top: 30px" title="添加"/>
    </div>
    <div v-if="mode===1">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
      >
        <el-table-column align="center" label="产权人" prop="xsqrdXmmc" width="100"/>
        <el-table-column align="center" label="证件号码" prop="xsqrdLdmc" width="200"/>
        <el-table-column align="center" label="共有方式" prop="xsqrdFh" width="100"/>
        <el-table-column align="center" label="共有比例" prop="createTime" width="100"/>
        <el-table-column align="center" label="联系电话" prop="logoutStatus" width="100"/>
        <el-table-column align="center" label="家庭地址" prop="xsqrdZxtime" width="100"/>
        <el-table-column align="center" label="买受人照片" prop="xsqrdZxyy" />
        <el-table-column align="center" label="操作">

          <template #default="scope">

            <el-button size="mini" @click="handleUpdate(scope.row)">修改</el-button>
            <el-button size="mini" @click="handleDel(scope.row)">删除</el-button>
          </template>

        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No0Dialog",
    components: {CenterButton, InfoListPlusItem, InfoListPlus},
    data() {
      return {
        mode: 0,
        tableData: [{}],
      }
    },
    methods: {
      setMode(mode) {
        this.mode = mode; // 0添加 1管理
      },
      handleUpdate(item){

      },
      handleDel(item){

      }
    }
  }
</script>

<style scoped lang="scss">
  .radio {
    display: flex;
    align-items: center;

    input:nth-child(2) {
      margin-left: 10px;
    }
  }

  .buttons {
    display: flex;
    justify-content: center;
    margin-top: 30px;
  }
</style>