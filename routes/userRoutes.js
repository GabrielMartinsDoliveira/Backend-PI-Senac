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

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar usuário
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post("/", verifyToken, createUser);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar usuários
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get("/", verifyToken, getUsers);

/**
 * @swagger
 * /:id:
 *   get:
 *     summary: Buscar usuário por ID
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Usuário encontrado
 */
router.get("/:id", verifyToken, getUserById);

/**
 * @swagger
 * /:id:
 *   put:
 *     summary: Atualizar usuário
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Usuário atualizado
 */
router.put("/:id", verifyToken, updateUser);

/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: Deletar usuário
 *     tags: [Usuário]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Usuário deletado
 */
router.delete("/:id", verifyToken, deleteUserById);

module.exports = router;
