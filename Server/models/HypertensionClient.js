const mongoose = require("mongoose");

const hypertensionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    status: { type: String, enum: ["Active", "Inactive", "Under Review"], default: "Active" }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Hypertension", hypertensionSchema);
