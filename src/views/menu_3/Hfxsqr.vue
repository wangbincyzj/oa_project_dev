<template>
  <div class="hfxsqr">
    <ContainerTwoType :nav-info="navInfo" @liClick="liClick">
      <TitleTable title="合法销售确认-选择房间">
        <div>
          <RoomColor/>
          <!--          <RoomStructure ref="roomStructure" @roomClick="roomClick"/>-->
          <BuildingStructure
            ref="roomStructure"
            :enable-color="true"
            @roomClick="roomClick"
          />
        </div>
      </TitleTable>
    </ContainerTwoType>
    <el-dialog
      title="签订承诺书-确认房间"
      center
      width="800px"
      :before-close="closeConfirm"
      slot="dialog"
      :visible.sync="dialogVisible"
      @close="dialogVisible = false"
    >
      <HfxsqrDialog
        :ldxx="ldxx"
        ref="dialog"
        @submitSuccess="submitSuccess"
      />
    </el-dialog>
  </div>
</template>

<script>
  import {mixins} from "@/utils/mixins";
  import ContainerTwoType from "@/components/current/containerTwoType/ContainerTwoType";
  import MyNav from "@/components/common/myNav/MyNav";
  import TitleTable from "@/components/current/titleTable/TitleTable";
  import RoomStructure from "@/views/menu_2/RoomStructure";
  import HfxsqrDialog from "@/views/menu_3/HfxsqrDialog";
  import RoomColor from "@/components/common/roomColor/RoomColor";
  import BuildingStructure from "@/components/common/buildingStructure/BuildingStructure";

  export default {
    name: "Hfxsqr",
    components: {BuildingStructure, RoomColor, HfxsqrDialog, RoomStructure, TitleTable, MyNav, ContainerTwoType},
    mixins: [mixins.dialogMixin],
    data() {
      return {
        navInfo: {
          title: "请选择楼栋",
          list: [],
          selectedIndex: 0,
        },
        ldxx: {},
        ldxxId: null
      }
    },
    created() {
      console.log(this.navInfo.list)
      this.navInfo.list = this.$store.state.buildingInfo.map(item => ({...item, name: item.ldxxMc, id: item.ldxxId}))
      this.navInfo.list.unshift({id: -1, name: "请选择楼栋"})
    },
    methods: {
      liClick(index) {
        this.selectedIndex = index;
        this.ldxx = this.navInfo.list[index]
        this.ldxxId = this.navInfo.list[index].id;
        this.$refs.roomStructure.fetchHfxsqrData(this.navInfo.list[index].id)
      },
      roomClick(room) {
        if (room.roomFwzt === 2) {
          this.dialogVisible = true
          this.$nextTick(() => {
            this.$refs.dialog.fetchRoomDetail(this.ldxxId, room.roomId)
          })
        }else{
          this.$message.info("请选择可售的房间")
        }
      },
      submitSuccess(){
        this.dialogVisible = false;
        this.$refs.roomStructure.fetchHfxsqrData(this.ldxxId)
      }

    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .hfxsqr {
    padding: $ps;
  }
</style>