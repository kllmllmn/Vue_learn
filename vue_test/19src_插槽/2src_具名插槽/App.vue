<template>
  <div id="app">
    <List title="美食">
      <img slot="center" src="./assets/images/1.png" />
      <a href="www.baidu.com" slot="footer">更多美食</a>
    </List>
    <List title="游戏">
      <ul slot="center">
        <li v-for="item in games" :key="item">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="#">经典游戏</a>
        <a href="#">热门游戏</a>
      </div>
    </List>
    <List title="电影">
      <video slot="center" controls src="./assets/videos/Don_t cha.mp4"></video>
      <!-- 由template包裹的标签可以用v-slot写法  -->
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
        </div>
        <h3>欢迎</h3>
      </template>
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
#app,
.foot {
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