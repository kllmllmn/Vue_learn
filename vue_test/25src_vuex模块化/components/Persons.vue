<template>
  <div>
    <h2 style="color: blue">Count组件的求和为：{{ sum }}</h2>
    <h2 style="color: blue">最新添加的人员为：{{ lastName }}</h2>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="请输入人员名称"
      @keyup.enter="ADD_PERSON(name)"
      v-model="name"
    />
    添加一个姓王的人：<input
      type="text"
      placeholder="请输入王姓"
      @keyup.enter="addPersonWang(nameW)"
      v-model="nameW"
    />
    <button @click="addPersonServer">请求服务器，添加一句土味情话</button>
    <!-- name不是计算属性，需要在data中声明 -->
    <ul>
      <li v-for="p in persons" :key="p.id">{{ p.name }}</li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations, mapActions } from "vuex";
export default {
  name: "Persons",
  data() {
    return {
      name: "",
      nameW: "",
    };
  },
  computed: {
    persons() {
      return this.$store.state.personOptions.persons;
    },
    sum() {
      return this.$store.state.countOptions.sum;
    },
    lastName() {
      return this.$store.getters["personOptions/lastName"];
    },
  },
  methods: {
    ADD_PERSON(value) {
      this.$store.commit("personOptions/ADD_PERSON", value);
      this.name = "";
    },
    addPersonWang(value) {
      this.$store.dispatch("personOptions/addPersonWang", value);
      this.nameW = "";
    },
    addPersonServer() {
      this.$store.dispatch("personOptions/addPersonServer");
    },
  },
};
</script>

<style>
</style>