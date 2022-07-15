const mongoose = require("mongoose");
const { dateCard, user } = require("../constants");

const model = mongoose.Schema({
  public: { type: Boolean, required: true, default: false },
  owner: { type: mongoose.Schema.ObjectId, ref: user, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  createdBy: { type: mongoose.Schema.ObjectId, ref: user, required: true },
  name: { type: String, required: true },
  details: { type: String, required: false },
  location: { type: String, required: false },
  gMapReference: { type: String, required: false },
  isRepeatable: { type: Boolean, required: true, default: false },
  timeOfDay: {
    type: Array,
    required: true,
    default: ["morning", "afternoon", "evening"],
  },
  isOvernight: { type: Boolean, required: true, default: false },
  isOnWeekend: { type: Boolean, required: true, default: true },
  isOnWeekday: { type: Boolean, required: true, default: true },
  estimatedCost: { type: Number, required: true, default: 0 },
  petFriendly: { type: Boolean, required: true, default: false },
  expires: { type: Boolean, required: false, default: false },
  expirationDate: { type: Date, required: false, default: null },
});

module.exports = new mongoose.model(dateCard, model);
