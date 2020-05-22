<template>
  <TitleTable title="审核上报">
    <el-table
      style="width: 100%"
      :data="tableData">
      <el-table-column
        prop="date"
        align="center"
        width="80"
        label="楼栋名称">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="80"
        label="楼栋编号">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="80"
        label="建筑面积">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="80"
        label="可售面积">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="90"
        label="不可售面积">
      </el-table-column>
      <el-table-column
        label="住宅"
        align="center"
      >
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="面积">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="套数">
        </el-table-column>
      </el-table-column>
      <el-table-column
        align="center"
        label="非住宅">
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="面积">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="套数">
        </el-table-column>
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="60"
        label="总层数">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="60"
        label="单元数">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="80"
        label="一梯几户">
      </el-table-column>
      <el-table-column
        prop="date"
        align="center"
        width="100"
        label="房屋类型">
      </el-table-column>
      <el-table-column
        align="center"
        label="审核类型">
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="楼盘结盘">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="一房一价">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="预售资金">
        </el-table-column>
        <el-table-column
          prop="date"
          align="center"
          width="80"
          label="维修资金">
        </el-table-column>
      </el-table-column>
      <el-table-column
        label="操作"
        align="center">
        <template slot-scope="scope">
          <el-button
            size="mini"
            @click="handleDetail(scope.$index, scope.row)">查看楼盘表
          </el-button>
          <el-button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">楼栋详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </TitleTable>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";

  export default {
    name: "Lpsbsh",
    data() {
      return {
        tableData: [{}],
        projectData: null,
        projectId: null,
        projectStatus: null,
      }
    },
    components: {TitleTable},
    methods:{
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
    }
  }
</script>

<style scoped>

</style>