<template>
  <!-- 可以在父组件中使用注册的子组件 -->
  <div id="app">
    <h1 ref="night">现在是深夜了</h1>
    <SchoolInfo ref="school"></SchoolInfo>
    <StudentInfo ref="student"></StudentInfo>
    <button @click="get">点我获取上方组件实例对象</button>
  </div>
</template>

<script>
import StudentInfo from "./components/Student.vue";
import SchoolInfo from "./components/School.vue";
export default {
  name: "App",
  components: { StudentInfo, SchoolInfo },
  methods: {
    get() {
      console.log(this); //获得app的实例对象
      console.log(this.$refs); //获得所有ref标记的元素
      console.log(this.$refs.student); //获得StudentInfo组件的实例对象
    },
  },
};
</script>
