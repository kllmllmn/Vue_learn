import Vue from "vue";
import App from "./App";

import store from "./store/index";

// 首先执行完所有的import，再执行其他的代码
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  store,
  render: (h) => h(App),
});
