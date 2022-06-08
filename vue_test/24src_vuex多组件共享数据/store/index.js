// 创建Vuex中最为核心的store
import { nanoid } from "nanoid";

import Vue from "vue";
// 引入Vuex
import Vuex from "vuex";
// 应用Vuex
Vue.use(Vuex);
// 创建actions，用于响应组件中的动作
const actions = {
  add(context, value) {
    console.log("actions中add被调用了", context, value);
    context.commit("ADD", value);
  },
  decrease(context, value) {
    console.log("actions中decrease被调用了", context, value);
    context.commit("DECREASE", value);
  },
  increaseOdd(context, value) {
    if (context.state.sum % 2) {
      console.log("actions中add被调用了", context, value);
      context.commit("ADD", value);
    }
  },
  increaseWait(context, value) {
    console.log("actions中add被调用了", context, value);
    setTimeout(() => {
      context.commit("ADD", value);
    }, 500);
  },
};
// 创建mutations，用于操作数据(state)
const mutations = {
  ADD(state, value) {
    console.log("matutions中ADD被调用", state, value);
    state.sum += value;
  },
  DECREASE(state, value) {
    console.log("matutions中DECREASE被调用", state, value);
    state.sum -= value;
  },
  ADD_PERSON(state, value) {
    state.persons.push({ id: nanoid(), name: value });
  },
};
// 创建state，用于存储数据
const state = {
  sum: 0,
  persons: [{ id: "001", name: "John" }],
};
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 创建并暴露store
export default new Vuex.Store({
  actions: actions,
  mutations: mutations,
  state: state,
  getters: getters,
});
