const mongoose = require("mongoose");

const mealPlanSchema = new mongoose.Schema(
  {
    client: { type: String, required: true },
    time: { type: String, required: true },
    items: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.models.MealPlan || mongoose.model("MealPlan", mealPlanSchema);
