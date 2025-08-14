const express = require("express");
const router = express.Router();
const {
  scheduleConsultation,
  getConsultations,
} = require("../controllers/consultationController");

router.post("/consultations", scheduleConsultation);
router.get("/consultations", getConsultations);

module.exports = router;
