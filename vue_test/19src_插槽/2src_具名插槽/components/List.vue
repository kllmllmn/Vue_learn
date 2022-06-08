<template>
  <div class="category">
    <h3>{{ title }}类别</h3>
    <!-- 设置具名插槽 -->
    <slot name="center">我是默认值，没有具体结构时，我会出现</slot>
    <slot name="footer">我是默认值，没有具体结构时，我会出现</slot>
  </div>
</template>

<script>
export default {
  name: "List",
  props: ["title"],
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
  text-align: center;
}
</style>