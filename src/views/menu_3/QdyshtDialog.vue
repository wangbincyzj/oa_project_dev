<template>
  <div class="myForm-mb5 myDialog">
    <el-form
      v-loading="loading"
      label-position="right"
      label-width="150px"
      size="mini"
      disabled
      inline
      :model="form">
      <el-form-item label="所在项目">
        <el-input v-model="form.xmxxMc"></el-input>
      </el-form-item>

      <el-form-item label="所在楼栋">
        <el-input v-model="form.ldLdmc"></el-input>
      </el-form-item>

      <el-form-item label="房号">
        <el-input v-model="form.roomFh"></el-input>
      </el-form-item>

      <el-form-item label="层高">
        <el-input v-model="form.roomCg"></el-input>
      </el-form-item>

      <el-form-item label="所在单元">
        <el-select v-model="form.roomSzdy" placeholder="请选择开始单元">
          <el-option v-for="i in unitLimit" :label="i" :value="i"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="房屋用途">
        <el-select v-model="form.roomSjyt" placeholder="请选择房屋用途">
          <el-option v-for="i in fwyt" :label="i" :value="i"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="所在层">
        <el-select v-model="form.roomSzc" placeholder="请选择结束层数">
          <el-option v-for="i in floorLimit" :label="i" :value="i"></el-option>
        </el-select>
      </el-form-item>

      <!--自定层明-->
      <!--<el-form-item label="自定层名">
        <el-input v-model="form.roomZdcm"></el-input>
      </el-form-item>-->

      <el-form-item label="建筑面积">
        <el-input v-model="form.roomJzmj"></el-input>
      </el-form-item>

      <el-form-item label="套内面积">
        <el-input v-model="form.roomTnjzmj"></el-input>
      </el-form-item>

      <el-form-item label="分摊面积">
        <el-input v-model="form.roomFtmj"></el-input>
      </el-form-item>

      <!--可售状态-->
      <el-form-item label="可售状态">
        <el-select v-model="form.roomKszt" placeholder="请选择可售状态">
          <el-option label="可售" :value="1"></el-option>
          <el-option label="不可售" :value="2"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="封闭阳台数">
        <el-input v-model="form.roomFbytgs"></el-input>
      </el-form-item>
      <el-form-item label="封闭阳台面积">
        <el-input v-model="form.roomFbytmj"></el-input>
      </el-form-item>
      <el-form-item label="非封闭阳台数">
        <el-input v-model="form.roomFfbytgs"></el-input>
      </el-form-item>
      <el-form-item label="非封闭阳台面积">
        <el-input v-model="form.roomFfbytmj"></el-input>
      </el-form-item>
      <el-form-item label="房屋结构">
        <el-select v-model="form.roomFwjg" placeholder="请选择房屋结构">
          <el-option v-for="i in fwjg" :label="i" :value="i"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="房屋性质">
        <el-select v-model="form.roomFwxz" placeholder="请选择房屋性质">
          <el-option v-for="i in fwxz" :label="i" :value="i"></el-option>
        </el-select>
      </el-form-item>

    </el-form>
    <el-form
      v-loading="loading"
      label-position="right"
      label-width="150px"
      size="mini"
      v-if="templateList.length"
      inline>
      <el-form-item label="选择合同模板" required>
        <el-select v-model="selectedTemplate" clearable>
          <el-option v-for="item in templateList" :label="item.htMc" :value="item.htId"></el-option>
        </el-select>
      </el-form-item>
    </el-form>
    <div style="display: flex; justify-content: center; margin-top: 10px">
      <el-button v-if="templateList.length" @click="handleSave" size="mini" type="primary">签订合同</el-button>
    </div>
  </div>
</template>

<script>
  import {lpInfoApi} from "@/api/menu_2/lpInfo";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "QdyshtDialog",
    components: {CenterButton},
    props: ["ldxx"],
    data() {
      return {
        loading: false,
        buttonLoading: false,
        buildingInfo: null,
        fwyt: ["住宅", "商住", "商业", "地下室(住宅)", "车库", "其他"],
        fwhx: ["五室二厅", "四室二厅", "三室二厅", "三室一厅", "二室二厅", "二室一厅"],
        fwjg: ["混合结构", "钢结构", "钢及钢筋混凝土结构", "钢筋混泥土结构", "剪力墙结构", "砖木结构", "其他结构"],
        fwxz: ["商品房", "存量房", "自建房", "限价商品房", "享受政策优惠房", "经济适用房", "集资合作建房",
          "房改房", "公租房上市半产权", "保障房", "拆迁用户", "成本价购房", "其它",
        ],
        form: {},
        ldId: null,
        roomId: null,
        templateList: [],
        selectedTemplate: null
      }
    },
    computed: {
      unitLimit() {
        return this.buildingInfo ? this.buildingInfo.ldxxDys : null
      },
      roomLimit() {
        return this.buildingInfo ? this.buildingInfo.ldxxYtjh : null
      },
      floorLimit() {
        return this.buildingInfo ? this.buildingInfo.ldxxDscs : null
      },
    },
    methods: {
      reset() {
        this.form = {};
        this.buildingInfo = null;
        this.roomId = null;
        this.ldId = null;
      },
      // 获取房屋限制
      fetchBuildingDetail(id) {
        this.loading = true;
        this.buttonLoading = true;
        tjldxmApi.getBuildingDetail(id).then(ret => {
          this.loading = false;
          this.buttonLoading = false;
          this.buildingInfo = ret.data;
        })
      },
      fetchRoomDetail(ldId, roomId) {
        this.ldId = ldId;
        this.roomId = roomId;
        lpInfoApi.getRoomDetail(roomId).then(ret => {
          console.log(ret)
          this.form = ret.data
        })
      },
      handleSave() {
        // 签订合同
        if(!this.selectedTemplate){
          this.$message.error("请先选择合同模板"); return;
        }
        yushouContractApi.addContract({htId:this.selectedTemplate, roomId:this.roomId}).then(ret=>{
          if(ret.code===200){
            this.$message.success("签订成功");
            this.$emit("submitSuccess")
          }
        })
      },
      fetchTemplateList() {
        this.selectedTemplate = null
        this.loading = true
        yushouContractApi.getContractTemplate({htXslx:0,kfsRwbh:this.$store.state.rwbh, htShzt:2}).then(ret=>{
          this.loading = false
          this.templateList = ret.data.records;
          if(!this.templateList.length){
            this.$message.warning("没有合同模板")
          }
        })
      }
    }
  }
</script>

<style scoped>

</style>