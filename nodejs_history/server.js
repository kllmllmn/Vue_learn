const express = require("express");
const app = express();
// 解决Vue路由器history模式刷新时404的问题
const history = require("connect-history-api-fallback");

app.use(history());
app.use(express.static(__dirname + "/static"));

app.get("/person", function (req, res) {
  res.send({
    name: "张三",
    age: 36,
  });
});

app.listen(5050, (err) => {
  if (!err) console.log("5050启动，正在监听");
});
