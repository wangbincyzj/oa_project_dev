<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第九章 前期物业管理</div>
    <div class="bd">
      <!--第二十一条-->
      <div class="item">
        <h4 class="title">第二十一条 前期物业管理</h4>
        <ul>
          <li>（一）出卖人依法选聘的前期物业服务企业为 <input v-model="ht21.ht21001" type="text" class="w300">。</li>
          <li>（二）物业服务时间从 <input v-model="ht21.ht21002" type="text" class="w50">年<input v-model="ht21.ht21003" type="text" class="w50">月<input v-model="ht21.ht21004" type="text" class="w50">日到<input
            v-model="ht21.ht21005" type="text" class="w50">年<input v-model="ht21.ht21006" type="text" class="w50">月<input v-model="ht21.ht21007" type="text" class="w50">日，<input type="text" v-model="ht21.ht21011"
                                                                                                                                                                                  class="w400">。
          </li>
          <li>（三）物业服务期间，物业收费计费方式为【
            <select name="" v-model="ht21.ht21010">
              <option value="包干制">包干制</option>
              <option value="酬金制">酬金制</option>
            </select>
            】【<input v-model="ht21.ht21008" type="text" class="w100">】。物业服务费为 <input v-model="ht21.ht21009" type="text" class="w50">元/月·平方米（建筑面积），另见附件九。
          </li>
          <li>（四）买受人同意由出卖人选聘的前期物业服务企业代为查验并承接物业共用部位、共用设施设备，出卖人应当将物业共用部位、共用设施设备承接查验的备案情况书面告知买受人。</li>
          <li>（五）买受人已详细阅读前期物业服务合同和临时管理规约，同意由出卖人依法选聘的物业服务企业实施前期物业管理，遵守临时管理规约。业主委员会成立后，由业主大会决定选聘或续聘物业服务企业。</li>
          <li>该商品房前期物业服务合同、临时管理规约见附件九。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "No8",
    data() {
      return{
        ht21: {
          ht21001: "",
          ht21002: "",
          ht21003: "",
          ht21004: "",
          ht21005: "",
          ht21006: "",
          ht21007: "",
          ht21011: "",
          ht21010: "",
          ht21008: "",
          ht21009: "",
        },  // 顺序不对
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