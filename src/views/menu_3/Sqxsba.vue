<template>
  <TitleTable :title="projectData? '':'预售许可证列表'">
    <el-alert center type="warning">
      <span style="color: red">添加完成后需要点扫描将相关材料上传，之后点“上报”后等待房产局审核！</span>
      <el-button size="mini" type="primary" @click="add">添加现售</el-button>
    </el-alert>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column align="center" label="预售证号" prop="test" />
      <el-table-column align="center" label="预售名称" prop="" />
      <el-table-column align="center" label="预售总面积" prop="" />
      <el-table-column align="center" label="住宅面积" prop="" />
      <el-table-column align="center" label="住宅套数" prop="" />
      <el-table-column align="center" label="非住宅面积" prop="" />
      <el-table-column align="center" label="非住宅套数" prop=""  />
      <el-table-column align="center" label="审核状态" prop=""  />
      <el-table-column align="center" label="收件操作" width="300">
        <template #default="scope">
          <el-button size="mini">收件</el-button>
          <el-button size="mini">清除</el-button>
          <el-button size="mini">打印收件</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="上报操作" width="400">
        <template #default="scope">
          <el-button size="mini">修改</el-button>
          <el-button size="mini">传图</el-button>
          <el-button size="mini">管图</el-button>
          <el-button size="mini">上报</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dialogTitle"
      center
      width="800px"
      :before-close="closeConfirm"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <SqxsbaDialog ref="dialog"/>
    </el-dialog>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import SqysxkDialog from "@/views/menu_3/SqysxkDialog";
  import {mapState} from "vuex"
  import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
  import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
  import SqxsbaDialog from "@/views/menu_3/SqxsbaDialog";

  export default {
    name: "Sqysxk",
    mixins: [mixins.dialogMixin],
    components: {SqxsbaDialog, InfoListPlusItem, InfoListPlus, SqysxkDialog, TitleTable},
    data() {
      return {
        tableData:[{test:"123456"}],
        loading: false,
      }
    },
    computed:{
      ...mapState(["projectData"])
    },
    methods:{
      add() {
        this.dialogVisible = true;
        this.dialogTitle = "现售申报"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1)
        })
      },
      handleReceive(){},
      handleClear(){},
      handlePrint(){},
      handleUpdate(){},
      handleUploadPic(){},
      handleManagePic(){},
      handleManageCommit(){},
      handleManageDelete(){},
      handleManageDetail(){},
    }
  }
</script>

<style scoped>

</style>