<template>
  <!-- 可以在父组件中使用注册的子组件 -->
  <div id="app">
    <h1 ref="night">现在是深夜了</h1>
    <!-- 父传子，直接传 -->
    <!-- 子传父，父先给子传一个函数，子调用这个函数实现子传父 -->
    <StudentInfo ref="student" name="张三" :age="19"></StudentInfo>
    <button @click="get">点我获取上方组件实例对象</button>
  </div>
</template>

<script>
import StudentInfo from "./components/Student.vue";
export default {
  name: "App",
  components: { StudentInfo },
  methods: {
    get() {
      console.log(this); //获得app的实例对象
      console.log(this.$refs); //获得所有ref标记的元素
      console.log(this.$refs.student); //获得StudentInfo组件的实例对象
    },
  },
};
</script>
