<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第五条</div>
    <div class="bd">
      <!--第五条-->
      <div class="item">
        <h4 class="title">第五条 面积确认及面积差异处理</h4>
        <ul>
          <li>
            根据当事人选择的计价方法，本条规定以
            <select v-model="htMjjsfs">
              <option value="【建筑面积】" selected="">【建筑面积】</option>
              <option value="【套内建筑面积】">【套内建筑面积】</option>
            </select>
            （本条款中均简称面积）为依据进行面积确认及面积差异处
            理。当事人选择按套计价的，不适用本条约定。合同约定面积与产权办理面积有差异的，以产权办理为准。商品房交付后，产权办理面积与合同约定面积发生差异，双方同意按
            <input v-model="htMjcycl" class="w100" type="text">
            种方式进行处理：
          </li>
          <li>
            1.双方自行约定：
            <el-input v-model="htMjjssm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
          <li>
            2.双方同意按以下原则处理:
            <ul class="ul2">
              <li>
                (1)面积误差比绝对值在３％以内（含３％）的，据实结算房价款；
              </li>
              <li>(2)面积误差比绝对值超出３％时，买受人有权退房。</li>
              <li>
                买受人退房的，出卖人在买受人提出退房之日起３０天内将买受人已付款还给买受人，并按
                <input v-model="htYhlx" class="w200" type="text">
                利率付给利息。
              </li>
              <li>
                买受人不退房的，产权办理面积大于合同约定面积时，面积误差比在３％以内（含３％）部分的房价款由买受人补足；超出３％部分的房价款由出卖人承担，产权归买受人。产权办理面积小于合同办理面积时，面积误差比绝对值在３％以内（含３％）部分的房价款由出卖人返还买受人；绝对值超出３％部分的房价款由出买人双倍返还买受人
              </li>
              <li>面积误差比＝(产权办理面积－合同约定面积)/合同约定面积*100%</li>
              <li>因设计变更造成面积差异，双方不解除合同的，应当签署补充协议。</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No3",
  data() {
    return{
      // 第五条
      htMjjsfs: "",
      htMjcycl: "",
      htMjjssm: "",
      htYhlx: "",
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