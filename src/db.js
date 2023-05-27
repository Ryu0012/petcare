import mongoose from "mongoose";
import "./models/Pet";
import "./models/User";
const db = mongoose.connection;

mongoose.set("strictQuery", false);
mongoose.connect(process.env.DB_URL);

const handleError = (error) => console.log("❌ DB Error", error);
const handleOpen = () => console.log("✅ Connected to DB");

db.on("error", handleError);
db.once("open", handleOpen);
