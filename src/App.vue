<template>
  <div>
    <custom-navbar></custom-navbar>
    <div class="m-5 d-flex justify-content-center align-items-center">
      <h3>{{ msg }}</h3>
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
    };
  },
  mounted() {
    http
      .get("https://jsonplaceholder.typicode.com/todos/1")
      .then(({ data }) => {
        console.log(data);
      });
  },
};
</script>

<style></style>
