const express = require("express");
const { loginUser } = require("../controller/authController");
const router = express.Router();

// Rotas de verificação
router.post("/login", loginUser);

module.exports = router;
