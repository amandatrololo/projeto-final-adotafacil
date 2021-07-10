const mongoose = require('mongoose');

const adotantesSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId },
    nomeAdotante: { type: String },
    sexoCrianca: { type: String },
    idade: { type: Number},
    telefone: { type: String },
    email: { type: String, required: true },
    senha: { type: String, required: true },
},{
    //gera por padrão uma versão para cada atualização do documento
    versionKey: false
});

const adotantes = mongoose.model('adotantes', adotantesSchema)
 module.exports = adotantes;