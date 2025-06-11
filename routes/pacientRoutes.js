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

/**
 * @swagger
 * /:
 *   post:
 *     summary: Criar paciente
 *     tags: [Paciente]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Paciente criado com sucesso
 */
router.post("/", verifyToken, createPacient);

/**
 * @swagger
 * /:
 *   get:
 *     summary: Listar pacientes
 *     tags: [Paciente]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de pacientes
 */
router.get("/", verifyToken, getPacient);

/**
 * @swagger
 * /{id}:
 *   get:
 *     summary: Buscar paciente por ID
 *     tags: [Paciente]
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
 *         description: Paciente encontrado
 */
router.get("/:id", verifyToken, getPacientById);

/**
 * @swagger
 * /{id}:
 *   put:
 *     summary: Atualizar paciente
 *     tags: [Paciente]
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
 *         description: Paciente atualizado
 */
router.put("/:id", verifyToken, updatePacient);

/**
 * @swagger
 * /{id}:
 *   delete:
 *     summary: Deletar paciente
 *     tags: [Paciente]
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
 *         description: Paciente excluído
 */
router.delete("/:id", verifyToken, deletePacient);

module.exports = router;
