<template>
  <div>
    <h1>{{ schoolName }}</h1>
    <h1>{{ schoolAddress }}</h1>
  </div>
</template>

<style></style>

<script>
export default {
  // 组件名称必须是多词
  name: "SchoolSchool",
  data() {
    return {
      schoolName: "sgg",
      schoolAddress: "bj",
    };
  },
};
</script>
