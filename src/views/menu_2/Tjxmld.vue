<template>
  <TitleTable title="项目对应楼栋列表">
    <div slot="controls">
      <el-alert
        type="warning"
        center
        :closable="false">
        <div>
          <div v-if="projectData">
            当前项目 【<span style="font-weight: 600; color: red">{{projectData.xmxxXmmc}}</span>】
            项目状态 【<span style="font-weight: 600; color: #1248b3">{{_mapStatusNumToString(projectStatus)}}</span>】
            <el-button size="mini" :disabled="projectStatus!==2" @click="addClick" type="primary">添加</el-button></div>
        </div>
      </el-alert>
      <el-alert
        type="warning"
        center
        :closable="false">
        <div>
          <div style="color: red">注意：上报测绘之前请将施工许可证、规划许可证、土地证扫描上传。</div>
        </div>
      </el-alert>
    </div>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        align="center"
        label="楼栋名称"
        width="200"
        prop="ldxxMc">
      </el-table-column>
      <el-table-column
        label="楼栋编号"
        align="center"
        prop="ldxxLdbh">
      </el-table-column>
      <el-table-column
        label="建筑面积"
        align="center"
        prop="ldxxJzmj">
      </el-table-column>
      <el-table-column
        label="总层数"
        align="center"
        prop="ldxxZgcs">
      </el-table-column>
      <el-table-column
        label="单元数"
        align="center"
        prop="ldxxDys">
      </el-table-column>
      <el-table-column
        label="一梯几户"
        align="center"
        prop="ldxxYtjh">
      </el-table-column>
      <el-table-column
        label="房屋类型"
        align="center"
        prop="fwlx">
      </el-table-column>
      <el-table-column
        label="单元号"
        align="center"
        prop="dyh">
      </el-table-column>
      <el-table-column
        align="center"
        label="操作"
        width="250"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)">详情
          </el-button>

          <template v-if="scope.row.ldxxShzt===0||scope.row.ldxxShzt===3">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">修改
            </el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除
            </el-button>
          </template>
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
      <TjxmldDialog
        ref="dialog"
        :mode="mode"
        :project-id="projectId"
        @submitSuccess="submitSuccess"
      />
    </el-dialog>
  </TitleTable>
</template>

<script>
  import {mixins} from "@/utils/mixins";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import TjxmldDialog from "@/views/menu_2/TjxmldDialog";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";

  export default {
    name: "Tjxmld",
    mixins: [mixins.dialogMixin],
    components: {TjxmldDialog, TitleTable},
    data() {
      return {
        loading: false,
        tableData: [],
        projectData: null,
        projectId: null,
        projectStatus: null,
        mode: 0,
        dialogTitle: ""
      }
    },
    created() {
      this.fetchData()
    },
    methods:{
      _mapStatusNumToString(_num){
        switch (_num) {
          case 0: return "等待提交审核";
          case 1: return "管局审核中";
          case 2: return "审核通过";
          case 3: return "审核撤回,需重新提交审核";
          default: return "状态未知,请联系管理员"
        }
      },
      fetchData() {
        this.loading = true;
        // 1.通过入网编号查用户的项目信息
        wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret=>{
          this.projectData = ret.data.records[0];
          this.projectId = this.projectData.xmxxId;
          this.projectStatus = this.projectData.xmxxShzt;
          // 2.通过项目信息的项目id获取楼栋信息
          tjldxmApi.getBuildingInfo(this.projectId).then(ret=>{
            this.loading = true;
            console.log(ret);
            this.tableData = ret.data.map(item=>({...item,
              fwlx: item.ldxxFwlx === 0 ? "预售商品房" : "现房",
              dyh: item.ldxxDyhzt ? "是" : "否"
            }));
          })
        })
      },
      addClick(){
        this.mode = 0;
        this.dialogVisible = true;
        this.dialogTitle = `添加项目楼栋`
      },
      handleEdit(index, item) {
        console.log(item)
        this.mode = 1;
        this.dialogVisible = true;
        this.dialogTitle = `编辑楼栋(没有值填写0)`;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchData(item.ldxxId)
        })
      },
      handleDetail(index, item){
        // 主键id item.ldxxId
        this.mode = 2;
        this.dialogVisible = true;
        this.dialogTitle = `查看楼栋详情`;
        this.$nextTick(()=>{
          this.$refs.dialog.fetchData(item.ldxxId)
        })
      },
      handleUpdate(index, item) {

      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchData();
      },
      handleDelete(index, item) {
        this.$confirm('确定要删除此楼栋?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          tjldxmApi.delBuilding(item.ldxxId).then(ret=>{
            if(ret.code===200){
              this.$message.success("删除成功");
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