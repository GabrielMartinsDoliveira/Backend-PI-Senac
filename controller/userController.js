const User = require("../models/user");
const bcrypt = require("bcryptjs");

const createUser = async (req, res) => {
  try {
    const { nome, email, senha, role } = req.body;
    const senhaHash = await bcrypt.hash(senha, 10)

    if(!senha) return res.status(400).json({ error: "Senha é obrigatória" })
    if(!senhaHash) return res.status(400).json({ error: "Erro ao gerar o hash" })

    const user = new User({ nome, email, senha: senhaHash, role });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "Usuário não encontrado" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "Usuário não encotrado" });

    const isMatch = await bcrypt.compare(senha, user.senha);
    if (!isMatch) return res.status(400).json({ message: "Senha incorreta" });

    res.status(200).json({ message: "Login bem-sucedido", user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { nome, email, senha, role } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { nome, email, senha, role },
      { new: true }
    );
    if (!updatedUser)
      return res.status(404).json({ message: "Usuário não encontrado" });

    res.status(200).json(updatedUser);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser)
      return res.status(404).json({ message: "Usuário não encotrado" });

    res.status(200).json({ message: "Usuário excluído" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  login,
  updateUser,
  deleteUserById,
};
