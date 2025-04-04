const mongoose = require('mongoose');

const evidenceSchema = new mongoose.Schema({
  case: { type: String, required: true},
  tipo: { type: String, required: true },
  descricao: {type: String, required: true},
  dataColeta: { type: Date, default: Date.now, required: true },
  coletadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Evidence = mongoose.model("Evidence", evidenceSchema);

module.exports = Evidence