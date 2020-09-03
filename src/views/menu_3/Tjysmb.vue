<template>
  <div class="tjysmb">
    <el-button v-if="!updateMode" class="floatBtn" @click="handleSubmit" round icon="el-icon-plus" type="primary">保存模板
    </el-button>
    <el-button v-else class="floatBtn" @click="handleUpdate" round icon="el-icon-check" type="primary">修改模板</el-button>
    <el-button class="floatBtn2" v-if="updateMode" @click="$emit('cancel')" icon="el-icon-close" round type="warning">
      取消修改
    </el-button>
    <div class="menu" @mouseenter="ulActive=true" @mouseleave="ulActive=false" :style="{width: ulActive?'300px':''}">
      <ul>
        <li :class="{active: activeIndex === index}" v-for="(item,index) in nav" @click="handleNavClick(index)">{{!ulActive ? item.title.split(" ")[0]: item.title}}</li>
      </ul>
    </div>

    <div class="content" ref="content" @scroll="handleScroll">
      <h3 class="title">{{ title }}</h3>
      <p class="warning">注意：1、必须要有模板名称，名称中含项目名称，比如”世纪花城住宅模板“；2、添加模板不要一次性添加完成，可以添加几项后保存模板，然后在修改中完善。</p>


      <TjysmbForm style="margin: 20px 0" ref="form1"/>

      <TjysmbItem ref="form2"/>
    </div>

  </div>
</template>

<script>
import TjysmbForm from "@/views/menu_3/Tjysmb/TjysmbForm";
import TjysmbItem from "@/views/menu_3/Tjysmb/TjysmbItem";
import {yushouContractApi} from "@/api/menu_3/yushowContract";

export default {
  name: "Tjysmb",
  props: {
    title: {
      default: "添加合同模板"
    },
    updateMode: {
      default: false,
    },
  },
  data() {
    return {
      htId: null,
      height: "",
      ulActive: false,
      activeIndex: 0,
      nav: [
        {title: "第五条 房屋权利状况承诺"},
        {title: "第八条 逾期付款责任"},
        {title: "第九条 商品房交付条件"},
        {title: "第十条 商品房相关设施设备交付条件"},
        {title: "第十一条 交付时间和手续"},
        {title: "第十二条 逾期交付责任"},
        {title: "第十三条 面积差异处理"},
        {title: "第十四条 规划变更"},
        {title: "第十五条 设计变更"},
        {title: "第十六条 商品房质量"},
        {title: "第十七条 保修责任"},
        {title: "第十八条 质量担保"},
        {title: "第十九条 预售合同登记备案"},
        {title: "第二十条 房屋登记"},
        {title: "第二十一条 前期物业管理"},
        {title: "第二十二条 建筑物区分所有权"},
        {title: "第二十三条 税费"},
        {title: "第二十四条 销售和是使用承诺"},
        {title: "第二十五条 送达"},
        {title: "第二十七条 争议解决方式"},
        {title: "第二十九条 合同生效"},
        {title: "附件二 关于该商品房公用部位的具体说明"},
        {title: "附件三 抵押权人同意该商品房转让的证明及关于抵押的相关约定"},
        {title: "附件四 关于该商品房价款的计价方式、总价款、付款方式及期限的具体约定"},
        {title: "附件五 关于本项目内相关设施、设备的具体规定"},
        {title: "附件六 关于装饰装修及相关设备标准的约定"},
        {title: "附件七 关于保修范围、保修期限和保修责任的约定"},
        {title: "附件八 关于质量担保的证明"},
        {title: "附件九 关于前期物业管理的约定"},
        {title: "附件十 出卖人关于遮挡或妨碍房屋正常使用情况的说明"},
        {title: "附件十一 补充协议"},
        {title: "附件四 出卖人提供的承租人放弃优先购买权的声明"},
      ]
    }
  },
  components: {TjysmbItem, TjysmbForm},
  mounted() {

  },
  methods: {
    mapPosition() {
      let arr = this.$refs.form2.calcPosition();
      arr.forEach((item, index)=>{
        this.$set(this.nav[index], "height", item)
      })
    },
    handleScroll(e) {
      this.mapPosition()
      let index = this.nav.findIndex(item=>
        item.height >= e.target.scrollTop
      )
      this.activeIndex = index
    },
    handleNavClick(index) {
      this.ulActive = false
      this.activeIndex = index
      this.handleTo(this.nav[index].height)
    },
    handleTo(top) {
      this.$refs.content.scrollTo({
        behavior: "smooth",
        top: top
      })
    },
    // 保存方法
    handleSubmit() {
      let hdForm = this._formUtil(this.$refs.form1._data)   // 头部表单
      let itemForm = this._formUtil(this.$refs.form2._data)  // 正文表单
      let submitForm = Object.assign({}, hdForm, itemForm, {kfsRwbh: this.$store.state.rwbh})
      let {htMc, htLdmc, htXmmc} = submitForm;
      if (!(htMc && htLdmc && htXmmc)) {
        this.$message.warning("模板名称,楼栋名称,项目名称为必填项")
        return
      }
      yushouContractApi.addContractTemplate(submitForm).then(ret => {
        if (ret.code === 200) {
          this.$message.success("添加成功");
          this.$router.push("/menu_3/glysmb")
        }
      })

    },
    // 更新方法
    handleUpdate() {
      let hdForm = this._formUtil(this.$refs.form1._data)   // 头部表单
      let itemForm = this._formUtil(this.$refs.form2._data)  // 正文表单
      let submitForm = Object.assign({}, hdForm, itemForm, {kfsRwbh: this.$store.state.rwbh})
      submitForm.htId = this.htId;
      submitForm.kfsRwbh = this.$store.state.rwbh;
      yushouContractApi.updateContractTemplate(submitForm).then(ret => {
        if (ret.code === 200) {
          this.$message.success("修改成功");
          this.$emit("submitSuccess")
        }
      })
    },

    // 数据映射方法
    getFormFromId(id) {
      this.htId = id;
      let hdForm = this._formUtil(this.$refs.form1._data)   // 头部表单
      let itemForm = Object.assign({}, this.$refs.form2._data) // 正文表单
      yushouContractApi.getContractTemplateById({htId: id, htXslx: 0}).then(ret => {
        let sourceData = ret.data;
        this._mapResponseToForm(hdForm, sourceData)
        this._mapResponseToForm(itemForm, sourceData)
        this.$refs.form1.setData(hdForm)   // 注入头部数据
        this.$refs.form2.setData(itemForm)  // 注入主体数据
      })
    },
    _mapResponseToForm(obj, obj2) {  // 递归注入数据
      Object.keys(obj).forEach(item => {
        if (obj[item] instanceof Object) {
          this._mapResponseToForm(obj[item], obj2)
        } else {
          obj[item] = obj2[item]
        }
      })
    },
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

  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";

.menu {
  width: 100px;
  background-color: white;
  flex-shrink: 0;
  transition: all 0.2s;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 3;
  box-shadow: 5px 0 3px rgba(300,300,300,0.2);
  /*&:hover {
    width: 300px;
  }*/
  overflow-y: auto;
  font-size: 12px;
  li{
    font-weight: 600;
    cursor: pointer;
    margin-top: 2px;
    padding: 5px 5px;
    overflow-x: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &.active{
      background: #3a8ee6;
      color: white;
    }
    &:hover{
      background-color: $border-2;
    }
  }
}

.content {
  height: 100%;
  overflow-y: auto;
  padding-left: 120px;
  flex: 1;
}

.tjysmb {
  margin: 0 !important;
  height: 100% !important;
  color: $text-normal;
  overflow-y: auto !important;
  position: relative;

  .floatBtn {
    position: fixed;
    right: 50px;
    bottom: 50px;
  }

  .floatBtn2 {
    position: fixed;
    right: 50px;
    bottom: 100px;
  }

  h3 {
    text-align: center;
    font-weight: 600;
    font-size: 25px;
    line-height: 3em;
  }

  p {
    font-size: 12px;
    color: red;
    line-height: 3;
  }
}
</style>