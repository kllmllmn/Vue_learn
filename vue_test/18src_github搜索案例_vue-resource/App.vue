<template>
  <div id="app">
    <div class="container">
      <Search></Search>
      <List></List>
    </div>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  methods: {},
  components: { Search, List },
};
</script>

<style>
</style>