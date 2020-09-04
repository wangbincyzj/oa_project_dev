<template>
  <div class="layout">
    <div class="title">
      <span>合同条款填写</span>
      <el-button style="margin-left: 30px" @click="$emit('close')" type="primary" size="mini" >关闭页面</el-button>
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
            <component :oriData="baseData" :htId="htId" :is="cpnName" class="cpn"/>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import No0 from "@/views/menu_3/Wshtold/children/No0";
import No1 from "@/views/menu_3/Wshtold/children/No1";
import No2 from "@/views/menu_3/Wshtold/children/No2";
import No3 from "@/views/menu_3/Wshtold/children/No3";
import No4 from "@/views/menu_3/Wshtold/children/No4";
import No5 from "@/views/menu_3/Wshtold/children/No5";
import No6 from "@/views/menu_3/Wshtold/children/No6";
import No7 from "@/views/menu_3/Wshtold/children/No7";
import No8 from "@/views/menu_3/Wshtold/children/No8";
import No9 from "@/views/menu_3/Wshtold/children/No9";
import No10 from "@/views/menu_3/Wshtold/children/No10";
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
          content: '合同双方当事人',
          timestamp: '合同双方当事人'
        },
        {
          content: '第一条-第二条',
          timestamp: '项目建设依据或商品房销售依据'
        },
        {
          content: '第三条-第四条',
          timestamp: '买受人所购商品房的基本情况、计价方式与价款\t'
        },
        {
          content: '第五条',
          timestamp: '面积确认及面积差异处理'
        },
        {
          content: '第六条-第七条',
          timestamp: '付款方式及期限、买受人逾期付款的违约责任'
        },
        {
          content: '第八条-第九条',
          timestamp: '交付期限、出卖人逾期交房的违约责任'
        },
        {
          content: '第十条-第十二条',
          timestamp: '规划、设计变更的约定、交接'
        },
        {
          content: '第十三条-第十五条',
          timestamp: '出卖人关于装饰、设备标准承诺的违约责任、出卖人关于基础设施、公共配套建筑正常运行的承诺、关于产权办理的约定。'
        },
        {
          content: '第十六条-第十八条',
          timestamp: '保修责任'
        },
        {
          content: '第十九条-第二十四条',
          timestamp: '第十九条至第二十四条'
        },
        {
          content: '附件1-4',
          timestamp: '附件1-4'
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
  ::v-deep{
    .subTitle{
      font-weight: 600;
      font-size: 14px;
      line-height: 2em;
    }
  }
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
        background-color: #fff;
        position: absolute;
        margin: 0 10px;
        padding: 0 10px;
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