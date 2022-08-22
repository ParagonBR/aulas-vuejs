<template>
  <div>
    <custom-navbar></custom-navbar>
    <ListaPoke></ListaPoke>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

import ListaPoke from "./components/lista.vue";
export default {
  components: {
    HelloWorld,
    ListaPoke,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js + Vite App",
    };
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
  margin-top: 60px;
}
img {
  width: 100px;
  height: 100px;
  margin: auto 30px;
}
</style>
