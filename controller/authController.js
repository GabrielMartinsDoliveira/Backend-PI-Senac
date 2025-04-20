require("dotenv").config();
const bcrypt = require("bcryptjs");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

const loginUser = async (req, res) => {
  const { matricula, senha } = req.body;

  if (!matricula || !senha) {
    console.log("Campos obrigatórios faltando");
    return res
      .status(400)
      .json({ message: "Matrícula e senha são obrigatórias" });
  }

  try {
    const user = await User.findOne({ matricula });

    if (!user) {
      console.log("Usuário não encontrado para matrícula:", matricula);
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    console.log("Comparando senhas...");
    const isMatch = await bcrypt.compare(senha, user.senha);

    if (!isMatch) {
      console.log("Senha incorreta para usuário:", matricula);
      return res.status(401).json({ message: "Credenciais inválidas" });
    }

    console.log("Gerando token JWT...");
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    console.log("Login bem-sucedido para:", matricula);
    res.status(200).json({
      message: "Login bem-sucedido",
      user: {
        id: user._id,
      },
      token,
    });
  } catch (err) {
    console.error("Erro durante o login:", err);
    res.status(500).json({
      error: "Erro no servidor",
      details: err.message,
    });
  }
};

module.exports = { loginUser };
