import mongoose from "mongoose";

const caseSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  status: { type: String, required: true },
  dataAbertura: { type: Date, default: Date.now, required: true },
  dataFechamento: { type: Date },
});

export const Case = mongoose.model("Case", caseSchema);
