<template>
  <div id="root">
    <h1>{{ name }}</h1>
    <School></School>

    <Student></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  data() {
    return {
      name: "欢迎你",
    };
  },

  components: { Student, School },
};
</script>

<style>
body {
  background-color: grey;
}
</style>