const express = require("express");
const router = express.Router();
const {
    createPacient,
    getPacient,
    getPacientById,
    updatePacient,
    deletePacient,
} = require("../controller/pacientController");
const verifyToken = require("../middleware/verifyMiddleware");


router.post("/", verifyToken, createPacient);
router.get("/", verifyToken, getPacient);
router.get("/:id", verifyToken, getPacientById);
router.put("/:id", verifyToken, updatePacient);
router.delete("/:id", verifyToken, deletePacient);

module.exports = router;