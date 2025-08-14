const ActivePlan = require("../models/ActivePlan");

// GET all active plans
exports.getPlans = async (req, res) => {
  try {
    const plans = await ActivePlan.find({});
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch plans", error: error.message });
  }
};

// POST a new active plan
exports.addPlan = async (req, res) => {
  try {
    const { day, duration, clients } = req.body;

    const exists = await ActivePlan.findOne({ day });
    if (exists) {
      return res.status(400).json({ message: "Plan for this day already exists" });
    }

    const newPlan = new ActivePlan({ day, duration, clients });
    await newPlan.save();

    res.status(201).json({ message: "Plan added successfully", plan: newPlan });
  } catch (error) {
    res.status(500).json({ message: "Failed to add plan", error: error.message });
  }
};

// DELETE an active plan by day
exports.deletePlan = async (req, res) => {
  try {
    const { day } = req.params;

    const deleted = await ActivePlan.findOneAndDelete({ day });
    if (!deleted) {
      return res.status(404).json({ message: "No plan found for the given day" });
    }

    res.status(200).json({ message: "Plan deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete plan", error: error.message });
  }
};
