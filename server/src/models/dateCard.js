const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const model = mongoose.Schema({
  id: { type: String, required: true },
  public: { type: Boolean, required: true, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
  name: { type: String, required: true },
  details: { type: String, required: false },
  location: { type: String, required: false },
  gMapReference: { type: String, required: false },
  repeatable: { type: Boolean, required: true, default: false },
  timeOfDay: {
    type: Array,
    required: true,
    default: ["morning", "afternoon", "evening"],
  },
  overnight: { type: Boolean, required: true, default: false },
  weekend: { type: Boolean, required: true, default: false },
  weekday: { type: Boolean, required: true, default: false },
  estimatedCost: 0,
  petFriendly: { type: Boolean, required: true, default: false },
  expires: { type: Date, required: false, default: null },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = new mongoose.model("DateCard", model);
