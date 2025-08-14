const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    date: { type: String, required: true },  // could also use Date type
    time: { type: String, required: true },
    notes: { type: String },
  },
  { timestamps: true }
);

// Avoid model overwrite
module.exports =
  mongoose.models.Consultation ||
  mongoose.model("Consultation", consultationSchema);
