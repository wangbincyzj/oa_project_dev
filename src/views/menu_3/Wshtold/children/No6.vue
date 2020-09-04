<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第十条-第十二条</div>
    <div class="bd">

      <!--第十条-->
      <div class="item">
        <h4 class="title">第十条 规划、设计变更的约定。</h4>
        <ul>
          <li>经规划部门批准的规划变更、设计单位同意的设计变更导致下列影响到买受人所购商品房质量或使用功能的，出卖人应当在有关部门批准同意之日起10日内，书面通知买受人；</li>
          <li>（1）该商品房结构形式户型、空间尺寸、朝向；</li>
          <li>
            <el-input v-model="htSjghsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
          <li>买受人有权在通知到达之日15日内作出书面答复。买受人在通知到达之日起15日内未作出书面答复的，视同接受变更。出卖人未在规定时限内通知买受人的，买受人有权退房。</li>
          <li>
            买受人退房的，出卖人必须在买受人提出退房要求之日起
            <input v-model="htTfts" class="w100" type="text">
            天内将买受人已付款退还给买受人，并按
            <input v-model="htTfyhlx" class="w200" type="text">
            利率付给利息。买受人不退房的，应当与出卖人另行签订补充协议。
          </li>
          <li>
            <el-input v-model="htFwsjbgsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第十一条-->
      <div class="item">
        <h4 class="title">第十一条 交接</h4>
        <ul>
          <li>
            商品房到达交付使用条件后，出卖人应当书面通知买受人办理交付手续。双方进行验收交接时，出卖人应当出示本合同第八条规定的证明文件，并签署房屋交接单。所购商品房为住宅的，出卖人还需提供《住宅质量保证书》和《住宅使用说明书》。出卖人不出示证明文件或出示证明文件不齐全，买受人有权拒绝交接，由此产生的延期交房责任由出卖人承担。</li>
          <li>由于买受人原因，未能按期交付的，双方同意按以下方式处理：</li>
          <li>
            <el-input v-model="htFwjfsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--第十二条-->
      <div class="item">
        <h4 class="title">第十二条 </h4>
        <ul>
          <li>出卖人保证销售的商品房没有产权纠纷和债权债务纠纷。因出卖人原因，造成该商品房不能办理产权办理或发生债权债务纠纷的，由出卖人承担全部责任。</li>
          <li>
            <el-input v-model="htJfclsm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No6",
  data() {
    return {
      // 第十条
      htSjghsm: "",
      htTfts: "",
      htTfyhlx: "",
      htFwsjbgsm: "",
      // 十一条
      htFwjfsm: "",
      // 十二条
      htJfclsm: "",
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