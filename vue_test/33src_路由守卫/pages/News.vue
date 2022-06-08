<template>
  <ul>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      t: 1,
    };
  },
  beforeDestroy() {
    console.log("News即将被销毁");
  },
  /* mounted() {
    this.timer = setInterval(() => {
      console.log("News");
      this.t -= 0.1;
      if (this.t <= 0) this.t = 1;
    }, 500);
  }, */
  // 组件激活时调用
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("News");
      this.t -= 0.1;
      if (this.t <= 0) this.t = 1;
    }, 500);
  },
  // 组件失活时调用
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>