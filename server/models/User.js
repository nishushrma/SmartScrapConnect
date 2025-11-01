import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  role: { type: String, enum: ["seller", "collector", "admin"], required: true },
  password: { type: String, required: true },
  location: { type: String, required: true }, // city / pincode
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("User", userSchema);
