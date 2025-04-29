const express = require("express");
const router = express.Router();
const {
  createCase,
  getCases,
  updateCase,
  getCasesByDate,
  getCasesByStatus,
  getCasesByUser,
  getCaseById,
  deleteCaseById,
} = require("../controller/caseController");
const verifyToken = require("../middleware/verifyMiddleware");

// Rotas de caso
router.post("/", verifyToken, createCase);
router.get("/", verifyToken, getCases);
router.get("/:id", verifyToken, getCaseById);
router.get("/data", verifyToken, getCasesByDate);
router.get("/status", verifyToken, getCasesByStatus);
router.get("/responsavel", verifyToken, getCasesByUser);
router.put("/:id", verifyToken, updateCase);
router.delete("/:id", verifyToken, deleteCaseById);

module.exports = router;
