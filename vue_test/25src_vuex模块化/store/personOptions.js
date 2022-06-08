// 人员管理相关配置
import { nanoid } from "nanoid";
import axios from "axios";
export default {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      if (value.indexOf("王") === 0) {
        context.commit("ADD_PERSON", value);
      } else {
        alert("姓要为王");
      }
    },
    addPersonServer(context) {
      //   const t = JSON.stringify({ name: "nn" });
      //   console.log(t);
      //   console.log(JSON.parse(t));
      axios.get("https://api.uomg.com/api/rand.qinghua?format=json").then(
        (response) => {
          // 先把值转换为JSON格式
          const data = JSON.stringify(response.data);
          context.commit("ADD_PERSON", JSON.parse(data).content);
        },
        (err) => {
          console.log(err.message);
        }
      );
    },
  },
  mutations: {
    ADD_PERSON(state, value) {
      state.persons.push({ id: nanoid(), name: value });
    },
  },
  state: {
    persons: [{ id: "001", name: "John" }],
  },
  getters: {
    lastName(state) {
      return state.persons[state.persons.length - 1].name;
    },
  },
};
