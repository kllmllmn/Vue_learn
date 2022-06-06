import Vue from "vue";
import App from "./App";
import { mixin, addr } from "./mixin";

Vue.config.productionTip = false;
Vue.mixin(mixin); //
Vue.mixin(addr); //全局混入，给每个vm,vc混入

new Vue({
  el: "#app",
  render: (h) => h(App),
});
