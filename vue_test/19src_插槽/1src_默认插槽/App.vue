<template>
  <div id="app">
    <List title="美食">
      <img src="./assets/images/1.png" />
    </List>
    <List title="游戏">
      <ul>
        <li v-for="item in games" :key="item">{{ item }}</li>
      </ul>
    </List>
    <List title="电影">
      <video controls src="./assets/videos/Don_t cha.mp4"></video>
    </List>
  </div>
</template>

<script>
// import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",
  data() {
    return {
      items: ["火锅", "牛皮", "牛排", "牛肉"],
      games: ["游戏1", "游戏2", "游戏3", "游戏4"],
      films: ["电影1", "电影2", "电影3", "电影4"],
    };
  },
  methods: {},
  components: { List },
};
</script>

<style>
#app {
  display: flex;
  justify-content: space-around;
}
img {
  height: 200px;
}
video {
  width: 200px;
}
</style>