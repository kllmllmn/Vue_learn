<template>
  <div>
    <h1>当前求和为：{{ sum }}</h1>
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
      sum: 0,
    };
  },
  methods: {
    increase() {
      this.sum++;
    },
    decrease() {
      this.sum--;
    },
    increaseOdd() {
      if (this.sum % 2) {
        this.sum += this.n;
      }
    },
    increaseWait() {
      setTimeout(() => {
        this.sum += this.n;
      }, 500);
    },
  },
};
</script>

<style>
</style>