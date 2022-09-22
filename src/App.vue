<template>
  <div>
    <custom-navbar></custom-navbar>
    <p class="text-center">{{ msg }}</p>
    <custom-footer></custom-footer>
  </div>
</template>

<script>
import { bus } from "./main";

export default {
  components: {},
  data() {
    return {
      msg: "Welcome to Your Vue.js + Vite App",
    };
  },
};
</script>

<style></style>
