<template>
  <div class="xssb">
    <InfoListPlus>
      <InfoListPlusItem name="项目名称"></InfoListPlusItem>
      <InfoListPlusItem name="选择楼栋"></InfoListPlusItem>
      <InfoListPlusItem name="住宅面积"></InfoListPlusItem>
      <InfoListPlusItem name="住宅套数"></InfoListPlusItem>
      <InfoListPlusItem name="非住宅面积"></InfoListPlusItem>
      <InfoListPlusItem name="非住宅间数"></InfoListPlusItem>
      <InfoListPlusItem name="现售总面积"></InfoListPlusItem>
      <InfoListPlusItem name="现售间数"></InfoListPlusItem>
    </InfoListPlus>
  </div>
</template>

<script>
import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
export default {
name: "SqxsbaDialog",
  components: {InfoListPlusItem, InfoListPlus},
  methods:{
    setMode(mode, ...args){
      this.mode = mode;

    }
  }
}
</script>

<style scoped>

</style>