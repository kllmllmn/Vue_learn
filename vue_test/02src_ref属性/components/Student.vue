<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h1>{{ age }}</h1>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      name: "tom",
      age: 18,
    };
  },
};
</script>

<style>
</style>