<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第四章 商品房交付条件与交付手续</div>
    <div class="bd">
      <!--第九条-->
      <div class="item">
        <h4 class="title">第九条 商品房交付条件</h4>
        <p>
          该商品房交付时应当符合下列第1、<input v-model="ht09.ht09005" class="w50" type="text"> 、<input v-model="ht09.ht09001"
                                                                                         class="w50" type="text"> 、
          <input v-model="ht09.ht09002" class="w50"
                 type="text">项所列条件：</p>
        <ul>
          <li>1、该商品房已取得建设工程竣工验收备案证明文件；</li>
          <li>2、该商品房已取得房屋测绘报告；</li>
          <li>3、<input v-model="ht09.ht09003" type="text" class="w400">；</li>
          <li>4、<input v-model="ht09.ht09004" type="text" class="w400">。</li>
          <li>该商品房为住宅的，出卖人还需提供《住宅使用说明书》和《住宅质量保证书》。</li>
        </ul>
      </div>

      <!--第十条-->
      <div class="item">
        <h4 class="title">第十条 商品房相关设施设备交付条件</h4>
        <ul>
          <li>（一）基础设施设备
            <ul class="ul2">
              <li>1.供水、排水：交付时供水、排水配套设施齐全，并与城市公共供水、排水管网连接。使用自建设施供水的，供水的水质符合国家规定的饮用水卫生标准，<br>
                <input type="text" v-model="ht10.ht10001" class="w500">；
              </li>
              <li>2.供电：交付时纳入城市供电网络并正式供电，<br>
                <input type="text" v-model="ht10.ht10002" class="w500">；
              </li>
              <li>3.供暖：交付时供热系统符合供热配建标准，使用城市集中供热的，纳入城市集中供热管网，<br>
                <input type="text" v-model="ht10.ht10003" class="w500">；
              </li>
              <li>4.燃气：交付时完成室内燃气管道的敷设，并与城市燃气管网连接，保证燃气供应，<br>
                <input type="text" v-model="ht10.ht10004" class="w500">；
              </li>
              <li>5.电话通信：交付时线路敷设到户；</li>
              <li>6.有线电视：交付时线路敷设到户；</li>
              <li>7.宽带网络：交付时线路敷设到户。</li>
              <li>以上第1、2、3项由出卖人负责办理开通手续并承担相关费用；第4、5、6、7项需要买受人自行办理开通手续。</li>
              <li>如果在约定期限内基础设施设备未达到交付使用条件，双方同意按照下列第
                <input v-model="ht10.ht10005" type="text" class="w50">种方式处理：</li>
              <li>（1）以上设施中第1、2、3、4项在约定交付日未达到交付条件的，出卖人按照本合同第十二条的约定承担逾期交付责任。</li>
              <ul class="ul2">
                <li>第5项未按时达到交付使用条件的，出卖人按日向买受人支付
                  <input v-model="ht10.ht10006" type="text" class="w100">元的违约金；</li>
                <li>第6项未按时达到交付使用条件的，出卖人按日向买受人支付
                  <input v-model="ht10.ht10007" type="text" class="w100">元的违约金；</li>
                <li>第7项未按时达到交付使用条件的，出卖人按日向买受人支付
                  <input v-model="ht10.ht10008" type="text" class="w100">元的违约金。出卖人采取措施保证相关设施于约定交付日后
                  <input v-model="ht10.ht10009" type="text" class="w100">日之内达到交付使用条件。</li>
              </ul>
              <li>（2）<input v-model="ht10.ht10010" type="text" class="w500">。</li>
            </ul>
          </li>
          <li>（二）公共服务及其他配套设施（以建设工程规划许可为准）
            <ul class="ul2">
              <li> 1. 小区内绿地率：<input v-model="ht10.ht10011" type="text" class="w50">年
                <input v-model="ht10.ht10012" type="text" class="w50">月
                <input v-model="ht10.ht10013" type="text" class="w50">日达到
                <input v-model="ht10.ht10014" type="text" class="w200">；
              </li>
              <li> 2. 小区内非市政道路：<input v-model="ht10.ht10015" type="text" class="w50">年<input v-model="ht10.ht10016" type="text" class="w50">月<input  v-model="ht10.ht10017" type="text"
                                                                                                                                                     class="w50">日达到<input
                v-model="ht10.ht10018" type="text" class="w200">；
              </li>
              <li> 3.规划的车位、车库：<input v-model="ht10.ht10019" type="text" class="w50">年<input v-model="ht10.ht10020" type="text" class="w50">月<input v-model="ht10.ht10021" type="text"
                                                                                                                                                   class="w50">日达到<input
                v-model="ht10.ht10022"type="text" class="w200">；
              </li>
              <li> 4.物业服务用房：<input v-model="ht10.ht10023" type="text" class="w50">年<input v-model="ht10.ht10024" type="text" class="w50">月<input v-model="ht10.ht10025" type="text"
                                                                                                                                                 class="w50">日达到<input
                v-model="ht10.ht10026"type="text" class="w200">；
              </li>
              <li> 5.医疗卫生机构：<input v-model="ht10.ht10027" type="text" class="w50">年<input v-model="ht10.ht10028"  type="text" class="w50">月<input  v-model="ht10.ht10029" type="text"
                                                                                                                                                   class="w50">日达到<input  v-model="ht10.ht10030"
                                                                                                                                                                          type="text" class="w200">；
              </li>
              <li> 6.幼儿园：<input v-model="ht10.ht10031" type="text" class="w50">年<input v-model="ht10.ht10032" type="text" class="w50">月<input v-model="ht10.ht10033" type="text" class="w50">日达到<input
                v-model="ht10.ht10034" type="text" class="w200">；
              </li>
              <li> 7.学校：<input v-model="ht10.ht10035" type="text" class="w50">年<input v-model="ht10.ht10036" type="text" class="w50">月<input v-model="ht10.ht10037" type="text" class="w50">日达到<input
                v-model="ht10.ht10038"type="text" class="w200">；
              </li>
              <li> 8.<input v-model="ht10.ht10039" type="text" class="w800">；</li>
              <li> 9.<input v-model="ht10.ht10040" type="text" class="w800">；</li>
            </ul>
            <p>以上设施未达到上述条件的，双方同意按照以下方式处理：</p>
            <ul class="ul2">
              <li>1.小区内绿地率未达到上述约定条件的，<input v-model="ht10.ht10041" type="text" class="w500">。</li>
              <li>2.小区内非市政道路未达到上述约定条件的，<input v-model="ht10.ht10042" type="text" class="w500">。</li>
              <li>3.规划的车位、车库未达到上述约定条件的，<input v-model="ht10.ht10043" type="text" class="w500">。</li>
              <li>4.物业服务用房未达到上述约定条件的，<input v-model="ht10.ht10044" type="text" class="w500">。</li>
              <li>5.其他设施未达到上述约定条件的，<input v-model="ht10.ht10045" type="text" class="w500">。</li>
              <li>关于本项目内相关设施设备的具体约定见附件五。</li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第十一条-->
      <div class="item">
        <h4 class="title">第十一条 交付时间和手续</h4>
        <ul>
          <li>（一）出卖人应当在 <input v-model="ht11.ht11001" type="text" class="w50">年 <input v-model="ht11.ht11002" type="text" class="w50">月 <input v-model="ht11.ht11003" type="text" class="w50">日前向买受人交付该商品房。
          </li>
          <li>（二）该商品房达到第九条、第十条约定的交付条件后，出卖人应当在交付日期届满前 <input v-model="ht11.ht11004" type="text" class="w50">
            日（不少于10日） 将查验房屋的时间、办理交付手续的时间地点以及应当携带的证件材料的通知书面送达买受人。买受人未收到交付通知书的，以本合同约定的交付日期届满之日为办理交付手续的时间，以该商品房所在地为办理交付手续的地点。
            <p>交付该商品房时，出卖人应当出示满足第九条约定的证明文件。出卖人不出示证明文件或者出示的证明文件不齐全，不能满足第九条约定条件的，买受人有权拒绝接收，由此产生的逾期交付责任由出卖人承担，并按照第十二条处理。</p>
          </li>
          <li>（三）查验房屋
            <ul class="ul2">
              <li>1.办理交付手续前，买受人有权对该商品房进行查验，出卖人不得以缴纳相关税费或者签署物业管理文件作为买受人查验和办理交付手续的前提条件。</li>
              <li>2.买受人查验的该商品房存在下列除地基基础和主体结构外的其他质量问题的，由出卖人按照有关工程和产品质量规范、标准自查验次日起 <input v-model="ht11.ht11005" type="text" class="w50">日内负责修复，并承担修复费用，修复后再行交付。
              </li>
              <li>
                <ul>
                  <li>（1）屋面、墙面、地面渗漏或开裂等；</li>
                  <li>（2）管道堵塞；</li>
                  <li>（3）门窗翘裂、五金件损坏；</li>
                  <li>（4）灯具、电器等电气设备不能正常使用；</li>
                  <li>（5）<input v-model="ht11.ht11006" type="text" class="w500">；</li>
                  <li>（6）<input v-model="ht11.ht11007" type="text" class="w500">。</li>
                </ul>
              </li>
              <li> 3.查验该商品房后，双方应当签署商品房交接单。由于买受人原因导致该商品房未能按期交付的，双方同意按照以下方式处理：
                <ul>
                  <li>（1）<input v-model="ht11.ht11008" type="text" class="w500">。</li>
                  <li>（2）<input v-model="ht11.ht11009" type="text" class="w500">。</li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>

      <!--第十二条-->
      <div class="item">
        <h4 class="title">第十二条 逾期交付责任</h4>
        <p>除不可抗力外，出卖人未按照第十一条约定的时间将该商品房交付买受人的，双方同意按照下列第 <input v-model="ht12.ht12001" type="text" class="w50">种方式处理：</p>
        <ul>
          <li>1.按照逾期时间，分别处理（（1） 和（2） 不作累加） 。
            <ul class="ul2">
              <li>（1）逾期在 <input v-model="ht12.ht12002" type="text" class="w50">日之内（该期限应当不多于第八条第1（1）项中的期限），自第十一条约定的交付期限届满之次日起至实际交付之日止，出卖人按日计算向买受人支付全部房价款万分之
                <input v-model="ht12.ht12003" type="text" class="w50">的违约金（该违约金比率应当不低于第八条第1（1）项中的比率）。
              </li>
              <li>（2）逾期超过 <input v-model="ht12.ht12004" type="text" class="w50">
                日（该期限应当与本条第（1）项中的期限相同）
                后，买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照<input v-model="ht12.ht12005" type="text"
                                                                                                             class="w50">
                %（不低于中国人民银行公布的同期贷款基准利率）计算给付利息；同时，出卖人按照全部房价款的<input v-model="ht12.ht12006" type="text" class="w50">
                %向买受人支付违约金。
                <br>
                买受人要求继续履行合同的，合同继续履行，出卖人按日计算向买受人支付全部房价款万分之<input v-model="ht12.ht12007" type="text" class="w50">
                （该比率应当不低于本条第1（1）项中的比率）的违约金。
              </li>
            </ul>
          </li>
          <li>2. <input v-model="ht12.ht12008" type="text" class="w500">。</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "No3",
    data() {
      return{
        ht09: {
          ht09005: "",
          ht09001: "",
          ht09002: "",
          ht09003: "",
          ht09004: "",
        },  //顺序不对
        ht10: {
          ht10001: "",
          ht10002: "",
          ht10003: "",
          ht10004: "",
          ht10005: "",
          ht10006: "",
          ht10007: "",
          ht10008: "",
          ht10009: "",
          ht10010: "",
          ht10011: "",
          ht10012: "",
          ht10013: "",
          ht10014: "",
          ht10015: "",
          ht10016: "",
          ht10017: "",
          ht10018: "",
          ht10019: "",
          ht10020: "",
          ht10021: "",
          ht10022: "",
          ht10023: "",
          ht10024: "",
          ht10025: "",
          ht10026: "",
          ht10027: "",
          ht10028: "",
          ht10029: "",
          ht10030: "",
          ht10031: "",
          ht10032: "",
          ht10033: "",
          ht10034: "",
          ht10035: "",
          ht10036: "",
          ht10037: "",
          ht10038: "",
          ht10039: "",
          ht10040: "",
          ht10041: "",
          ht10042: "",
          ht10043: "",
          ht10044: "",
          ht10045: "",
        },
        ht11: {
          ht11001: "",
          ht11002: "",
          ht11003: "",
          ht11004: "",
          ht11005: "",
          ht11006: "",
          ht11007: "",
          ht11008: "",
          ht11009: "",
        },
        ht12: {
          ht12001: "",
          ht12002: "",
          ht12003: "",
          ht12004: "",
          ht12005: "",
          ht12006: "",
          ht12007: "",
          ht12008: "",
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