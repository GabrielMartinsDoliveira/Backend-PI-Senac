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

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar caso
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Caso criado
 */
router.post("/", verifyToken, createCase);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar todos os casos
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de casos
 */
router.get("/", verifyToken, getCases);

/**
 * @swagger
 * /:id:
 *   get:
 *     summary: Buscar caso por ID
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Caso encontrado
 */
router.get("/:id", verifyToken, getCaseById);

/**
 * @swagger
 * /data:
 *   get:
 *     summary: Buscar casos por data
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Casos por data retornados
 */
router.get("/data", verifyToken, getCasesByDate);

/**
 * @swagger
 * /status:
 *   get:
 *     summary: Buscar casos por status
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Casos por status retornados
 */
router.get("/status", verifyToken, getCasesByStatus);

/**
 * @swagger
 * /responsavel:
 *   get:
 *     summary: Buscar casos por responsável
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Casos por responsável retornados
 */
router.get("/responsavel", verifyToken, getCasesByUser);

/**
 * @swagger
 * /:id:
 *   put:
 *     summary: Atualizar caso
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Caso atualizado
 */
router.put("/:id", verifyToken, updateCase);

/**
 * @swagger
 * /:id:
 *   delete:
 *     summary: Deletar caso
 *     tags: [Caso]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Caso deletado
 */
router.delete("/:id", verifyToken, deleteCaseById);

module.exports = router;
