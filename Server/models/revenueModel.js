const mongoose = require("mongoose");
const revenueSchema = new mongoose.Schema({
  month: {
    type: String,
    required: true,
    unique: true,
  },
  revenue: {
    type: Number,
    required: true,
  },
  growth: {
    type: Number,
    required: true,
  },
});


module.exports = mongoose.model("Revenue", revenueSchema);
