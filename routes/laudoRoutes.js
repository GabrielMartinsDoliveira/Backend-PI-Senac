const express = require("express");
const router = express.Router();
const {
  createLaudo,
  getLaudoById,
  getLaudoByEvidencia,
  updateLaudo,
} = require("../controller/laudoController");
const verifyToken = require("../middleware/verifyMiddleware");

// Rotas de laudos
router.post("/", verifyToken, createLaudo);
router.get("/:id", verifyToken, getLaudoById);
router.get("/by-evidencia/:idEvidencia", verifyToken, getLaudoByEvidencia);
router.put("/:id", verifyToken, updateLaudo);

module.exports = router;
