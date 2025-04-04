const Case = require("../models/case");

const createCase = async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    const newCase = new Case({ titulo, descricao, status });
    await newCase.save();
    res.status(201).json(newCase);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Verificar se o usuário só poderá ver os casos pelo que ele é responsável
const getCases = async (req, res) => {
  try {
    const cases = await Case.find().populate("responsavel", "nome");
    res.status(200).json(cases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCasesByUser = async (req, res) => {
  try {
    const { responsavel } = req.body;
    const userCases = await Case.find({ responsavel }).populate(
      "responsavel",
      "nome"
    );
    if (!userCases) {
      res
        .status(400)
        .json({ message: "Não foram encontrados casos com esse responsável" });
    }
    res.status(200).json(userCases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCasesByStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const statusCases = await Case.find({ status }).populate(
      "responsavel",
      "nome"
    );
    if (!statusCases) {
      res
        .status(400)
        .json({ message: "Não foram encontrados casos com esse status" });
    }
    res.status(200).json(statusCases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getCasesByDate = async (req, res) => {
  try {
    const { dataAbertura } = req.body;
    const dateCases = await Case.find({ dataAbertura }).populate(
      "responsavel",
      "nome"
    );
    if (!dateCases) {
      res
        .status(400)
        .json({ message: "Não foram encontrados casos com essa data de abertura" });
    }
    res.status(200).json(dateCases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateStatusCase = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { status } = req.body;

    if (status == "finalizado") {
      const dataFechamento = Date.now();
      const updatedCase = await Case.findByIdAndUpdate(
        id,
        {
          status,
          dataFechamento,
        },
        { new: true }
      );
      if (!updatedCase) {
        return res.status(400).json({ message: "Caso não encontrado" });
      }
      res.status(200).json(updatedCase);
    } else {
      const updatedCase = await Case.findByIdAndUpdate(
        id,
        { status },
        { new: true }
      );
      if (!updatedCase) {
        return res.status(400).json({ message: "Caso não encontrado" });
      }
      res.status(200).json(updatedCase);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createCase,
  getCases,
  getCasesByDate,
  getCasesByStatus,
  getCasesByUser,
  updateStatusCase,
};
