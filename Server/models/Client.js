const mongoose = require("mongoose");

const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    enum: ["active", "paused", "pending"],
    default: "active",
  },
});

module.exports = mongoose.model("Client", clientSchema);
