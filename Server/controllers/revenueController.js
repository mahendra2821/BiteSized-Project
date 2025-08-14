// ✅ CommonJS style
const Revenue = require("../models/revenueModel");

const getAllRevenue = async (req, res) => {
  try {
    const data = await Revenue.find({});
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch revenue data" });
  }
};

const addRevenue = async (req, res) => {
  const { month, revenue, growth } = req.body;

  try {
    const newEntry = new Revenue({ month, revenue, growth });
    await newEntry.save();
    res.status(201).json({ message: "Revenue entry added successfully" });
  } catch (err) {
    res.status(400).json({ message: "Failed to add revenue", error: err.message });
  }
};

module.exports = {
  getAllRevenue,
  addRevenue,
};
