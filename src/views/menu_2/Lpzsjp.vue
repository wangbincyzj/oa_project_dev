<template>
  <div class="lpzsjp">
    <ContainerTwoType
      :nav-info="navInfo"
      @liClick="liClick"
    >
      <TitleTable style="min-height: 500px" v-loading="loading" :title="title">
        <div>
          <el-table
            v-loading="loading"
            :data="tableData"
            style="width: 100%">
            <el-table-column
              align="center"
              label="总建筑面积"
              width="100"
              prop="ldxxJzmj">
            </el-table-column>
            <el-table-column
              align="center"
              label="总套数"
              width="100"
              prop="ldxxZts">
            </el-table-column>

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
          <div class="controls" v-if="selectedBuilding">
            <CenterButton v-if="!selectedBuilding.ldxxLdjpzt"  @btnClick="btnClick" title="自审入库"/>
            <CenterButton v-else :disabled="true"  @btnClick="btnClick" title="已经完成自审入库"/>
          </div>
          <div v-if="rooms" class="roomStructure">
            <div class="floor" :class="{noRoom:!floor.v.length}" v-for="floor in rooms">
              <div class="head">{{floor.k}}层</div>
              <div class="room" @click="roomClick(room)" v-for="room in floor.v">
                <span class="fh">{{room.roomFh}}</span>
                <div class="infos">
                  <span class="jz">建筑面积:{{room.roomJzmj}}</span>
                  <span class="tn">套内面积:{{room.roomTnjzmj}}</span>
                  <span class="ft">分摊面积:{{room.roomFtmj}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <el-dialog
          title="房间详情"
          center
          width="800px"
          :before-close="closeConfirm"
          slot="dialog"
          :visible.sync="dialogVisible"
          @close="dialogVisible = false"
        >
          <LpzsjpDialog
            ref="dialog"
            @submitSuccess="submitSuccess"
          />
        </el-dialog>
      </TitleTable>
    </ContainerTwoType>
  </div>
</template>

<script>

  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import {wsfcxmApi} from "@/api/menu_2/wsfcxm";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import {lpInfoApi} from "@/api/menu_2/lpInfo";
  import {mixins} from "@/utils/mixins";
  import LpzsjpDialog from "@/views/menu_2/LpzsjpDialog";
  import CenterButton from "@/components/common/centerButton/CenterButton";

  export default {
    name: "Lpzsjp",
    mixins: [mixins.dialogMixin],
    components: {CenterButton, LpzsjpDialog, TitleTable, ContainerTwoType},
    data() {
      return {
        loading: false,
        navInfo: {
          title: "请选择楼栋列表",
          list: []
        },
        selectedIndex: null,
        projectData: null,
        projectId: null,
        projectStatus: null,
        projectName: null,
        rooms: null,
        tableData: [],
      }
    },
    computed: {
      selectedBuilding() {
        if (!this.navInfo.list.length) return null;
        if (this.selectedIndex === 0) return null;
        return this.navInfo.list[this.selectedIndex]
      },
      title(){
        let ret;
        if(this.projectName) ret = `项目【${this.projectName}】`;
        if(this.selectedBuilding) ret = `${ret} - 楼栋【${this.selectedBuilding.ldxxMc}】`
        return ret;
      }
    },
    created() {
      this.fetchData();
    },
    methods: {
      fetchData() {
        // 1.通过入网编号查用户的项目信息
        wsfcxmApi.getOwnProjectByRwId(this.$store.state.rwbh).then(ret => {
          this.projectData = ret.data.records[0];
          this.projectId = this.projectData.xmxxId;
          this.projectStatus = this.projectData.xmxxShzt;
          this.projectName = this.projectData.xmxxXmmc;
          // 2.通过项目信息的项目id获取楼栋信息
          tjldxmApi.getBuildingInfo(this.projectId).then(ret => {
            this.navInfo.list = ret.data.map(item => ({
              ...item,
              id: item.ldxxId,
              name: item.ldxxMc
            }));
            this.navInfo.list.unshift({id: -1, name: "选择楼栋"})
          })
        })
      },
      _mapStatusNumToString(_num) {
        switch (_num) {
          case 0:
            return "等待提交审核";
          case 1:
            return "管局审核中";
          case 2:
            return "审核通过";
          case 3:
            return "审核撤回,需重新提交审核";
          default:
            return "状态未知,请联系管理员"
        }
      },
      liClick(index) {
        this.selectedIndex = index;
        if (this.selectedBuilding) {
          this.loading = true;
          this.fetchBuildingDetail()
          lpInfoApi.getBuildingRoomDetail(this.selectedBuilding.id).then(ret => {
            this.loading = false;
            let r = []   // r是排序后的结果
            Object.entries(ret.data).forEach(([k, v]) => {
              r.push({k, v})
            })
            r.sort((a, b) => a.k - b.k)
            this.rooms = r.reverse();
          })
        }
      },
      roomClick(room) {
        this.dialogVisible = true;
        this.$nextTick(() => {
          this.$refs.dialog.fetchRoomDetail(room.ldId, room.roomId)
        })
      },
      submitSuccess() {
        this.dialogVisible = false;
        this.fetchBuildingDetail()
        lpInfoApi.getBuildingRoomDetail(this.selectedBuilding.id).then(ret => {
          this.loading = false;
          let r = []   // r是排序后的结果
          Object.entries(ret.data).forEach(([k, v]) => {
            r.push({k, v})
          })
          r.sort((a, b) => a.k - b.k)
          this.rooms = r.reverse();
        })
      },
      fetchBuildingDetail() {
        tjldxmApi.getBuildingDetail(this.selectedBuilding.id).then(ret => {
          this.tableData = [ret.data];
        })
      },
      btnClick() {
        this.$confirm('你确定要自审入库吗?,一旦入库则无法修改信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          tjldxmApi.selfInspection(this.selectedBuilding.id).then(ret=>{
            if(ret.code===200){
              this.$message.success("自审入库成功");
              if (this.selectedBuilding) {
                this.loading = true;
                this.fetchBuildingDetail()
                lpInfoApi.getBuildingRoomDetail(this.selectedBuilding.id).then(ret => {
                  this.loading = false;
                  let r = []   // r是排序后的结果
                  Object.entries(ret.data).forEach(([k, v]) => {
                    r.push({k, v})
                  })
                  r.sort((a, b) => a.k - b.k)
                  this.rooms = r.reverse();
                })
              }
            }else{
              this.$message.error(ret.message)
            }
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .lpzsjp {
    padding: $ps;
  }

  .roomStructure {
    .floor {
      font-size: 12px;
      user-select: none;
      height: 100px;
      margin: 5px;
      display: flex;

      .room {
        flex-shrink: 0;
        width: 100px;
        height: 100px;
        text-align: center;
        border: 1px silver solid;
        margin-right: 3px;
        position: relative;
        top: 0;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;

        .infos {
          display: none;
          flex-direction: column;
        }

        .fh {
          line-height: 1.5;
          font-size: 14px;
          font-weight: 600;
        }

        &:hover {
          background: #1248b3;
          color: white;
          cursor: pointer;
          top: -3px;
          box-shadow: $box-shadow;

          .infos {
            display: flex;

            line-height: 1.2;
          }
        }
      }

      .head {
        flex-shrink: 0;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 80px;
        border: 1px silver solid;
        margin-right: 20px;
        color: #1248b3;
      }
    }

    .noRoom {
      height: 20px;
      line-height: 20px;

      .head {
        height: 20px;
        line-height: 20px;
      }
    }
  }
</style>