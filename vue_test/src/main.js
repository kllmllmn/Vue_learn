import Vue from "vue";
import App from "./App";
/* //完全引入
// 引入ElementUI组件库
import ElementUI from "element-ui";
// 引入element-ui全部样式
import "element-ui/lib/theme-chalk/index.css";
// 应用ElementUI
Vue.use(ElementUI); */

import { Button, Row, DatePicker } from "element-ui";

// 首先执行完所有的import，再执行其他的代码
Vue.config.productionTip = false;
// 注册全局组件
Vue.component(Button.name, Button);
Vue.component(Row.name, Row);
Vue.component(DatePicker.name, DatePicker);

new Vue({
  el: "#app",
  render: (h) => h(App),
});
