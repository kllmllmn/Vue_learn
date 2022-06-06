<template>
  <div class="student">
    <h1>{{ name }}</h1>
    <h1>{{ age }}</h1>
    <button @click="sendStudentName">点我给school发送学生姓名</button>
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
      this.$bus.$emit("sendMsg", this.name); //触发事件总线上绑定的sendMsg事件
    },
  },
};
</script>

<style scoped>
.student {
  background-color: red;
}
</style>