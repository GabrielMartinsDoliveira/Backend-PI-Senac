const Laudo = require("../models/laudo");

const createLaudo = async (req, res) => {
  try {
    const { evidencia, dataEmissao, descricao } = req.body;
    const verificationLaudo = await Laudo.find({ evidencia });
    if (verificationLaudo.length > 0) {
      return res
        .status(400)
        .json({ message: "Já existe um laudo para essa evidência" });
    }
    const arquivos =
      req.files?.map((file) => ({
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size,
      })) || [];

    const newLaudo = new Laudo({ evidencia, dataEmissao, descricao, arquivos });

    await newLaudo.save();
    res.status(201).json(newLaudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Buscar laudo pelo _id do Laudo
const getLaudoById = async (req, res) => {
  try {
    const laudo = await Laudo.findById(req.params.id);
    if (!laudo) {
      return res.status(404).json({ message: "Laudo não encontrado" });
    }
    res.status(200).json(laudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Buscar laudo pelo id da Evidência
const getLaudoByEvidencia = async (req, res) => {
  try {
    const idEvidencia = req.params.idEvidencia;

    if (!idEvidencia) {
      return res.status(400).json({ message: "ID da evidência é obrigatório" });
    }

    const laudo = await Laudo.findOne({ evidencia: idEvidencia });

    if (!laudo) {
      return res
        .status(404)
        .json({ message: "Nenhum laudo encontrado para esta evidência" });
    }

    res.status(200).json(laudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateLaudo = async (req, res) => {
  try {
    const id = req.params.id;
    const { dataEmissao, descricao } = req.body;
    const updateLaudo = await Laudo.findByIdAndUpdate(
      id,
      {
        dataEmissao,
        descricao,
      },
      { new: true }
    );
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createLaudo,
  getLaudoById,
  getLaudoByEvidencia,
  updateLaudo,
};
