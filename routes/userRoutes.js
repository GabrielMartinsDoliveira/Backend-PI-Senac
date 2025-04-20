const express = require("express");
const router = express.Router();
const {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUserById,
} = require("../controller/userController");
const verifyToken = require("../middleware/verifyMiddleware");

// Rotas de usuários
router.post("/", verifyToken, createUser);
router.get("/", verifyToken, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUserById);

module.exports = router;
