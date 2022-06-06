<template>
  <div>
    <button @click="change">显示/隐藏</button>
    <!-- 动画 -->
    <transition appear><h1 v-show="isShowing">你好</h1></transition>
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