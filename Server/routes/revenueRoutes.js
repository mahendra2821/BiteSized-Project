const express = require("express");
const { getAllRevenue, addRevenue } = require("../controllers/revenueController");
const router = express.Router();

router.get("/", getAllRevenue);
router.post("/", addRevenue);

module.exports = router;
