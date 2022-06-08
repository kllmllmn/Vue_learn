// 求和相关配置
export default {
  namespaced: true,
  actions: {
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
  },
  mutations: {
    ADD(state, value) {
      console.log("matutions中ADD被调用", state, value);
      state.sum += value;
    },
    DECREASE(state, value) {
      console.log("matutions中DECREASE被调用", state, value);
      state.sum -= value;
    },
  },
  state: {
    sum: 0,
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};
