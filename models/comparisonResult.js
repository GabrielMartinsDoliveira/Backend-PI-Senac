const mongoose = require('mongoose')

const comparisonResultSchema = new mongoose.Schema({
  resultado: { type: String, required: true },
  precisao: { type: Float, required: true },
  analisadoPor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  dataAnalise: { type: Date, default: Date.now, required: true },
});


const ComparisonResult = mongoose.model('ComparisonResult', comparisonResultSchema)

module.exports = ComparisonResult