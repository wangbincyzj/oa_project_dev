<template>
  <div>
    <TitleTable title="合同模板管理">
      <el-table
        v-loading="loading"
        style="width: 100%"
        :data="tableData">
        <el-table-column label="模板ID" align="center" prop="htId" width="150"/>
        <el-table-column label="模板名称" align="center" prop="htMc" width="400"/>
        <el-table-column label="楼栋名称" align="center" prop="htLdmc" width="150"/>
        <el-table-column label="添加时间" align="center" prop="htAddtime" width="150"/>
        <el-table-column label="状态" align="center"  v-slot="scope">
          {{scope.row.htShzt|shztFilter}}
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="{row}">
            <template v-if="row.htShzt===0||row.htShzt===3">
              <el-button @click="handleUpdate(row)" size="mini">修改</el-button>
              <el-button @click="handleSubmit(row)" type="primary" size="mini">上报</el-button>
              <el-button @click="handleDelete(row)" type="danger" size="mini">删除</el-button>
            </template>
            <el-button @click="print(row)" type="info" size="mini">打印合同模板</el-button>
          </template>
        </el-table-column>
      </el-table>
    </TitleTable>
    <div class="forUpdate" v-show="updateView">  <!--更新时候直接fixed铺满-->
      <Tjysmb
        ref="ref"
        title="修改合同模板"
        :update-mode="true"
        @cancel="updateView=false"
        @submitSuccess="submitSuccess"
      />
    </div>
  </div>
</template>

<script>
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {mixins} from "@/utils/mixins";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import GlysmbDialog from "@/views/menu_3/GlysmbDialog";
  import Tjysmb from "@/views/menu_3/Tjysmb";
  export default {
    name: "Glysmb",
    components: {Tjysmb, GlysmbDialog, TitleTable},
    mixins: [mixins.dialogMixin],
    data() {
      return {
        loading: false,
        tableData: [],
        updateView: false
      }
    },
    created() {
      this.fetchTableData()
    },
    methods:{
      fetchTableData() {
        this.loading = true
        yushouContractApi.getContractTemplate({htXslx:0,kfsRwbh:this.$store.state.rwbh}).then(ret=>{
          this.loading = false
          this.tableData = ret.data.records
        })
      },
      handleSubmit(item){
        this.$confirm('确认上报吗?上报后无法修改', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          yushouContractApi.submitContractTemplate(item.htId).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功")
              this.fetchTableData()
            }else{
              this.$message.error(ret.message||"未知错误")
            }
          })
        })
      },
      handleUpdate(item){
        this.updateView = true;
        this.$refs.ref.getFormFromId(item.htId)
      },
      submitSuccess() {
        this.updateView = false;
        this.fetchTableData()
      },
      handleDelete(item) {
        this.$confirm('确认删除', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          yushouContractApi.delContractTemplate(item.htId).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功")
              this.fetchTableData()
            }else{
              this.$message.error(ret.message||"未知错误")
            }
          })
        })
      },
      print(item) {
        window.open(`/#/printView/yshtmb?id=${item.htId}`,)
      }
    }
  }
</script>

<style scoped lang="scss">
  .forUpdate{
    position: fixed;
    z-index: 99;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: white;
    overflow-y: auto;
  }
</style>