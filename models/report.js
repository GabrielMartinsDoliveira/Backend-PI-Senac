import mongoose from "mongoose";

const reportSchema = mongoose.Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  peritoResponsavel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dataCriacao: { type: Date, default: Date.now, required: true },
});

const Report = mongoose.model("Report", reportSchema);
