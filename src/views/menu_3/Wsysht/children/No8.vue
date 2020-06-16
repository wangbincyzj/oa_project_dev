<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第九章 前期物业管理<span style="color: skyblue">(只读)</span></div>
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
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No8",
    components: {CenterButton},
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
        sectionName: "contractEstateManagement"
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
        yushouContractApi.contractComplete(9, form).then(ret=>{
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