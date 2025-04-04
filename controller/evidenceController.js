const Evidence = require("../models/evidence");
const { caseId } = require("../models/case");

// Criar evidencia no caso
const createEvidence = async (req, res) => {
  try {
    const { caseId, tipo, descricao, dataColeta, coletadoPor } = req.body;
    const newEvidence = new Evidence({ caseId, tipo, descricao, dataColeta, coletadoPor });
    await newEvidence.save();
    res.status(201).json(newEvidence);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get todas as evidencias do caso
const getEvidences = async (req, res) => {
  try {
    const evidences = await Evidence.find(caseId);
    res.status(200).json(evidences);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update de evidecias, exceto caseId
const updateEvidence = async (req, res) => {
  try {
    const { id } = req.params.id;
    const { caseId, tipo, descricao, dataColeta, coletadoPor } = req.body;

    const updatedEvidence = await Evidence.findByIdAndUpdate(
      id,
      { tipo, descricao, dataColeta, coletadoPor },
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
  updateEvidence
};