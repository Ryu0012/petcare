// import "./db";
import express from "express";
import morgan from "morgan";

const homeRouter = require("./routers/homeRouter.js");
const loginRouter = require("./routers/loginRouter.js");
const profileRouter = require("./routers/profileRouter.js");
const familycareRouter = require("./routers/familycareRouter.js");
const iotRouter = require("./routers/iotRouter.js");
const petsDetailRouter = require("./routers/petsDetailRouter.js");

// const petsRouter = require("./routers/petsRouter.js");

const PORT = 5000;

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

//홈 화면
app.use("/", homeRouter);
//로그인 구성
app.use("/login", loginRouter);
//로그인 이후 프로필 구성
app.use("/profile", profileRouter);
//단톡방&캘린더 구성=>family
app.use("/family", familycareRouter);
//Iot 구성
app.use("/iot", iotRouter);
//반려동물 상세
app.use("/petsDetail", petsDetailRouter);
//반려동무 설정

// app.use("/edit", editRouter);
// app.use("/pets", petsRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
