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

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar relatório
 *     tags: [Relatório]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Relatório criado
 */
router.post("/", verifyToken, createReport);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar relatórios
 *     tags: [Relatório]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de relatórios
 */
router.get("/", verifyToken, getReports);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Buscar relatório por ID
 *     tags: [Relatório]
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
 *         description: Relatório encontrado
 */
router.get("/:id", verifyToken, getReportById);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualizar relatório
 *     tags: [Relatório]
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
 *         description: Relatório atualizado
 */
router.put("/:id", verifyToken, updateReport);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Excluir relatório
 *     tags: [Relatório]
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
 *         description: Relatório excluído
 */
router.delete("/:id", verifyToken, deleteReport);

module.exports = router;
