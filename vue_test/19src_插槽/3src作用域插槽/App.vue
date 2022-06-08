<template>
  <div id="app">
    <List title="游戏">
      <template slot-scope="games">
        <ul>
          <li v-for="item in games.games" :key="item">{{ item }}</li>
          <!-- games是一个对象 -->
          {{
            games
          }}
        </ul>
      </template>
    </List>
    <List title="游戏">
      <template slot-scope="games">
        <ol>
          <li v-for="item in games.games" :key="item">{{ item }}</li>
        </ol>
      </template>
    </List>
    <List title="游戏">
      <template slot-scope="{ games }">
        <!-- {{ games }} -->
        <!-- 数组的解构赋值 -->
        <h3 v-for="item in games" :key="item">{{ item }}</h3>
      </template>
    </List>
  </div>
</template>

<script>
// import Search from "./components/Search.vue";
import List from "./components/List.vue";
export default {
  name: "App",

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