const Laudo = require("../models/laudo");

const createLaudo = async (req, res) => {
  try {
    const { evidencia, dataEmissao, descricao } = req.body;
    const newLaudo = new Laudo({ evidencia, dataEmissao, descricao });
    await newLaudo.save();
    res.status(201).json(newLaudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getLaudoById = async (req, res) => {
  try {
    const { id } = req.params.id;
    const laudo = await Laudo.findById(id);
    if (!laudo) {
      res
        .status(400)
        .json({ message: "Nenhum laudo com esse ID foi encontrado" });
    }
    res.status(201).json(laudo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateLaudo = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { dataEmissao, descricao } = req.body;
    const updateLaudo = await Laudo.findByIdAndUpdate(
      {
        id,
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
  updateLaudo,
};
