// 创建Vuex中最为核心的store

import countOptions from "./countOptions";
import personOptions from "./personOptions";

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 应用Vuex
Vue.use(Vuex);
// 创建actions，用于响应组件中的动作

// 创建并暴露store
export default new Vuex.Store({
  modules: {
    countOptions,
    personOptions,
  },
});
