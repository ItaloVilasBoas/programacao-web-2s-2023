const express = require("express");
const router = express.Router();
const CalculadoraController = require('../controller/CalculadoraController');

router.post("/", CalculadoraController.calcular);

module.exports = router;