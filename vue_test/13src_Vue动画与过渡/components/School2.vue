<template>
  <div>
    <button @click="change">显示/隐藏</button>
    <!-- 过渡 -->
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
  transition: 1s;
}

.v-enter,
.v-leave-to {
  transform: translateX(-100%);
}
.v-enter-to,
.v-leave {
  transform: translateX(0px);
}
</style>