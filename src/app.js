require('dotenv-safe').config();
const cors= require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express()


const connect= async()=>{
	try{
		await mongoose.connect(`${process.env.MONGODB_URL}`, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		
		});
		console.log("Banco conectado!")
		
	}
	catch(err) {
		console.error(err)
	}
	}

	connect()


//rotas
const index = require('./routes/index');
const criancas = require('./routes/criancasRoute');
const adotantes = require('./routes/adotantesRoute');

app.use(express.json());
app.use(cors());

app.use('/', index);
app.use('/criancas', criancas);
app.use('/adotantes', adotantes);

module.exports = app;