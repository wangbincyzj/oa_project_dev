<!--
  二级展示菜单 todo 样式需调整
-->
<template>
  <div>
    <ul class="father" ref="father" v-if="myData.length">
      <li v-for="(i,iIndex) in myData" class="father">
        <div class="father" :class="{active:i.active}" @click="fatherClick(iIndex)">{{i.title}} <i v-if="i.children.length" class="el-icon-arrow-up"/></div>
        <ul v-if="i.children.length&&i.active" class="son">
          <li v-for="(j,jIndex) in i.children" class="son" :class="{active:j.active}" @click="sonClick(iIndex,jIndex)">
            <div class="son">{{j.title}}</div>
          </li>
        </ul>
      </li>
    </ul>
    <div class="noData" v-else>
      暂无数据
    </div>
  </div>

</template>

<script>
  export default {
    name: "MyNav",
    props:{
      myData:{
        type: Array,
        required: true
      }
      /*myData: [
        {title: "不知名小区一期",active:false, children:[{title:"hehe", active:false}]},
        {title: "不知名小区一期", active:false, children:[{title:"hehe", active:false}]},
      ]*/
    },
    methods:{
      fatherClick(index) {
        this.myData.forEach((item,i)=>{
          if(i===index){
            this.myData[i].active = !this.myData[i].active
          }else{
            this.myData[i].active = false;
          }
        })
      },
      sonClick(iIndex,jIndex){
        this.myData.forEach((i,index1)=>i.children.forEach((j,index2)=>{
          this.myData[index1].children[index2].active = iIndex === index1 && jIndex === index2;
        }));
        this.$emit("selected", [iIndex, jIndex])
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "~@/assets/css/var.scss";
  ul.father{
    user-select: none;
    margin: 3px;
    width: 100%;
    border: 1px solid $border-2;
    box-shadow: $box-shadow;
    li.father{
      margin-bottom: 8px;
      font-size: 14px;

    }
    div.father{
      font-weight: 600;
      padding: 5px 10px;
      color: white;
      background: $brand-light;
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      i{
        transform: rotate(0);
        transition: all 0.3s;
      }
    }
    div.active{
      i{
        transform: rotate(-180deg);
      }
    }
  }
  ul.son{
    li{
      padding: 5px;
      padding-left: 15px;
      &:hover{
        background-color: $text-normal;
        color: white;
        cursor: pointer;
      };
      &.active{
        background: red;
        color: white;
      }
    }
  }
  div.noData{
    width: 100%;
    border: 1px solid $border-2;
    box-shadow: $box-shadow;
    text-align: center;
    line-height: 300px;
  }
</style>