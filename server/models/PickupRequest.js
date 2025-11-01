import mongoose from "mongoose";

const pickupRequestSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  collector: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true }, // e.g., "10:30 AM"
  status: { type: String, enum: ["pending", "accepted", "completed", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("PickupRequest", pickupRequestSchema);
