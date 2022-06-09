const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, //关闭语法检查
  /* // 开启代理服务器，解决ajax跨域问题（方式一）
  // 缺点：不能配置多个代理、如果请求前端资源（publish文件夹下）里已有的资源，则不会在向"http://localhost:5000"服务器请求资源（可能得不到想要的资源）
  devServer: {
    proxy: "http://localhost:5000",
  }, */
  // 开启代理服务器，解决ajax跨域问题（方式二）
  // devServer: {
  //   proxy: {
  //     // '/api' 判断是否要向目标服务器发请求，在端口号后加'/api'就表示要向目标服务器发请求，否则只向前端（8080）发请求
  //     "/api1": {
  //       target: "https://v.api.aa1.cn/api/api-wenan-dujitang",
  //       pathRewrite: { "^/api1": "" }, //路径重写
  //       ws: true,
  //       changeOrigin: true,
  //     },
  //     /* '/foo': {
  //       target: '<other_url>'
  //     } */
  //   },
  // },
});
