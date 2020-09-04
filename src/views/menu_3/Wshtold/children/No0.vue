<template>
  <div class="wsysht-item tjysmbItem">
    <div class="hd">合同双方当事人</div>
    <div class="bd" >
      <div class="subTitle">卖方信息</div>
      <InfoListPlus height="30px">
        <InfoListPlusItem name="出卖人">{{e.rwqyxxTitle}}</InfoListPlusItem>
        <InfoListPlusItem name="注册地址">{{e.rwqyxxZcdz}}</InfoListPlusItem>
        <InfoListPlusItem name="营业执照注册号">{{e.rwqyxxYyzh}}</InfoListPlusItem>
        <InfoListPlusItem name="法定代表人">{{e.rwqyxxFaren}}</InfoListPlusItem>
        <InfoListPlusItem name="企业资质证书号">{{e.rwqyxxZzbh}}</InfoListPlusItem>
        <InfoListPlusItem name="企业资质等级">{{e.rwqyxxZzdj}}</InfoListPlusItem>
        <InfoListPlusItem name="邮政编码">{{e.rwqyxxYzbm}}</InfoListPlusItem>
        <InfoListPlusItem name="联系电话">{{e.rwqyxxLxdh}}</InfoListPlusItem>
      </InfoListPlus>
      <InfoListPlus height="30px" :count="2" label-width="100px" style="padding: 0 80px">
        <InfoListPlusItem name="委托代理人"><el-input size="mini" v-model="form.htMfwtdlr" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="通讯地址"><el-input size="mini" v-model="form.htMfwtdldz" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="联系电话"><el-input size="mini" v-model="form.htMfdllxdh" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="邮政编码"><el-input size="mini" v-model="form.htMfdlyzbm" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="委托销售经纪机构"><el-input size="mini" v-model="form.htMfwtdljg" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="营业执照注册号"><el-input size="mini" v-model="form.htMfwtdljgzch" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="注册地址"><el-input size="mini" v-model="form.htMfdljgdz" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="邮政编码"><el-input size="mini" v-model="form.htMfdljgyzbm" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="法定代表人"><el-input size="mini" v-model="form.htMfdljgfr" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="联系电话"><el-input size="mini" v-model="form.htMfdljgddh" type="text"/></InfoListPlusItem>
        <InfoListPlusItem name="合同密码" v-if="false"><el-input size="mini" v-model="form.htPass" type="text"/></InfoListPlusItem>
      </InfoListPlus>
      <el-divider/>
      <div class="subTitle">买方信息</div>
      <InfoListPlus height="30px" :count="2" label-width="100px" style="padding: 0 80px">

        <InfoListPlusItem name="共有性质">
          <el-radio-group v-model="form.htGyqk" size="mini">
            <el-radio label="共同共有">共同共有</el-radio>
            <el-radio label="按份共有">按份共有</el-radio>
            <el-radio label="单独所有">单独所有</el-radio>
          </el-radio-group>
        </InfoListPlusItem>
        <InfoListPlusItem name="购买人">
          <el-button size="mini" type="primary">添加购买人</el-button>
          <el-button size="mini" type="primary">管理购买人</el-button>
        </InfoListPlusItem>
        <InfoListPlusItem name="代理人性质"><el-select size="mini" v-model="form.htMfdlrxz">
          <el-option value="【委托代理人】">【委托代理人】</el-option>
          <el-option value="【其他委托人】">【其他委托人】</el-option>
        </el-select></InfoListPlusItem>
        <InfoListPlusItem name="姓名"><el-input v-model="form.htMfdlrxm" size="mini"/></InfoListPlusItem>
        <InfoListPlusItem name="国籍"><el-input v-model="form.htMfdlgj" size="mini"/></InfoListPlusItem>
        <InfoListPlusItem name="地址"><el-input v-model="form.htMfdldz" size="mini"/></InfoListPlusItem>
        <InfoListPlusItem name="电话"><el-input v-model="form.htMfdldh" size="mini"/></InfoListPlusItem>
        <InfoListPlusItem name="邮政编码"><el-input v-model="form.htMsfdlyzbm" size="mini"/></InfoListPlusItem>

      </InfoListPlus>
    </div>
  </div>
</template>

<script>
import InfoListPlus from "@/components/common/infoListPlus/InfoListPlus";
import InfoListPlusItem from "@/components/common/infoListPlus/InfoListPlusItem";
export default {
name: "No0",
  components: {InfoListPlusItem, InfoListPlus},
  data() {
    return{
      e: {},
      form:{}
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