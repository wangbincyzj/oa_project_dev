<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第十九条-第二十四条</div>
    <div class="bd">
      <!--第二十条-->
      <div class="item">
        <h4 class="title">第二十条</h4>
        <ul>
          <li>本合同在履行过程中发生的争议，由双方当事人协商解决；协商不成的，按下述第
            <input v-model="htZcfs" class="w100" type="text">
            种。
          </li>
          <li>
            1、提交
            <input v-model="htZcdf" class="w200" type="text">
            仲裁委员会仲裁。
          </li>
          <li>
            2、依法向人民法院上诉。
          </li>
        </ul>
      </div>

      <!--第二十一条-->
      <div class="item">
        <h4 class="title">第二十一条</h4>
        <ul>
          <li>本合同未尽事项，可由双方约定后签订补充协议（附件四）。</li>
        </ul>
      </div>

      <!--第二十二条-->
      <div class="item">
        <h4 class="title">第二十二条</h4>
        <ul>
          <li>合同附件与本合同具有同等法律效力。本合同及其附件内，空格部分填写的文字与印刷文字具有等同效力。</li>
        </ul>
      </div>

      <!--第二十三条-->
      <div class="item">
        <h4 class="title">第二十三条</h4>
        <ul>
          <li>本合同连同附件共一式
            <input v-model="htZfs" class="w100" type="text">
            份，具有同等法律效力。合同持有情况如下：出卖人
            <input v-model="htCmrfs" class="w100" type="text">
            份，买受人
            <input v-model="htMsrfs" class="w100" type="text">
            份，
            <input v-model="htQtfssm" class="w500" type="text">
            。
          </li>
        </ul>
      </div>

      <!--第二十四条-->
      <div class="item">
        <h4 class="title">第二十四条</h4>
        <ul>
          <li>本合同自双方签订之日起生效。</li>
        </ul>
      </div>

      <!--第二十五条-->
      <div class="item">
        <h4 class="title">第二十五条</h4>
        <ul>
          <li>
            商品房预售的，自本合同生效之日起30天内，由出卖人向
            <input v-model="htBajg" class="w200" type="text">
            申请办理备案。
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No9",
  data() {
    return {
      // 二十条
      htZcfs: "",
      htZcdf: "",
      // 二十三条
      htZfs: "",
      htCmrfs: "",
      htMsrfs: "",
      htQtfssm: "",
      // 二十五条
      htBajg: ""
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