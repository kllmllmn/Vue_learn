<template>
  <ul class="todo-main">
    <transition-group
      appear
      name="animate__animated animate__bounce"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut"
    >
      <MyItem
        v-for="todoObject in todos"
        :key="todoObject.id"
        :todo="todoObject"
        :handleCheck="handleCheck"
        :deleteTodo="deleteTodo"
      />
      <!-- todo加冒号表示单向绑定，右边就是表达式，否则就是字符串 -->
    </transition-group>
  </ul>
</template>

<script>
import "animate.css";
import MyItem from "./MyItem.vue";
export default {
  name: "MyList",
  components: { MyItem },
  props: ["todos", "handleCheck", "deleteTodo"],
};
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}
.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>