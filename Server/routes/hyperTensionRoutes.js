// const express = require("express");
// const router = express.Router();
// const {
//   getClientsByType,
//   addClient,
//   updateClient,
//   deleteClient
// } = require("../controllers/hypertensionController");

// router.get("/", getClientsByType);       // e.g. GET /api/clients/diabetes
// router.post("/", addClient);                  // e.g. POST /api/clients
// router.put("/:id", updateClient);              // e.g. PUT /api/clients/:id
// router.delete("/:id", deleteClient);           // e.g. DELETE /api/clients/:id

// module.exports = router;



// routes/hypertensionRoutes.js
const express = require("express");
const Hypertension = require("../models/HypertensionClient");
const router = express.Router();

// GET all hypertension clients with pagination & filtering
router.get("/", async (req, res) => {
  try {
    const { search = "", status = "", page = 1, limit = 9 } = req.query;

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

    const totalCount = await Hypertension.countDocuments(query);
    const totalPages = Math.ceil(totalCount / limit);

    const clients = await Hypertension.find(query)
      .skip((page - 1) * limit)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    res.json({
      clients,
      totalPages,
    });
  } catch (err) {
    console.error("❌ Error fetching hypertension clients:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
