const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>

  if (!token) {
    return res.status(403).json({ error: "Token não fornecido." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId; // Anexa o ID do usuário ao `req`
    next();
  } catch (err) {
    res.status(401).json({ error: "Token inválido ou expirado." });
  }
};

module.exports = verifyToken;