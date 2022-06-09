// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建并暴露一个路由器
const router = new VueRouter({
  // history模式，没有/#,默认是hash模式
  mode: "history",
  routes: [
    {
      name: "about1",
      path: "/about",
      component: About,
      meta: { title: "关于" },
    },
    {
      name: "home1",
      path: "/home",
      component: Home,
      meta: { title: "主页" },
      children: [
        {
          name: "news1",
          path: "news",
          component: News,
          meta: { isAuth: true, title: "新闻" },
        },
        {
          name: "message1",
          path: "message",
          component: Message,
          meta: { isAuth: true, title: "消息" },
          children: [
            {
              // 命名路由
              name: "detailName",
              path: "detail/:id/:title",
              // 写占位符
              component: Detail,
              meta: { isAuth: true, title: "详情" },
              props($route) {
                return {
                  id: $route.params.id,
                  title: $route.params.title,
                };
              },
            },
          ],
        },
      ],
    },
  ],
});

export default router;

// 全局前置，路由守卫，路由初始化时调用，每次路由跳转之前调用
router.beforeEach((to, from, next) => {
  console.log("前置路由守卫", to, from);
  if (to.path === "/home/news" || to.name === "message1") {
    //判断是否需要鉴权
    // if (to.meta.isAuth)
    const school = localStorage.getItem("school");
    // console.log(school);
    if (school === "aa") {
      next();
    } else {
      // alert("school!==aa");
    }
  } else {
    next();
  }
});

// 全局后置，路由守卫，路由初始化时调用，每次路由跳转之后调用
router.afterEach((to, from) => {
  console.log("后置路由守卫", to, from);
  document.title = to.meta.title || "尚硅谷";
});
