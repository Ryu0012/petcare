import mongoose from "mongoose";

const db = mongoose.connection;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/petcare");

const handleError = (error) => console.log("❌ DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
