const MealPlan = require("../models/MealPlan");

exports.createMealPlan = async (req, res) => {
  try {
    const { client, time, items } = req.body;
    if (!client || !time || !items) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newPlan = await MealPlan.create({ client, time, items });
    res.status(201).json({ message: "Meal Plan saved", mealPlan: newPlan });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

exports.getMealPlans = async (req, res) => {
  try {
    const plans = await MealPlan.find().sort({ createdAt: -1 });
    res.json(plans);
  } catch {
    res.status(500).json({ message: "Failed to fetch meal plans" });
  }
};
