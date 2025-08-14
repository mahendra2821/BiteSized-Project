const mongoose = require("mongoose");

const pcosSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true, unique: true },
    status: {
      type: String,
      enum: ["Active", "Inactive", "Under Review"],
      default: "Active",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PCOS", pcosSchema);
