// routes/paymentRoutes.js
const express = require("express");
const Razorpay = require("razorpay");
const crypto = require("crypto");
const router = express.Router();

const rz = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// create order
router.post("/create-order", async (req, res) => {
  try {
    const { amount, currency = "INR", receiptNote } = req.body;

    if (!amount || isNaN(amount)) {
      return res.status(400).json({ message: "Invalid amount" });
    }

    // Razorpay expects amount in paise for INR
    const options = {
      amount: Math.round(amount * 100), // paise
      currency,
      receipt: `rcpt_${Date.now()}`,
      notes: { note: receiptNote || "BiteSized payment" },
    };

    const order = await rz.orders.create(options);
    return res.json(order);
  } catch (err) {
    console.error("create-order error:", err);
    return res.status(500).json({ message: "Order creation failed", error: err.message });
  }
});

// verify payment
router.post("/verify-payment", (req, res) => {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;
    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }

    const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
    hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
    const expected = hmac.digest("hex");

    if (expected === razorpay_signature) {
      return res.json({ success: true, message: "Payment verified" });
    } else {
      return res.status(400).json({ success: false, message: "Invalid signature" });
    }
  } catch (err) {
    console.error("verify-payment error:", err);
    return res.status(500).json({ success: false, message: "Verification failed" });
  }
});

module.exports = router;
