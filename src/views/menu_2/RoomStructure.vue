<!--
  房间结构组件
-->
<template>
  <div v-if="rooms" class="roomStructure" v-loading="loading">
    <div class="floor" :class="{noRoom:!floor.v.length}" v-for="floor in rooms">
      <div class="head">{{floor.k}}层</div>
      <div class="room" :class="{active: room.active}" @click="roomClick(room)" v-for="room in floor.v">
        <span class="fh">{{room.roomFh}}</span>

        <div class="yfyj" v-if="yfyj">
          <div class="unit">单价</div>
          <div class="price">{{room.roomGpdj}}</div>
        </div>

        <div v-else class="infos">
          <span class="jz">建筑面积:{{room.roomJzmj}}</span>
          <span class="tn">套内面积:{{room.roomTnjzmj}}</span>
          <span class="ft">分摊面积:{{room.roomFtmj}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {lpInfoApi} from "@/api/menu_2/lpInfo";

  export default {
    name: "RoomStructure",
    props:{
      yfyj:{
        type: Boolean,
        default: false,
      }
    },
    data() {
      return{
        rooms: null,
        loading: false
      }
    },
    methods:{
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
      reset() {
        this.rooms = null
      },
      roomClick(room) {
        this.$emit("roomClick", room)
      },
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  .roomStructure {
    .floor {
      font-size: 12px;
      user-select: none;
      height: 100px;
      margin: 5px;
      display: flex;
      .active{
        background: cornflowerblue;
      }

      .room {
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
    .yfyj{
      display: flex;
      flex-direction: column;
      .unit{
        margin-bottom: 5px;
      }
      .price{
        color: $text-weight;
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