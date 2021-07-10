const mongoose = require('mongoose');

const criancasSchema = new mongoose.Schema({
	id:{type: Number},
	nome: { type: String, required: true },
	bairros: [{ type: String }],
	idade: { type: Number },
    diasSemana: [{ type: String }],
    cidade: { type: String },
    estado: { type: String },
   	disponivel: { type: Boolean }
},{
    versionKey: false
});

const criancas = mongoose.model('criancas', criancasSchema);

module.exports = criancas;