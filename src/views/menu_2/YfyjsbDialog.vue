<template>
  <div class="myDialog myForm-mb5">

    <Rooms ref="rooms" >
      <template #default="{room}">
        <div>单价:{{room.roomGpdj}}</div>
      </template>
    </Rooms>
  </div>
</template>

<script>
  import RoomStructure from "@/views/menu_2/RoomStructure";
  import {tjldxmApi} from "@/api/menu_2/tjldxm";
  import CenterButton from "@/components/common/centerButton/CenterButton";
  import {yfyjApi} from "@/api/menu_2/yfyj";
  import Rooms from "@/components/common/rooms/Rooms";
  export default {
    name: "SzyfyjDialog",
    components: {Rooms, CenterButton, RoomStructure},
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
        price: "",
        roomIds: "",
        ldxxId: null,
      }
    },
    methods:{
      initRoomStructure(id) {
        this.ldxxId = id;
        this.$nextTick(()=>{
          this.$refs.rooms.fetchRooms(id)
        })
      },
      fetchData(){
        this.loading = true;
        tjldxmApi.getBuildingInfo(this.projectId).then(ret=>{
          this.loading = false;
          this.form = ret.data[0]
        })
      },
      roomClick(room) {
        if(room.active){
          this.$set(room, "active", false)
        }else{
          this.$set(room, "active", true)
        }
        console.log(room)
      },
      setPrice() {
        this.loading = true;
        let roomIds = [];
        this.$refs.ref.rooms.forEach(item=>{
          item.v.forEach(item=>{
            if(item.active) roomIds.push(item.roomId)
          })
        })
        if(!roomIds.length){
          this.$message.info("请先选择要更改的房间,使用鼠标左键批量选择")
          return
        }
        if(!this.price.trim()){
          this.$message.info("请输入正确的房价")
          return
        }
        roomIds = roomIds.join(",")
        this.roomIds = roomIds
        yfyjApi.setHousePrice(roomIds, this.price*1).then(ret=>{
          this.loading = false;
          if(ret.code===200){
            this.$message.success("设置成功");
            this.initRoomStructure(this.ldxxId);
          }else{
            this.$message.error(ret.message)
          }
        })
      },
      checkAll() {
        this.$refs.ref.rooms.forEach(item=>{
          item.v.forEach(item=>this.$set(item,"active", true))
        })
      },
      cancel() {
        this.$refs.ref.rooms.forEach(item=>{
          item.v.forEach(item=>this.$set(item,"active", false))
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .controls{
    &>*{
      margin: 0 5px;
    }
  }
</style>