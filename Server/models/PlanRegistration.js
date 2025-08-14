const mongoose = require("mongoose");

const PlanRegistrationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email address"],
    },
    planName: {
      type: String,
      required: [true, "Plan name is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("PlanRegistration", PlanRegistrationSchema);
