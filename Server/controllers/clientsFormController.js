const Client =  require("../models/ClientForm");
// POST /api/clients
exports.addClient = async (req, res) => {
  try {
    const { name, email, phone, plan } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({ message: "Name, email, and phone are required." });
    }

    const newClient = await Client.create({ name, email, phone, plan });
    res.status(201).json({ message: "Client added", client: newClient });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// GET /api/clients
exports.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: "Error fetching clients" });
  }
};
