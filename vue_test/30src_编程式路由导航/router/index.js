// 该文件专门用于创建整个应用的路由
import VueRouter from "vue-router";
// 引入组件
import About from "../pages/About";
import Home from "../pages/Home";
import News from "../pages/News";
import Message from "../pages/Message";
import Detail from "../pages/Detail";

// 创建并暴露一个路由器
export default new VueRouter({
  routes: [
    {
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children: [
        {
          path: "news",
          component: News,
        },
        {
          path: "message",
          component: Message,
          children: [
            {
              // 命名路由
              name: "detailName",
              // params属性，配置路由时需要写占位符
              path: "detail/:id/:title",

              component: Detail,
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
