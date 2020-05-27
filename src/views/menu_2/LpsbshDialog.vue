<template>
  <div class="myDialog myForm-mb5">
    <RoomStructure ref="ref" v-if="mode===1" />
    <el-form
      v-if="mode===2"
      v-loading="loading"
      label-position="right"
      label-width="150px"
      size="mini"
      inline
      disabled
      :model="form">
      <el-form-item label="楼栋名称">
        <el-input v-model="form.ldxxMc"></el-input>
      </el-form-item>
      <el-form-item label="交房日期">
        <el-date-picker type="date" placeholder="请选择交房日期" v-model="form.ldxxJgrq" ></el-date-picker>
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
          <el-option  label="是" :value="1"></el-option>
          <el-option  label="不是" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="施工单位">
        <el-input v-model="form.ldxxSgdw"></el-input>
      </el-form-item>
      <el-form-item label="规划用途">
        <el-select  v-model="form.fwytName" placeholder="请选择规划用途">
          <el-option v-for="item in ghyt" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="房屋类型">
        <el-select v-model="form.ldxxFwlx" placeholder="请选择房屋类型">
          <el-option  label="现房" :value="1"></el-option>
          <el-option  label="预售商品房" :value="0"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="住宅均价">
        <el-input v-model="form.ldxxZzjj"></el-input>
      </el-form-item>
      <el-form-item label="非住宅均价">
        <el-input v-model="form.ldxxFzzjj"></el-input>
      </el-form-item>
      <el-form-item label="住宅层数">
        <el-input v-model="form.ldxxZgcs"></el-input>
      </el-form-item>
      <el-form-item label="起始层数">
        <el-input v-model="form.ldxxZgqsc"></el-input>
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
        <el-select  v-model="form.ldxxChxz" placeholder="请选择测绘类型">
          <el-option :value="1" label="预测"/>
          <el-option :value="0" label="实测"/>
        </el-select>
      </el-form-item>
      <el-form-item label="测绘结果">
        <el-select  v-model="form.ldxxChzt" placeholder="请选择测绘类型">
          <el-option :value="0" label="未测绘"/>
          <el-option :value="3" label="已测绘"/>
        </el-select>
      </el-form-item>
      <el-form-item label="楼层类别">
        <el-select  v-model="form.ldxxLclb" placeholder="请选择测绘类型">
          <el-option value="1" label="低层"/>
          <el-option value="2" label="多层"/>
          <el-option value="3" label="中高层"/>
          <el-option value="4" label="高层"/>
        </el-select>
      </el-form-item>
      <el-form-item label="电梯情况">
        <el-select  v-model="form.ldxxSfydt" placeholder="请选择电梯情况">
          <el-option :value="1" label="有电梯"/>
          <el-option :value="0" label="无电梯"/>
        </el-select>
      </el-form-item>
      <el-form-item label="交房日期">
        <el-input v-model="form.ldxxJgrq"></el-input>
      </el-form-item>
      <el-form-item label="启动资金监管状态">
        <el-input v-model="form.ldxxZjjgzt"></el-input>
      </el-form-item>
      <el-form-item label="重点资金监管方式">
        <el-input v-model="form.ldxxZjjgfs"></el-input>
      </el-form-item>
      <el-form-item label="重点监管资金金额">
        <el-input v-model="form.ldxxZdjgzjze"></el-input>
      </el-form-item>
      <el-form-item label="重点监管资金比例">
        <el-input v-model="form.ldxxZdjgzjbl"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import RoomStructure from "@/views/menu_2/RoomStructure";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  export default {
    name: "LpsbshDialog",
    components: {RoomStructure},
    props:{
      mode:{
        required: true  // 1,楼盘表  2,楼栋详情
      },
      projectId:{},
    },
    data() {
      return {
        loading: false,
        form: {},

        fwxz: ["商品房", "存量房", "自建房", "限价商品房", "享受政策优惠房", "经济适用房",
          "集资合作建房", "房改房", "其他", "公租房上市半产权", "保障房", "拆迁用户", "成本价购房"],
        fwjg: ["框剪", "钢架", "框架", "砖混结构", "混合结构", "其他结构",
          "砖木结构", "钢筋混凝土结构", "钢,钢筋混凝土结构", "钢结构"],
        ghyt: ["住宅", "商住", "商业", "综合", "工业", "办公","车库",
          "文体、教育", "加油站", "独院", "杂间", "公寓", "食堂", "其他", "工业宿舍楼", "车间"],
      }
    },
    methods:{
      initRoomStructure(id) {
        this.$nextTick(()=>{
          this.$refs.ref.fetchData(id)
        })
      },
      fetchData(){
        this.loading = true;
        tjldxmApi.getBuildingInfo(this.projectId).then(ret=>{
          this.loading = false;
          this.form = ret.data[0]
        })
      },
    }
  }
</script>

<style scoped>

</style>