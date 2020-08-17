<template>
  <TitleTable title="生成楼栋房间">
    <el-alert
        slot="controls"
        type="warning"
        center
        :closable="false">
      <div style="color: red">注意：有规律房间点击“生成房间”进行批量生成，特殊房间通过查看楼盘表的“添加房间”来生成！</div>
    </el-alert>
    <el-table
        :data="tableData"
        style="width: 100%">
      <el-table-column
          label="楼栋名称"
          align="center"
          prop="ldxxMc">
      </el-table-column>
      <el-table-column
          label="楼栋编号"
          width="120"
          align="center"
          prop="ldxxLdbh">
      </el-table-column>
      <el-table-column
          width="100"
          label="建筑面积"
          align="center"
          prop="ldxxJzmj">
      </el-table-column>
      <el-table-column
          width="80"
          align="center"
          label="总层数"
          prop="ldxxZgcs">
      </el-table-column>
      <el-table-column
          width="80"
          label="单元数"
          prop="ldxxDys">
      </el-table-column>
      <el-table-column
          width="80"
          align="center"
          label="一梯几户"
          prop="ldxxYtjh">
      </el-table-column>
      <el-table-column
          align="center"
          label="房屋类型"
          prop="fwlx">
      </el-table-column>
      <el-table-column
          width="100"
          label="审核状态"
          prop="status">
      </el-table-column>
      <el-table-column
          align="center"
          label="操作"
          width="300"
      >
        <template slot-scope="scope">

          <el-button
              type="primary"
              size="mini"
              @click="handleDetail(scope.$index, scope.row)">楼盘表生成房间
          </el-button>

        </template>
      </el-table-column>
    </el-table>
    <el-dialog
        :title="dialogTitle"
        center
        width="1200px"
        slot="dialog"
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
    >
      <TjhsfjDialog
          ref="dialog"
          @submitSuccess="submitSuccess"
          :mode="mode"
      />
    </el-dialog>
  </TitleTable>
</template>

<script>
import TitleTable from "@/components/current/titleTable/TitleTable";
import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
import {tjldxmApi} from "@/api/menu_2/tjldxm";
import {mixins} from "@/utils/mixins";
import TjhsfjDialog from "@/views/menu_2/TjhsfjDialog";

export default {
  name: "Tjhsfj",
  mixins: [mixins.dialogMixin],
  components: {TjhsfjDialog, TitleTable},
  data() {
    return {
      loading: false,
      projectData: null,
      projectId: null,
      projectStatus: null,
      tableData: [],
      mode: 1,
      dialogTitle: "",
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;
      // 1.通过入网编号查用户的项目信息
      wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret => {
        this.projectData = ret.data.records[0];
        this.projectId = this.projectData.xmxxId;
        this.projectStatus = this.projectData.xmxxShzt;
        // 2.通过项目信息的项目id获取楼栋信息
        tjldxmApi.getBuildingInfo(this.projectId).then(ret => {
          this.loading = true;
          this.tableData = ret.data.map(item => ({
            ...item,
            fwlx: item.ldxxFwlx === 0 ? "预售商品房" : "现房",
            status: this._mapStatusNumToString(item.ldxxShzt)
          }));
        })
      })

    },
    _mapStatusNumToString(_num) {
      switch (_num) {
        case 0:
          return "等待提交审核";
        case 1:
          return "管局审核中";
        case 2:
          return "审核通过";
        case 3:
          return "审核撤回,需重新提交审核";
        default:
          return "状态未知,请联系管理员"
      }
    },
    handleDetail(index, item) {
      if (!item.ldxxChzt) {
        this.$message.warning("未测绘不能生成房间")
        return
      }
      console.log(item)
      this.dialogVisible = true;
      this.dialogTitle = `楼栋[${item.ldxxMc}]生成房间`
      this.$nextTick(() => {
        this.$refs.dialog.setMode(0, item.ldxxId)
      })
    },
    handleCreate(index, item) {
      this.dialogVisible = true;
      this.mode = 1;
      this.dialogTitle = "自动生成房间"
      this.$nextTick(() => {
        this.$refs.dialog.fetchBuildingDetail(item.ldxxId);
      })
    },
    handleCreate2(index, item) {
      this.dialogVisible = true;
      this.mode = 2;
      this.dialogTitle = "手动输入房间信息"
      this.$nextTick(() => {
        this.$refs.dialog.fetchBuildingDetail(item.ldxxId);
      })
    },
    submitSuccess() {
      this.dialogVisible = false;
      this.fetchData()
    }
  }
}
</script>

<style scoped>

</style>