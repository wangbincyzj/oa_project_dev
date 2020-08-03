<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">
      第三章 商品房价款
    </div>
    <div class="bd">
      <!--第六条-->
      <div class="item">
        <h4 class="title">第六条  计价方式与价款</h4>
        <ul class="priceArea">
          <li> 出卖人与买受人约定合同按
            <select v-model="ht06.ht06001">
              <option value="【建筑面积】" selected>【建筑面积】</option>
              <option value="【套内建筑面积】">【套内建筑面积】</option>
              <option value="【套（单元）】">【套（单元）】</option>
              <option value="【其它】">【其它】</option>
            </select>
            计算该商品房价款,其中面积：
            <input disabled v-model="ht06.ht06002" type="text" class="w100">
            , 单价每平方米
            <input @input="handleHt06003" v-model="ht06.ht06003" type="text" class="w100">元(不能超过{{sectionData.roomGpdj}}元) 。</li>
          <li>
            该商品房总价款或总金额为（小写
            <input @input="handleBlur($event, 'this.ht06.ht06005')" v-model="ht06.ht06004" type="text" class="w100">
            元），（大写）
            <input  v-model="ht06.ht06005" type="text" class="w300">
            元整，币种为
            <input v-model="ht06.ht06006" type="text" class="w50">
            。
          </li>
          <li>
            其他计算方式: <br>
            <textarea v-model="ht06.ht06007"   style="display:block;margin-left: 30px;margin-top: 10px; width: 60%; height: 100px"></textarea>
          </li>
        </ul>
      </div>

      <!--第七条-->
      <div class="item">
        <h4 class="title">第七条  付款方式及期限</h4>
        <ul>
          <li class="priceArea">（一）签订本合同前，买受人已向出卖人支付定金
            <input v-model="ht07.ht07001" type="text" class="w50">
            （币种）
            <input @input="handleBlur($event, 'this.ht07.ht07002b')" v-model="ht07.ht07002" type="text" class="w100">
            元（大写：
            <input v-model="ht07.ht07002b" type="text" class="w300">元整），该定金于
            <select v-model="ht07.ht07003">
              <option value="本合同签订" selected>本合同签订</option>
              <option value="交付首付款">交付首付款</option>
              <option value="无">无</option>
            </select>
            <input v-model="ht07.ht07004" type="text" class="w100">
            时【<input v-model="ht07.ht07036" type="radio" value="抵作" class="w50">抵作】<br/>
            【<input v-model="ht07.ht07005" type="text" class="w200">
            】商品房价款。</li>
          <li>
            <ul class="priceArea">
              <li>（二）买受人采取下列
                选择
                <select v-model="ht07.ht07006">
                  <option value="一次性付款">一次性付款</option>
                  <option value="分期付款">分期付款</option>
                  <option value="按揭贷款">按揭贷款</option>
                  <option value="其他方式">其他方式</option>
                </select>
                方式按期付款。</li>
              <li v-if="ht07.ht07006==='一次性付款'">1.一次性付款。买受人应当在
                <input v-model="ht07.ht07007" type="text" class="w50">
                年
                <input v-model="ht07.ht07008" type="text" class="w50">
                月
                <input v-model="ht07.ht07009" type="text" class="w50">
                日前支付该商品房全部价款。</li>
              <li v-if="ht07.ht07006==='分期付款'">
                2.分期付款。买受人应当在
                <input v-model="ht07.ht07010" type="text" class="w50">
                年
                <input v-model="ht07.ht07011" type="text" class="w50">
                月
                <input v-model="ht07.ht07012" type="text" class="w50">
                日前分
                <input v-model="ht07.ht07013" type="text" class="w50">
                期支付该商品房全部价款，首期房价款
                <input v-model="ht07.ht07014" type="text" class="w50">
                （币种）
                <input @input="handleBlur($event, 'this.ht07.ht07016')" v-model="ht07.ht07015" type="text" class="w100">
                元（大写：
                <input  v-model="ht07.ht07016" type="text" class="w300">
                元整），应当于
                <input v-model="ht07.ht07017" type="text" class="w50">
                年
                <input v-model="ht07.ht07018" type="text" class="w50">
                月
                <input v-model="ht07.ht07019" type="text" class="w50">
                日前支付。
              </li>
              <li v-if="ht07.ht07006==='按揭贷款'">
                3.贷款方式付款：
                <select v-model="ht07.ht07020">
                  <option value="公积金贷款">公积金贷款</option>
                  <option value="商业贷款">商业贷款</option>
                  <option value="组合贷款">组合贷款</option>
                  <option value="无">无</option>
                </select>
                【<input v-model="ht07.ht07021" type="text" class="w200">】。买受人应当于
                <input v-model="ht07.ht07022" type="text" class="w50">
                年
                <input v-model="ht07.ht07023" type="text" class="w50">
                月
                <input v-model="ht07.ht07024" type="text" class="w50">
                日前支付首期房价款
                <input v-model="ht07.ht07025" type="text" class="w50">
                （币种）
                <input @input="handleBlur($event, 'this.ht07.ht07027')" v-model="ht07.ht07026" type="text" class="w100">
                元（大写
                <input  v-model="ht07.ht07027" type="text" class="w300">
                元整），占全部房价款的
                <input v-model="ht07.ht07028" type="text" class="w50">
                ％。余款（币种）
                <input @input="handleBlur($event, 'this.ht07.ht07030')" v-model="ht07.ht07029" type="text" class="w100">
                元（大写
                <input  v-model="ht07.ht07030" type="text" class="w300">
                元整）申请贷款支付，其中公积金贷款
                <input v-model="ht07.ht07037" type="text" class="w50">
                元整），商业贷款
                <input v-model="ht07.ht07038" type="text" class="w50">
                元整）。
              </li>
              <li v-if="ht07.ht07006==='其他方式'">
                4.其他方式：
                <input v-model="ht07.ht07032" type="text" class="w800">。
              </li>
            </ul>
          </li>
          <li class="priceArea">（三）出售该商品房的全部房价款应当存入预售资金监管账户，用于本工程建设。该商品房的预售资金监管机构为
            <input v-model="ht07.ht07033" type="text" class="w400">
            ，预售资金监管银行名称为
            <input v-model="ht07.ht07034" type="text" class="w400">
            ，监管账号为
            <input v-model="ht07.ht07035" type="text" class="w200">
            。</li>
          <li class="priceArea">该商品房价款的计价方式、总价款、付款方式及期限的具体约定见附件四。</li>
        </ul>
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
    <CenterButton v-if="!$parent.readOnly" @btnClick="handleSave" style="margin: 15px 0" title="保存条款"/>
  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No2",
    components: {CenterButton},
    props: ["htId", "oriData"],
    data() {
      return {
        ht06:{
          ht06001: "",
          ht06002: "",
          ht06003: "",
          ht06004: "",
          ht06005: "",
          ht06006: "",
          ht06007: "",
        },
        ht07:{
          ht07001: "",
          ht07002: "",
          ht07002b: "",
          ht07003: "",
          ht07004: "",
          ht07036: "",
          ht07005: "",
          /////
          ht07006: "",
          ht07007: "",
          ht07008: "",
          ht07009: "",
          ht07010: "",
          ht07011: "",
          ht07012: "",
          ht07013: "",
          ht07014: "",
          ht07015: "",
          ht07016: "",
          ht07017: "",
          ht07018: "",
          ht07019: "",
          /////
          ht07020: "",
          ht07021: "",
          ht07022: "",
          ht07023: "",
          ht07024: "",
          ht07025: "",
          ht07026: "",
          ht07027: "",
          ht07028: "",
          ht07029: "",
          ht07030: "",
          ht07037: "",
          ht07038: "",
          ht07032: "",
          ht07033: "",
          ht07034: "",
          ht07035: "",
        },
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
        sectionName: "contractHousePrice"
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
    watch:{
      "ht07.ht07006"(){}

    },
    methods:{
      handleSave() {
        let form =  this._formUtil(this._data)
        form.htId = this.htId;
        form.name = this.sectionName;
        yushouContractApi.contractComplete(3, form).then(ret=>{
          if(ret.code===200){
            this.$message.success("保存成功")
          }else{
            this.$message.success(ret.message||"未知错误")
          }
        })
      },
      handleSelect(...args) {
        console.log(args)
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
      handleBlur(e, model){
        let value = e.target.value;
        eval(model + " = this.digitUppercase(value)")
      },
      handleHt06003(e) {
        let val = e.target.value;
        if(Number.isNaN(val*1)){
          this.$message.error("请输入正确的数字");
          this.ht06.ht06003 = ""
        }
        if(val* 1 > this.sectionData.roomGpdj){
          this.$message.warning("单价不能超过一房一价审核价格")
          this.ht06.ht06003 = ""
        }
        this.ht06.ht06004 = (this.ht06.ht06002 * this.ht06.ht06003).toFixed(0) + ""
        this.ht06.ht06005 = this.digitUppercase(this.ht06.ht06004)
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

  .priceArea{
    color: $text-weight;
    padding: 10px;
    margin: 20px 0;
    margin-right: 10px;
    background-color: rgba(100, 100, 100, 0.08);
  }
</style>