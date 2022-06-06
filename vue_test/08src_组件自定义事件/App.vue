<template>
  <div id="root">
    <h1>{{ name }}：{{ studentName }}</h1>
    <School></School>
    <!-- 给Student的VC实例对象绑定一个自定义事件，实现子传父数据 -->
    <!-- <Student v-on:myBind="getStudentName" @demo="demo1"></Student> -->
    <!-- 组件标签中的事件默认为自定义事件，如果想使用内置事件，要用native修饰符 -->
    <Student v-on:myBind="getStudentName" @click.native="show"></Student>
  </div>
</template>

<script>
import Student from "./components/Student";
import School from "./components/School";
export default {
  name: "App",
  data() {
    return {
      name: "欢迎你",
      studentName: "",
    };
  },
  methods: {
    /* // ...params剩余参数
    getStudentName(name, ...params) {
      console.log("demo被调用了", name, params);
      return name;
    }, */
    getStudentName(name) {
      // console.log("demo被调用了", name);
      this.studentName = name;
    },
    /* demo1() {
      console.log("demo1被调用了");
    }, */

    show() {
      alert("123");
    },
  },
  components: { Student, School },
};
</script>

<style>
body {
  background-color: grey;
}
</style>