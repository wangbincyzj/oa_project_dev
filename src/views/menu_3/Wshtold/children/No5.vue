<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第八条-第九条</div>
    <div class="bd">
      <!--第八条-->
      <div class="item">
        <h4 class="title">第八条 交付期限</h4>
        <ul>
          <li>
            出卖人应当在
            <input v-model="htJfy" class="w100" type="text">
            年
            <input v-model="htJfm" class="w100" type="text">
            月
            <input v-model="htJfd" class="w100" type="text">
            日前，依照国家和地方人民政府的有关规定，将具备下列第
            <input v-model="htJftj" class="w100" type="text">
            种条件，并符合本合同约定的商品房交付买受人使用：
          </li>
          <li>
            <ul class="ul2">
              <li>1.该商品房经验收合格。</li>
              <li>2.该商品房经综合验收合格。</li>
              <li>3.该商品房经分期综合验收合格。</li>
              <li>4.该商品房取得商品住宅交付使用批准文件。</li>
              <li>5.该商品房取得竣工验收备案文件。</li>
              <li>
                <ul class="ul2">
                  <li>但如遇下列特殊原因，除双方协商同意解除合同或变更合同外，出卖人可据实予以延期：</li>
                  <li>
                    1.遭遇不可抗力，且出卖人在发生之日起
                    <input v-model="htFsrq" class="w100" type="text">
                    日内告知买受人的；
                  </li>
                  <li>
                    2 <br>
                    <el-input v-model="htJfyqsm" type="textarea" style="padding: 0 30px" :rows="4"/>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第九条-->
      <div class="item">
        <h4 class="title">第九条 出卖人逾期交房的违约责任</h4>
        <ul>
          <li>
            除本合同第八条规定的特殊情况外，出卖人如未按合同规定的期限将该商品房交付买受人使用，按下列第
            <input v-model="htYqjfwyclfs" class="w100" type="text">
            种方式处理：
          </li>
          <li>
            1.按逾期时间，分别处理（不作累加）：
          </li>
          <li>
            <ul class="ul2">
              <li>
                (1)逾期不超过
                <input v-model="htYqjfts" class="w100" type="text">
                日，自本合同第八条规定的最后交付期限的第二天起至实际交付之日止，出卖人按日向买受人支付已交付房价款万分之
                <input  v-model="htYqjfwybl" class="w100" type="text">
                的违约金，合同继续履行；
              </li>
              <li>
                (2)逾期超过
                <input v-model="htYqjfts2" class="w100" type="text">
                日后，买受人有权解除合同，买受人解除合同的，出卖人应当自买受人解除合同通知到达之日起
                <input v-model="htYqjftkts" class="w100" type="text">

                天内退还全部已付款，并按买受人累计已付款的
                <input v-model="htYqjfwybl2" class="w100" type="text">
                ％向买受人支付违约金。买受人要求继续履行合同的，合同继续履行，

                自本合同第八条规定的最后交付期限的第二天起至实际交付之日止,出卖人按日向买受人支付已交付房价万分之
                <input v-model="htYqjfwybl3" class="w100" type="text">
                （该比例应不小于第(1)项中的比率）的违约金。
              </li>
            </ul>
          </li>

          <li>
            2. <br>
            <el-input v-model="htYqjfwysm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No5",
  data() {
    return {
      // 第八条
      htJfy: "",
      htJfm: "",
      htJfd: "",
      htJftj: "",
      htFsrq: "",
      htJfyqsm: "",
      // 第九条
      htYqjfwyclfs: "",
      htYqjfts: "",
      htYqjfwybl: "",
      htYqjfts2: "",
      htYqjftkts: "",
      htYqjfwybl2: "",
      htYqjfwybl3: "",
      htYqjfwysm: "",
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