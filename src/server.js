import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import petRouter from "./routers/petRouter";
import familyRouter from "./routers/familyRouter";
import iotRouter from "./routers/iotRouter";
import { localsMiddleware } from "./middlewares";

const app = express();
const logger = morgan("dev");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

app.use(logger);
// Express 앱에서 정적 파일 경로 설정
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static("uploads"));

//sesions
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60,
    },
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

// Router
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/pet", petRouter);
app.use("/family", familyRouter);
app.use("/iot", iotRouter);

export default app;
