export const mixin = {
  //分别暴露
  methods: {
    updateAge() {
      this.age++;
    },
  },
  mounted() {
    console.log("你好");
  },
};

export const addr = {
  data() {
    return {
      address: "金华",
    };
  },
};
