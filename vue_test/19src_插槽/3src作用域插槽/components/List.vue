<template>
  <div class="category">
    <h3>{{ title }}类别</h3>
    <!-- 设置作用域插槽 -->
    <slot :games="games">我是默认值，没有具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["title"],
  data() {
    return {
      games: ["游戏1", "游戏2", "游戏3", "游戏4"],
    };
  },
};
</script>

<style scoped>
.category {
  width: 200px;
  height: 300px;
  background-color: #ff9;
}
h3 {
  background-color: orange;
}
</style>