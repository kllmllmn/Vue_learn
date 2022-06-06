<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <h1>{{ myAge + 1 }}</h1>
    <button @click="myAge++">点我增加年龄</button>
  </div>
</template>

<script>
export default {
  name: "StudentInfo",
  data() {
    return {
      // name: "tom",
      // age: 18,
      myAge: this.age, //对传进来的age进行拷贝，修改年龄时，直接修改myAge，age不会变
    };
  },
  props: ["name", "age"], //简单声明接收
  // 接收的同时对数据进行类型限制
  /* props: {
    name: String,
    age: Number,
  }, */
  //接收的同时对数据 ：进行类型限制、指定默认值、限制必要性
  /* props: {
    name: {
      type: String,
      required: true, //设置必须传参
    },
    age: {
      type: Number,
      default: 80, //设置默认值为80
    },
  }, */
};
</script>

<style>
</style>