const Pacient = require("../models/pacient");

const createPacient = async (req, res) => {
  try {
    const {
      idCaso,
      peritoResponsavel,
      NIC,
      nome,
      genero,
      idade,
      documento,
      endereco,
      etnia,
      odontograma,
      regiaoAnatomicas,
    } = req.body;
    const newPacient = new Pacient({
      idCaso,
      peritoResponsavel,
      NIC,
      nome,
      genero,
      idade,
      documento,
      endereco,
      etnia,
      odontograma,
      regiaoAnatomicas,
    });
    await newPacient.save();
    res.status(201).json(newPacient);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar o paciente" });
  }
};

const getPacient = async (req, res) => {
  try {
    const pacients = await Pacient.find();
    res.status(200).json(pacients);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getPacientById = async (req, res) => {
  try {
    const pacient = await Pacient.findById(req.params.id);
    if (!pacient) {
      return res.status(404).json({ message: "Paciente nao encontrado" });
    }
    res.status(200).json(pacient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updatePacient = async (req, res) => {
  try {
    const {
      idCaso,
      peritoResponsavel,
      NIC,
      nome,
      genero,
      idade,
      documento,
      endereco,
      etnia,
      ondontograma,
      regiaoAnatomica,
    } = req.body;
    const id = req.params;
    const updatedPacient = await Pacient.findByIdAndUpdate(
      id,
      {
        idCaso,
        peritoResponsavel,
        NIC,
        nome,
        genero,
        idade,
        documento,
        endereco,
        etnia,
        ondontograma,
        regiaoAnatomica,
      },
      { new: true }
    );
    if (!updatedPacient) {
      return res.status(404).json({ message: "Paciente nao encontrado" });
    }
    res.status(200).json(updatedPacient);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deletePacient = async (req, res) => {
  try {
    const deletedPacient = await Pacient.findByIdAndDelete(req.params.id);
    if (!deletedPacient) {
      return res.status(404).json({ message: "Paciente nao encontrado" });
    }
    res.status(200).json({ message: "Paciente excluido" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createPacient,
  getPacient,
  getPacientById,
  updatePacient,
  deletePacient,
};
