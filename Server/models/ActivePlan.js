
const mongoose = require("mongoose");

const activePlanSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
    unique: true,
  },
  duration: {
    type: String,
    required: true,
  },
  clients: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("ActivePlan", activePlanSchema);
