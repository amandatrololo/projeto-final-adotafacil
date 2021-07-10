const adotantes = require('../models/adotantes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;
const mongoose = require("mongoose");

const create = (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10);
  req.body.senha = senhaComHash;
  const adotante = new adotantes({
    _id: new mongoose.Types.ObjectId(),
    ...req.body,
  });
  adotante.save(function(err) {
    if (err) {
      res.status(424).send({ message: err.message })
    }
    res.status(201).send(adotante.toJSON())
  });
};

const getAll = (req, res) => {
  const authHeader = req.get('authorization');
  if (!authHeader) {
    return res.status(401).send('Header não encontrado');
  };
  const token = authHeader.split(' ')[1];
  jwt.verify(token, SECRET, err => {
    if (err) {
      return res.status(403).send('Token inválido');
    };
    adotantes.find((err, adotantes) => {
      if(err) {
        return res.status(424).send({ message: err.message });
      };
      return res.status(200).send(adotantes);
    });
  });  
};

const login = (req, res) => {
  adotantes.findOne({ email: req.body.email }, function(error, adotante) {
    if (!adotante) {
      return res.status(404).send(`Não existe adotante com o email ${req.body.email}`);
    }
    const senhaValida = bcrypt.compareSync(req.body.senha, adotante.senha);
    if (!senhaValida) {
      return res.status(403).send('Senha não invalida.');
    }
    const token = jwt.sign({ email: req.body.email }, SECRET);
    return res.status(200).send(token);
  });
};


const deleteAdotante = (req, res) => {
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
		adotantes.find({ id }, (err, adotante) => {
			if (adotante.length > 0) {
				adotantes.deleteOne({ id }, (err) => {
					err	? res.status(424).send({ message: err.message }) : res.status(200).send({
						status: true,
						mensagem: 'Adotante excluído com sucesso',
					});
				});
			} else {
				res.status(404).send('Adotante não encontrado');
			}
		});
	});
};


module.exports = {
  create,
  getAll,
  login,
  deleteAdotante
};