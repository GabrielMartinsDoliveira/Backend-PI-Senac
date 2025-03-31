import mongoose from "mongoose";

const evidenceSchema = mongoose.Schema({
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

export const Evidence = mongoose.model("Evidence", evidenceSchema);
