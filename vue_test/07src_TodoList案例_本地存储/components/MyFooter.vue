<template>
  <div class="todo-footer" v-if="todos.length">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <!-- 这里可以使用v-model，因为这里绑定的不是 props-->
      <input type="checkbox" :checked="isAll" @click="checkAll" />
    </label>
    <span>
      <span>已完成 {{ getDone() }}@{{ doneTotal }}</span> / 全部
      {{ todos.length }}</span
    >
    <button class="btn btn-danger" @click="deleteDones(todos)">
      清除已完成任务
    </button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todos", "deleteDones", "modifyAll"],
  computed: {
    doneTotal() {
      // reduce 条件统计
      return this.todos.reduce((prev, cur) => {
        return prev + (cur.done ? 1 : 0);
      }, 0);
    },
    isAll() {
      return this.doneTotal === this.todos.length && this.todos.length > 0;
    },
  },
  methods: {
    getDone() {
      let i = 0;
      this.todos.forEach((t) => {
        if (t.done === true) i++;
      });
      return i;
    },

    checkAll(e) {
      // console.log(e.target.checked); //获得点击事件对象的选择状态，判断全选还是全不选
      // this.todos.forEach((t) => (t.done = e.target.checked));//对数据的增删改查遵循：数据在哪，修改方法在哪
      this.modifyAll(e.target.checked);
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}
.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}
.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}
.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>