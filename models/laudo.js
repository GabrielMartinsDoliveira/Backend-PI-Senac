const moongose = require("mongoose");

const laudoSchema = new moongose.Schema({
  evidencia: {
    type: moongose.Schema.Types.ObjectId,
    ref: "Evidence",
    required: true,
  },
  dataEmissao: { type: Date, default: Date.now, required: true },
  descricao: { type: String, required: true },
  arquivos: [
    {
      filename: { type: String, required: true },
      path: { type: String, required: true },
      mimetype: { type: String },
      size: { type: Number },
    },
  ],
});

const Laudo = moongose.model("Laudo", laudoSchema);

module.exports = Laudo;
