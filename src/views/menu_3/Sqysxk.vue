<template>
  <TitleTable :title="projectData&&projectData.xmxxXmmc? `项目【${projectData.xmxxXmmc}】预售许可证列表`:'预售许可证列表'">
    <el-alert center type="warning">
      <span style="color: red">添加完成后需要点扫描将相关材料上传，之后点“上报”后等待住建局审核！</span>
      <el-button size="mini" type="primary" @click="add">添加预售</el-button>
    </el-alert>
    <el-table
      :data="tableData"
      style="width: 100%"
      size="mini"
    >
      <el-table-column align="center" label="预售证号" prop="xkzXkzbh" />
      <el-table-column align="center" label="预售名称" prop="xkzLdmc" />
      <el-table-column align="center" label="预售总面积" prop="xkzZjzmj" />
      <el-table-column align="center" label="住宅面积" prop="xkzZzmj" />
      <el-table-column align="center" label="住宅套数" prop="xkzZzts" />
      <el-table-column align="center" label="非住宅面积" prop="xkzFzzmj" />
      <el-table-column align="center" label="非住宅套数" prop="xkzFzzts"  />
      <el-table-column align="center" label="上报时间" prop="xkzSbsj"  />
      <el-table-column align="center" label="当前流程" prop="xkzLiucheng"  />
      <el-table-column align="center" label="收件操作" width="250">
        <template #default="scope">
          <el-button type="primary" @click="handleReceive(scope.row)" :disabled="!_enable(scope.row)" size="mini">确认收件</el-button>
          <el-button type="primary" @click="handleManage(scope.row)" :disabled="!_enable(scope.row)" size="mini">收件管理</el-button>
        </template>
      </el-table-column>
      <el-table-column align="center" label="上报操作" width="350">
        <template #default="scope">
          <el-button type="primary" @click="handleUpdate(scope.row)" :disabled="!_enable(scope.row)" size="mini">修改</el-button>
          <el-button type="primary" @click="handleCommit(scope.row)" :disabled="!_enable(scope.row)" size="mini">上报</el-button>
          <el-button  @click="handleDelete(scope.row)" :disabled="!_enable(scope.row)" size="mini" type="danger">删除</el-button>
          <el-button type="primary" @click="handleDetail(scope.row)" size="mini">查看详情</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, total, sizes"
      @current-change="mixinCurrentChange"
      @size-change="mixinSizeChange"
      :page-sizes="[10, 20, 30, 40]"
      :current-page="currentPage"
      :page-size="pageSize"
      :total="total">
    </el-pagination>
    <el-dialog
      :title="dialogTitle"
      center
      width="1200px"
      :before-close="dialogReset"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <SqysxkDialog :read-only="readOnly" ref="dialog" @submitSuccess="submitSuccess"/>
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
    mixins: [mixins.dialogMixin, mixins.myPagerMixin],
    components: {SqysxkDialog, TitleTable},
    data() {
      return {
        tableData:[],
        loading: false,
        dialogTitle: "",
        readOnly: false,
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
        yushowApi.selectPage(0, null, this.xmxxId, this.currentPage, this.pageSize).then(ret=>{
          this.total = ret.data.total
          this.tableData = ret.data.records.map(item=>({
            ...item,
            shzt: this._mapStatusNumToString(item.xkzShzt)
          }));
        })
      },
      add() {
        this.dialogVisible = true;
        this.dialogTitle = "预售申报"
        this.readOnly = false
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
          this.$refs.dialog.setMode(2, item.xkzId, item.xkzYwzh)
        })
      },
      handleManage(item) {
        this.dialogVisible = true;
        this.dialogTitle = "业务收件管理"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(4, item.xkzId, item.xkzYwzh)
        })
      },
      handlePrint(){},
      handleUpdate(item){
        this.readOnly = false
        this.dialogVisible = true;
        this.dialogTitle = "预售申报"
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, item.xkzId, item.logId, item.xkzYwzh)
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
      handleDetail(item){
        this.dialogVisible = true;
        this.dialogTitle = "预售申报"
        this.readOnly =true
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(3, item.xkzId, item.logId, item.xkzYwzh)
        })
      },
    }
  }
</script>

<style scoped>

</style>