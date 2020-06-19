<!--
  新的楼栋房间结构组件
  props:[
    loadRoomColorCpn, enableColor, enableHoverColor
    @required type 根据type类型使房间显示不同的信息 有的是价格 有的是面积之类
  ]
-->
<template>
  <div class="buildingStructure">
    <RoomColor v-if="loadRoomColorCpn"/>

    <div class="building">
      <div class="floor" :class="{noRoom:!floor.v.length}" v-for="floor in rooms">
        <div class="floorHd">{{floor.k}}层</div>
        <div class="room"
             :class="[mapStatusToClass(room.roomFwzt), enableColor && 'enableColor']"
             v-for="room in floor.v"
             @click="$emit('roomClick', room)">
          <div class="roomNo">{{room.roomFh}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {lpInfoApi} from "@/api/menu_2/lpInfo";
  import RoomColor from "@/components/common/roomColor/RoomColor";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";

  export default {
    name: "BuildingStructure",
    components: {RoomColor},
    props: {
      loadRoomColorCpn: {
        type: Boolean,  // 是否加载上方颜色表
        default: false
      },
      enableColor: {  // 是否显示启用房间颜色
        type: Boolean,
        default: false
      },
      enableHoverColor: {  // 是否启用hover效果
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        rooms: null,
        loading: false,
      }
    },
    methods: {
      /*fetchData在不同的场景内可能roomFwzt不一致,需要多个fetchData的api*/
      fetchData(id) {
        this.loading = true;
        lpInfoApi.getBuildingRoomDetail(/*楼栋ID*/id).then(ret => {
          this.loading = false;
          let r = []   // r是排序后的结果
          Object.entries(ret.data).forEach(([k, v]) => {
            r.push({k, v})
          })
          r.sort((a, b) => a.k - b.k)
          this.rooms = r.reverse();
        })
      },
      fetchHfxsqrData(id){  // 合法销售确认用到的api
        this.loading = true;
        yushouContractApi.getContractRooms(id).then(ret=>{
          this.loading = false;
          let r = []   // r是排序后的结果
          Object.entries(ret.data).forEach(([k, v]) => {
            r.push({k, v})
          })
          r.sort((a, b) => a.k - b.k)
          this.rooms = r.reverse();
        })
      },
      mapStatusToClass(status) {
        return this.enableColor ? "c" + status : null
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .building {
    width: 100%;

    .floor {
      width: 100%;
      height: 80px;
      margin: 5px 0;
      display: flex;

      .floorHd {
        width: 80px;
        height: 80px;
        text-align: center;
        border: 1px solid red;
        cursor: pointer;
        font-size: 12px;
        line-height: 80px;
        flex-shrink: 0;
      }

      .room {
        width: 80px;
        height: 80px;
        text-align: center;
        border: 1px solid red;
        margin: 0 2px;
        cursor: pointer;
        font-size: 12px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        &.enableColor{  // 开启颜色后的样式
        }
        div.roomNo {
          font-size: 13px;
          font-weight: 600;
        }
        span{
          color: $info;
        }
      }
    }
  }

  .c0{background-color: LightGrey;}
  .c1{background-color: white;}
  .c2{background-color: green;}
  .c3{background-color: purple;}
  .c4{background-color: yellow;}
  .c5{background-color: SkyBlue;}
  .c6{background-color: Crimson;}
  .c7{background-color: gray;}
  .c8{background-color: #9999cc;}
  .c9{background-color: #0099ff;}
  .c10{background-color: #FF7300;}
  .c12{
    background-color: #3496af;}
</style>