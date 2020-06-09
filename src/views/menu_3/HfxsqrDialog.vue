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
      <el-form-item label="自定层名">
        <el-input v-model="form.roomZdcm"></el-input>
      </el-form-item>

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

      <el-form-item label="限制状态">
        <el-input v-model="form.roomBaxzzt"></el-input>
      </el-form-item>

      <el-form-item label="查封状态">
        <el-input v-model="form.roomCfzt"></el-input>
      </el-form-item>

      <el-form-item label="交易状态">
        <el-input v-model="form.roomJyzt"></el-input>
      </el-form-item>

      <el-form-item label="抵押状态">
        <el-input v-model="form.roomDybazt"></el-input>
      </el-form-item>

    </el-form>
    <div style="display: flex; justify-content: center; margin-top: 10px">
      <el-button @click="handleSave" size="mini">签订承诺书</el-button>
    </div>
  </div>
</template>

<script>
  import {lpInfoApi} from "@/api/menu_2/lpInfo";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "HfxsqrDialog",
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
          this.form = ret.data
        })
      },
      handleSave() {
        yushouContractApi.saveSalesConfirmation({
          xsqrdXmmc: this.$store.state.projectData.xmxxXmmc,
          xsqrdLdmc: this.ldxx.ldxxMc,
          xsqrdFh: this.form.roomFh,
          xsqrdFwbh: this.form.roomFwbh,
          kfsRwbh: this.$store.state.rwbh
        }).then(ret => {
          if (ret.code === 200) {
            this.$message.success("操作成功")
            this.$emit("submitSuccess")
          } else {
            this.$message.error(ret.message || "操作失败")
          }
        })
      },

    }
  }
</script>

<style scoped>

</style>