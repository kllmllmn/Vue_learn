<template>
  <div id="app">
    <Banner></Banner>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- 原始页面中使用a标签实现跳转 -->
          <!-- <a class="list-group-item active" href="./about.html">About</a>
          <a class="list-group-item" href="./home.html">Home</a> -->

          <!-- Vue中使用router-link实现路由的切换 -->
          <router-link class="list-group-item" active-class="active" to="/about"
            >About</router-link
          >
          <router-link class="list-group-item" active-class="active" to="/home"
            >Home</router-link
          >
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- 指定组件出现的位置 -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Banner是一般组件，放在components中；About、Home是路由组件，放在pages中
import Banner from "./components/Banner.vue";
export default {
  name: "App",
  components: { Banner },
};
</script>

<style>
</style>