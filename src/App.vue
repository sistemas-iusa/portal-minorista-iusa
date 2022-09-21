<template>
  <div id="app">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "@/template/partials/NavBar.vue";
//import SideBar from "@/template/partials/SideBar.vue";
//import Footer from "@/template/partials/Footer.vue";
export default {
  components: {
    NavBar,
    //SideBar,
    //Footer,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
