const express = require("express");
const router = express.Router();
const controller = require("../controllers/criancasController");

router.get("/", controller.getCriancasByBairro);
router.get("/cidade", controller.getCriancasByCidade); 
router.get("/cidade/disponivel", controller.getCriancasByCidadeByDisponivel);
router.get("/disponivel", controller.getCriancasDisponivel);
router.get("/criancas", controller.getAll);
router.get("/:id", controller.getById);
router.post("/", controller.postCrianca);
router.delete("/:id", controller.deleteCrianca);
router.put("/:id", controller.putCrianca);

module.exports = router;