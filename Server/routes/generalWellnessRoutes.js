const express = require("express");
const {
  getClients,
  addClient,
  deleteClient,
} = require("../controllers/generalWellnessController");

const router = express.Router();

router.get("/", getClients);
router.post("/", addClient);
router.delete("/:id", deleteClient);

module.exports = router;
