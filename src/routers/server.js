const express = require("express");

const app = express();

//const router = require("./routers/main.js");
const petsRouter = require("./routers/petsRouter.js");
const loginRouter = require("./routers/loginRouter.js");
const homeRouter = require("./routers/homeRouter.js");
const familycareRouter = require("./routers/familycareRouter.js");
const iotRouter = require("./routers/iotRouter.js");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
// app.engine("html", require("ejs").renderFile);
//app.use("/", router);

app.use("/", loginRouter);
app.use("/home", homeRouter);
app.use("/pets", petsRouter);
app.use("/family", familycareRouter);
app.use("/iot", iotRouter);

var server = app.listen(3000, function () {
  //server 열기  3000 포트로 열기!!
  //웹서버를 3000으로 연다는 것을 의미
  console.log("Server listening on port 3000");
});
