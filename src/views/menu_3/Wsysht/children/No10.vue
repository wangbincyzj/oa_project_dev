<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">
      第三章 商品房价款<span style="color: skyblue">(只读)</span>
    </div>
    <div class="bd">
      <!--附件二-->
      <div class="item">
        <h4 class="title">附件二 关于该商品房共用部位的具体说明</h4>
        <label>
          <textarea  v-model="htFj02001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件三-->
      <div class="item">
        <h4 class="title">附件三 抵押权人同意该商品房转让的证明及关于抵押的相关约定</h4>
        <label>
          <textarea v-model="htFj03001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件四-->
      <div class="item">
        <h4 class="title">附件四 关于该商品房价款的计价方式、总价款、付款方式及期限的具体约定</h4>
        <label>
          <textarea  v-model="htFj04001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件五-->
      <div class="item">
        <h4 class="title">附件五 关于本项目内相关设施、设备的具体约定</h4>
        <label>
          <textarea  v-model="htFj05001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件六-->
      <div class="item">
        <h4 class="title">附件六 关于装饰装修及相关设备标准的约定</h4>
        <p>交付的商品房达不到本附件约定装修标准的，按照本合同第十六条第（三） 款约定处理。出卖人未经双方约定增加的装置、装修、装饰，视为无条件赠送给买受人。</p>
        <p>双方就装饰装修主要材料和设备的品牌、产地、规格、数量等内容约定如下：</p>
        <ul>
          <li>1. 外墙：
            <select v-model="htFj06.htFj06001" name="">
              <option value="瓷砖">瓷砖</option>
              <option value="涂料">涂料</option>
              <option value="玻璃幕墙">玻璃幕墙</option>
              <option value="其他">其他</option>
            </select>
            【<input disabled v-model="htFj06.htFj06002" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06003" type="text" class="w500">。
          </li>
          <li>2. 起居室：
            <ul class="ul2">
              <li>（1） 内墙：
                <select v-model="htFj06.htFj06004" name="">
                  <option value="涂料">涂料</option>
                  <option value="壁纸">壁纸</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06005" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06006" type="text" class="w500">。
              </li>
              <li>（2） 顶棚：
                <select v-model="htFj06.htFj06007" name="">
                  <option value="涂料">涂料</option>
                  <option value="石膏板吊顶">石膏板吊顶</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06008" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06009" type="text" class="w500">。
              </li>
              <li>（3） 室内地面：
                <select name=""  v-model="htFj06.htFj06010">
                  <option value="大理石">大理石</option>
                  <option value="花岗岩">花岗岩</option>
                  <option value="水泥抹面">水泥抹面</option>
                  <option value="实木地板">实木地板</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06011" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06012" type="text" class="w500">。
              </li>
            </ul>
          </li>
          <li>3. 厨房：
            <ul class="ul2">
              <li>（1） 地面：
                <select name=""  v-model="htFj06.htFj06013">
                  <option value="水泥抹面">水泥抹面</option>
                  <option value="瓷砖">瓷砖</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06014" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06015" type="text" class="w500">。
              </li>
              <li>（2） 墙面：
                <select name=""  v-model="htFj06.htFj06016">
                  <option value="耐水腻子">耐水腻子</option>
                  <option value="瓷砖">瓷砖</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06017" type="text" class="w300">】 <input disabled  v-model="htFj06.htFj06018" type="text" class="w500">。
              </li>
              <li>（3） 顶棚：
                <select v-model="htFj06.htFj06019" name="">
                  <option value="水泥抹面">水泥抹面</option>
                  <option value="石膏吊顶">石膏吊顶</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06020" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06021" type="text" class="w500">。
              </li>
              <li>（4） 厨具：<input disabled v-model="htFj06.htFj06022" type="text" class="w800">。</li>
            </ul>
          </li>
          <li>4. 卫生间：
            <ul class="ul2">
              <li>（1） 地面：
                <select v-model="htFj06.htFj06023" name="">
                  <option value="水泥抹面">水泥抹面</option>
                  <option value="瓷砖">瓷砖</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06024" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06025" type="text" class="w500">。
              </li>
              <li>（2） 墙面：
                <select v-model="htFj06.htFj06026" name="">
                  <option value="耐水腻子">耐水腻子</option>
                  <option value="瓷砖">瓷砖</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06027" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06028" type="text" class="w500">。
              </li>
              <li>（3） 顶棚：
                <select v-model="htFj06.htFj06029" name="">
                  <option value="水泥抹面">水泥抹面</option>
                  <option value="石膏吊顶">石膏吊顶</option>
                  <option value="其他">其他</option>
                </select>
                【<input disabled v-model="htFj06.htFj06030" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06031" type="text" class="w500">。
              </li>
              <li>（4） 卫生器具：<input disabled v-model="htFj06.htFj06031a" type="text" class="w800">。</li>
            </ul>
          </li>
          <li>
            5. 阳台：
            <select v-model="htFj06.htFj06032" name="">
              <option value="水泥抹面">水泥抹面</option>
              <option value="铝合金封闭">铝合金封闭</option>
              <option value="断桥铝合金封闭">断桥铝合金封闭</option>
              <option value="不封闭">不封闭</option>
              <option value="其他">其他</option>
            </select>
            【<input disabled v-model="htFj06.htFj06033" type="text" class="w300">】 <input disabled v-model="htFj06.htFj06034" type="text" class="w500">。
          </li>
          <li>6. 电梯：
            <ul class="ul2">
              <li>（1） 品牌：<input disabled v-model="htFj06.htFj06035" type="text" class="w500">；</li>
              <li>（2） 型号：<input disabled v-model="htFj06.htFj06036" type="text" class="w500">；</li>
            </ul>
          </li>
          <li>7.管道：<input disabled v-model="htFj06.htFj06037" type="text" class="w500">。</li>
          <li>8.窗户：<input disabled v-model="htFj06.htFj06038" type="text" class="w500">。</li>
          <li>9.<input disabled v-model="htFj06.htFj06039" type="text" class="w800">。</li>
          <li>10.<input disabled v-model="htFj06.htFj06040" type="text" class="w800">。</li>
        </ul>
      </div>

      <!--附件七-->
      <div class="item">
        <h4 class="title">附件七 关于保修范围、保修期限和保修责任的约定</h4>
        <p>该商品房为住宅的，出卖人应当提供《住宅质量保证书》；该商品房为非住宅的， 双方可参照《住宅质量保证书》中的内容对保修范围、保修期限和保修责任等进行约定。</p>
        <p>该商品房的保修期自房屋交付之日起计算，关于保修期限的约定不应低于《建设 工程质量管理条例》第四十条规定的最低保修期限。</p>
        <ul>
          <li>（一） 保修项目、期限及责任的约定
            <ul class="ul2">
              <li>1. 地基基础和主体结构： 保修期限为：<input disabled  v-model="htFj07.htFj07001" type="text" class="w50">（不得低于设计文件规定的该工程的合理使用年限）；
                <br><input disabled v-model="htFj07.htFj07002" type="text" class="w800">。
              </li>
              <li>2. 屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏： 保修期限为：<input disabled v-model="htFj07.htFj07003" type="text" class="w50">（不得低于5年）；
                <br><input disabled v-model="htFj07.htFj07004"  type="text" class="w800">。
              </li>
              <li>3. 供热、供冷系统和设备： 保修期限为：<input disabled v-model="htFj07.htFj07005" type="text" class="w50">（不得低于2个采暖期、供冷期）；
                <br><input disabled v-model="htFj07.htFj07006" type="text" class="w800">。
              </li>
              <li>4. 电气管线、给排水管道、设备安装： 保修期限为：<input disabled v-model="htFj07.htFj07007" type="text" class="w50">（不得低于2年）；
                <br><input disabled v-model="htFj07.htFj07008" type="text" class="w800">。
              </li>
              <li>5. 装修工程： 保修期限为：<input disabled v-model="htFj07.htFj07009" type="text" class="w50">（不得低于2年）；
                <br><input disabled v-model="htFj07.htFj07010" type="text" class="w800">。
              </li>
              <li>6. <input disabled v-model="htFj07.htFj07011" type="text" class="w800">；</li>
              <li>7. <input disabled v-model="htFj07.htFj07012" type="text" class="w800">；</li>
              <li>8. <input disabled v-model="htFj07.htFj07013" type="text" class="w800">。</li>
            </ul>
          </li>
          <li>（二） 其他约定 <br>
            <textarea  v-model="htFj07.htFj07014" style="display:block;margin-left: 30px;margin-top: 10px; width: 60%; height: 100px"></textarea>
          </li>
        </ul>
      </div>

      <!--附件八-->
      <div class="item">
        <h4 class="title">附件八 关于质量担保的证明</h4>
        <label>
          <textarea v-model="htFj08001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件九-->
      <div class="item">
        <h4 class="title">附件九 关于前期物业管理的约定</h4>
        <label>
          <textarea v-model="htFj09001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件十-->
      <div class="item">
        <h4 class="title">附件十 出卖人关于遮挡或妨碍房屋正常使用情况的说明</h4>
        <label>
          <textarea v-model="htFj10001" class="textarea"></textarea>
        </label>
      </div>

      <!--附件十一-->
      <div class="item">
        <h4 class="title">附件十一 补充协议</h4>
        <label>
          <textarea v-model="htFj11001" class="textarea"></textarea>
        </label>
      </div>
    </div>

  </div>
</template>

<script>
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "No10",
    components: {CenterButton},
    data() {
      return {
        htFj02001: "",  // 附件二
        htFj03001: "",  // 附件三
        htFj04001: "",  // 附件四
        htFj05001: "",  // 附件五
        htFj06: {
          htFj06001: "",
          htFj06002: "",
          htFj06003: "",
          htFj06004: "",
          htFj06005: "",
          htFj06006: "",
          htFj06007: "",
          htFj06008: "",
          htFj06009: "",
          htFj06010: "",
          htFj06011: "",
          htFj06012: "",
          htFj06013: "",
          htFj06014: "",
          htFj06015: "",
          htFj06016: "",
          htFj06017: "",
          htFj06018: "",
          htFj06019: "",
          htFj06020: "",
          htFj06021: "",
          htFj06022: "",
          htFj06023: "",
          htFj06024: "",
          htFj06025: "",
          htFj06026: "",
          htFj06027: "",
          htFj06028: "",
          htFj06029: "",
          htFj06030: "",
          htFj06031: "",
          htFj06031a: "",
          htFj06032: "",
          htFj06033: "",
          htFj06034: "",
          htFj06035: "",
          htFj06036: "",
          htFj06037: "",
          htFj06038: "",
          htFj06039: "",
          htFj06040: "",
        },  // 附件六 顺序不对
        htFj07: {
          htFj07001: "",
          htFj07002: "",
          htFj07003: "",
          htFj07004: "",
          htFj07005: "",
          htFj07006: "",
          htFj07007: "",
          htFj07008: "",
          htFj07009: "",
          htFj07010: "",
          htFj07011: "",
          htFj07012: "",
          htFj07013: "",
          htFj07014: "",
        },
        htFj08001: "",
        htFj09001: "",
        htFj10001: "",
        htFj11001: "",
        htscfj04001: "", //以下为实测合同模板中需要填写的内容（预测无需填写）
        sectionName: "contractAttach"
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
      document.querySelectorAll("textarea").forEach(item=>item.disabled=true)
    },
    methods:{
      handleSave() {
        let form =  this._formUtil(this._data)
        form.htId = this.htId;
        form.name = this.sectionName;
        yushouContractApi.contractComplete(11, form).then(ret=>{
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