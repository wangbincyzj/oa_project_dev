<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">
      第二章 商品房基本状况
    </div>
    <div class="bd">
      <!--第一条-->
      <div class="item">
        <h4 class="title">第一条  项目建设依据</h4>
        <ul>
          <li>
            1.出卖人以
            <input :value="sectionData.ht01001"  type="text" class="w50">
            方式取得坐落于
            <input :value="sectionData.ht01002" type="text" class="w500">
            地块的土地使用权。该地块
            <input :value="sectionData.ht01003" type="text" class="w300">
            为
            <input :value="sectionData.ht01004" type="text" class="w100">
            。</li>
          <li>土地使用权面积为
            <input :value="sectionData.ht01005" type="text" class="w100">M<sup style="vertical-align: super; font-size: smaller">2</sup>,买受人购买的商品房（以下简称该商品房）所占用的土地用途为
            <input :value="sectionData.ht01006" type="text" class="w200">。土地使用权终止日期为<input :value="sectionData.ht01007" type="text" class="w200"> <span style="font-size: 12px; font-weight: 600; color: red">可以手工修改，如果本栋房屋有住宅和非住宅，那么非住宅的终止日期就是减去30年。</span>
          </li>
          <li>2.出卖人经批准，在上述地块上建设的商品房项目核准名称为
            <input :value="sectionData.ht01008" type="text" class="w300">
            。 建设工程规划许可证号为
            <input :value="sectionData.ht01009" class="w100"/>
            ， 建筑工程施工许可证号为
            <input :value="sectionData.ht01010" type="text" class="w100">
            。</li>
        </ul>
      </div>

      <!--第二条-->
      <div class="item">
        <h4 class="title">第二条 预售依据</h4>
        <ul>
          <li>该商品房已由[todo]潼关县房地产交易所批准预售,预售许可证号为
            <input :value="sectionData.ht02001" type="text" class="w100">
            。</li>
        </ul>
      </div>

      <!--第三条-->
      <div class="item">
        <h4 class="title">
          第三条 商品房基本情况</h4>
        <ul>
          <li>
            1.该商品房的规划用途为<input :value="sectionData.ht03001" type="text" class="w200">。
          </li>
          <li>
            2.该商品房所在建筑物的主体结构为
            <input :value="sectionData.ht03002" type="text" class="w100">
            结构，建筑物总层数为
            <input :value="sectionData.ht03003" type="text" class="w50">
            层，其中地上
            <input :value="sectionData.ht03016" type="text" class="w50">
            层，地下
            <input :value="sectionData.ht03017" type="text" class="w50">
            层。
          </li>
          <li>
            3. 该商品房为第一条规定项目中的
            <input :value="sectionData.ht03004" type="text" class="w50">
            幢
            <input :value="sectionData.ht03005" type="text" class="w50">
            单元
            <input :value="sectionData.ht03006" type="text" class="w50">
            层
            <input :value="sectionData.ht03007" type="text" class="w50">
            号房 ，房屋竣工后，如房号发生改变，不影响该商
            品房的特定位置。 该商品房的平面图见附件一。
          </li>
          <li>
            4.该商品房的房产测绘机构为
            <input :value="sectionData.ht03008" type="text" class="w300">
            ，其预测建筑面积共
            <input :value="sectionData.ht03009" type="text" class="w50">
            平方米，其中套内建筑面积
            <input :value="sectionData.ht03010" type="text" class="w50">
            平方米，分摊共有建筑面积
            <input :value="sectionData.ht03011" type="text" class="w50">
            平方米。
            该商品房共用部位见附件二。
          </li>
          <li>该商房品层高为
            <input :value="sectionData.ht03012" type="text" class="w50">
            米，有
            <input :value="sectionData.ht03013" type="text" class="w50">
            个阳台，其中
            <input :value="sectionData.ht03014" type="text" class="w50">
            个阳台为封闭式，
            <input :value="sectionData.ht03015" type="text" class="w50">个阳台为非封闭式，阳台是否封闭以规划设计文件为准。</li>
        </ul>
      </div>

      <!--第四条-->
      <div class="item">
        <h4 class="title">第四条 抵押情况</h4>
        <ul>
          <li>与该商品房有关的抵押情况为
            【<input type="text" class="w100">】
          </li>
          <li>抵押类型:<input type="text" class="w300">，抵 押 人：<input type="text" class="w300">,</li>
          <li>抵押权人:<input type="text" class="w300">，抵押登记机构：<input type="text" class="w300">,</li>
          <li>抵押登记日期:<input type="text" class="w300">，债务履行期限：<input type="text" class="w300">,</li>
          <li>抵押类型:<input type="text" class="w300">，抵 押 人：<input type="text" class="w300">,</li>
          <li>抵押权人:<input type="text" class="w300">，抵押登记机构：<input type="text" class="w300">,</li>
          <li>抵押登记日期:<input type="text" class="w300">，债务履行期限：<input type="text" class="w300">,</li>
        </ul>
      </div>

      <!--第五条-->
      <div class="item">
        <h4 class="title">第五条 房屋权利状况承诺</h4>
        <ul>
          <li>1.出卖人对该商品房享有合法权利；</li>
          <li>2.该商品房没有出售给除本合同买受人以外的其他人；</li>
          <li>3.该商品房没有司法查封或其他限制转让的情况；</li>
          <li>4.<input v-model="ht05.ht05001" class="w500" type="text">；</li>
          <li>5.<input v-model="ht05.ht05002" class="w500" type="text">。</li>
        </ul>
        <p>如该商品房权利状况与上述情况不符，导致不能完成本合同登记备案或房屋所有 权转移登记的，买受人有权解除合同。买受人解除合同的，
          应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
          <input v-model="ht05.ht05003" class="w50" type="text">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。给买受人造成损失的，由出卖人支付已付房价款
          <select v-model="ht05.ht05004">
            <option value="已付房价款一倍">已付房价款一倍</option>
            <option value="买受人全部损失">买受人全部损失</option>
          </select>
          的赔偿金。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "No1",
    props: ["htId", "oriData"],
    data() {
      return {
        ht05: {
          ht05001: "",
          ht05002: "",
          ht05003: "",
          ht05004: "",
        },
        sectionName: "contractRoomCondition",
      }
    },
    computed:{
      sectionData() {
        return this.oriData[this.sectionName]
      }
    },
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