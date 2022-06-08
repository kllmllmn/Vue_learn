import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
// 引入路由器
import router from "./router/index";
Vue.use(VueRouter);
// 首先执行完所有的import，再执行其他的代码
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: (h) => h(App),
  router: router,
});
