const Case = require("../models/case");

const createCase = async (req, res) => {
  try {
    const { titulo, descricao, status, responsavel, dataOcorrencia, vitima } = req.body;
    const newCase = new Case({
      titulo,
      descricao,
      status,
      responsavel,
      dataOcorrencia,
      vitima
    });
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

const getCaseById = async (req, res) => {
  try {
    const caseById = await Case.findById(req.params.id).populate(
      "responsavel",
      "nome"
    );
    if (!caseById) {
      res
        .status(400)
        .json({ message: "Não foi encontrado o caso com esse id" });
    }
    res.status(200).json(caseById);
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
      return res
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
      return res.status(400).json({
        message: "Não foram encontrados casos com essa data de abertura",
      });
    }
    res.status(200).json(dateCases);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const updateCase = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      titulo,
      status,
      descricao,
      dataAbertura,
      dataOcorrencia,
      dataFechamento,
      localidade,
      vitima
    } = req.body;

    if (status == "finalizado") {
      const dataAtual = Date.now();
      const updatedCase = await Case.findByIdAndUpdate(
        id,
        {
          titulo,
          status,
          descricao,
          dataAbertura,
          dataOcorrencia,
          dataAtual,
          localidade,
          vitima
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
        {
          titulo,
          status,
          descricao,
          dataAbertura,
          dataOcorrencia,
          localidade,
          dataFechamento,
          vitima
        },
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

const deleteCaseById = async (req, res) => {
  try {
    const deletedCase = await Case.findByIdAndDelete(req.params.id);

    if (!deletedCase) {
      return res.status(404).json({
        message: "Caso não encontrado com o ID fornecido",
      });
    }

    res.status(200).json({
      message: "Caso deletado com sucesso",
      deletedCase: {
        id: deletedCase._id,
        titulo: deletedCase.titulo,
        responsavel: deletedCase.responsavel,
      },
    });
  } catch (err) {
    if (err.name === "CastError") {
      return res.status(400).json({
        error: "ID do caso inválido",
      });
    }

    res.status(500).json({
      error: "Erro ao deletar caso",
      details: err.message,
    });
  }
};

module.exports = {
  createCase,
  getCases,
  getCaseById,
  getCasesByDate,
  getCasesByStatus,
  getCasesByUser,
  updateCase,
  deleteCaseById,
};
