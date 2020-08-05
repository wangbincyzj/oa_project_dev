<template>
  <div>
    <el-input
        size="mini"
        clearable
        v-model="searchValue"
        v-if="search"
        :placeholder="placeholder"
        @input="handleSearch"
    ></el-input>
    <ul class="father" ref="father" v-if="myData.length">
      <li v-for="(i,iIndex) in myData" class="father">
        <div class="father" :class="{active:i.active}" @click="fatherClick(iIndex)">{{i.title}} <i v-if="i.children.length" class="el-icon-arrow-down"/></div>
        <ul  class="son" :class="{active:i.children.length&&i.active}" :style="{maxHeight: getMaxHeight(i)}">
          <li v-for="(j,jIndex) in i.children" class="son" :class="{active:j.active}" @click="sonClick(iIndex,jIndex)">
            <div class="son">{{j.title}}</div>
          </li>
        </ul>
      </li>
    </ul>
  </div>

</template>

<script>
import {jsUtils} from "@/utils/utils";

export default {
  name: "MyNav",
  data() {
    return{
      searchValue: ""
    }
  },
  props:{
    myData:{
      type: Array,
      required: true
    },
    search:{
      type: Boolean,
      default: false
    },
    placeholder:{
      type: String,
      default: "搜索"
    }
    /*myData: [
      {title: "不知名小区一期",active:false, children:[{title:"hehe", active:false}]},
      {title: "不知名小区一期", active:false, children:[{title:"hehe", active:false}]},
    ]*/
  },
  created() {
    this.handleSearch = jsUtils.debounce(this.handleSearch)
  },
  methods:{
    getMaxHeight(item) {
      return item.active ? item.children.length * 35 + "px" : 0
    },
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
    },
    handleSearch(e) {
      this.$emit("search", e)
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
ul.father{
  user-select: none;
  width: 100%;
  li.father{
    font-size: 14px;
  }
  div.father{
    font-weight: 600;
    height: 35px;
    color: rgba(96,98,102,1);
    padding: 0 20px;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    i{
      transform: rotate(0);
      transition: all 0.3s;
    }
  }
  div.active{
    i{
      transform: rotate(180deg);
    }
  }
}
ul.son{
  transition: all 0.3s;
  overflow: hidden;
  max-height: 0;
  &.active{
  }
  li{
    padding-left: 35px;
    height: 35px;
    line-height: 35px;
    overflow-x: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    background-color: rgb(238, 238, 238);
    &:hover{
      background-color: rgb(190,190,190);
      color: white;
      cursor: pointer;
    };
    &.active{
      background: $brand;
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