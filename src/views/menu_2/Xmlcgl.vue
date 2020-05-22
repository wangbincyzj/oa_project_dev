<template>
  <div class="xmlcgl">
    <el-steps class="steps" :active="3" simple>
      <el-step
        v-for="(step,index) in stepsInfo"
        :title="step.title"
        :icon="step.icon"
        :style="{cursor: 'pointer'}"
        @click.native="handleStepChange(index)"
      ></el-step>
    </el-steps>
    <div class="container">
      <component :is="childName" v-if="childName"/>
    </div>
  </div>
</template>

<script>
  import Wsfcxm from "@/views/menu_2/Wsfcxm";
  import Tjxmld from "@/views/menu_2/Tjxmld";
  import Tjhsfj from "@/views/menu_2/Tjhsfj";
  import Lpzsjp from "@/views/menu_2/Lpzsjp";
  import Lpsbsh from "@/views/menu_2/Lpsbsh";
  export default {
    name: "Xmlcgl",
    components: {Wsfcxm,Tjxmld,Tjhsfj,Lpzsjp, Lpsbsh},
    data() {
      return {
        childName: null,
        stepsInfo:[
          {title: "完善房产项目", icon:"el-icon-edit", component: "Wsfcxm"},
          {title: "添加项目楼栋", icon:"el-icon-office-building", component: "Tjxmld"},
          {title: "添加户室房间", icon:"el-icon-s-home", component: "Tjhsfj"},
          {title: "楼盘自审结盘", icon:"el-icon-notebook-2", component: "Lpzsjp"},
          {title: "楼盘上报审核", icon:"el-icon-thumb", component: "Lpsbsh"},
        ]
      }
    },
    methods: {
      handleStepChange(index){
        console.log(index);
        this.childName = this.stepsInfo[index].component
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .xmlcgl{
    height: 100%;
    .steps{
      height: 46px;
    }
    .container{
      margin: $ps;
      height: calc(100% - 66px);
      box-shadow: $box-shadow;
    }
  }
</style>