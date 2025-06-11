const express = require("express");
const { loginUser } = require("../controller/authController");
const router = express.Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login de usuário
 *     description: Realiza login do usuário e retorna um token JWT.
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               matricula:
 *                 type: string
 *               senha:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login realizado com sucesso
 *       400:
 *         description: Campos obrigatórios faltando
 *       401:
 *         description: Credenciais inválidas
 */
router.post("/login", loginUser);

module.exports = router;

