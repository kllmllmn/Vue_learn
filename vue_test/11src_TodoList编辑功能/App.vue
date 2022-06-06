<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo" />
        <MyList
          :todos="todos"
          :handleCheck="handleCheck"
          :deleteTodo="deleteTodo"
        />
        <MyFooter
          :todos="todos"
          :deleteDones="deleteDones"
          :modifyAll="modifyAll"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";
export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },

  mounted() {
    this.$bus.$on("editTodo", this.editTodo);
    this.$bus.$on("modifyItem", this.modifyItem);
  },
  beforeDestroy() {
    this.$bus.$off("editTodo");
    this.$bus.$off("modifyItem");
  },
  watch: {
    // 深度监视
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  methods: {
    // 增加一个todo
    addTodo(todoObject) {
      this.todos.unshift(todoObject);
    },

    // 修改勾选状态
    handleCheck(todoId) {
      this.todos.forEach((t) => {
        // console.log(t);
        // console.log(t.id);
        // console.log(todoId);
        if (t.id === todoId) t.done = !t.done; //
        // console.log(t.done);
      });
    },

    /*//删除一个todo,会破坏原数据,本次需求不需要保留原数据
     deleteTodo(id) {
      if (confirm("确定删除吗")) {
        this.todos.forEach((t, index) => {
          if (t.id == id) {
            this.todos.splice(index, 1);
          }
        });
      }
    }, */

    // 删除一个todo
    deleteTodo(id) {
      if (confirm("Are you sure you want to delete this")) {
        this.todos = this.todos.filter((t) => t.id != id);
      }
    },

    // 删除所有的已完成
    deleteDones(todos) {
      if (confirm("Are you sure you want to delete")) {
        this.todos = todos.filter((t) => !t.done);
      }
    },

    // 全选or取消全选
    modifyAll(v) {
      this.todos.forEach((t) => (t.done = v));
    },

    // 编辑功能，点击编辑出现输入框并自动获得焦点
    editTodo(_, id) {
      this.todos.forEach((t) => {
        if (t.id === id) {
          // t.title = value;
          t.isEdit = true; //更改编辑状态
        }
      });
    },
    // 编辑功能，修改Item
    modifyItem(value, id, e, isKeyup) {
      // console.log(e);
      // console.log(isKeyup);
      // console.log(e.type);

      if (e.type === "keyup") {
        // console.log("我被调用了");
        this.todos.forEach((t) => {
          // value.trim()表示去掉输入值两边的空格，value.trim() != ""可以判断输入不能为空
          if (t.id === id && value.trim() != "") {
            t.title = value;
          } else if (t.id === id && value.trim() === "") {
            // keyup.enter事件触发，输入框消失，又会触发失去焦点事件，弹出两次警告，解决方法：在点击编辑时，给todo添加一个isKeyup属性，判断是否是keyup事件，防止两个事件依次触发
            // console.log(t.isKeyup);
            t.isKeyup = true;
            alert("输入不能为空");
          }
          t.isEdit = false;
        });
      } else if (e.type === "blur" && !isKeyup) {
        // console.log("我被调用了");
        this.todos.forEach((t) => {
          // value.trim()表示去掉输入值两边的空格，value.trim() != ""可以判断输入不能为空
          if (t.id === id && value.trim() != "") {
            t.title = value;
          } else if (t.id === id && value.trim() === "") {
            // keyup.enter事件触发，输入框消失，又会触发失去焦点事件，弹出两次警告，解决方法：在点击编辑时，给todo添加一个isKeyup属性，判断是否是keyup事件，防止两个事件依次触发
            alert("输入不能为空");
          }
          t.isEdit = false;
        });
      }
    },
  },
};
</script>

<style>
/* 公共样式放到App里，不加scoped */
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-edit {
  color: #fff;
  background-color: #318;
  border: 1px solid #000;
}
.btn-edit {
  color: #fff;
  background-color: #880;
  border: 1px solid #089;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>