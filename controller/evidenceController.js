const Evidence = require("../models/evidence");
const { caseId } = require("../models/case");

// Criar evidencia no caso
const createEvidence = async (req, res) => {
  try {
    const { idCaso, tipo, descricao, dataColeta, coletadoPor, localColeta } =
      req.body;

    const arquivos =
      req.files?.map((file) => ({
        filename: file.filename,
        path: file.path,
        mimetype: file.mimetype,
        size: file.size,
      })) || [];

    const newEvidence = new Evidence({
      idCaso,
      tipo,
      descricao,
      dataColeta,
      coletadoPor,
      localColeta,
      arquivos,
    });

    await newEvidence.save();
    res.status(201).json(newEvidence);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get todas as evidencias do caso
const getEvidences = async (req, res) => {
  try {
    const { idCaso } = req.query;
    const evidences = await Evidence.find({ idCaso }).populate(
      "coletadoPor",
      "nome"
    );
    res.status(200).json(evidences);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get evidencia por Id

const getEvidenceById = async (req, res) => {
  try {
    const evidence = await Evidence.findById(req.params.id).populate(
      "coletadoPor",
      "nome"
    );
    res.status(200).json(evidence);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update de evidecias, exceto caseId
const updateEvidence = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { tipo, descricao, dataColeta, coletadoPor, localColeta } = req.body;

    const updatedEvidence = await Evidence.findByIdAndUpdate(
      id,
      { tipo, descricao, dataColeta, coletadoPor, localColeta },
      { new: true }
    );
    if (!updatedEvidence)
      return res.status(404).json({ message: "Evidência não encontrada" });

    res.status(200).json(updatedEvidence);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = {
  createEvidence,
  getEvidences,
  getEvidenceById,
  updateEvidence,
};
