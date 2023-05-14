import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
  id: Number,
  name: String,
  age: Number,
  birth: Date,
  type: [{ value: String, type_details: String }],
});

const Pet = mongoose.model("Pet", petSchema);
export default Pet;
