<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第十三条-第十五条</div>
    <div class="bd">
      <!--第十三条-->
      <div class="item">
        <h4 class="title">第十三条 出卖人关于装饰，设备标准承诺的违约责任。</h4>
        <ul>
          <li>
            出卖人交付使用的商品房的装饰、设备标准应符合双方约定（附件三）的标准。达不到约定标准的，买受人有权要求出卖人按照下述的
            <input v-model="htZswyfs" class="w100" type="text">
            种方式处理：
          </li>
          <li>
            <ul class="ul2">
              <li>1.  出卖人赔偿双倍的装饰，设备差价。</li>
              <li>2.<el-input v-model="htZswyfs2" type="textarea" style="padding: 0 30px" :rows="4"/></li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第十四条-->
      <div class="item">
        <h4 class="title">第十四条 出卖人关于基础设施、公共配套建筑正常运行的承诺。</h4>
        <ul>
          <li>
            出卖人承诺与该商品房正常使用直接关联的下列基础设施、公共配套建筑按以下日期达到使用条件：
            <el-input v-model="htJzwjcsscr" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
          <li>
            如果在规定日期内未到达使用条件，双方同意按以下方式处理：
            <el-input v-model="htZhyqclsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第十五条-->
      <div class="item">
        <h4 class="title">第十五条 关于房屋预告办理的约定</h4>
        <ul>
          <li>房屋预告办理双方同意按下列第
            <input v-model="htYgdj1" class="w100" type="text">
            项处理:</li>
          <li>1.预购商品房未设定抵押的，可由
            <input v-model="htYgdj2" class="w200" type="text">
            申请房屋预告办理。</li>
          <li>
            2.预购商品房设定抵押的，须自商品房买卖合同办理备案之日起
            <input v-model="htYgdj3" class="w100" type="text">
            日内，由
            <input v-model="htYgdj4" class="w100" type="text">
            申请房屋预告办理。
          </li>
        </ul>
      </div>

      <!--第十六条-->
      <div class="item">
        <h4 class="title">第十六条 关于产权办理的约定</h4>
        <ul>
          <li>
            出卖人应当在商品房交付使用后
            <input v-model="htBzrq" class="w100" type="text">
            日内，将办理权属（包括契税证、房屋所有权证和土地使用权证）办理需由出卖人提供的资料报产权办理机关备案。如因出卖人的责任，买受人不能在规定期限内取得房地产权属证书的，双方同意按下列的
            <input v-model="htWdzclfs" class="w100" type="text">
            项处理：
          </li>
          <li>
            <ul class="ul2">
              <li>1.
                买受人退房，出卖人在买受人提出退房要求之日起
                <input v-model="htWdztkts" class="w100" type="text">
                日内将买受人已付房价款退还给买受人，并按已付房价款的
                <input v-model="htWdzpcbl" class="w100" type="text">
                %赔偿买受人损失。 </li>
              <li>
                2.买受人不退房，出卖人按已付房价款的<input v-model="htWdzpcbl2" class="w100" type="text">
                %向买受人支付违约金。
              </li>
              <li>
                3.
                <el-input v-model="htCqdjsm" type="textarea" style="padding: 0 30px" :rows="4"/>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No7",
  data() {
    return {
      // 十三条
      htZswyfs: "",
      htZswyfs2: "",
      // 十四条
      htJzwjcsscr: "",
      htZhyqclsm: "",
      // 十五条
      htYgdj1: "",
      htYgdj2: "",
      htYgdj3: "",
      htYgdj4: "",
      // 十六条
      htBzrq: "",
      htWdzclfs: "",
      htWdztkts: "",
      htWdzpcbl: "",
      htWdzpcbl2: "",
      htCqdjsm: "",
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