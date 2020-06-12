<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第八章 合同备案与房屋登记</div>
    <div class="bd">
      <!--第十九条-->
      <div class="item">
        <h4 class="title">第十九条 预售合同登记备案</h4>
        <ul>
          <li>（一）出卖人应当自本合同签订之日起【<input v-model="ht19.ht19001" type="text" class="w50">
            日内】（不超过30日）办理商品房预售合同登记备案手续，并将本合同登记备案情况告知买受人。
          </li>
          <li>（二）有关预售合同登记备案的其他约定如下：
            <ul class="ul2">
              <li><input v-model="ht19.ht19002" type="text" class="w500">；</li>
              <li><input v-model="ht19.ht19003" type="text" class="w500">。</li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第二十条-->
      <div class="item">
        <h4 class="title">第二十条 房屋登记</h4>
        <ul>
          <li>（一）双方同意共同向房屋登记机构申请办理该商品房的房屋所有权转移登记。</li>
          <li>（二）因出卖人的原因，买受人未能在该商品房交付之日起 <input v-model="ht20.ht20001" type="text" class="w50">
            日内取得该商品房的房屋所有权证书的，双方同意按照下列第 <input v-model="ht20.ht20002" type="text" class="w50">
            种方式处理：
            <ul class="ul2">
              <li>1. 买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
                <input v-model="ht20.ht20003" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。买受人不解除合同的，自买受人应当完成房屋所有权登记的期限届满之次日起至实际完成房屋所有权登记之日止，出卖人按日计算向买受人支付全部房价款万分之
                <input v-model="ht20.ht20004" type="text" class="w50">的违约金。
              </li>
              <li>2. <input v-model="ht20.ht20005" type="text" class="w500">。</li>
            </ul>
          </li>
          <li>（三）因买受人的原因未能在约定期限内完成该商品房的房屋所有权转移登记的，出卖人不承担责任。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "No7",
    data() {
      return{
        ht19: {
          ht19001: "",
          ht19002: "",
          ht19003: "",
        },
        ht20: {
          ht20001: "",
          ht20002: "",
          ht20003: "",
          ht20004: "",
          ht20005: "",
        },
      }
    },
    props:{
      d:{
        default: ()=>({})
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