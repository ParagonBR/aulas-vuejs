import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import navbar from "./components/header.vue";
import footer from "./components/footer.vue";
// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.component("custom-navbar", navbar);
Vue.component("custom-footer", footer);
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
new Vue({
  el: "#app",
  render: (h) => h(App),
});
