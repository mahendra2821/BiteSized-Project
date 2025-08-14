const express = require("express");
const router = express.Router();
const {
  getClients,
  createClient,
  updateClient,
  deleteClient,
  exportClientsCSV,
} = require("../controllers/clientController");

router.get("/", getClients);
router.post("/", createClient);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);
router.get("/export", exportClientsCSV);

module.exports = router;
