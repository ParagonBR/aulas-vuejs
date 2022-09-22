<template>
  <div>
    <custom-navbar></custom-navbar>
    <div class="m-5 text-center">
      <h3>{{ msg }}</h3>
      <div class="m-3">
        <img alt="Vue logo" src="/src/assets/vue.svg" />

        <img src="/public/vite.svg" alt="Vite logo" />
      </div>
      <p>{{ lorem }}</p>
    </div>
  </div>
</template>

<script>
import { bus } from "./main";
import { http } from "./main";
export default {
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js + Vite App",
      lorem: null,
      random: Math.floor(Math.random() * (200 - 1) + 1),
    };
  },
  async beforeMount() {
    try {
      const { data } = await http.get(
        `https://jsonplaceholder.typicode.com/todos/${this.random}`
      );
      this.lorem = data.title;
    } catch (err) {
      console.log(err);
      this.lorem = "Erro ao carregar dados, favor checar console";
    }
  },
};
</script>

<style>
img {
  width: 50px;
  height: 50px;
}
</style>
