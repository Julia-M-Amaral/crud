//esse arquivo organiza as rotas que vamos ter dentro da API
//caminho para consultar todos os dados, inserir os dados, alterar os dados, excluir os dados

//express é um framework para facilitar o desenvolvimento de aplicacoes backend
//chamando o express para utilizar no arquivo routes.

const express = require('express');
const router = express.Router();

const CarroController = require('./controllers/CarroController');

//criar rota para pegar todos os carros no arquivo routes
router.get('/carros', CarroController.buscarTodos);

//esse module.exports serve para exportar o router para usar quando a rota for executada, usando o router.
module.exports = router;
