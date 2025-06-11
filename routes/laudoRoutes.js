const express = require("express");
const router = express.Router();
const {
  createLaudo,
  getLaudoById,
  getLaudoByEvidencia,
  updateLaudo,
} = require("../controller/laudoController");
const verifyToken = require("../middleware/verifyMiddleware");

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar laudo
 *     tags: [Laudo]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Laudo criado
 */
router.post("/", verifyToken, createLaudo);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Buscar laudo por ID
 *     tags: [Laudo]
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
 *         description: Laudo retornado
 */
router.get("/:id", verifyToken, getLaudoById);

/**
 * @swagger
 * /by-evidencia/{idEvidencia}:
 *   get:
 *     summary: Buscar laudo por evidência
 *     tags: [Laudo]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: idEvidencia
 *         schema:
 *           type: string
 *         required: true
 *     responses:
 *       200:
 *         description: Laudo encontrado
 */
router.get("/by-evidencia/:idEvidencia", verifyToken, getLaudoByEvidencia);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualizar laudo
 *     tags: [Laudo]
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
 *         description: Laudo atualizado
 */
router.put("/:id", verifyToken, updateLaudo);

module.exports = router;

