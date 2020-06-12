<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">
      第三章 商品房价款
    </div>
    <div class="bd">
      <!--第六条-->
      <div class="item">
        <h4 class="title">第六条  计价方式与价款</h4>
      </div>

      <!--第七条-->
      <div class="item">
        <h4 class="title">第七条  付款方式及期限</h4>
      </div>


      <!--第八条-->
      <div class="item">
        <h4 class="title">第八条 逾期付款责任</h4>
        <p>除不可抗力外，买受人未按照约定时间付款的，双方同意按照下列第<input v-model="ht08.ht08001" class="w50" type="text">种方式处理：</p>
        <ul>
          <li>
            1.按逾期时间，分别处理（（1）和（2）不作累加）
            <ul>
              <li>（1）逾期在 <input v-model="ht08.ht08002" class="w50" type="text">日之内，买受人按日计算向出卖人支付逾期应付款万分之<input
                v-model="ht08.ht08003" class="w50" type="text">的违约金。
              </li>
              <li>（2）逾期超过<input v-model="ht08.ht08004" class="w50" type="text">日（该期限应当与本条第（1）
                项中的期限相同）后，出卖人有权解除合同。出卖人解除合同的，应当书面通知买受人。买受人应当自解除合同通知送达之日起
                <input v-model="ht08.ht08005" class="w50" type="text">日内按照累计应付款的
                <input v-model="ht08.ht08006" class="w50" type="text">%向出卖人支付违约金，同时，出卖 人退还买受人已付全部房款（含已付贷款部分）。
              </li>
              <li>出卖人不解除合同的，买受人按日计算向出卖人支付逾期应付款万分之<input v-model="ht08.ht08007" class="w50" type="text">（该比率应不小于第(1)项中的比率）的违约金。
              </li>
              <li> 本条所称逾期应付款是指依照第七条及附件四约定的到期应付款与该期实际已付款的差额；采取分期付款的，按照相应的分期应付款与该期的实际已付款的差额确定。</li>
            </ul>
          </li>
          <li>2.<input v-model="ht08.ht08008" type="text" class="w500">。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "No2",
    props:{
      d:{
        default: ()=>({})
      }
    },
    data() {
      return {
        ht08: {
          ht08001: "",
          ht08002: "",
          ht08003: "",
          ht08004: "",
          ht08005: "",
          ht08006: "",
          ht08007: "",
          ht08008: "",
        },
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

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

        li {
          margin-bottom: 8px;
          line-height: 1.4em;
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