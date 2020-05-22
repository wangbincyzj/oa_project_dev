<template>
  <div id="baseLayout">
    <Header class="header"/>

    <main>
      <AsideNav class="asideNav"/>
      <RouterView class="mainRouter"/>
    </main>

  </div>
</template>

<script>
  import Header from "@/views/layout/components/Header";
  import AsideNav from "@/views/layout/components/AsideNav";

  export default {
    name: "BaseLayout",
    components: {AsideNav, Header},
  }
</script>

<style lang="scss">
  #baseLayout {
    height: 100vh;

    .header {
      height: 55px;
    }

    main {
      height: calc(100% - 55px);
      overflow-y: hidden;
      display: flex;

      .asideNav {
        height: 100%;
        width: 200px;
        overflow-y: auto;
        overflow-x: hidden;
        flex-shrink: 0;
      }

      .mainRouter {
        flex: 1;
        overflow-y: auto;
      }
    }
  }
</style>