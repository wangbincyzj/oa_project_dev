<template>
  <TitleTable title="审核上报">
    <el-table
      class="myTable-p0"
      size="mini"
      v-loading="loading"
      :data="tableData">
      <el-table-column
        prop="ldxxMc"
        align="center"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="ldxxLdbh"
        align="center"
        width="60"
        label="楼栋编号">
      </el-table-column>
      <el-table-column
        prop="ldxxJzmj"
        align="center"
        width="60"
        label="建筑面积">
      </el-table-column>
      <el-table-column
        prop="ldxxKsmj"
        align="center"
        width="60"
        label="可售面积">
      </el-table-column>
      <el-table-column
        prop="bksmj"
        align="center"
        width="60"
        label="不可售面积">
      </el-table-column>
      <el-table-column
        label="住宅"
        align="center"
      >
        <el-table-column
          prop="ldxxZzmj"
          align="center"
          width="60"
          label="面积">
        </el-table-column>
        <el-table-column
          prop="ldxxZzts"
          align="center"
          width="60"
          label="套数">
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="非住宅">
        <el-table-column
          prop="ldxxFzzmj"
          align="center"
          width="60"
          label="面积">
        </el-table-column>
        <el-table-column
          prop="ldxxFzzts"
          align="center"
          width="60"
          label="套数">
        </el-table-column>
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
        width="60"
        label="一梯几户">
      </el-table-column>
      <el-table-column
        prop="fwlx"
        align="center"
        width="60"
        label="房屋类型">
      </el-table-column>
      <el-table-column
        align="center"
        label="审核状态">
        <el-table-column
          prop="zszt"
          align="center"
          width="60"
          label="自审状态">
        </el-table-column>
        <el-table-column
          prop="lpzt"
          align="center"
          width="60"
          label="楼盘状态">
        </el-table-column>
        <el-table-column
          prop="yfyj"
          align="center"
          width="60"
          label="一房一价">
        </el-table-column>
        <el-table-column
          prop="ldxxZjjgszzt"
          align="center"
          width="60"
          label="预售资金">
          <template #default="{row}">
            {{row.ldxxZjjgszzt? "√": "×"}}
          </template>
        </el-table-column>
        <el-table-column
          prop="ldxxBzszzt"
          align="center"
          width="60"
          label="维修资金">
          <template #default="{row}">
            {{row.ldxxBzszzt? "√": "×"}}
          </template>
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="操作"
        width="250"
        align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)">楼盘表
          </el-button>
          <el-button
            size="mini"
            @click="handleBuildingDetail(scope.$index, scope.row)">详情
          </el-button>
          <el-button
            size="mini"
            :disabled="!scope.row.ldxxLdjpzt"
            v-if="scope.row.ldxxShzt===0||scope.row.ldxxShzt===3"
            @click="handleCheck(scope.$index, scope.row)">上报审核
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
      <LpsbshDialog
        :mode="mode"
        ref="dialog"
        :projectId="projectId"
      />
    </el-dialog>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import {mixins} from "@/utils/mixins";
  import LpsbshDialog from "@/views/menu_2/LpsbshDialog";
  import {lpInfoApi} from "@/api/menu_2/lpInfo";

  export default {
    name: "Lpsbsh",
    mixins: [mixins.dialogMixin],
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
    components: {LpsbshDialog, TitleTable},
    created() {
      this.fetchData()
    },
    methods: {
      _mapStatusNumToString(_num) {
        switch (_num) {
          case 0:
            return "未提交";
          case 1:
            return "审核中";
          case 2:
            return "√";
          case 3:
            return "撤回";
          default:
            return "Error"
        }
      },
      _mapStatusNumToString2(_num) {
        switch (_num) {
          case 0:
            return "未自审";
          case 1:
            return "√";
          default:
            return "Error"
        }
      },
      fetchData() {
        this.loading = true;
        // 1.通过入网编号查用户的项目信息
        wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret => {
          this.loading = false;
          this.projectData = ret.data.records[0];
          this.projectId = this.projectData.xmxxId;
          this.projectStatus = this.projectData.xmxxShzt;
          // 2.通过项目信息的项目id获取楼栋信息
          tjldxmApi.getBuildingInfo(this.projectId).then(ret => {
            this.tableData = ret.data.map(item => ({
              ...item,
              zszt: this._mapStatusNumToString2(item.ldxxLdjpzt),
              lpzt: this._mapStatusNumToString(item.ldxxShzt),
              yfyj: this._mapStatusNumToString(item.ldxxYfyjzt),
              fwlx: item.ldxxFwlx ? "现售" : "预售"
            }));
          })
        })
      },
      handleDetail(index, item) {
        this.dialogVisible = true;
        this.dialogTitle = "楼盘图例";
        this.mode = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.initRoomStructure(item.ldxxId);
        })
      },
      handleBuildingDetail(index, item){
        this.dialogVisible = true;
        this.dialogTitle = "楼盘图例";
        this.mode = 2;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchData(item.ldxxId);
        })
      },
      handleCheck(index, item){
        this.$confirm('确定提交审核吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          lpInfoApi.submitForReview(item.ldxxId).then(ret=>{
            if(ret.code===200){
              this.$message.success("提交审核成功");
              this.fetchData();
            }else{
              this.$message.error(ret.message)
            }
          })
        })
      }
    }
  }
</script>

<style scoped>

</style>