<template>
  <div class="wsysht-item tjysmbItems">
    <div class="hd">附件1-4</div>
    <div class="bd">

      <!--附件一-->
      <div class="item">
        <h4 class="title">附件一：房屋平面图</h4>
      </div>

      <!--附件二-->
      <div class="item">
        <h4 class="title">附件二：公共部位与公用房屋分摊建筑面积构成说明</h4>
        <ul>
          <li>
            按国家房产测量规范执行，以具备资质的测绘单位出具的测绘报告为准。
            <el-input v-model="htFjesm" type="textarea" style="padding: 0 30px" :rows="4"/>
          </li>
        </ul>
      </div>

      <!--附件三-->
      <div class="item">
        <h4 class="title">附件三：装饰、设备标准</h4>
        <ul>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">1.外墙</el-col>
              <el-col :span="20"><el-input v-model="htFjswq" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">2.内墙</el-col>
              <el-col :span="20"><el-input v-model="htFjsnq" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">3.顶棚</el-col>
              <el-col :span="20"><el-input v-model="htFjsdp" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">4.地面</el-col>
              <el-col :span="20"><el-input v-model="htFjsdm" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">5.门窗</el-col>
              <el-col :span="20"><el-input v-model="htFjsmc" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">6.厨房</el-col>
              <el-col :span="20"><el-input v-model="htFjscf" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">7.卫生间</el-col>
              <el-col :span="20"><el-input v-model="htFjswsj" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">8.阳台</el-col>
              <el-col :span="20"><el-input v-model="htFjsyt" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">9.电梯</el-col>
              <el-col :span="20"><el-input v-model="htFjsdt" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
          <li>
            <el-row>
              <el-col :span="2" style="text-align: right">10.其他</el-col>
              <el-col :span="20"><el-input v-model="htFjsqt" type="textarea" style="padding: 0 30px" :rows="2"/>
              </el-col>
            </el-row>
          </li>
        </ul>
      </div>

      <!--附件四-->
      <div class="item">
        <h4 class="title">附件四：合同补充协议</h4>
        <ul>
          <el-input v-model="ht_fjsism" type="textarea" style="padding: 0 30px" :rows="8"/>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "No10",
  data() {
    return {
      // 附件二
      htFjesm: "",
      // 附件三
      htFjswq: "",
      htFjsnq: "",
      htFjsdp: "",
      htFjsdm: "",
      htFjsmc: "",
      htFjscf: "",
      htFjswsj: "",
      htFjsyt: "",
      htFjsdt: "",
      htFjsqt: "",
      // 附件四
      ht_fjsism: ""
    }
  }
}
</script>

<style scoped lang="scss">
.tjysmbItems {
  font-size: 15px;
  line-height: 1.2em;

  input {
    color: black;
    background: white;
    border: none;
    border-bottom: 1px solid rgba(18, 72, 179, 0.35);
    outline: none;

    &.w50 {
      width: 50px
    }

    &.w100 {
      width: 100px
    }

    &.w200 {
      width: 200px
    }

    &.w300 {
      width: 300px
    }

    &.w400 {
      width: 400px
    }

    &.w500 {
      width: 500px
    }

    &.w800 {
      width: 800px
    }
  }

  .item {
    margin-bottom: 50px;

    .title {
      font-weight: 600;
      color: black;
      line-height: 3em;
    }

    .textarea {
      width: 80%;
      display: block;
      height: 200px;
      font-size: 16px;
      margin: 0 auto;
    }

    ul {
      margin-bottom: 20px;
      margin-top: 10px;
      font-size: 14px;

      li {
        margin-bottom: 22px;
        line-height: 1.5em;
      }
    }

    .ul2 {
      padding-left: 30px;
    }

    p {
      text-indent: 2em;
      margin-bottom: 8px;
    }
  }
}
</style>