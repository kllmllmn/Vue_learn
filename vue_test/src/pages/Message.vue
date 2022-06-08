<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- 模板字符串 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link
        >&nbsp;&nbsp; -->
        <!-- 字符串拼接 -->
        <!-- <router-link
          :to="'/home/message/detail?id=' + m.id + '&title=' + m.title"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法，必须写成name形式，不能写path -->
        <router-link
          :to="{
            name: 'detailName',
            params: {
              id: m.id,
              title: m.title,
            },
          }"
          >{{ m.title }}</router-link
        >&nbsp;&nbsp;
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "Message1" },
        { id: "002", title: "Message2" },
        { id: "003", title: "Message3" },
      ],
    };
  },
};
</script>

<style>
</style>