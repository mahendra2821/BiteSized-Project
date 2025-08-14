// server/controllers/emailController.js
const nodemailer = require("nodemailer");

async function sendConfirmationEmail(req, res) {
  try {
    const { email, name } = req.body;

    if (!email || !name) {
      return res.status(400).json({ message: "Email and name are required" });
    }

    // Example transporter (replace with your email service & credentials)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Registration Successful",
      text: `Hi ${name}, your registration is confirmed!`
    });

    res.json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ message: "Failed to send email" });
  }
}

module.exports = { sendConfirmationEmail }; // ✅ must be object export
