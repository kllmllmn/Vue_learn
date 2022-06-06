<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <School></School>
  </div>
</template>

<script>
import School from "./components/School.vue";
export default {
  name: "App",
  components: {
    School,
  },
};
</script>
