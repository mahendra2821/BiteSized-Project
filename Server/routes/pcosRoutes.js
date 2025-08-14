const express = require("express");
const router = express.Router();
const {
  getPCOSClients,
  addPCOSClient,
  deletePCOSClient,
  updatePCOSClient,
} = require("../controllers/pcosController");

router.get("/", getPCOSClients);
router.post("/", addPCOSClient);
router.delete("/:id", deletePCOSClient);
router.put("/:id", updatePCOSClient);

module.exports = router;
