<template>
  <div class="student">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="sendStudentName">点我把学生名发送给App</button>
    <button @click="unBind">点我解绑myBind自定义事件</button>
  </div>
</template>

<script>
export default {
  name: "Student",

  data() {
    return {
      name: "zhangsan",
      age: 18,
    };
  },
  methods: {
    sendStudentName() {
      // 触发Student组件实例上的myBind事件
      this.$emit("myBind", this.name, 111, 222, 33);
      // this.$emit("demo");
      // this.$emit("click");
    },
    unBind() {
      // 解绑一个事件
      this.$off("myBind");
      // 解绑多个事件
      // this.$off(["myBind", "demo"]);
      // 解绑所有的自定义事件
      // this.$off();
    },
  },
};
</script>

<style scoped>
.student {
  background-color: red;
}
</style>