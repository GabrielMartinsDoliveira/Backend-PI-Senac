const moongoose = require("mongoose");

const pacientSchema = new moongoose.Schema({
  peritoResponsavel: { type: String, ref: "User", required: true },
  NIC: {
    type: String,
    enum: ["identificado", "não identificado"],
    required: true,
  },
  nome: { type: String },
  genero: { type: String, required: true },
  idade: { type: Number },
  documento: { type: String },
  endereco: { type: String },
  etnia: { type: String },
  odontograma: { type: String },
  regiaoAnatomicas: { type: String },
  dataCadastro: { type: Date, default: Date.now, required: true },
});

const Pacient = moongoose.model("Pacient", pacientSchema);

module.exports = Pacient;
