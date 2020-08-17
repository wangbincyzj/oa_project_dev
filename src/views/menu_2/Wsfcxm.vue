<template>
  <div>
    <TitleTable title="项目管理">

      <el-table
        v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          label="入网编号"
          prop="kfsRwbh">
        </el-table-column>
        <el-table-column
          label="项目名称"
          prop="xmxxXmmc">
        </el-table-column>
        <el-table-column
          label="建筑面积	"
          prop="xmxxZzjmj">
        </el-table-column>
        <el-table-column
          label="联系电话"
          prop="xmxxXsdh">
        </el-table-column>
        <el-table-column
          label="项目地址"
          prop="xmxxJtzl">
        </el-table-column>
        <el-table-column
          label="审核状态"
          prop="status">
        </el-table-column>
        <el-table-column
          align="center"
          label="操作"
          width="300px"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              :disabled="scope.row.xmxxShzt===1||scope.row.xmxxShzt===2"
              @click="handleEdit(scope.$index, scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              :disabled="scope.row.xmxxShzt===1||scope.row.xmxxShzt===2"
              @click="handleSubmit(scope.$index, scope.row)">上报
            </el-button>
            <el-button
              size="mini"
              @click="handleDetail(scope.$index, scope.row)">详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog
        :title="dialogTitle"
        center
        width="1200px"
        :before-close="dialogReset"
        slot="dialog"
        @opened="_drag"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
      >
        <WsfcxmDialog
          @submitSuccess="submitSuccess"
          ref="dialog"
          :edit-mode="editMode"
        />
      </el-dialog>
    </TitleTable>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import WsfcxmDialog from "@/views/menu_2/WsfcxmDialog";
  import {mixins} from "@/utils/mixins";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";

  export default {
    name: "Wsfcxm",
    mixins: [mixins.dialogMixin],
    components: {WsfcxmDialog, TitleTable},
    data() {
      return {
        search: "",
        tableData: [
        ],
        dialogTitle: "",
        editMode: 1,
        loading: false,
      }
    },
    created() {
      this.fetchProjectData()
    },
    methods:{
      _mapNumberToStatus(_number) {
        // 0,未提交 1,提交 2,审核通过 3,驳回
        switch (_number) {
          case 0: return "新建";
          case 1: return "上报";
          case 2: return "审核通过";
          case 3: return "审核驳回";
          default: return "";
        }
      },
      fetchProjectData() {
        // todo 入网编号通过登录信息获取 现在是写死的
        this.loading = true;
        wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret=>{
          this.loading = false;
          this.tableData = ret.data.records;
          this.tableData = ret.data.records.map(item=>({...item,
            status: this._mapNumberToStatus(item.xmxxShzt)
          }));
        })
      },
      // 0详情  1修改
      handleEdit(index, item) {
        this.title = "房产项目详情";
        this.dialogVisible = true;
        this.editMode = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchDetail(item.xmxxId)
        })
      },
      handleDetail(index, item){
        this.title = "房产项目详情";
        this.dialogVisible = true;
        this.editMode = 0;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchDetail(item.xmxxId)
        })
      },
      handleSubmit(index, item){
        this.$confirm('确定要上报项目吗?上报后无法进行修改', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {  // 点击确定的操作
          wsfcxmApi.submitProject(item.xmxxId).then(ret=>{
            if(ret.code===200){
              this.$message.success(ret.message);
              this.fetchProjectData();
            }else{
              this.$message.error(ret.message)
            }
          })
        }).catch(() => {  // 点击取消的操作
          //
        });
      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchProjectData()
      }
    }
  }
</script>

<style scoped>

</style>