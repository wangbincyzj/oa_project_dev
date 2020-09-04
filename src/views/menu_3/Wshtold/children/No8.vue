<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第十六条-第十八条</div>
    <div class="bd">

      <!--第十七条-->
      <div class="item">
        <h4 class="title">第十七条 保修责任</h4>
        <ul>
          <li>买受人购买的商品房为商品住宅的，《住宅质量保证书》作为合同的附件。出卖人自商品住宅交付使用之日起，按照《住宅质量保证书》承诺的内容承担相应的保修责任。</li>
          <li>买受人购买的商品房为非商品住宅的，双方应当以合同附件的形式详细约定保修范围，保修期限和保修责任等内容。</li>
          <li>在商品房保修范围、保修期限内发生质量问题，出卖人应当履行保修义务。因不可抗力或者非出卖人原因造成的损坏，出卖人不承担责任，但可协助维修，维修费用由购买人承担。</li>
          <li><el-input v-model="htBxsm" type="textarea" style="padding: 0 30px" :rows="4"/></li>
        </ul>
      </div>

      <!--第十八条-->
      <div class="item">
        <h4 class="title">第十八条 双方可以就下列事项约定：</h4>
        <ul>
          <li>1.	 	 该商品所在楼宇的屋面使用权
            <input v-model="htWmsyqsm" class="w400" type="text">
            ； </li>
          <li>2.	 	该商品所在楼宇的外墙面使用权
            <input v-model="htWqsyqsm" class="w400" type="text">
            ； </li>
          <li>
            3.	 	该商品所在楼宇的命名权
            <input v-model="htLdmmsm" class="w400" type="text">
            ；
          </li>
          <li>
            4.	 	该商品所在小区的命名权
            <input v-model="htXqmmqsm" class="w400" type="text">
            ；
          </li>
          <li>
            5.
            <el-input v-model="htQtqlsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第十九条-->
      <div class="item">
        <h4 class="title">第十九条</h4>
        <ul>
          <li>
            买受人的房屋仅作
            <input v-model="htFwsyfsgd" class="w100" type="text">
            使用，买受人使用期间不得擅自改变该商品房的建筑主体结构，承重结构和用途。除本合同及其附件另有规定者外，买受人在使用期间有权和其他权利人共同享用与该商品房有关联的公共部位和设施，并按占地和公共部位与公用房屋分摊面积承担义务。</li>
          <li>
            出卖人不得擅自改变与该商品房有关联的公共部位和设施的使用性质。
          </li>
          <li>
            <el-input v-model="htFwsygdxx" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No8",
  data() {
    return {
      // 十七条
      htBxsm: "",
      // 十八条
      htWmsyqsm: "",
      htWqsyqsm: "",
      htLdmmsm: "",
      htXqmmqsm: "",
      htQtqlsm: "",
      // 十九条
      htFwsyfsgd: "",
      htFwsygdxx: "",
    }
  }
}
</script>

<style scoped lang="scss">
.tjysmbItems {
  font-size: 15px;
  line-height: 1.2em;

  input {
    color: black;
    background: white;
    border: none;
    border-bottom: 1px solid rgba(18, 72, 179, 0.35);
    outline: none;

    &.w50 {
      width: 50px
    }

    &.w100 {
      width: 100px
    }

    &.w200 {
      width: 200px
    }

    &.w300 {
      width: 300px
    }

    &.w400 {
      width: 400px
    }

    &.w500 {
      width: 500px
    }

    &.w800 {
      width: 800px
    }
  }

  .item {
    margin-bottom: 50px;

    .title {
      font-weight: 600;
      color: black;
      line-height: 3em;
    }

    .textarea {
      width: 80%;
      display: block;
      height: 200px;
      font-size: 16px;
      margin: 0 auto;
    }

    ul {
      margin-bottom: 20px;
      margin-top: 10px;
      font-size: 14px;

      li {
        margin-bottom: 22px;
        line-height: 1.5em;
      }
    }

    .ul2 {
      padding-left: 30px;
    }

    p {
      text-indent: 2em;
      margin-bottom: 8px;
    }
  }
}
</style>