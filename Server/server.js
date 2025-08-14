const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const clientRoutes = require("./routes/clientRoutes");
const activePlansRoutes = require("./routes/activePlansRoutes");
const revenueRoutes = require("./routes/revenueRoutes");
const clientFormRoutes = require("./routes/clientFormRoutes");
const consultationRoutes = require("./routes/consultationRoutes");
const mealPlanRoutes = require("./routes/mealPlanRoutes");
const diabetesRoutes = require("./routes/diabetesRoutes");
const generalWellnessRoutes = require("./routes/generalWellnessRoutes");
const hyperTensionRoutes = require("./routes/hyperTensionRoutes");  
const pcosRoutes = require("./routes/pcosRoutes");
const HeartDiseaseRoutes = require("./routes/heartDiseaseRoutes");  

const registrationRoutes = require("./routes/registrationRoutes");
const emailRoutes = require("./routes/emailRoutes");

const authRoutes = require("./routes/authRoutes");



dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientRoutes);
app.use("/api/plans", activePlansRoutes);
app.use("/api/revenue", revenueRoutes);
app.use("/api/form/clients", clientFormRoutes);
app.use("/api", consultationRoutes);
app.use("/api", mealPlanRoutes); // ✅ POST /api/meal-plans
app.use("/api", diabetesRoutes); // ✅ POST /api/diabetes
app.use("/api/general-wellness", generalWellnessRoutes); // ✅ POST /api/general-wellness 
app.use("/api/hypertension", hyperTensionRoutes); // ✅ POST /api/hypertension
app.use("/api/pcos", pcosRoutes); // ✅ POST /api/pcos
app.use("/api/heartdisease", HeartDiseaseRoutes); // ✅ POST /api/heart-disease
app.use("/api/registrations", registrationRoutes);
app.use("/api/email", emailRoutes);

app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("BiteSized Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
