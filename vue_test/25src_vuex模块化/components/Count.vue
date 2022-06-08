<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
    <h1>当前求和的10倍为：{{ bigSum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase(n)">+</button>
    <button @click="decrease(n)">-</button>
    <button @click="increaseOdd(n)">当前和为奇数时再加</button>
    <button @click="increaseWait(n)">延迟一会儿再加</button>
    <h2 style="color: blue">Persons组件的总人数为：{{ persons.length }}</h2>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Count",
  data() {
    return {
      n: 1, //当前选择的数字
    };
  },
  computed: {
    ...mapState("countOptions", ["sum"]),
    ...mapState("personOptions", ["persons"]),
    //借助mapGetters生成计算属性，从getters读取数据（数组写法）
    ...mapGetters("countOptions", ["bigSum"]),
  },
  mounted() {
    console.log(this);
    console.log(this.$store);
  },
  methods: {
    ...mapMutations("countOptions", { increase: "ADD", decrease: "DECREASE" }),

    ...mapActions("countOptions", {
      increaseOdd: "increaseOdd",
      increaseWait: "increaseWait",
    }),
    // {add:add}可以简写为{add},{add:'add'}不可以简写为{add}
  },
};
</script>

<style>
</style>