<template>
  <div>
    <h2 style="color: blue">Count组件的求和为：{{ sum }}</h2>
    <h1>人员列表</h1>
    <input
      type="text"
      placeholder="请输入人员名称"
      @keyup.enter="ADD_PERSON(name)"
      v-model="name"
    />
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
    };
  },
  computed: {
    /* persons() {
      return this.$store.state.persons;
    }, */
    ...mapState({ persons: "persons", sum: "sum" }),
  },
  methods: {
    ADD_PERSON(value) {
      this.$store.commit("ADD_PERSON", value);
      this.name = "";
    },
  },
};
</script>

<style>
</style>