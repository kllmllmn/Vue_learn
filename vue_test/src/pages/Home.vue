<template>
  <h2>我是Home的内容</h2>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    console.log("Home被挂载了", this);
  },
  beforeDestroy() {
    console.log("Home即将被销毁");
  },
};
</script>

<style>
</style>