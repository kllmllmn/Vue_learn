<template>
  <li>
    <label>
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <input
        type="checkbox"
        :checked="todo.done"
        @click="handleCheck(todo.id)"
      />
      <span v-if="!todo.isEdit">{{ todo.title }}</span>

      <input
        id="t"
        type="text"
        v-if="todo.isEdit"
        :value="todo.title"
        ref="getFocus"
        @keyup.enter="modifyItem($event, todo.isKeyup)"
        @blur="modifyItem($event, todo.isKeyup)"
      />
    </label>
    <button class="btn btn-danger" @click="deleteTodo(todo.id)">删除</button>
    <!-- 孙传爷 -->
    <button
      class="btn btn-edit"
      v-show="!todo.isEdit"
      @click="editTodo(todo.id)"
    >
      编辑
    </button>
    <button class="btn btn-callback" @click="callback($event)">
      事件回调参数$event
    </button>
  </li>
</template>

<script>
export default {
  name: "MyItem",
  props: ["todo", "handleCheck", "deleteTodo"],
  methods: {
    editTodo(id) {
      this.$bus.$emit("editTodo", 12345, id);
      // 添加isKeyup属性，处理keyup.enter事件  !!每次点击编辑都会重置isKeyup的属性值
      this.$set(this.todo, "isKeyup", false);
      // console.log(this.$refs.getFocus);//获取dom元素节点，等价于下面的原生js方法
      // console.log(document.querySelector("#t"));
      // document.querySelector("#t").focus();
      /* // 设置异步，先将input框渲染出来，再立即获得焦点（没有销毁定时器）
      setTimeout(() => {
        this.$refs.getFocus.focus();
      }, 0); */
      // 再下一次DOM更新完之后，立即调用回调函数
      this.$nextTick(() => {
        this.$refs.getFocus.focus();
      });
    },
    modifyItem(e, isKeyup) {
      this.$bus.$emit(
        "modifyItem",
        this.$refs.getFocus.value,
        this.todo.id,
        e,
        isKeyup
      );
    },
    callback(e) {
      alert(
        `事件回调函数的参数为$event时，表示事件的对象，可以用e接收，e.target表示触发这次事件的dom元素
        PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}`
      );
      console.log(e);
    },
  },
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover {
  background-color: #ddd;
}
li:hover button {
  display: block;
}
</style>