const PCOS = require("../models/PcosModel");

// @desc Get all PCOS clients
exports.getPCOSClients = async (req, res) => {
  try {
    const { search, status, page = 1, limit = 9 } = req.query;
    const query = {};

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
      ];
    }
    if (status) {
      query.status = status;
    }

    const totalClients = await PCOS.countDocuments(query);
    const clients = await PCOS.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({
      clients,
      totalPages: Math.ceil(totalClients / limit),
      currentPage: Number(page),
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Add new PCOS client
exports.addPCOSClient = async (req, res) => {
  try {
    const { name, age, email, status } = req.body;
    const newClient = new PCOS({ name, age, email, status });
    const savedClient = await newClient.save();
    res.status(201).json(savedClient);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Delete PCOS client
exports.deletePCOSClient = async (req, res) => {
  try {
    await PCOS.findByIdAndDelete(req.params.id);
    res.json({ message: "Client removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};

// @desc Update PCOS client
exports.updatePCOSClient = async (req, res) => {
  try {
    const updatedClient = await PCOS.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
};
