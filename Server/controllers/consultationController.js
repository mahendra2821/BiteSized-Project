const Consultation = require("../models/Consultation");

// POST /api/consultations
exports.scheduleConsultation = async (req, res) => {
  try {
    const { name, date, time, notes } = req.body;

    if (!name || !date || !time) {
      return res.status(400).json({ message: "Name, date, and time are required." });
    }

    const newEntry = await Consultation.create({ name, date, time, notes });
    res.status(201).json({ message: "Consultation scheduled", consultation: newEntry });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/consultations
exports.getConsultations = async (req, res) => {
  try {
    const entries = await Consultation.find().sort({ createdAt: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ message: "Error fetching consultations" });
  }
};
