const express = require("express");
const router = express.Router();
const {
  createEvidence,
  getEvidences,
  getEvidenceById,
  updateEvidence,
} = require("../controller/evidenceController");
const verifyToken = require("../middleware/verifyMiddleware");

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar evidência
 *     description: Cria uma nova evidência associada a um caso.
 *     tags: [Evidência]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Evidência criada
 */
router.post("/", verifyToken, createEvidence);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar evidências
 *     description: Retorna todas as evidências associadas a um caso.
 *     tags: [Evidência]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de evidências
 */
router.get("/", verifyToken, getEvidences);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Buscar evidência por ID
 *     tags: [Evidência]
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
 *         description: Evidência encontrada
 */
router.get("/:id", verifyToken, getEvidenceById);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualizar evidência
 *     tags: [Evidência]
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
 *         description: Evidência atualizada
 */
router.put("/:id", verifyToken, updateEvidence);

module.exports = router;

