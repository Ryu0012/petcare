import mongoose from "mongoose";
import "./models/Pet";
import "./models/User";
const db = mongoose.connection;

mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.9.1");

const handleError = (error) => console.log("❌ DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
