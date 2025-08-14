const PlanRegistration = require("../models/PlanRegistration");

// POST: Register for a plan
exports.registerPlan = async (req, res) => {
  try {
    const { name, email, planName } = req.body;

    if (!name || !email || !planName) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existing = await PlanRegistration.findOne({ email });
    if (existing) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const newPlan = await PlanRegistration.create({ name, email, planName });
    res.status(201).json({
      message: "Plan registered successfully",
      data: newPlan,
    });
  } catch (err) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};

// GET: All registrations
exports.getRegistrations = async (req, res) => {
  try {
    const registrations = await PlanRegistration.find();
    res.json(registrations);
  } catch (err) {
    res.status(500).json({ message: err.message || "Server error" });
  }
};
