const express = require("express");
const router = express.Router();
const {
  createReport,
  getReports,
  getReportById,
  updateReport,
  deleteReport,
} = require("../controller/reportController");
const verifyToken = require("../middleware/verifyMiddleware");

// Rotas de laudo
router.post("/", verifyToken, createReport);
router.get("/", verifyToken, getReports);
router.get("/:id", verifyToken, getReportById);
router.put("/:id", verifyToken, updateReport);
router.delete("/:id", verifyToken, deleteReport);

module.exports = router;
