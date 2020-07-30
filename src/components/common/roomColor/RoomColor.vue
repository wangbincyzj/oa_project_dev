<!--
  显示颜色:
   0 保留 1成品房 2可售 3预定 4备案 5预告 6按揭
   7 限制 8转移 9抵押 10查封 12签订销售承诺
-->

<template>
  <ul class="roomColor">
    <li>
      <div class="c0"></div>
      <div class="text">已售</div>
    </li>
    <li>
      <div class="c1"></div>
      <div class="text">成品</div>
    </li>
    <li>
      <div class="c2"></div>
      <div class="text">可售</div>
    </li>
    <li>
      <div class="c12"></div>
      <div class="text">承诺</div>
    </li>
    <li>
      <div class="c3"></div>
      <div class="text">预订</div>
    </li>
    <li>
      <div class="c4"></div>
      <div class="text">备案</div>
    </li>
    <li>
      <div class="c5"></div>
      <div class="text">预告</div>
    </li>
    <li>
      <div class="c6"></div>
      <div class="text">按揭</div>
    </li>
    <li>
      <div class="c8"></div>
      <div class="text">登记</div>
    </li>
    <li>
      <div class="c9"></div>
      <div class="text">抵押</div>
    </li>
    <li>
      <div class="c7"></div>
      <div class="text">限制</div>
    </li>
    <li>
      <div class="c10"></div>
      <div class="text">查封</div>
    </li>

  </ul>
</template>

<script>
  export default {
    name: "RoomColor"
  }
</script>

<style scoped lang="scss">
  ul{
    display: flex;
    li{
      display: flex;
      flex: 1;
      flex-flow: column nowrap;
      text-align: center;
      font-size: 13px;
      div{
        height: 20px;
        line-height: 20px;
        border: 1px solid red;
      }
      div:nth-child(1){
        border-bottom: none;
      }
    }
    li+li{
      div{
        border-left: none;
      }
    }
  }
  .c0{background-color: LightGrey;}
  .c1{background-color: white;}
  .c2{background-color: green;}
  .c3{background-color: purple;}
  .c4{background-color: yellow;}
  .c5{background-color: SkyBlue;}
  .c6{background-color: Crimson;}
  .c7{background-color: gray;}
  .c8{background-color: #9999cc;}
  .c9{background-color: #0099ff;}
  .c10{background-color: #FF7300;}
  .c12{
    background-color: #3496af;}
</style>