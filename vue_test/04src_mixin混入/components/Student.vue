<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h1>{{ age + 1 }}</h1>
    <button @click="updateAge">点我增加年龄</button>
  </div>
</template>

<script>
// import { mixin } from "../mixin.js";
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "tom",
      age: 18,
    };
  },
  // mixins: [mixin], //局部混入
  /* methods: {
    updateAge() {
      this.age++;
    },
  }, */
};
</script>

<style>
</style>