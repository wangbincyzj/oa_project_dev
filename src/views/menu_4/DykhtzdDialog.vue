<template>
  <div>
    <div class="detail myForm-mb5 myDialog"  v-loading="loading">
      <!--详情部分-->
      <!-- <h3 class="title">第一部分  项目信息</h3> -->
      <!--//模式,0详情 1,修改-->
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form">
        <el-form-item  label="项目名称" >
          <el-input v-model="form.zjjgzhXmmc"></el-input>
        </el-form-item>
        <el-form-item  label="项目编号">
          <el-input v-model="form.xmxxXmbh"></el-input>
        </el-form-item>
        <el-form-item label="企业名称">
          <el-input v-model="form.zjjgzhGsmc"></el-input>
        </el-form-item>
        <el-form-item label="联系电话">
          <el-input v-model="form.zjjgzhLxdh"></el-input>
        </el-form-item>
        <el-form-item label="住宅面积" class="area">
          <el-input v-model="form.zjjgzhZzmj"></el-input>
        </el-form-item>
        <el-form-item label="住宅套数">
          <el-input v-model="form.zjjgzhZzts"></el-input>
        </el-form-item>
        <el-form-item label="非住宅面积" class="area">
          <el-input v-model="form.zjjgzhFzzmj"></el-input>
        </el-form-item>
        <el-form-item label="非住宅套数">
          <el-input v-model="form.zjjgzhFzzts"></el-input>
        </el-form-item>
        <el-form-item label="拟设监管银行" >
          <el-input v-model="form.zjjgzhYhmc"></el-input>
        </el-form-item>
        <el-form-item label="监管银行ID" >
          <el-input v-model="form.zjjgzhYhid"></el-input>
        </el-form-item>
        <el-form-item label="楼栋名称">
          <el-input v-model="form.zjjgzhLdmc"></el-input>
        </el-form-item>
        <el-form-item label="监管账户名称">
          <el-input v-model="form.zjjgzhZhmc"></el-input>
        </el-form-item>       
      </el-form>
      <h3 class="title">收件情况</h3>
       <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            label="序号"
            prop="id">
          </el-table-column>
          <el-table-column
            label="收件名称"
            prop="companyName">
          </el-table-column>
          <el-table-column
            label="收件性质"
            prop="bank">
          </el-table-column>
          <el-table-column
            label="份数"
            prop="jgzhName">
          </el-table-column>
       </el-table>
          <h3 class="title">显示收件图片</h3> 
      <el-form
        label-position="right"
        label-width="150px"
        size="mini"
        inline
        :model="form1">
        <!-- 0添加 1编辑 2查看-->
        <el-form-item  label="初审意见" >
          <el-input v-model="form1.xmxxXmmmlx" style="width:520px"></el-input>
        </el-form-item>
        <el-form-item  label="初审人">
          <el-input v-model="form1.xmxxXmmc"></el-input>
        </el-form-item>
        <el-form-item label="初审时间">
          <el-input v-model="form1.xmxxKfs"></el-input>
        </el-form-item>
        <el-form-item label="复审意见">
          <el-input v-model="form1.xmxxXmh" style="width:520px"></el-input>
        </el-form-item>
        <el-form-item label="复审人" >
          <el-input v-model="form1.xmxxXmfzr"></el-input>
        </el-form-item>
        <el-form-item label="复审时间">
          <el-input v-model="form1.xmxxXsdh"></el-input>
        </el-form-item>
        <el-form-item label="监管编号">
          <el-input v-model="form1.kfsYyzh"></el-input>
        </el-form-item>
        <el-form-item label="缮证时间">
          <el-input v-model="form.xmxxJtzl"></el-input>
        </el-form-item>
        <el-form-item label="开户网点" >
          <el-input v-model="form1.xmxxZydmj"></el-input>
        </el-form-item>
        <el-form-item label="网点地址" >
          <el-input v-model="form1.xmxxZzjmj"></el-input>
        </el-form-item>
        <el-form-item label="监管账户">
          <el-input v-model="form1.xmxxGhxkmj"></el-input>
        </el-form-item>
        <el-form-item label="开户日期">
          <el-input v-model="form1.xmxxGhxkds"></el-input>
        </el-form-item>     
         <el-form-item label="监管账户名称">
          <el-input v-model="form1.xmxxhxkds"></el-input>
        </el-form-item>   
      </el-form>
      <!-- <CenterButton v-if="editMode===1" @btnClick="handleUpdate" title="保存"/> -->
    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {sqjgzhApi} from "@/api/menu_4/sqjgzh";
  export default {
    name: "DykhtzdDialog",
    components: {CenterButton},
    props:{
     dialog:{
        default: 1 //模式,0详情 1,修改
      },
      zjjgzhId:{type:Number},
    },
    data() {
      return {
        form:{},
        form1:{},
        tableData:{},
        loading: false
      }
    },
    methods:{
      reset() {
        this.form = {};
      },
      fetchDetail(id) {
       
        sqjgzhApi.getAccountInfoById(id).then(ret => {
         //console.log(ret);
          this.form=ret.data.supervisedAccount;
        })
      },
     setMode(mode, id) {
     if (mode === 2) {
       this.fetchDetail(id);
      }
    }
    }
  }
</script>

<style scoped lang="scss">
  .title{
    font-weight: 600;
    line-height: 2;
    background-color: rgba(170, 170, 170, 0.18);
    margin-bottom: 20px;
    padding-left: 50px;
    font-size: 18px;
    margin-top: 20px;
  }
 .area{
    position: relative;
    &::after{
      content: "M²";
      display: block;
      position: absolute;
      right: -20px;
    //   color: red;
      font-size: 14px;
      top: 6px;
    }
    }
  .count{
    position: relative;
    &::after{
      content: "(万元)";
      display: block;
      position: absolute;
      right: -32px;
      color: red;
      font-size: 12px;
      top: 8px;
    }
  }
</style>