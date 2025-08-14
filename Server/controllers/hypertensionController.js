const Client = require('../models/HypertensionClient'); // Assuming the model is named 'Client'
// Get clients by type
exports.getClientsByType = async (req, res) => {
  try {
    const { type } = req.params;
    const clients = await Client.find({ type }).sort({ createdAt: -1 });
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add new client
exports.addClient = async (req, res) => {
  try {
    const { name, age, email, status, type } = req.body;
    const newClient = await Client.create({ name, age, email, status, type });
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update client
exports.updateClient = async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete client
exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
