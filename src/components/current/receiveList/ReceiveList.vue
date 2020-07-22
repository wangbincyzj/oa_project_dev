<template>
  <div class="receiveList">
    <div class="item" v-for="(item,index) in businessReceives">
      <div class="no">
        <span>{{index+1}}</span>
      </div>
      <div class="info">
        <div class="name">{{item.shoujianTitle}}</div>
        <div class="attr">
          <div>性质:<span>{{item.shoujianSjxz}}</span></div>
          <div>份数:<span>{{item.shoujianFenshu}}</span></div>
        </div>
      </div>
      <div class="imgs">
        <ImgList :list="item.fileList"/>
      </div>
    </div>
  </div>
</template>

<script>
  import ImgList from "@/components/common/imgList/ImgList";
  import {filesApi} from "@/api/files";

  export default {
    name: "ReceiveList",
    components: {ImgList},
    data() {
      return {
        businessReceives: []
      }
    },
    methods: {
      _map(status) {
        switch (status) {
          case 0:
            return "原件";
          case 1:
            return "复印件";
          case 2:
            return "扫描件";
        }
      },
      fetchData(ywsjYwzh) {
        filesApi.getReceiveList(ywsjYwzh).then(ret => {
          this.businessReceives = ret.data.map(item => ({
            ...item,
            shoujianTitle: item.ywsjTitle,
            shoujianSjxz: this._map(item.ywsjSjxz),
            shoujianFenshu: item.ywsjFenshu
          }))
          this.businessReceives.forEach(item => {
            filesApi.getFiles(item.logId).then(ret => {
              this.$set(item, "fileList", ret.data.map(item => filesApi.preview + item.fujianId))
            })
          })
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";

  .receiveList {
    .item {
      background-color: rgba(228, 231, 237, 0.54);
      height: 80px;
      margin: 5px 0;
      display: flex;

      .no {
        width: 40px;
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: $text-info;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        .name {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-size: 14px;
          font-weight: 600;
        }

        .attr {
          display: flex;

          div {
            margin-right: 20px;
            color: $text-info;

            span {
              color: $text-weight;
              font-weight: 600;
            }
          }
        }
      }
      .imgs{
        width: 320px;
      }

    }
  }
</style>