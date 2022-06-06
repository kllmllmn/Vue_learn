<template>
  <div class="school">
    <h1>{{ name }}</h1>
    <h1>{{ addr }}</h1>
    <!-- School获取从Student传过来的消息 -->
  </div>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name: "School",

  data() {
    return {
      name: "xx",
      addr: "yy",
    };
  },
  methods: {
    /* demo(name) {
      console.log("demo被调用了", name);
    }, */
  },
  mounted() {
    // this.$bus 就是事件总线（vm实例对象）
    // this.$bus.$on("sendMsg", this.demo); //在事件总线上绑定sendMsg事件
    this.pubId = pubsub.subscribe("msg", (msgName, data) => {
      console.log("有人发布了msg消息", msgName, data);
    });
  },
  beforeDestroy() {
    // this.$bus.$off("sendMsg"); //在School组件销毁前解绑sendMsg事件
    pubsub.unsubscribe(this.pubId);
  },
};
</script>

<style scoped>
.school {
  background-color: blue;
}
</style>