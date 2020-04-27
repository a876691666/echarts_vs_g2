import Vue from "vue";
import App from "./App.vue";
import VueAwesomeSwiper from "vue-awesome-swiper";

import Highlight from "./components/Highlight.js";
import MarkdownAgent from "./components/MarkdownAgent";

import "./assets/theme.css";

// import style
import "swiper/css/swiper.css";

Vue.use(Highlight);
Vue.component(MarkdownAgent.name, MarkdownAgent);
Vue.use(VueAwesomeSwiper /* { default options with global component } */);
Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
