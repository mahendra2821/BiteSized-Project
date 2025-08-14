const Client = require("../models/Client");
const { Parser } = require("json2csv");

// Get all clients with pagination, search, sort
exports.getClients = async (req, res) => {
  try {
    const { sort = "name", order = "asc", page = 1, limit = 10, search = "" } = req.query;
    const skip = (page - 1) * limit;

    const query = {
      $or: [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ],
    };

    const clients = await Client.find(query)
      .sort({ [sort]: order === "asc" ? 1 : -1 })
      .skip(parseInt(skip))
      .limit(parseInt(limit));

    const total = await Client.countDocuments(query);

    res.json({ data: clients, total });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create new client
exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    await client.save();
    res.status(201).json(client);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update client
exports.updateClient = async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete client
exports.deleteClient = async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ message: "Client deleted successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Export clients as CSV
exports.exportClientsCSV = async (req, res) => {
  try {
    const clients = await Client.find({});
    const fields = ["_id", "name", "email", "status"];
    const parser = new Parser({ fields });
    const csv = parser.parse(clients);

    res.header("Content-Type", "text/csv");
    res.attachment("clients.csv");
    return res.send(csv);
  } catch (err) {
    res.status(500).json({ error: "Failed to export clients" });
  }
};
