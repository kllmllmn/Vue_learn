<template>
  <div>
    <h1>当前求和为：{{ $store.state.sum }}</h1>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
    <button @click="increaseOdd">当前和为奇数时再加</button>
    <button @click="increaseWait">延迟一会儿再加</button>
  </div>
</template>

<script>
export default {
  name: "Count",
  data() {
    return {
      n: 1, //当前选择的数字
    };
  },
  mounted() {
    console.log(this);
  },
  methods: {
    increase() {
      // 这里可以直接调用matutions中的方法
      this.$store.commit("ADD", this.n);
    },
    decrease() {
      this.$store.commit("DECREASE", this.n);
    },
    // 这里先调用actions中的方法
    increaseOdd() {
      this.$store.dispatch("increaseOdd", this.n);
    },
    increaseWait() {
      this.$store.dispatch("increaseWait", this.n);
    },
  },
};
</script>

<style>
</style>