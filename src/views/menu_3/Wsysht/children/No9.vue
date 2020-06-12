<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第十章 其他事项</div>
    <div class="bd">
      <!--第二十二条-->
      <div class="item">
        <h4 class="title">第二十二条 建筑物区分所有权</h4>
        <ul>
          <li>（一）买受人对其建筑物专有部分享有占有、使用、收益和处分的权利。</li>
          <li>（二）以下部位归业主共有：
            <ul class="ul2">
              <li>1.建筑物的基础、承重结构、外墙、屋顶等基本结构部分，通道、楼梯、大堂等公共通行部分，消防、公共照明等附属设施、设备，避难层、设备层或者设备间等结构部分；</li>
              <li>2.该商品房所在建筑区划内的道路（属于城镇公共道路的除外）、绿地（属于城镇公共绿地或者明示属于个人的除外）、占用业主共有的道路或者其他场地用于停放汽车的车位、物业服务用房；</li>
              <li>3. <input v-model="ht22.ht22001" type="text" class="w800">。</li>
            </ul>
          </li>
          <li>（三）双方对其他配套设施约定如下：
            <ul class="ul2">
              <li>1.规划的车位、车库：<input v-model="ht22.ht22002" type="text" class="w500">；</li>
              <li>2.会所：<input v-model="ht22.ht22003" type="text" class="w500">；</li>
              <li>3.<input v-model="ht22.ht22004" type="text" class="w800">。</li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第二十三条-->
      <div class="item">
        <h4 class="title">第二十三条 税费</h4>
        <p>双方应当按照国家的有关规定，向相应部门缴纳因该商品房买卖发生的税费。因预测面积与实测面积差异，导致买受人不能享受税收优惠政策而增加的税收负担，由
          <input v-model="ht23.ht23001" type="text" class="w500">承担。</p>
      </div>

      <!--第二十四条-->
      <div class="item">
        <h4 class="title">第二十四条 销售和使用承诺</h4>
        <ul>
          <li>1.出卖人承诺不采取分割拆零销售、返本销售或者变相返本销售的方式销售商品房；不采取售后包租或者变相售后包租的方式销售未竣工商品房。</li>
          <li>2.出卖人承诺按照规划用途进行建设和出售，不擅自改变该商品房使用性质，并按照规划用途办理房屋登记。出卖人不得擅自改变与该商品房有关的共用部位和设施的使用性质。</li>
          <li>3.出卖人承诺对商品房的销售，不涉及依法或者依规划属于买受人共有的共用部位和设施的处分。</li>
          <li>4.出卖人承诺已将遮挡或妨碍房屋正常使用的情况告知买受人。具体内容见附件十。</li>
          <li>5.买受人使用该商品房期间，不得擅自改变该商品房的用途、建筑主体结构和承重结构。</li>
          <li>6. <input v-model="ht24.ht24001" type="text" class="w800">。</li>
          <li>7. <input v-model="ht24.ht24002" type="text" class="w800">。</li>
        </ul>
      </div>

      <!--第二十五条-->
      <div class="item">
        <h4 class="title">第二十五条 送达</h4>
        <p>
          出卖人和买受人保证在本合同中记载的通讯地址、联系电话均真实有效。任何根据本合同发出的文件，均应采用书面形式，以
          <select name=""  v-model="ht25.ht25001">
            <option value="邮政快递">邮政快递</option>
            <option value="邮寄挂号信">邮寄挂号信</option>
            <option value="其他">其他</option>
          </select>
          方式送达对方。任何一方变更通讯地址、联系电话的，应在变更之日起 <input  v-model="ht25.ht25002" type="text" class="w50">
          日内书面通知对方。变更的一方未履行通知义务导致送达不能的，应承担相应的法律责任。
        </p>

      </div>

      <!--第二十六条-->
      <div class="item">
        <h4 class="title">第二十六条 买受人信息保护</h4>
        <p>出卖人对买受人信息负有保密义务。非因法律、法规规定或国家安全机关、公安机关、检察机关、审判机关、纪检监察部门执行公务的需要，未经买受人书面同意，出卖人及其销售人员和相关工作人员不得对外披露买受人信息，或将买受人信息用于履行本合同之外的其他用途。</p>
      </div>

      <!--第二十七条-->
      <div class="item">
        <h4 class="title">第二十七条 争议解决方式</h4>
        <p>本合同在履行过程中发生的争议，由双方当事人协商解决，也可通过消费者协会等相关机构调解；或按照下列第<input  v-model="ht27.ht27001" type="text" class="w50">种方式解决：</p>
        <ul>
          <li>1.依法向房屋所在地人民法院起诉。</li>
          <li>2.提交 <input v-model="ht27.ht27002" type="text" class="w500">仲裁委员会仲。</li>
        </ul>
      </div>

      <!--第二十八条-->
      <div class="item">
        <h4 class="title">第二十八条 补充协议</h4>
        <p>对本合同中未约定或约定不明的内容，双方可根据具体情况签订书面补充协议（补充协议见附件十一）。</p>
        <p>补充协议中含有不合理的减轻或免除本合同中约定应当由出卖人承担的责任，或不合理的加重买受人责任、排除买受人主要权利内容的，仍以本合同为准。</p>
      </div>

      <!--第二十九条-->
      <div class="item">
        <h4 class="title">第二十九条 合同生效</h4>
        <ul>
          <li>本合同自双方签字或盖章之日起生效。本合同的解除应当采用书面形式。</li>
          <li>本合同及附件共
            <input v-model="ht29.ht29001" type="text" class="w50">页，一式
            <input v-model="ht29.ht29002" type="text" class="w50">份，其中出卖人
            <input v-model="ht29.ht29003" type="text" class="w50">份， 买受人
            <input v-model="ht29.ht29004" type="text" class="w50">份，
            【<input v-model="ht29.ht29005" type="text" class="w100">】<input v-model="ht29.ht29006" type="text" class="w50">份，
            【<input v-model="ht29.ht29007" type="text" class="w100">】<input v-model="ht29.ht29008" type="text" class="w50">份，
            【<input v-model="ht29.ht29009" type="text" class="w100">】<input v-model="ht29.ht29010" type="text" class="w50">份，
            【<input v-model="ht29.ht29011" type="text" class="w100">】<input v-model="ht29.ht29012" type="text" class="w50">份，
            【<input v-model="ht29.ht29013" type="text" class="w100">】<input v-model="ht29.ht29014" type="text" class="w50">份。合同附件与本合同具有同等法律效力。
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
      return{
        ht22: {
          ht22001: "",
          ht22002: "",
          ht22003: "",
          ht22004: "",
        },
        ht23: {
          ht23001: ""
        },
        ht24: {
          ht24001: "",
          ht24002: "",
        },
        ht25: {
          ht25001: "",
          ht25002: "",
        },
        ht27: {
          ht27001: "",
          ht27002: "",
        },
        ht29: {
          ht29001: "",
          ht29002: "",
          ht29003: "",
          ht29004: "",
          ht29005: "",
          ht29006: "",
          ht29007: "",
          ht29008: "",
          ht29009: "",
          ht29010: "",
          ht29011: "",
          ht29012: "",
          ht29013: "",
          ht29014: "",
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