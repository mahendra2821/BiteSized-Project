const express = require("express");
const router = express.Router();

const {
  addClient,
  getClients,
} = require("../controllers/clientFormController");


router.post("/", addClient);
router.get("/", getClients);

module.exports = router;
