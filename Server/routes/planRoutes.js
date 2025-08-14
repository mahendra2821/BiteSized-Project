const express = require("express");
const router = express.Router();
const { registerPlan, getRegistrations } = require("../controllers/planController");

router.post("/register", registerPlan);
router.get("/registrations", getRegistrations);

module.exports = router;
