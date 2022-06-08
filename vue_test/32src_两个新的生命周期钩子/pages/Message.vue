<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
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
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  beforeDestroy() {
    console.log("Message即将被销毁");
  },
  data() {
    return {
      messageList: [
        { id: "001", title: "Message1" },
        { id: "002", title: "Message2" },
        { id: "003", title: "Message3" },
      ],
    };
  },
  methods: {
    pushShow(m) {
      this.$router.push({
        name: "detailName",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m) {
      this.$router.replace({
        name: "detailName",
        params: {
          id: m.id,
          title: m.title,
        },
      });
    },
  },
};
</script>

<style>
</style>