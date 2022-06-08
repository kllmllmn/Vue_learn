<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keywords"
      />&nbsp;<button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Search",
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    searchUsers() {
      // 加载时
      this.$bus.$emit("getUsers", {
        isFirst: false,
        isLoading: true,
        errMsg: "",
        users: [],
      });
      axios.get(`https://api.github.com/search/users?q=${this.keywords}`).then(
        (response) => {
          console.log("请求成功了");
          // 请求成功
          this.$bus.$emit("getUsers", {
            isLoading: false,
            errMsg: "",
            users: response.data.items,
          });
        },
        (error) => {
          // 请求失败
          console.log(
            "请求失败了",
            this.$bus.$emit("getUsers", {
              isLoading: false,
              errMsg: error.message,
              users: [],
            })
          );
        }
      );
    },
  },
};
</script>

<style>
</style>