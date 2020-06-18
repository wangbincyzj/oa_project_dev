<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">
      第二章 商品房基本状况
    </div>
    <div class="bd">
      <!--第一条-->
      <div class="item">
        <h4 class="title">第一条 项目建设依据</h4>
        <ul>
          <li>
            1.出卖人以
            <input v-model="ht01.ht01001"  type="text" class="w50">
            方式取得坐落于
            <input v-model="ht01.ht01002" type="text" class="w500">
            地块的土地使用权。该地块
            <select v-model="ht01.ht01003">
              <option value="国有土地使用权证号">国有土地使用权证号</option>
              <option value="不动产权证">不动产权证</option>
            </select>
            为
            <input v-model="ht01.ht01004" type="text" class="w100">
            。
          </li>
          <li>土地使用权面积为
            <input v-model="ht01.ht01005" type="text" class="w100">M<sup
              style="vertical-align: super; font-size: smaller">2</sup>,买受人购买的商品房（以下简称该商品房）所占用的土地用途为
            <input v-model="ht01.ht01006" type="text" class="w200">。土地使用权终止日期为<input v-model="ht01.ht01007"
                                                                                           type="text" class="w200">
            <span style="font-size: 12px; font-weight: 600; color: red">可以手工修改，如果本栋房屋有住宅和非住宅，那么非住宅的终止日期就是减去30年。</span>
          </li>
          <li>2.出卖人经批准，在上述地块上建设的商品房项目核准名称为
            <input v-model="ht01.ht01008" type="text" class="w300">
            。 建设工程规划许可证号为
            <input v-model="ht01.ht01009" class="w100"/>
            ， 建筑工程施工许可证号为
            <input v-model="ht01.ht01010" type="text" class="w100">
            。
          </li>
        </ul>
      </div>

      <!--第二条-->
      <div class="item">
        <h4 class="title">第二条 预售依据</h4>
        <ul>
          <li>该商品房已由[todo]潼关县房地产交易所批准预售,预售许可证号为
            <input v-model="ht02.ht02001" type="text" class="w100">
            。
          </li>
        </ul>
      </div>

      <!--第三条-->
      <div class="item">
        <h4 class="title">
          第三条 商品房基本情况</h4>
        <ul>
          <li>
            1.该商品房的规划用途为<input v-model="ht03.ht03001" type="text" class="w200">。
          </li>
          <li>
            2.该商品房所在建筑物的主体结构为
            <input v-model="ht03.ht03002" type="text" class="w100">
            结构，建筑物总层数为
            <input v-model="ht03.ht03003" type="text" class="w50">
            层，其中地上
            <input v-model="ht03.ht03016" type="text" class="w50">
            层，地下
            <input v-model="ht03.ht03017" type="text" class="w50">
            层。
          </li>
          <li>
            3. 该商品房为第一条规定项目中的
            <input v-model="ht03.ht03004" type="text" class="w50">
            幢
            <input v-model="ht03.ht03005" type="text" class="w50">
            单元
            <input v-model="ht03.ht03006" type="text" class="w50">
            层
            <input v-model="ht03.ht03007" type="text" class="w50">
            号房 ，房屋竣工后，如房号发生改变，不影响该商
            品房的特定位置。 该商品房的平面图见附件一。
          </li>
          <li>
            4.该商品房的房产测绘机构为
            <input v-model="ht03.ht03008" type="text" class="w300">
            ，其预测建筑面积共
            <input v-model="ht03.ht03009" type="text" class="w50">
            平方米，其中套内建筑面积
            <input v-model="ht03.ht03010" type="text" class="w50">
            平方米，分摊共有建筑面积
            <input v-model="ht03.ht03011" type="text" class="w50">
            平方米。
            该商品房共用部位见附件二。
          </li>
          <li>该商房品层高为
            <input v-model="ht03.ht03012" type="text" class="w50">
            米，有
            <input v-model="ht03.ht03013" type="text" class="w50">
            个阳台，其中
            <input v-model="ht03.ht03014" type="text" class="w50">
            个阳台为封闭式，
            <input v-model="ht03.ht03015" type="text" class="w50">个阳台为非封闭式，阳台是否封闭以规划设计文件为准。
          </li>
        </ul>
      </div>

      <!--第四条-->
      <div class="item">
        <h4 class="title">第四条 抵押情况</h4>
        <ul>
          <li>与该商品房有关的抵押情况为
            【<input v-model="ht04.ht04001" type="text" class="w100">】
          </li>
          <li>抵押类型:<input v-model="ht04.ht04002" type="text" class="w300">，抵 押 人：<input v-model="ht04.ht04003" type="text" class="w300">,</li>
          <li>抵押权人:<input v-model="ht04.ht04004" type="text" class="w300">，抵押登记机构：<input v-model="ht04.ht04005" type="text" class="w300">,</li>
          <li>抵押登记日期:<input v-model="ht04.ht04006" type="text" class="w300">，债务履行期限：<input v-model="ht04.ht04007" type="text" class="w300">,</li>
          <li>抵押类型:<input v-model="ht04.ht04008" type="text" class="w300">，抵 押 人：<input v-model="ht04.ht04009" type="text" class="w300">,</li>
          <li>抵押权人:<input v-model="ht04.ht04010" type="text" class="w300">，抵押登记机构：<input v-model="ht04.ht04011" type="text" class="w300">,</li>
          <li>抵押登记日期:<input v-model="ht04.ht04012" type="text" class="w300">，债务履行期限：<input v-model="ht04.ht04013" type="text" class="w300">,</li>
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
          的赔偿金。
        </p>
      </div>

      <CenterButton v-if="!$parent.readOnly" @btnClick="handleSave" style="margin: 15px 0" title="保存条款"/>
    </div>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  export default {
    name: "No1",
    components: {CenterButton},
    props: ["htId", "oriData"],
    data() {
      return {
        ht01:{
          ht01001: "",
          ht01002: "",
          ht01003: "",
          ht01004: "",
          ht01005: "",
          ht01006: "",
          ht01007: "",
          ht01008: "",
          ht01009: "",
          ht01010: "",
          ht01011: "",
        },
        ht02:{
          ht02001: "",
        },
        ht03:{
          ht03001: "",
          ht03002: "",
          ht03003: "",
          ht03016: "",
          ht03017: "",
          ht03004: "",
          ht03005: "",
          ht03006: "",
          ht03007: "",
          ht03008: "",
          ht03009: "",
          ht03010: "",
          ht03011: "",
          ht03012: "",
          ht03013: "",
          ht03014: "",
          ht03015: "",
        },
        ht04: {
          ht04001: "未抵押",
          ht04002: "X",
          ht04003: "X",
          ht04004: "X",
          ht04005: "X",
          ht04006: "X",
          ht04007: "X",
          ht04008: "X",
          ht04009: "X",
          ht04010: "X",
          ht04011: "X",
          ht04012: "X",
          ht04013: "X",
        },
        ht05: {
          ht05001: "",
          ht05002: "",
          ht05003: "",
          ht05004: "",
        },
        sectionName: "contractRoomCondition",
      }
    },
    computed: {
      sectionData() {
        return this.oriData[this.sectionName]
      }
    },
    created() {
      this.mapData()
    },
    methods:{
      handleSave() {
        let form =  this._formUtil(this._data)
        form.htId = this.htId;
        form.name = this.sectionName;
        yushouContractApi.contractComplete(2, form).then(ret=>{
          if(ret.code===200){
            this.$message.success("保存成功")
          }else{
            this.$message.success(ret.message||"未知错误")
          }
        })
      },
      mapData() {
        this._mapData(this._data, this.sectionData)
      },
      // 数据递归映射
      _mapData(obj, obj2){
        Object.keys(obj).forEach(item=>{
          if(obj[item] instanceof Object){
            this._mapData(obj[item], obj2)
          }else{
            obj[item] = obj2[item]||obj[item]
          }
        })
      },
      // 数据递归映射的反过程
      _formUtil(obj) {
        let result = {};
        Object.keys(obj).forEach(item => {
          if (obj[item] instanceof Object) {
            result = Object.assign({}, result, this._formUtil(obj[item]))
          } else {
            result[item] = obj[item]
          }
        })
        return result
      },
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