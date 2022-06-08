<template>
  <div>
    <h4>消息id：{{ id }}</h4>
    <h4>消息标签：{{ title }}</h4>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: ["id", "title"],
  mounted() {
    console.log(this);
    console.log(this.$route);
  },
};
</script>

<style>
</style>