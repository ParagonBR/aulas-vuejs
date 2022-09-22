<template>
  <div>
    <custom-navbar></custom-navbar>
    <formularios />
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import ninjas from "./components/ninjas.vue";
import formularios from "./components/form/formularios.vue";
export default {
  components: {
    ninjas,
    formularios,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", age: 30, belt: "black" },
        { name: "Ken", age: 20, belt: "orange" },
        { name: "Chun-Li", age: 10, belt: "green" },
        { name: "Yoshi", age: 20, belt: "white" },
        { name: "Crystal", age: 25, belt: "blue" },
      ],
      texto: "Hello World",
    };
  },
  methods: {
    changeText(newText) {
      this.texto = newText;
    },
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
