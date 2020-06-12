<template>
  <div class="tjysmbItems">
    <!------------------------------------------------->
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

    <!--第十三条-->
    <div class="item">
      <h4 class="title">第十三条 面积差异处理</h4>
      <p>该商品房交付时，出卖人应当向买受人出示房屋测绘报告，并向买受人提供该商品房的面积实测数据（以下简称实测面积）。实测面积与第三条载明的预测面积发生误差的，双方同意按照第 <input type="text"
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
            <li>买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照 <input v-model="ht13.ht13003" type="text"
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

    <!--第十九条-->
    <div class="item">
      <h4 class="title">第十九条 预售合同登记备案</h4>
      <ul>
        <li>（一）出卖人应当自本合同签订之日起【<input v-model="ht19.ht19001" type="text" class="w50">
          日内】（不超过30日）办理商品房预售合同登记备案手续，并将本合同登记备案情况告知买受人。
        </li>
        <li>（二）有关预售合同登记备案的其他约定如下：
          <ul class="ul2">
            <li><input v-model="ht19.ht19002" type="text" class="w500">；</li>
            <li><input v-model="ht19.ht19003" type="text" class="w500">。</li>
          </ul>
        </li>
      </ul>
    </div>

    <!--第二十条-->
    <div class="item">
      <h4 class="title">第二十条 房屋登记</h4>
      <ul>
        <li>（一）双方同意共同向房屋登记机构申请办理该商品房的房屋所有权转移登记。</li>
        <li>（二）因出卖人的原因，买受人未能在该商品房交付之日起 <input v-model="ht20.ht20001" type="text" class="w50">
          日内取得该商品房的房屋所有权证书的，双方同意按照下列第 <input v-model="ht20.ht20002" type="text" class="w50">
          种方式处理：
          <ul class="ul2">
            <li>1. 买受人有权解除合同。买受人解除合同的，应当书面通知出卖人。出卖人应当自解除合同通知送达之日起15日内退还买受人已付全部房款（含已付贷款部分），并自买受人付款之日起，按照
              <input v-model="ht20.ht20003" type="text" class="w50">%（不低于中国人民银行公布的同期贷款基准利率）计算给付利息。买受人不解除合同的，自买受人应当完成房屋所有权登记的期限届满之次日起至实际完成房屋所有权登记之日止，出卖人按日计算向买受人支付全部房价款万分之
              <input v-model="ht20.ht20004" type="text" class="w50">的违约金。
            </li>
            <li>2. <input v-model="ht20.ht20005" type="text" class="w500">。</li>
          </ul>
        </li>
        <li>（三）因买受人的原因未能在约定期限内完成该商品房的房屋所有权转移登记的，出卖人不承担责任。</li>
      </ul>
    </div>

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

    <!--第二十二条-->
    <div class="item">
      <h4 class="title">第二十二条 建筑物区分所有权</h4>
      <ul>
        <li>（一）买受人对其建筑物专有部分享有占有、使用、收益和处分的权利。</li>
        <li>（二）以下部位归业主共有：
          <ul class="ul2">
            <li>1.建筑物的基础、承重结构、外墙、屋顶等基本结构部分，通道、楼梯、大堂等公共通行部分，消防、公共照明等附属设施、设备，避难层、设备层或者设备间等结构部分；</li>
            <li>2.该商品房所在建筑区划内的道路（属于城镇公共道路的除外）、绿地（属于城镇公共绿地或者明示属于个人的除外）、占用业主共有的道路或者其他场地用于停放汽车的车位、物业服务用房；</li>
            <li>3. <input v-model="ht22.ht22001" type="text" class="w800">。</li>
          </ul>
        </li>
        <li>（三）双方对其他配套设施约定如下：
          <ul class="ul2">
            <li>1.规划的车位、车库：<input v-model="ht22.ht22002" type="text" class="w500">；</li>
            <li>2.会所：<input v-model="ht22.ht22003" type="text" class="w500">；</li>
            <li>3.<input v-model="ht22.ht22004" type="text" class="w800">。</li>
          </ul>
        </li>
      </ul>
    </div>

    <!--第二十三条-->
    <div class="item">
      <h4 class="title">第二十三条 税费</h4>
      <p>双方应当按照国家的有关规定，向相应部门缴纳因该商品房买卖发生的税费。因预测面积与实测面积差异，导致买受人不能享受税收优惠政策而增加的税收负担，由
        <input v-model="ht23.ht23001" type="text" class="w500">承担。</p>
    </div>

    <!--第二十四条-->
    <div class="item">
      <h4 class="title">第二十四条 销售和使用承诺</h4>
      <ul>
        <li>1.出卖人承诺不采取分割拆零销售、返本销售或者变相返本销售的方式销售商品房；不采取售后包租或者变相售后包租的方式销售未竣工商品房。</li>
        <li>2.出卖人承诺按照规划用途进行建设和出售，不擅自改变该商品房使用性质，并按照规划用途办理房屋登记。出卖人不得擅自改变与该商品房有关的共用部位和设施的使用性质。</li>
        <li>3.出卖人承诺对商品房的销售，不涉及依法或者依规划属于买受人共有的共用部位和设施的处分。</li>
        <li>4.出卖人承诺已将遮挡或妨碍房屋正常使用的情况告知买受人。具体内容见附件十。</li>
        <li>5.买受人使用该商品房期间，不得擅自改变该商品房的用途、建筑主体结构和承重结构。</li>
        <li>6. <input v-model="ht24.ht24001" type="text" class="w800">。</li>
        <li>7. <input v-model="ht24.ht24002" type="text" class="w800">。</li>
      </ul>
    </div>

    <!--第二十五条-->
    <div class="item">
      <h4 class="title">第二十五条 送达</h4>
      <p>
        出卖人和买受人保证在本合同中记载的通讯地址、联系电话均真实有效。任何根据本合同发出的文件，均应采用书面形式，以
        <select name=""  v-model="ht25.ht25001">
          <option value="邮政快递">邮政快递</option>
          <option value="邮寄挂号信">邮寄挂号信</option>
          <option value="其他">其他</option>
        </select>
        方式送达对方。任何一方变更通讯地址、联系电话的，应在变更之日起 <input  v-model="ht25.ht25002" type="text" class="w50">
        日内书面通知对方。变更的一方未履行通知义务导致送达不能的，应承担相应的法律责任。
      </p>

    </div>

    <!--第二十七条-->
    <div class="item">
      <h4 class="title">第二十七条 争议解决方式</h4>
      <p>本合同在履行过程中发生的争议，由双方当事人协商解决，也可通过消费者协会等相关机构调解；或按照下列第<input  v-model="ht27.ht27001" type="text" class="w50">种方式解决：</p>
      <ul>
        <li>1.依法向房屋所在地人民法院起诉。</li>
        <li>2.提交 <input v-model="ht27.ht27002" type="text" class="w500">仲裁委员会仲。</li>
      </ul>
    </div>

    <!--第二十九条-->
    <div class="item">
      <h4 class="title">第二十九条 合同生效</h4>
      <ul>
        <li>本合同自双方签字或盖章之日起生效。本合同的解除应当采用书面形式。</li>
        <li>本合同及附件共
          <input v-model="ht29.ht29001" type="text" class="w50">页，一式
          <input v-model="ht29.ht29002" type="text" class="w50">份，其中出卖人
          <input v-model="ht29.ht29003" type="text" class="w50">份， 买受人
          <input v-model="ht29.ht29004" type="text" class="w50">份，
          【<input v-model="ht29.ht29005" type="text" class="w100">】<input v-model="ht29.ht29006" type="text" class="w50">份，
          【<input v-model="ht29.ht29007" type="text" class="w100">】<input v-model="ht29.ht29008" type="text" class="w50">份，
          【<input v-model="ht29.ht29009" type="text" class="w100">】<input v-model="ht29.ht29010" type="text" class="w50">份，
          【<input v-model="ht29.ht29011" type="text" class="w100">】<input v-model="ht29.ht29012" type="text" class="w50">份，
          【<input v-model="ht29.ht29013" type="text" class="w100">】<input v-model="ht29.ht29014" type="text" class="w50">份。合同附件与本合同具有同等法律效力。
        </li>
      </ul>
    </div>

    <!------------------------------------------------->
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
          【<input v-model="htFj06.htFj06002" type="text" class="w300">】 <input v-model="htFj06.htFj06003" type="text" class="w500">。
        </li>
        <li>2. 起居室：
          <ul class="ul2">
            <li>（1） 内墙：
              <select v-model="htFj06.htFj06004" name="">
                <option value="涂料">涂料</option>
                <option value="壁纸">壁纸</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06005" type="text" class="w300">】 <input v-model="htFj06.htFj06006" type="text" class="w500">。
            </li>
            <li>（2） 顶棚：
              <select v-model="htFj06.htFj06007" name="">
                <option value="涂料">涂料</option>
                <option value="石膏板吊顶">石膏板吊顶</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06008" type="text" class="w300">】 <input v-model="htFj06.htFj06009" type="text" class="w500">。
            </li>
            <li>（3） 室内地面：
              <select name=""  v-model="htFj06.htFj06010">
                <option value="大理石">大理石</option>
                <option value="花岗岩">花岗岩</option>
                <option value="水泥抹面">水泥抹面</option>
                <option value="实木地板">实木地板</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06011" type="text" class="w300">】 <input v-model="htFj06.htFj06012" type="text" class="w500">。
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
              【<input v-model="htFj06.htFj06014" type="text" class="w300">】 <input v-model="htFj06.htFj06015" type="text" class="w500">。
            </li>
            <li>（2） 墙面：
              <select name=""  v-model="htFj06.htFj06016">
                <option value="耐水腻子">耐水腻子</option>
                <option value="瓷砖">瓷砖</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06017" type="text" class="w300">】 <input  v-model="htFj06.htFj06018" type="text" class="w500">。
            </li>
            <li>（3） 顶棚：
              <select v-model="htFj06.htFj06019" name="">
                <option value="水泥抹面">水泥抹面</option>
                <option value="石膏吊顶">石膏吊顶</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06020" type="text" class="w300">】 <input v-model="htFj06.htFj06021" type="text" class="w500">。
            </li>
            <li>（4） 厨具：<input v-model="htFj06.htFj06022" type="text" class="w800">。</li>
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
              【<input v-model="htFj06.htFj06024" type="text" class="w300">】 <input v-model="htFj06.htFj06025" type="text" class="w500">。
            </li>
            <li>（2） 墙面：
              <select v-model="htFj06.htFj06026" name="">
                <option value="耐水腻子">耐水腻子</option>
                <option value="瓷砖">瓷砖</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06027" type="text" class="w300">】 <input v-model="htFj06.htFj06028" type="text" class="w500">。
            </li>
            <li>（3） 顶棚：
              <select v-model="htFj06.htFj06029" name="">
                <option value="水泥抹面">水泥抹面</option>
                <option value="石膏吊顶">石膏吊顶</option>
                <option value="其他">其他</option>
              </select>
              【<input v-model="htFj06.htFj06030" type="text" class="w300">】 <input v-model="htFj06.htFj06031" type="text" class="w500">。
            </li>
            <li>（4） 卫生器具：<input v-model="htFj06.htFj06031a" type="text" class="w800">。</li>
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
          【<input v-model="htFj06.htFj06033" type="text" class="w300">】 <input v-model="htFj06.htFj06034" type="text" class="w500">。
        </li>
        <li>6. 电梯：
          <ul class="ul2">
            <li>（1） 品牌：<input v-model="htFj06.htFj06035" type="text" class="w500">；</li>
            <li>（2） 型号：<input v-model="htFj06.htFj06036" type="text" class="w500">；</li>
          </ul>
        </li>
        <li>7.管道：<input v-model="htFj06.htFj06037" type="text" class="w500">。</li>
        <li>8.窗户：<input v-model="htFj06.htFj06038" type="text" class="w500">。</li>
        <li>9.<input v-model="htFj06.htFj06039" type="text" class="w800">。</li>
        <li>10.<input v-model="htFj06.htFj06040" type="text" class="w800">。</li>
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
            <li>1. 地基基础和主体结构： 保修期限为：<input v-model="htFj07.htFj07001" type="text" class="w50">（不得低于设计文件规定的该工程的合理使用年限）；
              <br><input v-model="htFj07.htFj07002" type="text" class="w800">。
            </li>
            <li>2. 屋面防水工程、有防水要求的卫生间、房间和外墙面的防渗漏： 保修期限为：<input v-model="htFj07.htFj07003" type="text" class="w50">（不得低于5年）；
              <br><input v-model="htFj07.htFj07004"  type="text" class="w800">。
            </li>
            <li>3. 供热、供冷系统和设备： 保修期限为：<input v-model="htFj07.htFj07005" type="text" class="w50">（不得低于2个采暖期、供冷期）；
              <br><input v-model="htFj07.htFj07006" type="text" class="w800">。
            </li>
            <li>4. 电气管线、给排水管道、设备安装： 保修期限为：<input v-model="htFj07.htFj07007" type="text" class="w50">（不得低于2年）；
              <br><input v-model="htFj07.htFj07008" type="text" class="w800">。
            </li>
            <li>5. 装修工程： 保修期限为：<input v-model="htFj07.htFj07009" type="text" class="w50">（不得低于2年）；
              <br><input v-model="htFj07.htFj07010" type="text" class="w800">。
            </li>
            <li>6. <input v-model="htFj07.htFj07011" type="text" class="w800">；</li>
            <li>7. <input v-model="htFj07.htFj07012" type="text" class="w800">；</li>
            <li>8. <input v-model="htFj07.htFj07013" type="text" class="w800">。</li>
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

    <!--以下为实测合同模板中需要填写的内容（预测无需填写）-->
    <div class="item">
      <h4 class="title">
        以下为实测合同模板中需要填写的内容（预测无需填写）<br>
        附件四 出卖人提供的承租人放弃优先购买权的声明
      </h4>
      <label>
        <textarea v-model="htscfj04001" class="textarea"></textarea>
      </label>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TjysmbItem",
    data() {
      return {
        ht05: {
          ht05001: "",
          ht05002: "",
          ht05003: "",
          ht05004: "",
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
        ht13: {
          ht13001: "",
          ht13002: "",
          ht13003: "",
          ht13004: "",
          ht13005: "",
        },
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
        ht19: {
          ht19001: "",
          ht19002: "",
          ht19003: "",
        },
        ht20: {
          ht20001: "",
          ht20002: "",
          ht20003: "",
          ht20004: "",
          ht20005: "",
        },
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
        ht22: {
          ht22001: "",
          ht22002: "",
          ht22003: "",
          ht22004: "",
        },
        ht23: {
          ht23001: ""
        },
        ht24: {
          ht24001: "",
          ht24002: "",
        },
        ht25: {
          ht25001: "",
          ht25002: "",
        },
        ht27: {
          ht27001: "",
          ht27002: "",
        },
        ht29: {
          ht29001: "",
          ht29002: "",
          ht29003: "",
          ht29004: "",
          ht29005: "",
          ht29006: "",
          ht29007: "",
          ht29008: "",
          ht29009: "",
          ht29010: "",
          ht29011: "",
          ht29012: "",
          ht29013: "",
          ht29014: "",
        },
        //////////////////////////////////附件
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
        htscfj04001: "" //以下为实测合同模板中需要填写的内容（预测无需填写）
      }
    },
    methods:{
      setData(_form){
        Object.entries(_form).forEach(([k,v])=>{
          this[k] = v;
        })
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