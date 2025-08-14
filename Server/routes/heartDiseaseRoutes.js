const express = require("express");
const router = express.Router();
const { getClients, createClient } = require("../controllers/heartDiseaseController");

router.get("/", getClients);
router.post("/", createClient);

module.exports = router;
