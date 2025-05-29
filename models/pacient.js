const moongoose = require("mongoose");

const pacientSchema = new moongoose.Schema({
    //talvez nem todos sejam true necessarios, mas não sei a logica por trás
    idCaso: {
        type: moongoose.Schema.Types.ObjectId,
        ref: "Case",
        required: true,
    },
    matricula: { type: String,
        ref: "User",
        required: true },
    nomeVitima: { type: String, required: true },
    enderecoEncontro: { type: String, required: true },
    dataNascimento: { type: Date, required: true },
    sexo: { type: String, required: true },
    descrição: { type: String, required: true },
});

const Pacient = moongoose.model("Pacient", pacientSchema);

module.exports = Pacient;