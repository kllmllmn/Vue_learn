<template>
  <div>
    <button @click="change">显示/隐藏</button>
    <h1 v-show="isShowing" class="v-enter-active" ref="t">你好</h1>
  </div>
</template>

<script>
export default {
  name: "SchoolInfo",
  data() {
    return {
      isShowing: true,
    };
  },

  methods: {
    // TODO 实现播放完动画后隐藏
    change() {
      this.isShowing = !this.isShowing;
      if (!this.isShowing) {
        this.$refs.t.style.class = "v-leave-active";
      } else {
        this.$refs.t.style.class = "v-enter-active";
      }
    },
  },
};
</script>

<style scoped>
h1 {
  background-color: blue;
}
.v-enter-active {
  animation: test 1s;
}
.v-leave-active {
  animation: test 1s reverse;
}

@keyframes test {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0px);
  }
}
</style>