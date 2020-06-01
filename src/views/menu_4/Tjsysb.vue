<template>
  <div class="sqjgzh">
    <ContainerTwoType
     
      :nav-info="navInfo"
      @liClick="liClick">
    <!-- > :loading="navInfo.loading" -->
      <TitleTable
        title="项目对应楼栋列表">
        
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="楼栋名称"
            prop="id">
          </el-table-column>
          <el-table-column
            label="建筑面积"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="监管总额"
            prop="itemName">
          </el-table-column>
          <el-table-column
            label="使用总额"
            prop="ldName">
          </el-table-column>
          <el-table-column
            label="退款总额"
            prop="phone">
          </el-table-column>
          <el-table-column
            align="center"
            label="剩余总额"
            prop="status">           
          </el-table-column>
          
          <el-table-column
            align="center"
            label="操作"
          >
            <!-- <template slot="header" slot-scope="scope">
              <el-input
                v-model="search"
                size="mini"
                placeholder="输入关键字搜索"/>
            </template> -->
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">更正
              </el-button>
              <el-button
                size="mini"
                type="primary"
                @click="handleDetail(scope.$index, scope.row)">详情
              </el-button>
              <el-button
                size="mini"
                type="warning"
                @click="handleDelete(scope.$index, scope.row)">删除
              </el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-dialog
          :title="dialogTitle"
          center
          width="800px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <TjjgzhDialog
            ref="dialog"
            :dialog-type="dialogType"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import TjjgzhDialog from "@/views/menu_4/TjjgzhDialog";
 
  //import {tjrwyhApi} from "@/api/menu_4/tjrwyh";
  import {mixins} from "@/utils/mixins";

  export default {
    name: "sqjgzh",
    mixins: [mixins.dialogMixin],
    components: {TjjgzhDialog, TitleTable, ContainerTwoType},
    data() {
      return{
        navInfo:{
          loading: false,
          list: [
             { id:1,name:"别问"},
             { id:2,name:"问就是不知道"},
          ]
        },
        tableData: [
        ],
        search: "",
        dialogVisible: false,
        dialogTitle: "",
        dialogType: 0,
        authList: [],
        selectedIndex: 0,
        selectedIndex: null,
      }
    },
    created() {
      this.fetchNavInfo();
    },
    methods:{
      fetchNavInfo() {
        this.navInfo.loading = true;
        // tjrwqyApi.getAccessEnterprisesByPage(1, 50).then(ret=>{
        //   this.navInfo.loading = false;
        //   this.navInfo.list = ret.data.records.map(item=>({
        //     ...item, id: item.rwqyxxId, name: item.rwqyxxTitle
        //   }));
         this.navInfo.list.unshift({id:0, name: "请选择项目名称"})
        // })
      },
      // fetchTableData
     
      liClick(index) {
        this.selectedIndex = index;
        if(index===0)return;
        // this.selectedIndex = this.navInfo.list[index];
        // this.getAccessEnterprisesInfo(this.navInfo.list[index].id)
      },
      
      addClick() {
        this.dialogVisible = true;
        this.dialogTitle = "添加监管账户";
        this.dialogType = 0;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(1)
        })
      },
      handleEdit(index, row){
        this.dialogVisible = true;
        this.dialogTitle = "修改";
        this.dialogType = 1;
        this.$nextTick(()=>{
          this.$refs.dialog.setMode(2, row.Id);
          //this.$refs.dialog.reset();
        })
      },
      submitSuccess() {
         this.$nextTick(()=>{
                //this.$refs.dialog.reset();
            });
        this.dialogVisible = false;
      },
      handleDelete(flag, row){
        console.log(flag, row)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .tjrwry{
    padding: $pm;
  }

</style>
