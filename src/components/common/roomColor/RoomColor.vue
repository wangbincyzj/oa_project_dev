<!--
  显示颜色:
   0 保留 1成品房 2可售 3预定 4备案 5预告 6按揭
   7 限制 8转移 9抵押 10查封 12签订销售承诺
-->

<template>
  <ul class="roomColor">
    <li>
      <div class="c1"></div>
      <div class="text">成品</div>
    </li>

    <li>
      <div class="c2"></div>
      <div class="text">可售</div>
    </li>
    <li>
      <div class="c3"></div>
      <div class="text">承诺</div>
    </li>
    <li>
      <div class="c4"></div>
      <div class="text">签约</div>
    </li>
    <li>
      <div class="c5"></div>
      <div class="text">备案</div>
    </li>
    <li>
      <div class="c6"></div>
      <div class="text">预告</div>
    </li>
    <li>
      <div class="c7"></div>
      <div class="text">按揭</div>
    </li>
    <li>
      <div class="c8"></div>
      <div class="text">首次</div>
    </li>
    <li>
      <div class="c9"></div>
      <div class="text">转移</div>
    </li>
    <li>
      <div class="c10"></div>
      <div class="text">抵押</div>
    </li>
    <li>
      <div class="c11"></div>
      <div class="text">查封</div>
    </li>
    <li>
      <div class="c12"></div>
      <div class="text">限制</div>
    </li>


  </ul>
</template>

<script>
  export default {
    name: "RoomColor"
  }
</script>

<style scoped lang="scss">
@import "~@/assets/css/var.scss";
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
  .c1{background-color: $lp-cp;}
  .c2{background-color: $lp-ks;}
  .c3{background-color: $lp-cn;}
  .c4{background-color: $lp-qy;}
  .c5{background-color: $lp-ba;}
  .c6{background-color: $lp-yg;}
  .c7{background-color: $lp-aj;}
  .c8{background-color: $lp-sc;}
  .c9{background-color: $lp-zy;}
  .c10{background-color: $lp-dy;}
  .c11{background-color: $lp-cf;}
  .c12{background-color: $lp-xz;}
</style>