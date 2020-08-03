<template>
  <div class="layout">
    <div class="title">
      <span>合同条款填写</span>
      <el-button style="margin-left: 30px" @click="$emit('close')" size="mini" >关闭页面</el-button>
    </div>
    <div class="hd">
      <div class="nav">
        <el-timeline>
          <el-timeline-item
            class="item"
            v-for="(activity, _index) in activities"
            :key="_index"
            :color="_index===index? '#0bbd87': ''"
            :size="_index===index? 'large': 'normal'"
            @click.native="itemClick(_index)"
            :timestamp="activity.timestamp">
            {{activity.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
      <div class="bd">
        <transition :name="animateName" >
          <keep-alive>
            <component v-if="baseData" :oriData="baseData" :htId="htId" :is="cpnName" class="cpn"/>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
  import No0 from "@/views/menu_3/Wsysht/children/No0";
  import No1 from "@/views/menu_3/Wsysht/children/No1";
  import No2 from "@/views/menu_3/Wsysht/children/No2";
  import No3 from "@/views/menu_3/Wsysht/children/No3";
  import No4 from "@/views/menu_3/Wsysht/children/No4";
  import No5 from "@/views/menu_3/Wsysht/children/No5";
  import No6 from "@/views/menu_3/Wsysht/children/No6";
  import No7 from "@/views/menu_3/Wsysht/children/No7";
  import No8 from "@/views/menu_3/Wsysht/children/No8";
  import No9 from "@/views/menu_3/Wsysht/children/No9";
  import No10 from "@/views/menu_3/Wsysht/children/No10";
  import {yushouContractApi} from "@/api/menu_3/yushowContract";
  export default {
    name: "WsyshtLayout",
    components:{No0,No1,No2,No3,No4,No5,No6,No7,No8,No9,No10,},
    props:{
      htId: {},
      readOnly: {
        default: false,
        type: Boolean
      }
    },
    data() {
      return {
        reverse: true,
        activities: [
          {
            content: '第一章',
            timestamp: '合同双方当事人'
          },
          {
            content: '第二章(1-5)',
            timestamp: '商品房基本状况'
          },
          {
            content: '第三章(6-8)',
            timestamp: '商品房价款'
          },
          {
            content: '第四章(9-12)',
            timestamp: '商品房交付条件与交付手续'
          },
          {
            content: '第五章(13)',
            timestamp: '面积差异及处理方式'
          },
          {
            content: '第六章(14-15)',
            timestamp: '规划设计变更'
          },
          {
            content: '第七章(16-18)',
            timestamp: '商品房质量及保修责任'
          },
          {
            content: '第八章(19-20)',
            timestamp: '合同备案与房屋登记'
          },
          {
            content: '第九章(21)',
            timestamp: '前期物业管理'
          },

          {
            content: '第十章(22-29)',
            timestamp: '其他事项'
          },
          {
            content: '附 件(2-11)',
            timestamp: '附 件'
          },
        ],
        cpnName: No0,
        animateName: "up",
        index: 0,
        baseData: null
      };
    },
    computed:{
    },
    methods:{
      itemClick(index) {
        this.animateName = this.index > index ? "down" : "up"
        this.index = index;
        this.cpnName = `No${index}`
      },
      fetchData(){
        yushouContractApi.getContractDetail(this.htId).then(ret=>{
          this.baseData = ret.data;
        })
      }
    }
  }
</script>

<style scoped lang="scss">
  .layout{
    height: 100%;
    .title {
      height: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-weight: 600
      }
    }
    .item{
      cursor: pointer;
      &:hover{
        font-weight: 600!important;
      }
    }
    .hd {
      padding: 0 50px;
      display: flex;
      height: 95%;
      .nav{
        width: 200px;
      }
      .bd{
        flex: 1;
        height: 100%;
        position: relative;
        .cpn{
          height: 100%;
          width: 100%;
          position: absolute;
        }
      }
    }
  }
  .down-enter-active, .down-leave-active{
    transition: all 0.5s;
    transform: translateY(0);
  }
  .down-enter{
    transform: translateY(-100%);
  }
  .down-leave-to{
    transform: translateY(100%);
  }
  .up-enter-active, .up-leave-active{
    transition: all 0.5s;
    transform: translateY(0);
  }
  .up-enter{
    transform: translateY(100%);
  }
  .up-leave-to{
    transform: translateY(-100%);
  }



</style>