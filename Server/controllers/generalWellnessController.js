const GeneralWellnessClient = require("../models/GeneralWellnessClient");

// GET clients with search, filter, pagination
exports.getClients = async (req, res) => {
  try {
    const { search = "", status = "", page = 1, limit = 6 } = req.query;

    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    if (status && status !== "All") {
      query.status = status;
    }

    const total = await GeneralWellnessClient.countDocuments(query);
    const clients = await GeneralWellnessClient.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ name: 1 });

    res.json({
      clients,
      totalPages: Math.ceil(total / limit),
      total,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// POST new client
exports.addClient = async (req, res) => {
  try {
    const { name, age, email, status } = req.body;
    if (!name || !age || !email) {
      return res
        .status(400)
        .json({ message: "Name, age, and email are required" });
    }

    const newClient = new GeneralWellnessClient({ name, age, email, status });
    await newClient.save();

    res
      .status(201)
      .json({ message: "Client added successfully", client: newClient });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// DELETE client
exports.deleteClient = async (req, res) => {
  try {
    const deleted = await GeneralWellnessClient.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Client not found" });
    }
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};
