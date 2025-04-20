const mongoose = require("mongoose");

const caseSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, required: true },
  responsavel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dataAbertura: { type: Date, default: Date.now, required: true },
  dataFechamento: { type: Date },
  dataOcorrencia:{type: Date, required: true},
  localidade:{
    latitude: {type: Number},
    longitude: {type: Number}
  }
});

const Case = mongoose.model("Case", caseSchema);

module.exports = Case;
