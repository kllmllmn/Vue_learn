<template>
  <div>
    <h2>我是Home的内容</h2>
    <ul class="nav nav-tabs">
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/news"
          >News</router-link
        >
      </li>
      <li>
        <router-link
          class="list-group-item"
          active-class="active"
          to="/home/message"
          >Message</router-link
        >
      </li>
    </ul>
    <!-- include包含的组件表示不被销毁的组件 -->
    <!-- <keep-alive include="News"><router-view></router-view></keep-alive> -->
    <!-- 缓存多个组件 -->
    <keep-alive :include="['News', 'Message']"
      ><router-view></router-view
    ></keep-alive>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
</style>