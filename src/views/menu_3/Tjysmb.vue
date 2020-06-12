<template>
  <div class="tjysmb">
    <el-button v-if="!updateMode" class="floatBtn" @click="handleSubmit" round icon="el-icon-plus" type="primary">保存模板</el-button>
    <el-button v-else class="floatBtn" @click="handleUpdate" round icon="el-icon-check" type="primary">修改模板</el-button>
    <el-button class="floatBtn2" v-if="updateMode" @click="$emit('cancel')" icon="el-icon-close" round type="warning">
      取消修改
    </el-button>

    <h3 class="title">{{title}}</h3>
    <p class="warning">注意：1、必须要有模板名称，名称中含项目名称，比如”世纪花城住宅模板“；2、添加模板不要一次性添加完成，可以添加几项后保存模板，然后在修改中完善。</p>

    <TjysmbForm style="margin: 20px 0" ref="form1"/>

    <TjysmbItem ref="form2"/>

    <div style="margin-top: 200px"></div>
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
        htId: null
      }
    },
    components: {TjysmbItem, TjysmbForm},
    methods: {
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
          if(ret.code===200){
            this.$message.success("添加成功");
            this.$router.push("/menu_3/glysmb")
          }else{
            this.$message.error(ret.message||"未知错误")
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
        yushouContractApi.updateContractTemplate(submitForm).then(ret=>{
          if(ret.code===200){
            this.$message.success("修改成功");
            this.$emit("submitSuccess")
          }else{
            this.$message.error(ret.message||"未知错误")
          }
        })
      },

      // 数据映射方法
      getFormFromId(id) {
        this.htId = id;
        let hdForm = this._formUtil(this.$refs.form1._data)   // 头部表单
        let itemForm = Object.assign({}, this.$refs.form2._data) // 正文表单
        yushouContractApi.getContractTemplateById({htId: id, htXslx: 0}).then(ret=>{
          let sourceData = ret.data;
          this._mapResponseToForm(hdForm, sourceData)
          this._mapResponseToForm(itemForm, sourceData)
          this.$refs.form1.setData(hdForm)   // 注入头部数据
          this.$refs.form2.setData(itemForm)  // 注入主体数据
        })
      },
      _mapResponseToForm(obj, obj2) {  // 递归注入数据
        Object.keys(obj).forEach(item=>{
          if(obj[item] instanceof Object){
            this._mapResponseToForm(obj[item], obj2)
          }else{
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

  .tjysmb {
    padding: 30px 50px;
    color: $text-normal;

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