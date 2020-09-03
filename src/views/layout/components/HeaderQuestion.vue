<template>
  <div class="headerQuestion">
    <TitleTable title="答疑">
      <template #addButton>
        <el-button size="mini" type="primary" @click="addQuestion">提问</el-button>
      </template>
      <el-table :data="tableData" size="mini">
        <el-table-column label="标题" prop="ywbdTitle"/>
        <el-table-column label="提问时间" prop="ywbdCjsj" align="center" width="200"/>
        <el-table-column label="查看状态" prop="ywbdCkzt" align="center" width="80">
          <template #default="{row}">{{row.ywbdCkzt?"已查看":'暂未'}}</template>
        </el-table-column>
        <el-table-column label="回复状态" prop="ywbdHfzt" align="center" width="80">
          <template #default="{row}">{{row.ywbdHfzt?"已回复":'暂未'}}</template>
        </el-table-column>
        <el-table-column label="操作" prop="" width="100" align="center">
          <template #default="{row}">
            <el-button size="mini" type="primary" @click="handleDetail(row)">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>
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
      <template #dialog>

          <el-dialog append-to-body width="800px" :visible.sync="dialogVisible" :title="dialogTitle" center>
            <template v-if="mode===1">
              <el-form label-width="60px" label-position="right">
                <el-form-item label="标题">
                  <el-row>
                    <el-col :span="18"><el-input size="mini" v-model="form.ywbdTitle"/>
                    </el-col>
                  </el-row>
                </el-form-item>
                <el-form-item label="内容">
                  <el-input type="textarea" size="mini" :rows="4" v-model="form.ywbdNr"/>
                </el-form-item>
              </el-form>
              <ConfirmBtn @click="handleAdd"/>
            </template>
            <template v-if="mode===2">
              <InfoListContainer :data="selectData" :row-count="1">
                <InfoListItem title="标题" prop="ywbdTitle"/>
                <InfoListItem title="内容" prop="ywbdNr"/>
                <InfoListItem title="提问人" prop="ywbdCjr"/>
                <InfoListItem title="提问时间" prop="ywbdCjsj"/>
              </InfoListContainer>
              <el-divider/>
              <InfoListContainer :data="selectData" :row-count="1">
                <InfoListItem title="回复人" prop="ywbdHfr"/>
                <InfoListItem title="回复内容" prop="ywbdHfnr"/>
                <InfoListItem title="回复时间" prop="ywbdHfsj"/>
              </InfoListContainer>
            </template>
          </el-dialog>
        </template>

    </TitleTable>
  </div>
</template>

<script>
import TitleTable from "@/components/current/titleTable/TitleTable";
import {homeApi} from "@/api/menu_1/home";
import {mixins} from "@/utils/mixins";
import ConfirmBtn from "@/components/uiComponent/confirmBtn/ConfirmBtn";
import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
import InfoListContainer from "@/components/uiComponent/infoList/InfoListContainer";
import InfoListItem from "@/components/uiComponent/infoList/InfoListItem";
export default {
  name: "HeaderQuestion",
  mixins: [mixins.dialogMixin, mixins.myPagerMixin],
  components: {InfoListItem, InfoListContainer, InfoListPlusItem, InfoListPlus, ConfirmBtn, TitleTable},
  data() {
    return {
      tableData: [],
      form:{
        ywbdTitle: "",
        ywbdNr: ""
      },
      mode:0,
      selectData:{}
    }
  },
  created() {
    this.fetchTableData()
  },
  methods:{
    fetchTableData() {
      homeApi.questionsGetAll(this.currentPage, this.pageSize).then(ret=>{
        this.total = ret.data.total
        this.tableData = ret.data.records
      })
    },
    addQuestion() {
      this.dialogVisible = true
      this.mode=1
      this.dialogTitle = "添加提问"
    },
    handleAdd() {
      if(!this.form.ywbdTitle||!this.form.ywbdNr){
        this.$message.error("请输入正确的内容")
        return
      }
      homeApi.questionsPost(this.form).then(ret=>{
        if(ret.code===200){
          this.$message.success("提问成功")
          this.fetchTableData()
          this.dialogVisible = false
        }
      })
    },
    handleDetail(item){
      this.selectData = item;
      this.dialogVisible = true
      this.dialogTitle = "问题详情"
      this.mode=2
    }
  }
}
</script>

<style scoped lang="scss">
.headerQuestion{
  height: 100%;
}
</style>