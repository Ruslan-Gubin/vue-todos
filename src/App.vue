<template>
  <div class="wrapper" id="app">
    <LayoutHeader />
    <router-view></router-view>
  </div>
</template>

<script>
import { LayoutHeader } from '@/widgets'

export default {
  name: "App",
  components: {
    LayoutHeader,
  },
};
</script>

<style>
@import url("./assets/css/reset.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.wrapper {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
