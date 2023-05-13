// import "./db";
import express from "express";
import morgan from "morgan";

import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import petRouter from "./routers/petRouter";
import familyRouter from "./routers/familyRouter";
import iotRouter from "./routers/iotRouter";

const PORT = 5000;

const app = express();

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/views"));

const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

// Router
app.use("/", rootRouter);
app.use("/user", userRouter);
app.use("/pet", petRouter);
app.use("/family", familyRouter);
app.use("/iot", iotRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
