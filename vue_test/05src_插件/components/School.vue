<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h1>{{ age + 1 }}</h1>
    <button @click="updateAge">点我增加校龄</button>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      name: "大学",
      age: 18,
    };
  },

  methods: {
    updateAge() {
      this.age++;
    },
  },
};
</script>

<style>
</style>