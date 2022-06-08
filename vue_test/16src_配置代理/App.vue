<template>
  <button @click="getStudentMsg">点我获取学生信息</button>
</template>

<script>
import axios from "axios";
export default {
  name: "App",
  methods: {
    getStudentMsg() {
      axios.get("http://localhost:8080/api/students").then(
        (response) => {
          console.log("请求成功", response.data);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );
    },
  },
};
</script>

<style>
</style>