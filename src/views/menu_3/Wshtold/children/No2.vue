<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第三条——第四条</div>
    <div class="bd">

      <!--第三条-->
      <div class="item">
        <h4 class="title">第三条 商品房基本情况</h4>
        <ul>
          <li>
            该商品房的用途为 <input class="w100" type="text"> ，属 <input class="w100" type="text"> 结构 层高为 <input class="w100" type="text"> （米），建筑层数地上 <input class="w100" type="text"> 层，地下 <input class="w100" type="text"> 层。 该商品房封面阳台为 <input class="w100" type="text"> 个，面积为 <input class="w100" type="text"> 平方米；非封闭阳台为 <input class="w100" type="text"> 个，面积为  <input class="w100" type="text"> 平方米。
          </li>
          <li>
            该商品房
            <select v-model="htMjlx">
              <option value="【产权办理】">【产权办理】</option>
              <option value="【合同约定】">【合同约定】</option>
            </select>
            建筑面积共 <input class="w100" type="text"> 平方米，其中，套内建筑面积 <input class="w100" type="text"> 平方米，公共部位与公用房屋分摊建筑面积 <input class="w100" type="text"> 平方米
          </li>
          <li>（有关公共部位与公用房屋分摊建筑面积构成说明见附件二）。</li>
          <li>
            <el-input v-model="htMjsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第四条-->
      <div class="item">
        <h4 class="title">第四条 计价方式与条款</h4>
        <ul>
          <li>
            出卖人与买受人约定合同按
            <select v-model="htJjfs">
              <option value="【建筑面积】" selected="">【建筑面积】</option>
              <option value="【套内建筑面积】">【套内建筑面积】</option>
              <option value="【套（单元）】">【套（单元）】</option>
              <option value="【其它】">【其它】</option>
            </select>
            计算该商品房价款,其中面积：
            <input v-model="htJzmj" class="w100" type="text">
            单价每平方米
            <input v-model="htFwdj" class="w100" type="text">
            元
            该商品房总价款或总金额为（小写
            <input v-model="htFwdjxx" class="w100" type="text">
            元），（大写）
            <input v-model="htFwzjdx" class="w300" type="text">
            元整，币种为
            <input v-model="htFwgmbz" class="w100" type="text">
            。 </li>
          <li>
            其他计算方式:
            <el-input v-model="htFwgmjjfs" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No2",
  data() {
    return{
      // 第三条
      htMjlx: "",
      htMjsm: "",
      // 第四条
      htJjfs: "",
      htJzmj: "",
      htFwdj: "",
      htFwdjxx: "",
      htFwzjdx: "",
      htFwgmbz: "人民币",
      htFwgmjjfs: "",
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