const express = require("express");
const router = express.Router();
const {
  createEvidence,
  getEvidences,
  getEvidenceById,
  updateEvidence,
} = require("../controller/evidenceController");
const verifyToken = require("../middleware/verifyMiddleware");

// Rotas de evidencia

router.post("/", verifyToken, createEvidence);
router.get("/", verifyToken, getEvidences);
router.get("/:id", verifyToken, getEvidenceById);
router.put("/:id", verifyToken, updateEvidence);

module.exports = router;
