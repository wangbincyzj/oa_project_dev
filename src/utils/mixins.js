import fa from "element-ui/src/locale/lang/fa";

// 全局页面跳转mixin
const routerMixin = {
  methods: {
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
      dialogTitle: ""
    }
  },
  methods: {
    dialogReset() {
      this.$refs.dialog.reset();
    },
    closeConfirm() {
      this.$confirm('确定要取消操作吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {  // 点击确定的操作
        this.dialogVisible = false  // 关闭对话
        this.dialogReset();  // 清除数据
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
  layout="prev, pager, next, total"
  @current-change="currentChange"
  :current-page="currentPage"
  :page-size="pageSize"
  :total="total">
</el-pagination>
 */
const myPagerMixin = {
  data() {
    return {
      currentPage: 1,
      pageSize: 20,
      total: 1,
    }
  },
  methods: {
    currentChange(num) {
      if (this.pagerChange) {
        this.pagerChange(num)
      } else {
        throw Error("必须实现pagerChange方法")
      }
    }
  }
}


export const mixins = {
  routerMixin,
  dialogMixin,
  myPagerMixin
}