<template>
  <div class="home">
    <div class="line1">
      <div class="line1-box center" v-for="item in line1" @click="handleLine1Click(item)">
        <i :class="[`iconfont`, item.iconClass]" :style="{color: item.iconColor}"/>
        <span>{{ item.title }}</span>
      </div>
    </div>
    <div class="line2">
      <div class="left column">
        <div class="top">
          <span class="top-title">开发企业房产业务申报系统</span>
          <span class="top-subtitle">欢迎使用才气房产系列软件</span>
        </div>
        <div class="bottom">
          <div class="bottom-title">通知公告</div>
          <div class="tabsWrapper">
            <el-tabs value="first" type="border-card">
              <el-tab-pane label="全部" name="first">
                <div @click="handleNewsDetail(item)" class="news-item" v-for="item in news">
                  <span class="content">{{item.tzggTitle}}</span>
                  <span class="time">{{item.tzggFbsj}}</span>
                  <span class="btn">
                    <el-button v-if="item.confirmStatus" disabled size="mini" type="primary">已确认</el-button>
                    <el-button v-else size="mini" type="primary" @click="handleConfirm(item.tzggId)">确认</el-button>
                  </span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="已读" name="second">
                <div @click="handleNewsDetail(item)" class="news-item" v-for="item in readNews">
                  <span class="content">{{item.tzggTitle}}</span>
                  <span class="time">{{item.tzggFbsj}}</span>
                </div>
              </el-tab-pane>
              <el-tab-pane label="未读" name="third">
                <div @click="handleNewsDetail(item)" class="news-item" v-for="item in unreadNews">
                  <span class="content">{{item.tzggTitle}}</span>
                  <span class="time">{{item.tzggFbsj}}</span>
                  <span class="btn">
                    <el-button  size="mini" type="primary" @click="handleConfirm(item.tzggId)">确认</el-button>
                  </span>
                </div>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
      <div class="right">
        <div>
          <div class="right-title">
            <span>服务信息</span></div>
          <div class="infoArea">
            <div class="infoArea-item" v-for="item in infoArea.infoItems">
              <img :src="item.imgPath" alt="" style="width: 100%; height: 100%">
              <div class="content column">
                <span class="title">{{ item.title }}</span>
                <span class="subtitle">{{ item.subtitle }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="dutyArea">
          <table border="1px">
            <tr>
              <td :colspan="2*Object.keys(infoArea.duty).length">2020年月度值班表</td>
            </tr>
            <tr>
              <td colspan="2" v-for="(key,val) in Object.keys(infoArea.duty)">第{{ key }}周</td>
            </tr>
            <tr>
              <template v-for="(val, index) in Object.values(infoArea.duty)">
                <td v-for="item in Object.keys(val)">{{ item }}</td>
              </template>
            </tr>
            <tr>
              <template v-for="(val, index) in Object.values(infoArea.duty)">
                <td v-for="item in Object.values(val)" :title='item?item[0].ydzbZbrlxdh: "--"'>{{ item?item[0].ydzbZbrxm: "--" }}</td>
              </template>
            </tr>
          </table>
        </div>
        <div>
          <div class="right-title">
            <span>工作文件</span>
          </div>
          <div class="filesArea">
            <div class="filesArea-item" v-for="item in infoArea.jobFiles">
              <i :class="['iconfont', item.iconClass]" :style="{color:item.color}"/>
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
    <el-dialog :visible.sync="dialogVisible" width="1200px" :title="dialogTitle" center>
      <HomeDialog ref="dialog" @close="dialogVisible=false"/>
    </el-dialog>
  </div>
</template>

<script>
import {homeApi} from "@/api/menu_1/home";
import {mixins} from "@/utils/mixins";
import HomeDialog from "@/views/menu_1/HomeDialog";
import {config} from "@/api/baseConfig";
import WbDialog from "@/components/common/wb-dialog/WbDialog";
import MyDialog from "@/views/menu_1/components/MyDialog";

export default {
  name: "Home",
  components: {MyDialog, WbDialog, HomeDialog},
  mixins: [mixins.dialogMixin],
  data() {
    return {
      line1: [
        {title: "操作服务", iconClass: "iconlujing126", iconColor: "#3474CC", meta: {}},
        {title: "驱动下载", iconClass: "iconqudongxiazai", iconColor: "#36A88D", meta: {type:"downloadDriver"}},
        {title: "IE设置", iconClass: "iconIEshezhi", iconColor: "#4C92F2", meta: {}},
        {title: "打印设置", iconClass: "icondayinshezhi", iconColor: "#3BA8B9", meta: {}},
        {title: "操作流程", iconClass: "iconyewuliucheng", iconColor: "#6A59E0", meta: {}},
        {title: "操作手册", iconClass: "iconcaozuoshouce", iconColor: "#D65B94", meta: {}},
        {title: "有问必答", iconClass: "iconyouwenbida1", iconColor: "#36A88D", meta: {type:"openQuestions"}},
      ],
      infoArea: {
        infoItems: [
          {title: "公司名称", subtitle: "江西才气软件技术有限公司", imgPath: '/assets/img/menu1/section-1.png', meta: {}},
          {title: "QQ群", subtitle: "601613117", imgPath: '/assets/img/menu1/section-2.png', meta: {}},
          {title: "售后联系电话", subtitle: "4001-366328(转2)", imgPath: '/assets/img/menu1/section-3.png', meta: {}},
          {title: "商务联系电话", subtitle: "4001-366328(转2)", imgPath: '/assets/img/menu1/section-4.png', meta: {}},
        ],
        duty: {},
        jobFiles: [
          {title: "通知文件", iconClass: "iconwenjian", color: "#E79E5F", meta: ""},
          {title: "业务表格", iconClass: "iconbiaoge", color: "#4C92F2", meta: ""},
          {title: "政策法规", iconClass: "iconfagui", color: "#5245CB", meta: ""},
        ]
      },
      news: [],
      flag: 0,
    }
  },
  computed:{
    readNews() {
      return this.news.filter(item=>item.confirmStatus)
    },
    unreadNews() {
      return this.news.filter(item=>!item.confirmStatus)
    }
  },
  created() {
    this.fetchHomeNews()
    this.fetchDuty()
  },
  methods: {
    fetchHomeNews() {
      homeApi.homeNews().then(ret => {
        this.news = ret.data
      })
    },
    handleConfirm(id) {
      homeApi.newsConfirm(id).then(ret=>{
        if(ret.code===200){
          this.$message.success("确认成功")
          this.fetchHomeNews()
        }
      })
    },
    fetchDuty() {
      homeApi.dutyData().then(ret => {
        this.infoArea.duty = ret.data
      })
    },
    handleLine1Click(item){
      if(item.meta.type==="openQuestions"){
        this.$openQuestions()
      }else if(item.meta.type==="downloadDriver"){
        let url = config.productMode ? "/data_center/download/downloadFile" : `http://${config.baseIP}:8090/data_center/download/downloadFile`
        window.open(url)
      }
    },
    handleNewsDetail(item){
      this.dialogVisible = true
      this.dialogTitle = item.tzggTitle
      this.$nextTick(() => {
        this.$refs.dialog.setMode(0, item.tzggId)
      })
    }
  }
}
</script>

<style scoped lang="scss">
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
}

.home {
  display: flex;
  flex-direction: column;
  min-height: 600px !important;
  overflow-y: auto !important;

  .line1 {
    height: 110px;
    display: flex;

    .line1-box {
      background-color: white;
      box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      flex: 1;

      i {
        font-size: 30px;
      }

      span {
        font-size: 14px;
        margin-left: 15px;
        color: #606266;
      }

      &:nth-child(n+2) {
        margin-left: 10px;
      }

      &:hover {
        background-color: #E2F5FD;
        cursor: pointer;
      }
    }
  }

  .line2 {
    margin-top: 10px;
    //height: 785px;
    flex: 1;
    display: flex;

    .left {
      width: 65%;

      .top {
        flex-basis: 50%;
        margin-bottom: 10px;
        background: url("~@/assets/images/home/menu1/home1.png") no-repeat center;
        background-size: cover;
        color: white;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        flex-direction: column;
        justify-content: center;
        display: flex;
        align-items: center;

        .top-title {
          font-size: 24px;
          font-weight: bold;
          line-height: 31px;
          position: relative;
          top: -30px;
        }

        .top-subtitle {
          font-size: 16px;
          font-weight: bold;
          line-height: 20px;
          position: relative;

          &::before {
            content: "";
            width: 36px;
            height: 2px;
            display: block;
            position: absolute;
            left: -40px;
            top: 50%;
            background-color: white;
          }

          &::after {
            content: "";
            width: 36px;
            height: 2px;
            display: block;
            position: absolute;
            right: -40px;
            top: 50%;
            background-color: white;
          }
        }
      }

      .bottom {
        flex-basis: 50%;
        background-color: white;
        .bottom-title{
          font-weight: 600;
          padding-left: 30px;
          line-height: 48px;
          border-bottom: 1px solid #E8EBF1;
        }
        .tabsWrapper{
          padding: 10px;
          .news-item{
            display: flex;
            align-items: center;
            height: 40px;
            color: #606266;
            cursor: pointer;
            font-size: 14px;
            margin-left: -10px;
            padding-left: 10px;
            &:hover{
              background-color: rgba(100,100,100,0.1);
            }
            .content{
              flex: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            .time{
              width: 180px;
            }
            .btn{
              width: 80px;
              text-align: center;
            }
          }
        }
      }
    }

    .right {
      background-color: white;
      width: 35%;
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 10px 0 20px;

      .right-title {
        text-align: center;
        position: relative;
        line-height: 3em;

        span {
          font-size: 14px;
          font-weight: 600;
          position: relative;
          font-family: MicrosoftYaHei;
          color: #303133;
          line-height: 21px;

          &::before {
            position: absolute;
            left: -110px;
            top: calc(50% + 3px);
            transform: translateY(-50%);
            content: "";
            display: block;
            width: 100px;
            height: 6px;
            background: url("~@/assets/images/home/menu1/title-bg.png") no-repeat;
            background-size: contain;
          }

          &::after {
            position: absolute;
            right: -110px;
            top: calc(50% - 3px);
            content: "";
            display: block;
            width: 100px;
            height: 6px;
            background: url("~@/assets/images/home/menu1/title-bg.png") no-repeat;
            background-size: contain;
            transform: rotate(180deg);
          }
        }
      }

      .infoArea {
        display: flex;
        flex-wrap: wrap;

        .infoArea-item {
          padding: 10px;
          width: 50%;
          position: relative;

          .content {
            color: white;
            position: absolute;
            left: 10px;
            right: 10px;
            top: 10px;
            bottom: 10px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            //background-color: #3a8ee6;
          }

          .title {
            font-size: 12px;
          }

          .subtitle {
            font-size: 14px;
            font-weight: 600;
          }
        }
      }

      .dutyArea {
        padding: 0 10px;
        table {
          width: 100%;
          border-collapse: collapse;
          font-size: 12px;
          border-radius: 4px 4px 0px 0px;
          border: 1px solid #C0C4CC;
        }

        tr:nth-child(1) {
          background-color: #DCF0FE;
          font-weight: 600;
        }
        tr:nth-child(2), tr:nth-child(3){
          color:#606266;
        }
        tr:nth-child(4){
          color: #303133;
        }

        td {
          text-align: center;
          line-height: 1.8em;
        }
      }

      .filesArea{
        display: flex;
        justify-content: space-evenly;
        .filesArea-item{
          flex: 1;
          border-radius: 4px;
          border: 1px solid #E8EBF1;
          margin: 0 10px;
          height: 100px;
          display: flex;
          flex-flow: column wrap;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          font-family: MicrosoftYaHei;
          color: #606266;
          line-height: 16px;
          &:hover{
            cursor: pointer;
            background: #E2F5FD;
            border: 1px solid #0085EB;
          }
        }
      }
    }
  }
}


</style>