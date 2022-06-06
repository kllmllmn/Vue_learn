<template>
  <div class="school">
    <h1>{{ name }}</h1>
    <h1>{{ addr }}</h1>
  </div>
</template>

<script>
export default {
  name: "School",

  data() {
    return {
      name: "xx",
      addr: "yy",
    };
  },
};
</script>

<style scoped>
.school {
  background-color: blue;
}
</style>