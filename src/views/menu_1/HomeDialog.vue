<template>
  <div class="dialog" v-loading="loading">
    <!--新闻详情-->
    <template v-if="mode===0">
      <div class="infos">
        <div class="infos-item timeArea">
          <i class="el-icon-time"/>
          <span class="time">{{newsDetail.tzggFbsj}}</span>
        </div>
        <div class="infos-item pubArea">
          <i class="el-icon-user"/>
          <span class="person">{{newsDetail.tzggCjr}}</span>
        </div>
      </div>
      <div class="content formContainer">{{newsDetail.tzggNr}}</div>
      <ConfirmBtn title="确认" @click="handleConfirm"/>
    </template>
  </div>
</template>

<script>
import {homeApi} from "@/api/menu_1/home";
import ConfirmBtn from "@/components/uiComponent/confirmBtn/ConfirmBtn";

export default {
  name: "HomeDialog",
  components: {ConfirmBtn},
  data() {
    return {
      loading: false,
      mode: 0,
      newsId: "",
      newsDetail:{}
    }
  },
  methods:{
    setMode(mode, ...args) {
      this.mode = mode;
      if(mode===0){
        this.newsId = args[0]
        this.fetchNewsDetail()
      }
    },
    fetchNewsDetail() {
      this.loading = true
      homeApi.newsGet(this.newsId).then(ret=>{
        this.newsDetail = ret.data
      }).finally(() => this.loading = false)
    },
    handleConfirm() {
      if(!this.newsDetail.confirmStatus){
        this.loading = true
        homeApi.newsConfirm(this.newsId).then(ret=>{
          if(ret.code===200){
            this.$message.success("确认成功")
            this.$refresh()
          }
        }).finally(() => this.loading = false)
      }else{
        this.$emit("close")
      }
    }
  }
}
</script>

<style scoped lang="scss">
.dialog{
  .infos{
    display: flex;
    justify-content: center;
    .infos-item{
      margin: 0 10px;
      i{
        margin-right: 2px;
      }
    }
  }
  .content{
    margin-top: 5px;
    padding: 10px;
    text-indent: 2em;
  }
}
</style>