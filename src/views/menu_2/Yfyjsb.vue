<template>
  <TitleTable title="一房一价上报">
    <div slot="controls">
      <el-alert center type="warning" :closable="false">
        <span style="font-size: 16px; color: #1248b3">{{ xmmc ? `当前项目:【${xmmc}】` : "项目载入中..." }}</span>
      </el-alert>
    </div>
    <el-table
        size="mini"
        v-loading="loading"
        style="width: 100%"
        :data="tableData">
      <el-table-column
          prop="ldxxMc"
          align="center"
          width="150"
          label="楼栋名称">
      </el-table-column>
      <el-table-column
          prop="ldxxLdbh"
          align="center"
          width="150"
          label="楼栋编号">
      </el-table-column>
      <el-table-column
          prop="ldxxJzmj"
          align="center"
          width="150"
          label="建筑面积">
      </el-table-column>

      <el-table-column
          prop="ldxxZgcs"
          align="center"
          width="60"
          label="总层数">
      </el-table-column>

      <el-table-column
          prop="ldxxDys"
          align="center"
          width="60"
          label="单元数">
      </el-table-column>
      <el-table-column
          prop="ldxxYtjh"
          align="center"
          width="80"
          label="一梯几户">
      </el-table-column>
      <el-table-column
          prop="fwlx"
          align="center"
          width="100"
          label="房屋类型">
      </el-table-column>
      <el-table-column
          width="100"
          label="审核状态"
          prop="yfyjzt">
      </el-table-column>
      <el-table-column
          label="操作"
          align="center">
        <template slot-scope="scope">
          <template v-if="scope.row.ldxxYfyjzt===2">
          </template>
          <template v-else>
            <el-button
                type="primary"
                :disabled="scope.row.ldxxYfyjzt===1"
                size="mini"
                @click="submit(scope.row)"
            >上报审核
            </el-button>
          </template>
          <el-button
              type="primary"
              size="mini"
              @click="handleDetail(2, scope.row)">查看单价
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
        :visible.sync="dialogVisible"
        @close="dialogVisible = false"
    >
      <LpsbshDialog
          :mode="mode"
          ref="dialog"
          :projectId="projectId"
      />
    </el-dialog>
    <template #pager>
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
    </template>
  </TitleTable>
</template>

<script>
import TitleTable from "@/components/current/titleTable/TitleTable";
import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
import {tjldxmApi} from "@/api/menu_2/tjldxm";
import {mixins} from "@/utils/mixins";
import YfyjsbDialog from "@/views/menu_2/YfyjsbDialog";
import {yfyjApi} from "@/api/menu_2/yfyj";

export default {
  name: "Yfyjsb",
  mixins: [mixins.dialogMixin, mixins.myPagerMixin],
  data() {
    return {
      tableData: [],
      projectData: null,
      projectId: null,
      projectStatus: null,
      dialogTitle: "",
      mode: 1,
      loading: false
    }
  },
  computed: {
    xmmc() {
      return this.projectData ? this.projectData.xmxxXmmc : ""
    }
  },
  components: {LpsbshDialog: YfyjsbDialog, TitleTable},
  created() {
    this.fetchTableData()
  },
  methods: {
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
    _mapStatusNumToString2(_num) {
      switch (_num) {
        case 0:
          return "未审";
        case 1:
          return "已审";
        default:
          return "Error"
      }
    },
    fetchTableData() {
      this.loading = true;
      // 1.通过入网编号查用户的项目信息
      wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret => {
        this.loading = false;
        this.projectData = ret.data.records[0];
        this.projectId = this.projectData.xmxxId;
        this.projectStatus = this.projectData.xmxxShzt;
        // 2.通过项目信息的项目id获取楼栋信息
        tjldxmApi.getBuildingInfo2(this.projectId, null, this.currentPage, this.pageSize).then(ret => {
          this.total = ret.data.total
          this.tableData = ret.data.records.map(item => ({
            ...item,
            zszt: this._mapStatusNumToString2(item.ldxxLdjpzt),
            lpzt: this._mapStatusNumToString(item.ldxxShzt),
            yfyjzt: this._mapStatusNumToString(item.ldxxYfyjzt),
            yfyj: this._mapStatusNumToString(item.ldxxYfyjzt),
            fwlx: item.ldxxFwlx ? "现售" : "预售"
          }));
        })
      })
    },
    handleDetail(mode, item) {
      this.dialogVisible = true;
      this.dialogTitle = "查看一房一价";
      this.mode = mode;
      this.$nextTick(() => {
        this.$refs.dialog.initRoomStructure(item.ldxxId);
      })
    },
    submit(item) {
      yfyjApi.housePriceSubmit(item.ldxxId).then(ret => {
        if (ret.code === 200) {
          this.$message.success(ret.message)
          this.fetchTableData()
        } else {
          this.$message.error(ret.message)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>