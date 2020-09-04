<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第一条-第三条</div>
    <div class="bd">

      <!--第一条-->
      <div class="item">
        <h4 class="title">第一条 项目建设依据</h4>
        <ul>
          <li>出卖人以 <input class="w100" type="text"> 方式取得位于 <input class="w400" type="text"> 、编号为 <input class="w200" type="text"> 的地块的土地使用权。【土地使用权出让合同号】为
            <input class="w200" type="text">
            。该块土地面积为 <input class="w100" type="text"> 平方米 规划用途为 <input class="w100" type="text"> 。土地使用年限
            <input v-model="htTdsynxks" class="w200" type="text">
            至
            <input v-model="htTdsynxjs" class="w200" type="text">;
          </li>
          <li>
            出卖人经批准，在上述地块上建设商品房， 【√现定名】【暂定名】    <input class="w200" type="text"> 。 建设工程规划许可证号为  <input class="w200" type="text"> ， 施工许可证号  <input class="w200" type="text"> 。
          </li>
          <li>
            其他情况说明 <br>
            <el-input v-model="htXmjssm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第二条-->
      <div class="item">
        <h4 class="title">第二条 商品房销售依据</h4>
        <ul>
          <li>
            买受人购买商品房为
            <select v-model="htFwxszt">
              <option value="【预售商品房】">【预售商品房】</option>
              <option value="【现房】">【现房】</option>
            </select>
            。预售商品房批准机关为 <input class="w300" type="text"> 。商品房预售许可证编号为 <input class="w200" type="text">。
          </li>
          <li>
            <el-input v-model="htFwxssm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第三条-->
      <div class="item">
        <h4 class="title">第三条 买受人所购商品房的基本情况</h4>
        <ul>
          <li>
            买受人购买的商品房（以下简称该商品房，其房屋平面图见合同附件一，房号以附件一上表示为准）为本合同第一条规定项目中的：

            　　第
            <input v-model="htDh" class="w100" type="text">
            幢
            <input v-model="htFh" class="w100" type="text">
            号房，所在层 <input class="w100" type="text"> 。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No1",
  data() {
    return {
      //第一条
      htTdsynxks: "",
      htTdsynxjs: "",
      htXmjssm: "",
      //第二条
      htFwxszt: "",
      htFwxssm: "",
      //第三条
      htDh: "",
      htFh: "",

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