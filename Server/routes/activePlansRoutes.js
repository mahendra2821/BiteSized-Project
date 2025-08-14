// const express = require("express");
// const router = express.Router();
// const {
//   getPlans,
//   addPlan,
//   deletePlan,
// } = require("../controllers/activePlansController");

// router.get("/", getPlans);
// router.post("/", addPlan);
// router.delete("/:day", deletePlan);

// module.exports = router;
// // 


const express = require("express");
const router = express.Router();

const {
  getPlans,
  addPlan,
  deletePlan,
} = require("../controllers/activePlansController");

router.get("/", getPlans);
router.post("/", addPlan);
router.delete("/:day", deletePlan);

module.exports = router;
