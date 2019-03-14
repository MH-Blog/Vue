<template>
  <div id="app">
    <Map :option="config.map" :baseLayer="config.baseLayer" />
  </div>
</template>

<script>
import config from "./config/config";
import Map from "./components/Map";
export default {
  name: "app",
  components: {
    Map
  },
  data() {
    return {
      config
    };
  }
};
</script>

<style lang="scss">
html {
  font-size: 62.5% !important;
}
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100vw;
  height: 100vh;
  font-size: 1.6rem;
}
</style>
