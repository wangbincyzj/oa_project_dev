<template>
  <div class="root">
    <!--<div class="row" v-for="floor in rooms">
      <div class="title room">{{floor.k}}</div>
      <div class="rooms">
        <div class="room" v-for="room in floor.v">{{room.roomFh}}</div>
      </div>
    </div>-->
    <table class="table">
      <tr v-for="floor in rooms" :class="{noRoom: !floor.v.length}">
        <td class="title" @click="floorClick(floor)">{{floor.k}}</td>
        <td class="blank" ></td>
        <td class="room" v-for="room in floor.v"  @click.ctrl.stop="ctrlClick(room)" @click="roomClick(room)" :class="{active: room.active&&enableChoose}">
          <div class="fh">{{room.roomFh}}</div>
          <slot :room="room"/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
  import {buildingsApi} from "@/api/menu_1/buildings";

  export default {
    name: "Rooms",
    props:{
      width:{

      },
      enableLoading:{
        type: Boolean,
        default: false
      },
      enableChoose:{
        type: Boolean,
        default: false
      },
      delay:{
        type: Number,
        default: 100
      }
    },
    data() {
      return {
        rooms: []
      }
    },
    methods: {
      fetchRooms(ldId) {
        if(this.enableLoading){
          this.loading = this.$loading({
            lock: true,
            text: '正在加载楼盘表',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
          });
        }
        buildingsApi.getRooms(ldId).then(ret => {
          if(this.loading){
            setTimeout(()=>{
              this.loading.close()
            }, this.delay)
          }
          let r = []   // r是排序后的结果
          Object.entries(ret.data).forEach(([k, v]) => {
            r.push({k, v})
          })
          r.sort((a, b) => a.k - b.k)
          this.rooms = r.reverse();
        })
      },
      roomClick(room){
        this.$set(room, "active", !room.active)
      },
      ctrlClick(room){
        this.$emit('roomClick', room)
        this.$set(room, "active", !room.active)
      },
      floorClick(floor){
        floor.v.forEach(room=>{
          this.$set(room, "active", !room.active)
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .box {
    background-color: rgba(106, 90, 205, 0.28);
    position: absolute;
  }
  .root{
    user-select: none;
  }
  .table{
    border-collapse: collapse;
  }
  .room{
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    border: 2px solid black;
    text-align: center;
    transition: all 0.2s;
    cursor: pointer;
    font-size: 12px;
    line-height: 1.2;
    .fh{
      font-weight: 600;
      font-size: 13px;
    }
    &.active{
      background-color: slateblue;
      color: white;
    }
    &:hover{
      background-color: slateblue;
      color: white;
    }
  }
  .title{
    margin-right: 10px;
    box-sizing: border-box;
    width: 80px;
    height: 80px;
    text-align: center;
    border: 1px solid black;
    cursor: pointer;
  }
  .blank{
    box-sizing: border-box;
    width: 40px;
    height: 80px;
    border: none;
    text-align: center;
  }
  .noRoom{
    height: 20px;
    td{
      height: 20px;
    }
  }
</style>