<template>
  <div>
    <h4>消息id：{{ $route.query.id }}</h4>
    <h4>消息标签：{{ $route.query.title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Detail",
  mounted() {
    console.log(this);
    console.log(this.$route);
  },
};
</script>

<style>
</style>