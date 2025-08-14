const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    plan: { type: String },
  },
  { timestamps: true }
);

// ✅ Fix: Check if 'Client' model is already compiled
module.exports = mongoose.model("ClientForm", clientSchema);
