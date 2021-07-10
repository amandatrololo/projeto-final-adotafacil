const criancas = require('../models/criancas');
const SECRET = process.env.SECRET;
const jwt = require('jsonwebtoken');

const getCriancasByBairro = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const bairro = req.query.bairro;
		criancas.find({ bairros: bairro }, function (err, criancas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(criancas);
		});
	});
};

const getCriancasByCidade = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const cidade = req.query.cidade;
		criancas.find({ cidade: cidade }, function (err, criancas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(criancas);
		});
	});
};



const getAll = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		criancas.find(function (err, criancas) {
			err ? res.status(424).send({ message: err.message }) : res.status(200).send(criancas);
		});
	});
};


const getCriancasDisponivel = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		criancas.find({ disponivel: true }, function (err, criancas) {
			if (err) {
				res.status(424).send({ message: err.message });
			} else {
				res.status(200).send(criancas);
			}
		});
	});
};



const getCriancasByCidadeByDisponivel = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const cidade = req.query.cidade;
		const disponivel = req.query.disponivel;
		criancas.find({ cidade: cidade, disponivel: disponivel }, function (err, criancas) {
			if (err) {
				res.status(500).send({ message: err.message });
			}
			res.status(200).send(criancas);
		});
	});
};




const postCrianca = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		let crianca = new criancas(req.body);
		crianca.save((err) => {
			err	? res.status(424).send({ message: err.message }) : res.status(201).send({
				status: true,
				message: 'Nova Crianca cadastrada com sucesso',
			});
		});
	});
};


const getById = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const id = req.params.id;
		criancas.find({ id }, (err, criancas) => {
			if (err) {
				res.status(424).send({ message: err.message });
			} else {
				res.status(200).send(criancas);
			}
		});
	});
};


const deleteCrianca = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const id = req.params.id;
		criancas.find({ id }, (err, crianca) => {
			if (crianca.length > 0) {
				criancas.deleteOne({ id }, (err) => {
					err	? res.status(424).send({ message: err.message }) : res.status(200).send({
						status: true,
						mensagem: 'Crianca deletada com sucesso',
					});
				});
			} else {
				res.status(404).send('Crianca não encontrada');
			}
		});
	});
};


const putCrianca = (req, res) => {
	const authHeader = req.get('authorization');
	if (!authHeader) {
		return res.status(401).send('Header não encontrado.');
	}
	const token = authHeader.split(' ')[1];
	jwt.verify(token, SECRET, function (err) {
		if (err) {
			return res.status(403).send('Token inválido.');
		}
		const id = req.params.id;
		criancas.updateMany({ id }, { $set: req.body }, function (err, criancas) {
			if (err) {
				res.status(500).send({ message: err.message });
			} else {
				res.status(200).send({ message: 'Crianca atualizada com sucesso!' });
			}
		});
	});
};



module.exports = {
	getCriancasByBairro,
	getCriancasByCidade,
	getAll,
	getCriancasDisponivel,
	getCriancasByCidadeByDisponivel,
	postCrianca,
	getById,
	deleteCrianca,
	putCrianca,
};
