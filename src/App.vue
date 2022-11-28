<script>
import navBar from "./components/navBar.vue";
import PageFooter from "./components/pageFooter.vue";
export default {
  components: {
    navBar,
    PageFooter,
  },
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleCustomChange(s) {
      this.search = s;
    },
  },
};
</script>
<template>
  <div id="app" dir="">
    <nav-Bar @customChange="handleCustomChange"></nav-Bar>
    <router-view :valSearch="this.search"></router-view>
    <Page-Footer></Page-Footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Cairo");

* {
  font-family: "Cairo", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
