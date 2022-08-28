import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import navbar from "./components/header.vue";
import footerBar from "./components/footer.vue";

// Import Bootstrap and BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

// Custom Comonents
Vue.component("custom-navbar", navbar);
Vue.component("custom-footer", footerBar);

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// Init Vue
new Vue({
  el: "#app",
  render: (h) => h(App),
});
