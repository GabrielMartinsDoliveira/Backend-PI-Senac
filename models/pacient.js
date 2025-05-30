const moongoose = require("mongoose");

const pacientSchema = new moongoose.Schema({
  //talvez nem todos sejam true necessarios, mas não sei a logica por trás
  idCaso: {
    type: moongoose.Schema.Types.ObjectId,
    ref: "Case",
    required: true,
  },
  peritoResponsavel: { type: String, ref: "User", required: true },
  NIC: { type: String, enum: ["identificado", "não identificado"], required: true },
  nome: { type: String },
  genero: { type: String, required: true },
  idade: { type: Number },
  documento: { type: String },
  endereco: { type: String },
  etnia: { type: String },
  odontograma: { type: String },
  regiaoAnatomicas: { type: String },
});

const Pacient = moongoose.model("Pacient", pacientSchema);

module.exports = Pacient;
