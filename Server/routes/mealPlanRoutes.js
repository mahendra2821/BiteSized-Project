const express = require("express");
const router = express.Router();
const { createMealPlan, getMealPlans } = require("../controllers/mealPlanController");

router.post("/meal-plans", createMealPlan);
router.get("/meal-plans", getMealPlans);

module.exports = router;
