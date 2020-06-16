<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第六章 规划设计变更<span style="color: skyblue">(只读)</span></div>
    <div class="bd">
      <!--第十四条-->
      <div class="item">
        <h4 class="title">第十四条 规划变更</h4>
        <ul>
          <li>（一）出卖人应当按照城乡规划主管部门核发的建设工程规划许可证规定的条件建设商品房，不得擅自变更。
            <p>
              双方签订合同后，涉及该商品房规划用途、面积、容积率、绿地率、基础设施、公共服务及其他配套设施等规划许可内容经城乡规划主管部门批准变更的，出卖人应当在变更确立之日起10日内将书面通知送达买受人。出卖人未在规定期限内通知买受人的，买受人有权解除合同。</p>
          </li>
          <li>（二）买受人应当在通知送达之日起15日内做出是否解除合同的书面答复。买受人逾期未予以书面答复的，视同接受变更。</li>
          <li>（三）买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
            <input v-model="ht14.ht14001" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息；同时，出卖人按照全部房价款的
            <input v-model="ht14.ht14002" type="text" class="w50">%向买受人支付违约金。买受人不解除合同的，有权要求出卖人赔偿由此造成的损失，双方约定如下：
            <input v-model="ht14.ht14003" type="text" class="w500">。
          </li>
        </ul>
      </div>

      <!--第十五条-->
      <div class="item">
        <h4 class="title">第十五条 设计变更</h4>
        <ul>
          <li>
            （一）双方签订合同后，出卖人按照法定程序变更建筑工程施工图设计文件，涉及下列可能影响买受人所购商品房质量或使用功能情形的，出卖人应当在变更确立之日起10日内将书面通知送达买受人。出卖人未在规定期限内通知买受人的，买受人有权解除合同。
            <ul class="ul2">
              <li>1. 该商品房结构形式、户型、空间尺寸、朝向；</li>
              <li>2. 供热、采暖方式；</li>
              <li>3. <input  v-model="ht15.ht15001" type="text" class="w500"></li>
              <li>4. <input v-model="ht15.ht15002" type="text" class="w500"></li>
              <li>5. <input v-model="ht15.ht15003" type="text" class="w500"></li>
            </ul>
          </li>
          <li>（二）买受人应当在通知送达之日起15日内做出是否解除合同的书面答复。买受人逾期未予以书面答复的，视同接受变更。</li>
          <li>（三）买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
            <input v-model="ht15.ht15004" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息；同时，出卖人按照全部房价款的
            <input v-model="ht15.ht15005" type="text" class="w50">%向买受人支付违约金。买受人不解除合同的，有权要求出卖人赔偿由此造成的损失，双方约定如下：
            <p><input v-model="ht15.ht15006" type="text" class="w800">。</p>
          </li>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No5",
    components: {CenterButton},
    data() {
      return{
        ht14: {
          ht14001: "",
          ht14002: "",
          ht14003: "",
        },
        ht15: {
          ht15001: "",
          ht15002: "",
          ht15003: "",
          ht15004: "",
          ht15005: "",
          ht15006: "",
        },
        sectionName: "contractPlanningChanges"
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
        yushouContractApi.contractComplete(6, form).then(ret=>{
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