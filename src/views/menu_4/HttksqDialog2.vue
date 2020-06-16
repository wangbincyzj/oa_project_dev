<template>
<div class="Account">

<el-table
    :data="tableData"
    
>
      
        <el-table-column
          width="200"
          label="银行名称"
          prop="hbzhKhyh">
        </el-table-column>

        <el-table-column
          label="账户名称"
          width="200"
          prop="hbzhZhmc">
        </el-table-column>

        <el-table-column
          label="划拨账号"
          width="200"
          prop="hbzhZhhm">
        </el-table-column>
        
        <el-table-column
          label="选择"
          align="center">
          
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleSelect(scope.row)">选择
            </el-button>            
          </template> 
        </el-table-column>
      </el-table>
      <el-pagination
            background
            layout="prev, pager, next, total"
            @current-change="currentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :total="total">
          </el-pagination> <!-- -->
</div>
</template>
<script>
import {httksqApi} from "@/api/menu_4/httksq";
export default ({
    name:"account",
    data(){
        return{
            currentPage:1,
            pageSize:5,
            total:0,
            dialogVisible2:true,
            tableData:[
                
            ],
            row:null
        }
    },
    created(){
        this.fetchData();
    },
    methods:{
      
    currentChange(num) {
        this.currentPage = num;
        this.fetchData()
      },
        fetchData(){
            httksqApi.gethbAccountByXmbh(this.currentPage,this.pageSize,this.$store.state.projectData.xmxxXmbh).then(ret=>{
                this.pages=ret.data.pages;
                this.total=ret.data.total;
                this.tableData=ret.data.records.map(item=>({
                 
                    hbzhKhyh:item.hbzhKhyh,
                    hbzhZhmc:item.hbzhZhmc,
                    hbzhZhhm:item.hbzhZhhm,


                }))
            })
        },
                
        handleSelect(row){
          this.row=row;
          
         this.$emit("selected", row);
         
          console.log(row);
          console.log("??????");
        },
       
    },

})
</script>
