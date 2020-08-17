<template>
  <div class="root">
    <template v-if="enableStatistics">
      <el-table
          :data="tableData"
          size="mini"
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
    </template>
    <div class="lpb">
      <template v-if="floorData.length">
        <table class="table" style="order: 0">
          <thead>
          <tr style="height: 20px">
            <th class="t-title">楼层</th>
          </tr>
          </thead>
          <tr v-for="floor in floorData">
            <td class="room">
              {{ floor.floor }}
            </td>
          </tr>
        </table>
      </template>
      <template v-for="(rooms, unit) in roomData">
        <table class="table" style="order: 1">
          <thead>
          <tr style="height: 20px">
            <th class="t-title">{{ unit }}单元</th>
          </tr>
          </thead>
          <tr v-for="floor in rooms">
            <td class="room"
                :class="{active: room.active&&enableChoose, [ 'c' + room.roomFwzt]: true}"
                :rowspan="room.addx + 1"
                :colspan="room.addy + 1"
                v-for="room in floor.v" @click="roomClick(room)">
              <div class="fh">{{ room.roomFh }}</div>
              <slot :room="room"/>
            </td>
          </tr>
        </table>
      </template>
    </div>
  </div>
</template>

<script>
import {buildingsApi} from "@/api/menu_1/buildings";
// import {lpglApi} from "@/api/menu_2/lpgl";

export default {
  name: "RoomsUnit",
  props: {
    width: {},
    enableLoading: {
      type: Boolean,
      default: false
    },
    enableStatistics:{
      type: Boolean,
      default: false
    },
    enableChoose: {
      type: Boolean,
      default: false
    },
    enableHover:{
      type: Boolean,
      default: false
    },
    delay: {
      type: Number,
      default: 100
    }
  },
  data() {
    return {
      rooms: [],
      roomData: [],
      floorData: [],
      tableData: [],
    }
  },
  computed: {
    selectedRooms() {
      let selectedRooms = [];
      Object.entries(this.roomData).forEach(([k, v]) => {
        v.forEach(floor => floor.v.forEach(room => {
          if (room.active) {
            selectedRooms.push(room)
          }
        }))
      })
      return selectedRooms
    }
  },
  methods: {
    fetchRooms(ldId) {
      if (this.enableLoading) {
        this.loading = this.$loading({
          lock: true,
          text: '正在加载楼盘表',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      }
      buildingsApi.getRoomsUnit(ldId).then(ret => {
        if(this.loading)
          this.loading.close()
        this.roomData = ret.data // {"1":{}, "2":{}}
        Object.entries(this.roomData).forEach(([u, d]) => {
          let r = []   // r是排序后的结果
          Object.entries(this.roomData[u]).forEach(([k, v]) => {
            r.push({k, v})
          })
          r.sort((a, b) => a.k - b.k)
          this.roomData[u] = r.reverse();
          // [{k:123,v:[]}]
          this.roomData[u].forEach(item => {
            item.v.forEach((room, index) => {
              room.addx = parseInt(room.roomZdcm) ? parseInt(room.roomZdcm) : 0;
              room.addy = parseInt(room.roomZdts) ? parseInt(room.roomZdts) : 0;
              room.index = index
            })
          })
        })
        console.log(this.roomData)
        // 生成一组楼层数据
        let unitKeys = Object.keys(this.roomData)
        if (unitKeys.length) {
          let template = this.roomData[unitKeys[0]]
          let floor = template.map(item => ({floor: item.k, isEmpty: !item.v.length}))
          this.floorData = floor
        }else{
          this.floorData = []
        }
      })
      if(this.enableStatistics){
        this.fetchRoomsInfo(ldId)
      }
    },
    fetchRoomsInfo(ldId) {
      buildingsApi.getBuildingDetail(ldId).then(ret => {
        this.tableData = [ret.data];
      })
    },
    roomClick(room) {
      this.$set(room, "active", !room.active)
      if (!this.enableChoose) {
        this.$emit('roomClick', room)
      }
    },
    floorClick(floor) {
      floor.v.forEach(room => {
        this.$set(room, "active", !room.active)
      })
    },
    selectAll() {
      Object.values(this.roomData).forEach(unit => {
        Object.values(unit).forEach(floor => {
          floor.v.forEach(room => {
            this.$set(room, "active", true)
          })
        })
      })
    },
    antiSelect() {
      Object.values(this.roomData).forEach(unit => {
        Object.values(unit).forEach(floor => {
          floor.v.forEach(room => {
            this.$set(room, "active", !room.active)
          })
        })
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
.box {
  background-color: rgba(106, 90, 205, 0.28);
  position: absolute;
}

.root {

}
.lpb{
  user-select: none;
  display: flex;
  height: 600px;
  overflow-y: auto;
}

.table {
  border-collapse: collapse;
  margin: 0 5px;
}

.floor {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border: 2px solid black;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.2;
}

tr {
  width: 80px;
  height: 80px;
}
.t-title{
  height: 40px;
}
.room {
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  border: 2px solid black;
  text-align: center;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 12px;
  line-height: 1.2;

  .fh {
    font-weight: 600;
    font-size: 13px;
  }

  &.active {
    background-color: slateblue;
    color: white;
  }
  &-hover{
    :hover {
      background-color: slateblue;
      color: white;
    }
  }
}

.title {
  margin-right: 10px;
  box-sizing: border-box;
  width: 80px;
  height: 80px;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
}

.blank {
  box-sizing: border-box;
  width: 40px;
  height: 80px;
  border: none;
  text-align: center;
}

.noRoom {
  height: 20px;

  td {
    height: 20px;
  }
}

.c1{background-color: $lp-cp;}
.c2{background-color: $lp-ks;}
.c3{background-color: $lp-cn;}
.c4{background-color: $lp-qy;}
.c5{background-color: $lp-ba;}
.c6{background-color: $lp-yg;}
.c7{background-color: $lp-aj;}
.c8{background-color: $lp-sc;}
.c9{background-color: $lp-zy;}
.c10{background-color: $lp-dy;}
.c11{background-color: $lp-cf;}
.c12{background-color: $lp-xz;}
</style>