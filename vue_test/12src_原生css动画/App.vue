<template>
  <!-- 可以在父组件中使用注册的子组件 -->
  <div id="app">
    <SchoolInfo></SchoolInfo>
  </div>
</template>

<script>
import SchoolInfo from "./components/School.vue";
export default {
  name: "App",
  components: { SchoolInfo },
  methods: {},
};
</script>

<style>
</style>