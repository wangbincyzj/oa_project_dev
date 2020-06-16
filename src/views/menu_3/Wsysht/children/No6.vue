<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第七章 商品房质量及保修责任<span style="color: skyblue">(只读)</span></div>
    <div class="bd">
      <!--第十六条-->
      <div class="item">
        <h4 class="title">第十六条 商品房质量</h4>
        <ul>
          <li>（一）地基基础和主体结构
            <p>出卖人承诺该商品房地基基础和主体结构合格，并符合国家及行业标准。</p>
            <p>经检测不合格的，买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
              <input v-model="ht16.ht16001" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率） 计算给付利息。给买受人造成损失的，由出卖人支付
              <select  v-model="ht16.ht16016" name="">
                <option value="已付房价款一倍">已付房价款一倍</option>
                <option value="买受人全部损失">买受人全部损失</option>
              </select>已付房价款一倍
              的赔偿金。因此而发生的检测费用由出卖人承担。
              买受人不解除合同的，
              <input  v-model="ht16.ht16002" type="text" class="w800">。
            </p>
          </li>
          <li>（二） 其他质量问题
            <p>该商品房质量应当符合有关工程质量规范、标准和施工图设计文件的要求。发现除地基基础和主体结构外质量问题的，双方按照以下方式处理：</p>
            <ul class="ul2">
              <li>（1）及时更换、修理；如给买受人造成损失的，还应当承担相应赔偿责任。<br>
                <input v-model="ht16.ht16003" type="text" class="w800">
              </li>
              <li>
                （2）经过更换、修理，仍然严重影响正常使用的，买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
                <input v-model="ht16.ht16004" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。给买受人造成损失的，由出卖人承担相应赔偿责任。因此而发生的检测费用由出卖人承担。
                <div>买受人不解除合同的，<input v-model="ht16.ht16005" type="text" class="w800">。</div>
              </li>
            </ul>
          </li>
          <li>（三）装饰装修及设备标准
            <p>该商品房应当使用合格的建筑材料、构配件和设备，装置、装修、装饰所用材料的产品质量必须符合国家的强制性标准及双方约定的标准。</p>
            <p>不符合上述标准的，买受人有权要求出卖人按照下列第（1）、
              <input v-model="ht16.ht16006" type="text" class="w50">、
              <input v-model="ht16.ht16007" type="text" class="w50">方式处理（可多选）：</p>
            <ul class="ul2">
              <li>（1）及时更换、修理；</li>
              <li>（2）出卖人赔偿双倍的装饰、设备差价；</li>
              <li>（3）<input v-model="ht16.ht16008" type="text" class="w800">；</li>
              <li>（4）<input v-model="ht16.ht16009" type="text" class="w800">。
                <p>具体装饰装修及相关设备标准的约定见附件六。</p>
              </li>
            </ul>
          </li>
          <li>（四）室内空气质量、建筑隔声和民用建筑节能措施
            <ul class="ul2">
              <li>
                <div> 1.该商品房室内空气质量符合
                  <select name=""  v-model="ht16.ht16017">
                    <option value="国家">国家</option>
                    <option value="地方">地方</option>
                  </select>
                  标准，标准名称：
                  <input v-model="ht16.ht16010" type="text" class="w200">，标准文号：
                  <input v-model="ht16.ht16011" type="text" class="w200"> 。
                </div>
                <p>该商品房为住宅的，建筑隔声情况符合
                  <select name=""  v-model="ht16.ht16018">
                    <option value="国家">国家</option>
                    <option value="地方">地方</option>
                  </select>
                  标准，标准名称：
                  <input v-model="ht16.ht16012" type="text" class="w200">，标准文号：
                  <input v-model="ht16.ht16013" type="text" class="w200"> 。
                </p>
                <p>
                  该商品房室内空气质量或建筑隔声情况经检测不符合标准，由出卖人负责整改，整改后仍不符合标准的，买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
                  <input  v-model="ht16.ht16014" type="text" class="w50">
                  %（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。给买受人造成损失的，由出卖人承担相应赔偿责任。经检测不符合标准的，检测费用由出卖人承担，整改后再次检测发生的费用仍由出卖人承担。因整改导致该商品房逾期交付的，出卖人应当承担逾期交付责任。
                </p>
              </li>
              <li>2.该商品房应当符合国家有关民用建筑节能强制性标准的要求。
                <div>未达到标准的，出卖人应当按照相应标准要求补做节能措施，并承担全部费用；给买受人造成损失的，出卖人应当承担相应赔偿责任。
                  <br>
                  <input v-model="ht16.ht16015" type="text" class="w800">。
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第十七条-->
      <div class="item">
        <h4 class="title">第十七条 保修责任</h4>
        <ul>
          <li>
            （一）商品房实行保修制度。该商品房为住宅的，出卖人自该商品房交付之日起，按照《住宅质量保证书》承诺的内容承担相应的保修责任。该商品房为非住宅的，双方应当签订补充协议详细约定保修范围、保修期限和保修责任等内容。具体内容见附件七。
          </li>
          <li>（二）下列情形，出卖人不承担保修责任：
            <ul class="ul2">
              <li>1. 因不可抗力造成的房屋及其附属设施的损害；</li>
              <li>2. 因买受人不当使用造成的房屋及其附属设施的损害；</li>
              <li>3. <input v-model="ht17.ht17001" type="text" class="w800">。</li>
            </ul>
          </li>
          <li>（三）在保修期内，买受人要求维修的书面通知送达出卖人 <input v-model="ht17.ht17002" type="text" class="w50">
            日内，出卖人既不履行保修义务也不提出书面异议的，买受人可以自行或委托他人进行维修，维修费用及维修期间造成的其他损失由出卖人承担。
          </li>
        </ul>
      </div>

      <!--第十八条-->
      <div class="item">
        <h4 class="title">第十八条 质量担保</h4>
        <p>出卖人不按照第十六条、第十七条约定承担相关责任的，由 <input v-model="ht18.ht18001" type="text" class="w500">
          承担连带责任。</p>
        <p>关于质量担保的证明见附件八。</p>
      </div>
    </div>

  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No6",
    components: {CenterButton},
    data() {
      return{
        ht16: {
          ht16001: "",
          ht16016: "",
          ht16002: "",
          ht16003: "",
          ht16004: "",
          ht16005: "",
          ht16006: "",
          ht16007: "",
          ht16008: "",
          ht16009: "",
          ht16010: "",
          ht16011: "",
          ht16012: "",
          ht16013: "",
          ht16014: "",
          ht16015: "",
          ht16017: "",
          ht16018: "",
        },  // 顺序不对
        ht17: {
          ht17001: "",
          ht17002: "",
        },
        ht18: {
          ht18001: ""
        },
        sectionName: "contractHousingQuality"
      }
    },
    props: ["htId", "oriData"],
    computed: {
      sectionData() {
        return this.oriData[this.sectionName]
      }
    },
    created() {
      this.mapData()
    },
    mounted() {
      document.querySelectorAll("input").forEach(item=>item.disabled=true)
    },
    methods:{
      handleSave() {
        let form =  this._formUtil(this._data)
        form.htId = this.htId;
        form.name = this.sectionName;
        yushouContractApi.contractComplete(7, form).then(ret=>{
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
      digitUppercase(n) {
        if(Number.isNaN(n * 1)){
          this.$message.info("请输入正确的数字");
          return ""
        }
        var fraction = ['角', '分'];
        var digit = [
          '零', '壹', '贰', '叁', '肆',
          '伍', '陆', '柒', '捌', '玖'
        ];
        var unit = [
          ['元', '万', '亿'],
          ['', '拾', '佰', '仟']
        ];
        var head = n < 0 ? '欠' : '';
        n = Math.abs(n);
        var s = '';
        for (var i = 0; i < fraction.length; i++) {
          s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
        }
        s = s || '整';
        n = Math.floor(n);
        for (var i = 0; i < unit[0].length && n > 0; i++) {
          var p = '';
          for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
          }
          s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
        }
        let ret = head + s.replace(/(零.)*零元/, '元')
          .replace(/(零.)+/g, '零')
          .replace(/^整$/, '零元整');
        return ret.replace("元整", "")
      },
      handleBlur(e, ref){
        let value = e.target.value;
        let ret = this.digitUppercase(value)
        this.$refs[ref].value = ret
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