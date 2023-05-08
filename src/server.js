// import "./db";
import express from "express";
import morgan from "morgan";

import globalRouter from "./routers/globalRouter";
// import userRouter from "./routers/userRouter";

const PORT = 5000;

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views/");
const logger = morgan("dev");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
// app.use("/", globalRouter);

app.use("/", loginRouter);
app.use("/home", homeRouter);
app.use("/pets", petsRouter);
app.use("/family", familycareRouter);
app.use("/iot", iotRouter);

const handleListening = () =>
  console.log(`Server listenting on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);
