const HeartDisease = require("../models/HeartDisease");

// GET all clients with pagination, search & filter
exports.getClients = async (req, res) => {
  try {
    const { search = "", status = "", page = 1, limit = 9 } = req.query;

    const query = {};
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    if (status) query.status = status;

    const totalClients = await HeartDisease.countDocuments(query);
    const clients = await HeartDisease.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({
      clients,
      totalPages: Math.ceil(totalClients / limit),
    });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};

// POST create client
exports.createClient = async (req, res) => {
  try {
    const { name, age, email, status } = req.body;
    const newClient = await HeartDisease.create({ name, age, email, status });
    res.status(201).json(newClient);
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
};
