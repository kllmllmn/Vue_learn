<template>
  <div>
    <button @click="change">显示/隐藏</button>
    <transition
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__flash"
      leave-active-class="animate__backOutUp"
      ><h1 v-show="isShowing">你好</h1></transition
    >
  </div>
</template>

<script>
// 引入样式，不用自己写动画样式
import "animate.css";
export default {
  name: "SchoolInfo",
  data() {
    return {
      isShowing: true,
    };
  },

  methods: {
    change() {
      this.isShowing = !this.isShowing;
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: blue;
}
</style>