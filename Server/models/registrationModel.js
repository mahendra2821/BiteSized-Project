// This is optional, only if you want MongoDB or DB storage later
// Example with Mongoose:
const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  name: String,
  email: String,
  planName: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Registration", registrationSchema);
