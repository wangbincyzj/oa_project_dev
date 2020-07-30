<template>
  <div class="myDialog myForm-mb5">
    <div>
      <el-table size="mini" v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column align="center" label="总建筑面积" width="100" prop="ldxxJzmj"></el-table-column>
        <el-table-column align="center" label="总套数" width="100" prop="ldxxZts"></el-table-column>

        <el-table-column align="center" label="可售">
          <el-table-column align="center" prop="ldxxKsmj" label="面积"/>
          <el-table-column align="center" prop="ksts" label="套数"/>
        </el-table-column>

        <el-table-column align="center" label="不可售">
          <el-table-column align="center" prop="bksmj" label="面积"/>
          <el-table-column align="center" prop="bksts" label="套数"/>
        </el-table-column>
        <el-table-column align="center" label="住宅(可售)">
          <el-table-column prop="zzksmj" align="center" label="面积"/>
          <el-table-column prop="zzksts" align="center" label="套数"/>
        </el-table-column>
        <el-table-column align="center" label="非住宅(可售)">
          <el-table-column prop="fzzksmj" align="center" label="面积"/>
          <el-table-column prop="fzzksts" align="center" label="套数"/>
        </el-table-column>
      </el-table>
      <div v-if="buildingInfo&&!buildingInfo.ldxxLdjpzt" class="buttons">
        <el-button size="mini" icon="el-icon-office-building" @click="handleAuto" :type="mode===1?'warning':''">自动生成</el-button>
        <el-button size="mini" icon="el-icon-thumb" @click="handleInput" :type="mode===2?'warning':''">手动输入</el-button>
      </div>
      <div v-else style="display: flex; justify-content: center">
        <el-link disabled style="line-height: 3">该楼盘已自审,无法生成房间</el-link>
      </div>
      <transition name="flex">
        <div class="auto" v-if="mode===1" key="1">
          <el-form
            v-loading="loading"
            label-position="right"
            label-width="150px"
            size="mini"
            inline
            :model="form">
            <el-form-item label="开始单元">
              <el-select v-model="form.startUnit" placeholder="请选择开始单元">
                <el-option v-for="i in limit.startUnit" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结束单元">
              <el-select v-model="form.endUnit" placeholder="请选择结束单元">
                <el-option v-for="i in limit.endUnit" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始房号">
              <el-select v-model="form.startRoom" placeholder="请选择开始房号">
                <el-option v-for="i in limit.startRoom" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结束房号">
              <el-select v-model="form.endRoom" placeholder="请选择结束房号">
                <el-option v-for="i in limit.endRoom" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="开始层数">
              <el-select v-model="form.startFloor" placeholder="请选择开始层数">
                <el-option v-for="i in limit.startFloor" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="结束层数">
              <el-select v-model="form.endFloor" placeholder="请选择结束层数">
                <el-option v-for="i in limit.endFloor" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋用途">
              <el-autocomplete
                  v-model="form.roomSjyt"
                  :fetch-suggestions="querySearch"
                  placeholder=""
                  @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>
            <el-form-item label="房屋户型">
              <el-select v-model="form.roomFwhx" placeholder="请选择房屋户型">
                <el-option v-for="i in fwhx" :label="i" :value="i"></el-option>
              </el-select>
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
            <el-form-item label="层高">
              <el-input v-model="form.roomCg"></el-input>
            </el-form-item>
            <!--
            <el-form-item label="房屋结构">
              <el-select v-model="form.roomFwjg" placeholder="请选择房屋结构">
                <el-option v-for="i in fwjg" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="房屋性质">
              <el-select v-model="form.roomFwxz" placeholder="请选择房屋性质">
                <el-option v-for="i in fwxz" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item> -->
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
          </el-form>
          <CenterButton @btnClick="handleAdd" :loading="buttonLoading" title="自动生成房间"/>
        </div>
        <div class="auto" v-if="mode===2" key="2">
          <el-form
            v-loading="loading"
            label-position="right"
            label-width="150px"
            size="mini"
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
                <el-option v-for="i in unitLimit" :label="i.label" :value="i.value"></el-option>
              </el-select>
            </el-form-item>

            <el-form-item label="房屋用途">
              <el-autocomplete
                v-model="form.roomSjyt"
                :fetch-suggestions="querySearch"
                placeholder=""
                @select="handleSelect"
              ></el-autocomplete>
            </el-form-item>

            <el-form-item label="所在层">
              <el-select v-model="form.roomSzc" placeholder="请选择结束层数">
                <el-option v-for="i in limit.szcs" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>


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


            <el-form-item label="可售状态">
              <el-select v-model="form.roomKszt" placeholder="请选择可售状态">
                <el-option label="可售" value="1"></el-option>
                <el-option label="不可售" value="2"></el-option>
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
            <el-form-item label="房屋户型">
              <el-select v-model="form.roomFwhx" placeholder="请选择房屋户型">
                <el-option v-for="i in fwhx" :label="i" :value="i"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <CenterButton @btnClick="handleAdd2" :loading="buttonLoading" title="添加房间"/>
        </div>
      </transition>
    </div>
    <TjhsfjRooms ref="ref" enable-loading @roomClick="roomClick">
      <template #default="{room}">
        <div>建筑:{{room.roomJzmj}}</div>
        <div>套内:{{room.roomTnjzmj}}</div>
      </template>
    </TjhsfjRooms>
    <el-dialog
      title="房间详情"
      center
      width="800px"
      slot="dialog"
      append-to-body
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <LpzsjpDialog ref="dialog" @submitSuccess="submitSuccess" :confirm="disabled"/>
    </el-dialog>
  </div>
</template>

<script>
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import RoomStructure from "@/views/menu_2/RoomStructure";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import {tjhsfjApi} from "@/api/menu_2/tjhsfj";
  import Rooms from "@/components/common/rooms/Rooms";
  import LpzsjpDialog from "@/views/menu_2/LpzsjpDialog";
  import TjhsfjRooms from "@/views/menu_2/TjhsfjRooms";

  export default {
    name: "TjhsfjDialog",
    components: {TjhsfjRooms, LpzsjpDialog, Rooms, CenterButton, RoomStructure},

    data() {
      return {
        mode: 0,
        loading: false,
        buttonLoading: false,
        form: {
          startUnit: null,
          endUnit: null,
          startRoom: null,
          endRoom: null,
          startFloor: null,
          endFloor: null,
          roomSjyt: "商业",
          roomFwhx: null,
          roomJzmj: null,
          roomTnjzmj: null,
          roomFtmj: null,
          roomCg: 3.0,
          roomFwjg: null,
          roomFwxz: null,
          roomFbytgs: 0,
          roomFbytmj: 0,
          roomFfbytgs: 0,
          roomFfbytmj: 0,
          /*************/
          roomFh: null,
          roomSzc: null,
          roomSzdy: null,
          Szc: null,
          roomZdcm: null,
          roomKszt: null,
        },
        dialogVisible: false,
        buildingInfo: null,
        fwyt: ["住宅", "商业", "地下室(住宅)", "车库", "其他"],
        fwhx: ["其它", "五室二厅", "四室二厅", "三室二厅", "三室一厅", "二室二厅", "二室一厅"],
        fwjg: ["混合结构", "钢结构", "钢及钢筋混凝土结构", "钢筋混泥土结构", "剪力墙结构", "砖木结构", "其他结构"],
        fwxz: ["商品房", "存量房", "自建房", "限价商品房", "享受政策优惠房", "经济适用房", "集资合作建房",
          "房改房", "公租房上市半产权", "保障房", "拆迁用户", "成本价购房", "其它",
        ],
        limit: {},
        ldxxId: "",
        tableData: []
      }
    },
    computed: {
      unitLimit() {
        if(!this.limit.startUnit)
          return []
        let ret =  this.limit.startUnit.map(item=>({
          value:item, label:item
        }))
        ret.push({value:-1, label:"不定单元"})
        return ret
      },
      roomLimit() {
        return this.buildingInfo ? this.buildingInfo.ldxxYtjh : null
      },
      floorLimit() {
        return this.buildingInfo ? this.buildingInfo.ldxxDscs : null
      },
      disabled() {
        return !!(!this.buildingInfo || this.buildingInfo.ldxxLdjpzt);
      }
    },
    methods: {
      submitSuccess() {
        this.$refs.ref.fetchRooms(this.ldxxId)
        this.fetchBuildingDetail(this.ldxxId)
        this.fetchBuilding()
        this.dialogVisible = false
      },
      roomClick(room) {
        console.log(111)
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.dialog.fetchRoomDetail(room.ldId, room.roomId);
        });
      },
      reset() {
        Object.assign(this.$data, this.$options.data())
      },
      querySearch(queryString, cb) {
        let ret = this.fwyt.map(item=>({value:item})).filter(item=>item.value.indexOf(queryString)!==-1)
        cb(ret);
      },
      handleSelect(val) {
        console.log(val)
      },
      fetchBuilding() {
        tjldxmApi.getBuildingDetail(this.ldxxId).then(ret => {
          console.log(ret)
          this.tableData = [ret.data];
        });
      },
      fetchBuildingDetail(id) {
        this.loading = true;
        this.buttonLoading = true;
        tjldxmApi.getBuildingLimit(id).then(ret => {
          this.loading = false;
          this.buttonLoading = false;
          this.limit = ret.data
        })
        tjldxmApi.getBuildingDetail(id).then(ret => {
          this.loading = false;
          this.buttonLoading = false;
          this.buildingInfo = ret.data;
        })
      },
      handleAdd() {
        this.buttonLoading = true
        if (!this.buildingInfo) {
          this.$message.warning("获取楼栋信息失败,尝试刷新页面");
          this.buttonLoading = false
          return;
        }
        tjhsfjApi.addRoom({...this.form, ldId: this.buildingInfo.ldxxId}).then(ret => {
          this.buttonLoading = false
          if (ret.code === 200) {
            // this.$emit("submitSuccess");
            this.$message.success("生成房间成功")
            this.$refs.ref.fetchRooms(this.ldxxId)
            this.fetchBuilding()
          } else {
            this.$message.info(ret.message);
          }
        })
      },
      handleAdd2() {
        this.buttonLoading = true
        if (!this.buildingInfo) {
          this.$message.warning("获取楼栋信息失败,尝试刷新页面");
          this.buttonLoading = false
          return;
        }
        tjhsfjApi.addRoom2({...this.form, ldId: this.buildingInfo.ldxxId}, 0).then(ret => {
          this.buttonLoading = false
          if (ret.code === 200) {
            // this.$emit("submitSuccess");
            this.$message.success("生成房间成功")
            this.$refs.ref.fetchRooms(this.ldxxId)
            this.fetchBuilding()
          } else {
            this.$message.info(ret.message);
          }
        })
      },
      fetchRoomStructure() {
        this.$nextTick(() => {
          this.$refs.ref.fetchData(this.ldxxId)
        })
      },
      handleAuto() {
        if (!this.buildingInfo.ldxxChzt) {
          this.$message.warning("未测绘不能生成房间")
          return
        }
        if(this.mode === 1){
          this.mode =0
        }else{
          this.mode = 1;
        }
      },
      handleInput() {
        console.log(this.buildingInfo)
        if (!this.buildingInfo.ldxxChzt) {
          this.$message.warning("未测绘不能生成房间")
          return
        }
        if(this.mode === 2){
          this.mode =0;
        }else{
          this.mode = 2;
        }
      },
      setMode(mode, ...args) {
        this.mode = mode;
        if (mode === 0) {
          this.ldxxId = args[0]
          this.$refs.ref.fetchRooms(args[0])
          this.fetchBuildingDetail(args[0])
          this.fetchBuilding()
        }
      }
    },

  }
</script>

<style scoped lang="scss">
  .buttons {
    display: flex;
    justify-content: center;
    height: 50px;
    padding: 10px 0;
  }
  .flex-enter-to{
    transition: all 0.5s;
    max-height: 1000px;
  }
  .flex-enter{
    height: 0;
    opacity: 0;
    max-height: 0;
  }
</style>