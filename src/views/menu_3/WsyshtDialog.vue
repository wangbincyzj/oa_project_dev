<template>
  <div>
    <div class="formContainer" v-loading="loading">
      <el-tabs value="second" v-if="baseData">
        <el-tab-pane label="商品房基本情况" name="second">
          <InfoListContainer v-if="g">
            <InfoListItem title="项目名称">{{ g.ht01008 }}</InfoListItem>
            <InfoListItem title="楼栋名称">{{ g.ht03004 }}</InfoListItem>
            <InfoListItem title="所在单元">{{ g.ht03005 }}</InfoListItem>
            <InfoListItem title="房号">{{ g.ht03007 }}</InfoListItem>
            <InfoListItem title="建筑面积">{{ g.ht03009 }}</InfoListItem>
            <InfoListItem title="套内面积">{{ g.ht03010 }}</InfoListItem>
            <InfoListItem title="取得方式">{{ g.ht01001 }}</InfoListItem>
            <InfoListItem title="房屋坐落">{{ g.ht01002 }}</InfoListItem>
            <InfoListItem title="土地证类型">{{ g.ht01003 }}</InfoListItem>
            <InfoListItem title="土地证号">{{ g.ht01004 }}</InfoListItem>
            <InfoListItem title="使用权终止日期">{{ g.ht01007 }}</InfoListItem>
            <InfoListItem title="商品房用途">{{ g.ht03001 }}</InfoListItem>
            <InfoListItem title="总层数">{{ g.ht03003 }}</InfoListItem>
            <InfoListItem title="地上层数">{{ g.ht03016 }}</InfoListItem>
            <InfoListItem title="地下层数">{{ g.ht03017 }}</InfoListItem>
          </InfoListContainer>
        </el-tab-pane>
        <el-tab-pane label="出卖方信息" name="first">
          <InfoListContainer :row-count="4" v-if="e">
            <InfoListItem title="出卖人">{{ e.rwqyxxTitle }}</InfoListItem>
            <InfoListItem title="注册地址">{{ e.rwqyxxZcdz }}</InfoListItem>
            <InfoListItem title="法定代表人">{{ e.rwqyxxFaren }}</InfoListItem>
            <InfoListItem title="联系电话">{{ e.rwqyxxLxdh }}</InfoListItem>
          </InfoListContainer>
        </el-tab-pane>
        <el-tab-pane label="买受人信息" name="secon2">
          <el-table size="mini" :data="baseData.houseOwners">
            <el-table-column label="买受人姓名" align="center" prop="fwsyqrSyqr"/>
            <el-table-column label="买受人证件" align="center" prop="fwsyqrZjhm"/>
            <el-table-column label="买受人电话" align="center" prop="fwsyqrLxdh"/>
            <el-table-column label="买受人相片" align="center"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="商品房价款" name="third">
          <InfoListContainer :row-count="4" v-if="m">
            <InfoListItem title="面积计算方式">{{ m.ht06001 || "建筑面积" }}</InfoListItem>
            <InfoListItem title="房屋面积">{{ m.ht06002 }}平方米</InfoListItem>
            <InfoListItem title="平方米单价">{{ m.ht06003 }}{{m.ht06006}}</InfoListItem>
            <InfoListItem title="商品房总价">{{ m.ht06004 }}{{m.ht06006}}</InfoListItem>
            <InfoListItem title="已付定金">{{ m.ht07002}}{{m.ht07001}}</InfoListItem>
            <InfoListItem title="付款方式">{{ m.ht07006 }}</InfoListItem>
            <template v-if="m.ht07006==='一次性付款'">
              <InfoListItem title="全部价款付款截止">{{ time2 }}</InfoListItem>
            </template>
            <template v-if="m.ht07006==='分期付款'">
              <InfoListItem title="全部价款付款截止">{{ time3 }}</InfoListItem>
              <InfoListItem title="分期期数">{{ m.ht07013 }}</InfoListItem>
              <InfoListItem title="首期房款金额">{{ m.ht07015 }}{{m.ht07014}}</InfoListItem>
              <InfoListItem title="首期付款截止日期">{{ time4 }}</InfoListItem>
            </template>
            <template v-if="m.ht07006==='按揭贷款'">
              <InfoListItem title="贷款方式">{{ m.ht07020 }}</InfoListItem>
              <InfoListItem title="首期房款">{{ m.ht07026 }}元</InfoListItem>
              <InfoListItem title="首期付款截止">{{ time1 }}</InfoListItem>
              <InfoListItem title="余款">{{ m.ht07029}}{{m.ht07025}}</InfoListItem>
              <InfoListItem title="公积金贷款">{{ m.ht07037}}{{m.ht07025}}</InfoListItem>
              <InfoListItem title="商业贷款">{{ m.ht07038}}{{m.ht07025}}</InfoListItem>
            </template>
            <template v-if="m.ht07006==='其他方式'">
              <InfoListItem title="其他方式">{{ m.ht07032 }}</InfoListItem>
            </template>
          </InfoListContainer>
        </el-tab-pane>
      </el-tabs>
    </div>
    <div class="dialog-title">合同提交确认</div>
    <div class="dialog-input myClass">
      <span>合同确认密码</span><input @focus="handleFocus" @blur="handleBlur" v-model="pwd" style="width: 224px; height: 30px" type="text">
    </div>
    <audio ref="audio"  ></audio>
    <ConfirmBtn @click="handleClick"/>
  </div>
</template>

<script>
import {yushouContractApi} from "@/api/menu_3/yushowContract";
import InfoList from "@/components/common/infoList/InfoList";
import InfoListContainer from "@/components/uiComponent/infoList/InfoListContainer";
import InfoListItem from "@/components/uiComponent/infoList/InfoListItem";
import ConfirmBtn from "@/components/uiComponent/confirmBtn/ConfirmBtn";

export default {
  name: "WsyshtDialog",
  components: {ConfirmBtn, InfoListItem, InfoListContainer, InfoList},
  data() {
    return {
      active: 0,
      baseData: {},
      loading: false,
      pwd: "",
      audio: null,
      error: "http://122.226.161.16/amobile.music.tc.qq.com/C400004Fimy419PpsA.m4a?guid=2796982635&vkey=22790868699630B964941FD64F3D87E531A3226605BF49E11CC422F79534A7701515729A11903F675D6BC34F342A82878CC6569030722021&uin=0&fromtag=66",
      custom: "http://122.226.161.16/amobile.music.tc.qq.com/C400001PLl3C4gPSCI.m4a?guid=2796982635&vkey=40F0B42BF6CEF28FFA9236C3334E5A530655FF622DC6FB182BD3CFB32715ED31F2E683A5AB01E676FA058511A911A6FB7F5A56E6B979937B&uin=0&fromtag=66",
    }
  },
  props: {
    htId: ""
  },
  computed: {
    e() {
      return this.baseData ? this.baseData["enterprises"]: {}
    },
    g() {
      return this.baseData ? this.baseData["contractRoomCondition"]: {}
    },
    m() {
      return this.baseData ? this.baseData["contractHousePrice"]: {}
    },
    time1() {  //  按揭贷款首期付款日期
      if (!this.m) {
        return ""
      }
      let resp = ""
      if (this.m.ht07022)
        resp = resp + this.m.ht07022 + "年"
      if (this.m.ht07023)
        resp = resp + this.m.ht07023 + "月"
      if (this.m.ht07024)
        resp = resp + this.m.ht07024 + "日"
      return  resp
    },
    time2() {  //
      if (!this.m) {
        return ""
      }
      let resp = ""
      if (this.m.ht07007)
        resp = resp + this.m.ht07007 + "年"
      if (this.m.ht07008)
        resp = resp + this.m.ht07008 + "月"
      if (this.m.ht07009)
        resp = resp + this.m.ht07009 + "日"
      return  resp
    },
    time3() {  //  分期付款
      if (!this.m) {
        return ""
      }
      let resp = ""
      if (this.m.ht07010)
        resp = resp + this.m.ht07010 + "年"
      if (this.m.ht07008)
        resp = resp + this.m.ht07011 + "月"
      if (this.m.ht07009)
        resp = resp + this.m.ht07012 + "日"
      return  resp
    },
    time4() {  //  分期付款 首期
      if (!this.m) {
        return ""
      }
      let resp = ""
      if (this.m.ht07017)
        resp = resp + this.m.ht07017 + "年"
      if (this.m.ht07018)
        resp = resp + this.m.ht07018 + "月"
      if (this.m.ht07019)
        resp = resp + this.m.ht07019 + "日"
      return  resp
    },
  },

  created() {
    this.fetchDetail()
  },
  methods: {
    fetchDetail() {
      this.loading = true
      yushouContractApi.getContractDetail(this.htId).then(ret => {
        this.loading = false
        this.baseData = ret.data;
      })
    },
    handleClick() {
      if(!this.pwd){
        this.$message.error("请填写合同密码")
      }else{
        yushouContractApi.submitContract(this.htId, 1, this.pwd).then(ret=>{
          console.log(ret)
          if(ret.code===200){
            this.$message.success("上报成功")
            this.$emit("submitSuccess")
          }else{
            this.$refs.audio.src = this.error;
            this.$refs.audio.currentTime = 109
            this.$refs.audio.play()
          }
        })
      }
    },
    handleFocus() {
      this.$refs.audio.src = this.custom
      this.$refs.audio.currentTime = 90
      this.$refs.audio.play()
    },
    handleBlur() {
      this.$refs.audio.pause()
    }
  }
}
</script>

<style scoped lang="scss">
.steps {
  margin: 0 auto;
  width: 80%;
}

.formContainer {
  width: 100%;
  height: 280px;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(192, 196, 204, 1);
  opacity: 1;
  border-radius: 4px;
}

.dialog-title{
  width:126px;
  height:24px;
  font-size:18px;
  font-weight:400;
  line-height:24px;
  color:rgba(96,98,102,1);
  opacity:1;
  margin: 30px 0 24px 12px;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    left: -12px;
    top: 0;
    width: 2px;
    height: 100%;
    background-color: #3a8ee6;
  }
}
.dialog-input{
  margin-bottom: 16px;
  span{
    margin-right: 12px;
    font-size: 12px;
  }
  input{
    font-size: 12px;
  }
}
</style>