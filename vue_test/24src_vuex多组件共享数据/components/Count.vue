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
    /* // 自己写计算属性
    sum() {
      return this.$store.state.sum;
    },
    bigSum() {
      return this.$store.getters.bigSum;
    }, */
    //借助mapState生成计算属性，从state读取数据（对象写法）
    // ...mapState({ sum: "sum"}), //扩展运算符
    // 数组写法
    ...mapState(["sum", "persons"]),
    //借助mapGetters生成计算属性，从getters读取数据（数组写法）
    ...mapGetters(["bigSum"]),
  },
  mounted() {
    console.log(this);
  },
  methods: {
    //自己写方法
    /*increase() {     
      // 这里可以直接调用mutations中的方法
      this.$store.commit("ADD", this.n);
    },
    decrease() {
      this.$store.commit("DECREASE", this.n);
    }, */
    /* // 借助mapMutations生成方法，其形式为
    increase(value) {       
      this.$store.commit("ADD", value);
    }, */
    ...mapMutations({ increase: "ADD", decrease: "DECREASE" }),

    /* // 自己写方法
    // 这里先调用actions中的方法
    increaseOdd() {
      this.$store.dispatch("increaseOdd", this.n);
    },
    increaseWait() {
      this.$store.dispatch("increaseWait", this.n);
    }, */
    ...mapActions({ increaseOdd: "increaseOdd", increaseWait: "increaseWait" }),
    // {add:add}可以简写为{add},{add:'add'}不可以简写为{add}
  },
};
</script>

<style>
</style>