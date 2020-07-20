import fa from "element-ui/src/locale/lang/fa";

// 全局页面跳转mixin
const routerMixin = {
  methods:{
    go(path) {
      this.$router.push(path)
    }
  }
}


// dialog 父组件的mixin
const dialogMixin = {
  data() {
    return {
      dialogVisible: false,
    }
  },
  methods:{
    dialogReset() {
      if(this.$refs.dialog && this.$refs.dialog.reset){
        this.$refs.dialog.reset()
      }
      this.dialogVisible = false
    },
    closeConfirm() {
      this.$confirm('确定要取消操作吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {  // 点击确定的操作
        this.dialogReset();  // 清除数据
        this.dialogVisible = false  // 关闭对话
      }).catch(() => {  // 点击取消的操作
        //
      });
    }
  }
}


// 配合MyPager的mixin
/*
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
 */
const myPagerMixin = {
  data() {
    return {
      currentPage: 1,
      pageSize: 10,
      total: 1,
    }
  },
  methods:{
    mixinCurrentChange(num) {
      this.currentPage = num;
      if(this.pagerChange){
        this.pagerChange()
      }else{
        if(this.fetchTableData && this.fetchTableData.length===0){
          this.fetchTableData();
        }else{
          throw Error("必须实现pagerChange方法");
        }
      }
    },
    mixinSizeChange(num){
      this.pageSize = num
      if(this.sizeChange){
        this.sizeChange()
      }else{
        if(this.fetchTableData && this.fetchTableData.length===0){
          this.fetchTableData();
        }else{
          throw Error("必须实现sizeChange方法");
        }
      }
    }
  }
}




export const mixins = {
  routerMixin,
  dialogMixin,
  myPagerMixin
}