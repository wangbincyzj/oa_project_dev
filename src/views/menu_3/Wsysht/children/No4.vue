<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第五章 面积差异处理方式<span style="color: skyblue">(只读)</span></div>
    <div class="bd">
      <div class="item">
        <h4 class="title">第十三条 面积差异处理</h4>
        <p>该商品房交付时，出卖人应当向买受人出示房屋测绘报告，并向买受人提供该商品房的面积实测数据（以下简称实测面积）。实测面积与第三条载明的预测面积发生误差的，双方同意按照第 <input  type="text"
                                                                                                      v-model="ht13.ht13001" class="w50">
          种方式处理。</p>
        <ul>
          <li>1.根据第六条按照套内建筑面积计价的约定，双方同意按照下列原则处理：
            <ul class="ul2">
              <li>（1）套内建筑面积误差比绝对值在3%以内（含3%）的，据实结算房价款；</li>
              <li>（2）套内建筑面积误差比绝对值超出3%时，买受人有权解除合同。</li>
              <li>买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照 <input v-model="ht13.ht13002" type="text"
                                                                                                    class="w50">
                %（不低于中国人民银行公布的同期贷款基准利率） 计算给付利息。
              </li>
              <li>买受人选择不解除合同的，实测套内建筑面积大于预测套内建筑面积时，套内建筑面积误差比在3%以内（含3%）部分的房价款由买受人补足；超出3%
                部分的房价款由出卖人承担，产权归买受人所有。实测套内建筑面积小于预测套内建筑面积时，套内建筑面积误差比绝对值在3%以内（含3%）部分的房价款由出卖人返还买受人；绝对值超出3%部分的房价款由出卖人双倍返还买受人。
              </li>
              <li>套内建筑面积误差比＝(实测套内建筑面积－预测套内建筑面积)/预测套内建筑面积×100%</li>
            </ul>
          </li>
          <li>2.根据第六条按照建筑面积计价的约定，双方同意按照下列原则处理：
            <ul>
              <li>（1）建筑面积、套内建筑面积误差比绝对值均在3%以内（含3%） 的，根据实测建筑面积结算房价款；</li>
              <li>（2）建筑面积、套内建筑面积误差比绝对值其中有一项超出3%时，买受人有权解除合同。</li>
              <li>买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照 <input  v-model="ht13.ht13003" type="text"
                                                                                                    class="w50">
                %（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。
              </li>
              <li>买受人选择不解除合同的，实测建筑面积大于预测建筑面积时，建筑面积误差比在3%以内（含3%）
                部分的房价款由买受人补足，超出3%部分的房价款由出卖人承担，产权归买受人所有。实测建筑面积小于预测建筑面积时，建筑面积误差比绝对值在3%以内（含3%）
                部分的房价款由出卖人返还买受人；绝对值超出3%部分的房价款由出卖人双倍返还买受人。
              </li>
              <li>建筑面积误差比＝(实测建筑面积－预测建筑面积)/预测建筑面积×100%</li>
              <li>（3）因设计变更造成面积差异，双方不解除合同的，应当签署补充协议。</li>
            </ul>
          </li>
          <li> 3. 根据第六条按照套计价的，出卖人承诺在房屋平面图中标明详细尺寸，并约定误差范围。该商品房交付时，套型与设计图纸不一致或者相关尺寸超出约定的误差范围，双方约定如下:
            <p><input v-model="ht13.ht13004" type="text" class="w800">。</p>
          </li>
          <li>4. 双方自行约定：
            <p><input v-model="ht13.ht13005" type="text" class="w800">。</p>
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
    name: "No4",
    components: {CenterButton},
    data() {
      return{
        ht13: {
          ht13001: "",
          ht13002: "",
          ht13003: "",
          ht13004: "",
          ht13005: "",
        },
        sectionName: "contractAreaDifference"
      }
    },
    props: ["htId", "oriData"],
    computed: {
      sectionData() {
        return this.oriData[this.sectionName]
      }
    },
    created() {
      this.mapData();
    },
    mounted() {
      document.querySelectorAll("input").forEach(item=>item.disabled=true)
    },
    methods:{
      handleSave() {
        let form =  this._formUtil(this._data)
        form.htId = this.htId;
        form.name = this.sectionName;
        yushouContractApi.contractComplete(5, form).then(ret=>{
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