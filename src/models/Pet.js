import session from "express-session";
import mongoose from "mongoose";

//default == value
const petSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, require: true, ref: "User" },
  avatarUrl: { type: String, required: true },
  name: { type: String, require: true, trim: true },
  age: { type: Number, trim: true },
  birth: { type: Date, trim: true },
  type: {
    value: { type: String, trim: true },
    details: { type: String, trim: true },
  },
  introduce: [{ type: String, trim: true }],
});

petSchema.static("formatIntroduce", function (introduce) {
  return introduce.split(",");
});

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
