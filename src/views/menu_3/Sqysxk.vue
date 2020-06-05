<template>
  <TitleTable :title="projectData&&projectData.xmxxXmmc? `项目【${projectData.xmxxXmmc}】预售许可证列表`:'预售许可证列表'">
    <el-alert center type="warning">
      <span style="color: red">添加完成后需要点扫描将相关材料上传，之后点“上报”后等待住建局审核！</span>
      <el-button size="mini" type="primary" @click="add">添加预售</el-button>
    </el-alert>
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column align="center" label="预售证号" prop="xkzXkzbh" width="100"/>
      <el-table-column align="center" label="预售名称" prop="xkzLdmc" width="100"/>
      <el-table-column align="center" label="预售总面积" prop="ysxkZjzmj" width="100"/>
      <el-table-column align="center" label="住宅面积" prop="xkzZzmj" width="100"/>
      <el-table-column align="center" label="住宅套数" prop="xkzZzts" width="100"/>
      <el-table-column align="center" label="非住宅面积" prop="xkzFzzmj" width="100"/>
      <el-table-column align="center" label="非住宅套数" prop="xkzFzzts"  width="100"/>
      <el-table-column align="center" label="上报时间" prop="xkzSbsj"  width="200"/>
      <el-table-column align="center" label="审核状态" prop="shzt"  width="100"/>
      <el-table-column align="center" label="收件操作" >
        <template #default="scope">
          <el-button @click="handleReceive(scope.row)" :disabled="!_enable(scope.row)" size="mini">收件</el-button>
          <el-button @click="handleClear" :disabled="!_enable(scope.row)" size="mini">清除</el-button>
          <el-button @click="handlePrint" :disabled="!_enable(scope.row)" size="mini">打印收件</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="上报操作">
        <template #default="scope">
          <el-button @click="handleUpdate(scope.row)" size="mini">{{_enable(scope.row)?"修改":"查看"}}</el-button>
          <el-button @click="handleUploadPic(scope.row)" :disabled="!_enable(scope.row)" size="mini">传图</el-button>
          <el-button @click="handleManagePic(scope.row)" :disabled="!_enable(scope.row)" size="mini">管图</el-button>
          <el-button @click="handleCommit(scope.row)" :disabled="!_enable(scope.row)" size="mini">上报</el-button>
          <el-button @click="handleDelete(scope.row)" :disabled="!_enable(scope.row)" size="mini" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      :title="dialogTitle"
      center
      width="1200px"
      :before-close="closeConfirm"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <SqysxkDialog ref="dialog" @submitSuccess="submitSuccess"/>
    </el-dialog>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import SqysxkDialog from "@/views/menu_3/SqysxkDialog";
  import {mapState} from "vuex"
  import {yushowApi} from "@/api/menu_3/yushow";
  export default {
    name: "Sqysxk",
    mixins: [mixins.dialogMixin],
    components: {SqysxkDialog, TitleTable},
    data() {
      return {
        tableData:[],
        loading: false
      }
    },
    computed:{
      ...mapState(["projectData", "xmxxId"])
    },
    created() {
      this.$nextTick(()=>{
        this.fetchTableData();
      })
    },
    methods:{
      _enable(row){
        return row.xkzShzt === 0 || row.xkzShzt === 3;
      },
      _mapStatusNumToString(_num) {
        switch (_num) {
          case 0:
            return "未提交";
          case 1:
            return "审核中";
          case 2:
            return "通过";
          case 3:
            return "撤回";
          default:
            return "Error"
        }
      },
      fetchTableData() {
        yushowApi.selectPage(0, null, this.xmxxId).then(ret=>{
          this.tableData = ret.data.records.map(item=>({
            ...item,
            shzt: this._mapStatusNumToString(item.xkzShzt)
          }));
        })
      },
      add() {
        this.dialogVisible = true;
        this.dialogTitle = "预售申报"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1)
        })
      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchTableData();
      },
      handleReceive(item){
        this.dialogVisible = true;
        this.dialogTitle = "业务收件操作"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, item.xkzId)
        })
      },
      handleClear(){},
      handlePrint(){},
      handleUpdate(item){
        this.dialogVisible = true;
        this.dialogTitle = "预售申报 信息修改"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, item.xkzId)
        })
      },
      handleUploadPic(){},
      handleManagePic(){},
      handleCommit(item){
        this.$confirm('确定要上报吗,是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          yushowApi.submit(item.xkzId).then(ret=>{
            if(ret.code===200){
              this.$message.success("上报成功");
              this.fetchTableData()
            }else{
              this.$message.error(ret.message)
            }
          })
        })
      },
      handleDelete(item){
        this.$confirm('确定要删除吗,是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          yushowApi.del(item.xkzId).then(ret=>{
            if(ret.code===200){
              this.$message.success("删除成功");
              this.fetchTableData()
            }else{
              this.$message.error(ret.message)
            }
          })
        })
      },
      handleDetail(){},
    }
  }
</script>

<style scoped>

</style>