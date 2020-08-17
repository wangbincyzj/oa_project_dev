<template>
  <div class="myDialog myForm-mb5">
    <el-tabs value="first">
      <el-tab-pane label="基本信息" name="first">
        <el-form
          v-loading="loading"
          label-position="right"
          label-width="150px"
          size="mini"
          inline
          :disabled="mode===2"
          :model="form">
          <el-form-item label="楼栋名称">
            <el-input v-model="form.ldxxMc"></el-input>
          </el-form-item>
          <el-form-item label="交房日期">
            <el-date-picker type="date" placeholder="请选择交房日期" v-model="form.ldxxJgrq"></el-date-picker>
          </el-form-item>
          <el-form-item label="房屋性质">
            <el-select v-model="form.ldxxFwxz" placeholder="请选择房屋性质">
              <el-option v-for="item in fwxz" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房屋结构">
            <el-select v-model="form.fwjgName" placeholder="请选择房屋结构">
              <el-option v-for="item in fwjg" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房号含单元号">
            <el-select v-model="form.ldxxDyhzt" placeholder="请选择房号含单元号">
              <el-option label="是" :value="1"></el-option>
              <el-option label="否" :value="0"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="施工单位">
            <el-input v-model="form.ldxxSgdw"></el-input>
          </el-form-item>
          <el-form-item label="规划用途">
            <el-select v-model="form.fwytName" placeholder="请选择规划用途">
              <el-option v-for="item in ghyt" :label="item" :value="item"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="房屋类型">
            <el-select v-model="form.ldxxFwlx" placeholder="请选择房屋类型">
              <el-option label="预售商品房" :value="0"></el-option>
              <el-option label="现房" :value="1"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="住宅均价">
            <el-input v-model="form.ldxxZzjj"></el-input>
          </el-form-item>
          <el-form-item label="非住宅均价">
            <el-input v-model="form.ldxxFzzjj"></el-input>
          </el-form-item>
          <el-form-item label="住宅起始层">
            <el-input v-model="form.ldxxZgqsc" @input="handleInput"></el-input>
          </el-form-item>
          <el-form-item label="住宅层数">
            <el-input v-model="form.ldxxZgcs" @input="handleInput"></el-input>
          </el-form-item>
          <el-form-item label="单元数">
            <el-input v-model="form.ldxxDys"></el-input>
          </el-form-item>
          <el-form-item label="一梯几户">
            <el-input v-model="form.ldxxYtjh"></el-input>
          </el-form-item>
          <el-form-item label="地上层数">
            <el-input v-model="form.ldxxDscs"></el-input>
          </el-form-item>
          <el-form-item label="地下层数">
            <el-input v-model="form.ldxxDxcs"></el-input>
          </el-form-item>
          <el-form-item label="规划许可证号">
            <el-input v-model="form.ldxxGhxkzh"></el-input>
          </el-form-item>
          <el-form-item label="施工许可证号">
            <el-input v-model="form.ldxxSgxkzh"></el-input>
          </el-form-item>
          <el-form-item label="土地证号">
            <el-input v-model="form.ldxxTdzh"></el-input>
          </el-form-item>
          <el-form-item label="土地编号">
            <el-input v-model="form.ldxxTdbh"></el-input>
          </el-form-item>
          <el-form-item label="土地面积">
            <el-input v-model="form.ldxxTdmj"></el-input>
          </el-form-item>
          <el-form-item label="土地年限">
            <el-input v-model="form.ldxxTdnx"></el-input>
          </el-form-item>
          <el-form-item label="测绘类型">
            <el-select v-model="form.ldxxChxz" placeholder="请选择测绘类型">
              <el-option :value="1" label="预测"/>
              <el-option :value="0" label="实测"/>
            </el-select>
          </el-form-item>
          <el-form-item label="测绘结果">
            <el-select v-model="form.ldxxChzt" placeholder="请选择测绘类型">
              <el-option :value="0" label="未测绘"/>
              <el-option :value="3" label="已测绘"/>
            </el-select>
          </el-form-item>
          <el-form-item label="楼层类别">
            <el-select v-model="form.ldxxLclb" placeholder="" disabled>
              <el-option value="1" label="低层(少于3层)"/>
              <el-option value="2" label="多层(4-6层)"/>
              <el-option value="3" label="中高层(7-10层)"/>
              <el-option value="4" label="高层(11层以上)"/>
            </el-select>
          </el-form-item>
          <el-form-item label="电梯情况">
            <el-select :disabled="dtDisabled" v-model="form.ldxxSfydt" placeholder="请选择电梯情况">
              <el-option :value="1" label="有电梯"/>
              <el-option :value="0" label="无电梯"/>
            </el-select>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <!--<el-tab-pane label="图片管理" name="second">
        <UploadCpn
          :url="url"
          :data="{logId: form.logId}"
          :file-list="fileList"
          @delFile="delFile"
        />
      </el-tab-pane>-->
    </el-tabs>

    <CenterButton v-if="mode!==2" @btnClick="btnClick" title="保存"/>
  </div>
</template>

<script>
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {config} from "@/api/baseConfig";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import {filesApi} from "@/api/files";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import UploadCpn from "@/components/current/uploadCpn/UploadCpn";

  export default {
    name: "TjxmldDialog",
    components: {UploadCpn, CenterButton},
    props: {
      mode: {
        type: Number,
        required: true,
        // 0, 新增   1,编辑  2,查看详细
      },
      projectId: {}
    },
    data() {
      return {
        fileList: [],
        loading: false,
        dtDisabled: false,
        form: {
          ldxxMc: null,
          ldxxJgrq: null,
          ldxxFwxz: null,
          fwjgName: null,
          ldxxDyhzt: null,
          ldxxSgdw: null,
          fwytName: null,
          ldxxFwlx: 0,
          ldxxZzjj: null,
          ldxxFzzjj: null,
          ldxxZgcs: null,
          ldxxZgqsc: null,
          ldxxDys: null,
          ldxxYtjh: null,
          ldxxDscs: null,
          ldxxDxcs: null,
          ldxxGhxkzh: null,
          ldxxSgxkzh: null,
          ldxxTdzh: null,
          ldxxTdbh: null,
          ldxxTdmj: null,
          ldxxTdnx: null,
          ldxxChxz: null,
          ldxxChzt: null,
          ldxxLclb: null,
          ldxxSfydt: null,
        },
        fwxz: ["商品房", "存量房", "自建房", "限价商品房", "享受政策优惠房", "经济适用房",
          "集资合作建房", "房改房", "其他", "公租房上市半产权", "保障房", "拆迁用户", "成本价购房"],
        fwjg: ["框剪", "钢架", "框架", "砖混结构", "混合结构", "其他结构",
          "砖木结构", "钢筋混凝土结构", "钢,钢筋混凝土结构", "钢结构"],
        ghyt: ["住宅", "商业", "综合", "工业", "办公", "车库",
          "文体、教育", "加油站", "独院", "杂间", "公寓", "食堂", "其他", "工业宿舍楼", "车间"],
      }
    },
    computed: {
      url() {
        return filesApi.upload
      }
    },
    methods: {
      delFile(file) {
        if (file.fujianId) {
          filesApi.delFile(file.fujianId)
        } else {
          filesApi.delFile(file.response.data[0].fujianId)
        }
      },
      reset() {
        Object.assign(this.$data, this.$options.data())
      },
      handleInput() {
        if (this.form.ldxxZgcs * 1 && this.form.ldxxZgqsc * 1) {
          this.form.ldxxDscs = this.form.ldxxZgcs * 1 + this.form.ldxxZgqsc * 1 - 1
          if (this.form.ldxxDscs < 4) {
            this.form.ldxxLclb = "1"
            this.form.ldxxSfydt = "";
            this.dtDisabled = false;
          } else if (this.form.ldxxDscs >= 4 && this.form.ldxxDscs <= 6) {
            this.form.ldxxLclb = "2"
            this.form.ldxxSfydt = "";
            this.dtDisabled = false;
          } else if (this.form.ldxxDscs >= 7 && this.form.ldxxDscs <= 10) {
            this.form.ldxxLclb = "3"
            this.form.ldxxSfydt = 1;
            this.dtDisabled = true;
          } else {
            this.form.ldxxLclb = "4"
            this.form.ldxxSfydt = 1;
            this.dtDisabled = true;
          }
        } else {
          this.form.ldxxDscs = ""
          this.form.ldxxLclb = ""
          this.form.ldxxSfydt = "";
        }
      },
      fetchData(ldxxId) {
        this.loading = true;
        tjldxmApi.getBuildingInfo(this.projectId).then(ret => {
          this.loading = false;
          this.form = ret.data.filter(item => item.ldxxId === ldxxId)[0];
          filesApi.getFiles(this.form.logId).then(ret => {
            this.fileList = ret.data.map(item => ({
              url: config.productMode ? item.fujianPath : filesApi.preview + item.fujianId,
              fujianId: item.fujianId
            }))
          })
        })
      },
      btnClick() {
        this.loading = true
        if (this.mode === 0) {  // 新增
          tjldxmApi.addBuilding({...this.form, xmxxId: this.projectId}).then(ret => {
            this.loading = false;
            if (ret.code === 200) {
              this.$message.success("添加成功");
              this.$emit("submitSuccess")
            } else {
              this.$message.error(ret.message)
            }
          })
        } else if (this.mode === 1) {  // 修改
          tjldxmApi.updateBuilding({...this.form, xmxxId: this.projectId}).then(ret => {
            this.loading = false;
            if (ret.code === 200) {
              this.$message.success("修改成功");
              this.$emit("submitSuccess")
            } else {
              this.$message.error(ret.message)
            }
          })
        }
      }
    }
  }
</script>

<style scoped>

</style>