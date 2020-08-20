<template>
  <div class="FwdDjglDialog">
    
      <el-table :data="tableData" style="width: 100%" ref="refTable">
        <el-table-column label="买受人" prop="jiaocunMsrxm" align="center"></el-table-column>
        <el-table-column label="证件号码" prop="jiaocunMsrzjhm" width="180px" align="center"></el-table-column>
        <el-table-column label="栋号" prop="jiaocunLdmc" align="center"></el-table-column>
        <el-table-column label="房号" prop="jiaocunFwbh" align="center"></el-table-column>
        <el-table-column label="面积" prop="fwjzmj" align="center"></el-table-column>
        <el-table-column align="center" label="单价" prop="fwdj"></el-table-column>
        <el-table-column align="center" label="购房总额" prop="gfze"></el-table-column>
        <el-table-column align="center" label="首付金额" prop="sfk"></el-table-column>
        <el-table-column align="center" label="已添加资金" prop="ytjje"></el-table-column>
        <el-table-column align="center" label="未添加资金" prop="wtjje"></el-table-column>
        <el-table-column align="center" label="已监管资金" prop="yjgje"></el-table-column>
        <el-table-column align="center" label="未纳入监管资金" prop="wjgje" width="120px"></el-table-column>
        <el-table-column align="center" label="备案时间" prop="htAddtime"></el-table-column>
        <el-table-column label="操作"  width="100px" align="center">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" @click="handleRelate(scope.$index, scope.row)">选择</el-button>
          </template>
        </el-table-column>
      </el-table>

      <!-- <el-pagination
        background
        layout="prev, pager, next, total"
        @current-change="currentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        :total="total"
      ></el-pagination> -->
      
   
  </div>
</template>

<script>
import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
import TitleTable from "@/components/current/titleTable/TitleTable";
import { mixins } from "@/utils/mixins";
import { djglApi } from "@/api/menu_4/djgl";

export default {
  name: "djgl",
  mixins: [mixins.dialogMixin],
  components: {
    TitleTable,
    ContainerTwoType
    // TjjgzhDialog djId
  },
   props: {
     djId:{type:Number}
   
  },
  data() {
    return {
      tableData: [],
      dialogVisible: false,
      dialogTitle: "",
      dialogType: 1,
      currentPage: 1, //分页
      pageSize: 10,
      total: 0,
      pages: 0,
      Id:"",
      
    };
  },
  created(){
    this.fetchData();
  },
  methods: {
   fetchData(){
      djglApi.getContract(this.$store.state.rwbh,0).then(ret => {
        this.tableData = ret.data;
      });
   },
   handleRelate(index,row){
     console.log(this.Id);
     console.log(row.jiaocunHtbh);
     
     
       this.$confirm('确定要关联该合同吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
           djglApi.relateContract({djId:this.Id,htBh:row.jiaocunHtbh,kfsRwbh:this.$store.state.projectData.kfsRwbh}).then(ret=>{
            if(ret.code===200){
              this.$message.success("操作成功");
                 this.$emit("submitSuccess");
            }else{
              this.$message.error(ret.message||"操作失败")
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '取消操作'
          });
        });
   },
   setMode(mode,id){
     
       this.Id=id;
    
   },
    currentChange(num) {
      this.currentPage = num;
      this.fetchData();
    }
  },
 

};
</script>

<style>
</style>