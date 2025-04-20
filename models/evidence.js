const mongoose = require("mongoose");

const evidenceSchema = new mongoose.Schema({
  idCaso: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  dataColeta: { type: Date, default: Date.now, required: true },
  coletadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  localColeta: {
    latitude: { type: Number },
    longitude: { type: Number },
  },
});

const Evidence = mongoose.model("Evidence", evidenceSchema);

module.exports = Evidence;
