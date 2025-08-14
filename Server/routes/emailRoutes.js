// server/routes/emailRoutes.js
const express = require("express");
const { sendConfirmationEmail } = require("../controllers/emailController"); // ✅ correct import

const router = express.Router();

// Make sure handler is a function
router.post("/send-confirmation-email", sendConfirmationEmail);

module.exports = router;
