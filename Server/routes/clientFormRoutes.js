const express = require("express");
const router = express.Router();
const {
  addClient,
  getClients,
} = require("../controllers/ClientsFormController");
router.post("/", addClient);
router.get("/", getClients);

module.exports = router;
