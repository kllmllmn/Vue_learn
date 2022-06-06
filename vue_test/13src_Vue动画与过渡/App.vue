<template>
  <!-- 可以在父组件中使用注册的子组件 -->
  <div id="app">
    <SchoolInfo></SchoolInfo>
    <SchoolInfo2></SchoolInfo2>
  </div>
</template>

<script>
import SchoolInfo from "./components/School.vue";
import SchoolInfo2 from "./components/School2.vue";
export default {
  name: "App",
  components: { SchoolInfo, SchoolInfo2 },
  methods: {},
};
</script>

<style>
</style>