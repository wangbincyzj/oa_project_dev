<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">第六条-第七条</div>
    <div class="bd">
      <!--第六条-->
      <div class="item">
        <h4 class="title">第六条 付款方式及期限</h4>
        <ul>
          <li>
            买受人按
            <select v-model="htFkfs">
              <option value="001">一次性付款</option>
              <option value="002" selected="selected">按揭付款</option>
              <option value="003">其他方式</option>
            </select>
            方式按期付款：首付金额:
            <input v-model="FPMoney" class="w200" type="text">
            元 <span style="font-size: 12px; font-weight: 600; color: red">(请务必填写，否则审核不过关)</span>
            <el-input v-model="htFgfssm" type="textarea" style="padding: 0 30px; margin-top: 10px;" :rows="6"/>
          </li>
          <li>
            <InfoListPlus height="30px" :count="3" label-width="80px">
              <InfoListPlusItem name="是否按揭购买">
                <el-radio-group v-model="htSfajgm">
                  <el-radio label="是">是</el-radio>
                  <el-radio label="否">否</el-radio>
                </el-radio-group>
              </InfoListPlusItem>
              <InfoListPlusItem name="是否组合贷款">
                <el-radio-group v-model="htSfzhdk">
                  <el-radio label="是">是</el-radio>
                  <el-radio label="否">否</el-radio>
                </el-radio-group>
              </InfoListPlusItem>
              <InfoListPlusItem/>
              <InfoListPlusItem name="商业银行名称">
                <el-input v-model="htSydkyh" size="mini"/>
              </InfoListPlusItem>
              <InfoListPlusItem name="贷款金额">
                <el-input v-model="htSydkje" size="mini"/>
              </InfoListPlusItem>
              <InfoListPlusItem name="贷款期限">
                <el-row>
                  <el-col :span="11">
                    <el-date-picker v-model="htSydkks" size="mini" style="width: 100%"/>
                  </el-col>
                  <el-col :span="2" style="text-align: center">至</el-col>
                  <el-col :span="11">
                    <el-date-picker v-model="htSydkjs" size="mini" style="width: 100%"/>
                  </el-col>
                </el-row>
              </InfoListPlusItem>
              <InfoListPlusItem name="公积金单位">
                <el-input v-model="htGjjdkmc" size="mini"/>
              </InfoListPlusItem>
              <InfoListPlusItem name="贷款金额">
                <el-input v-model="htGjjdkje" size="mini"/>
              </InfoListPlusItem>
              <InfoListPlusItem name="贷款期限">
                <el-row>
                  <el-col :span="11">
                    <el-date-picker v-model="htGjjdkks" size="mini" style="width: 100%"/>
                  </el-col>
                  <el-col :span="2" style="text-align: center">至</el-col>
                  <el-col :span="11">
                    <el-date-picker v-model="htGjjdkjs" size="mini" style="width: 100%"/>
                  </el-col>
                </el-row>
              </InfoListPlusItem>
            </InfoListPlus>
          </li>
        </ul>
      </div>

      <!--第七条-->
      <div class="item">
        <h4 class="title">第七条 买受人逾期付款的违约责任</h4>
        <ul>
          <li>
            买受人如未按合同规定的时间付款，按下列第
            <input v-model="htYqfkclfs" class="w100" type="text">
            种方式处理。
          </li>
          <li>
            1.按逾期时间，分别处理（不作累加)
          </li>
          <li>
            <ul class="ul2">
              <li>
                （1）逾期在
                <input v-model="htYqts" class="w100" type="text">
                日内，自本合同规定的应付款期限之第二天起至实际全额支付应付款之日止，买受人按日向出卖人支付逾
                期应付款万分之
                <input v-model="htYqwybl" class="w100" type="text">
                的违约金，合同继续履行;
              </li>
              <li>
                （2）逾期超过
                <input v-model="htYqts2" class="w100" type="text">
                日之后，出卖人有权解除合同。出卖人解除合同的，买受人按累计应付款
                <input v-model="htYqwybl2" class="w100" type="text">
                %向出卖人支付违约金。买受人愿意继续履行合同的，经出卖人同意，合同继续履行，自本合同规定的应付款期限之第二天起至实际全额支付应付款之日止，买受人按日向出卖人支付逾期应付款万分之
                <input v-model="htYqwybl3" class="w100" type="text">
                （该比例应不小于第(1)项中的比率）的违约金。
              </li>
              <li>
                本条款中的逾期应付款指依照本合同第六条规定的到期应付款与该期实际已付款的差额；采取分期付款的，按相应的分期应付款与该期的实际已付款的差额确定。
              </li>
            </ul>
          </li>
          <li>
            2.<br>
            <el-input v-model="htYqwysm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";

export default {
  name: "No4",
  components: {InfoListPlusItem, InfoListPlus},
  data() {
    return{
      // 第六条
      htFkfs: "",
      FPMoney: "",
      htFgfssm: "",
      htSfajgm: "",
      htSfzhdk: "",
      htSydkyh: "",
      htSydkje: "",
      htSydkks: "",
      htSydkjs: "",
      htGjjdkmc: "",
      htGjjdkje: "",
      htGjjdkks: "",
      htGjjdkjs: "",
      // 第七条
      htYqfkclfs: "",
      htYqts: "",
      htYqwybl: "",
      htYqts2: "",
      htYqwybl2: "",
      htYqwybl3: "",
      htYqwysm: "",

    }
  }
}
</script>

<style scoped lang="scss">
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
      font-size: 14px;

      li {
        margin-bottom: 22px;
        line-height: 1.5em;
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