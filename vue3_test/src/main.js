// 引入的不是Vue构造函数，而是一个名为createApp的工厂函数
import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
