//esse é o servidor.


//isso serve para conseguir ler o arquivo de variáveis de ambiente (variaveis.env).
//entao o arquivo vai poder ser visto dentro do servidor.
require('dotenv').config({path:'variaveis.env'});

//usar o express dentro do servidor tambem.
const express = require('express');

//o cors possibilita trabalhar com API. ele permite acessos, recursos de outro sites para trabalhar com ele.
const cors = require('cors');

//o bodyparser é um módulo que converte o body de uma requisição pra vários outros formatos.
const bodyParser = require('body-parser');

//isso mostra pro servidor onde estão as rotas do projeto.
const routes = require('./routes.js');

const server = express();
server.use(cors());
server.use(bodyParser.urlencoded({extended: false}));

server.listen(process.env.PORT, ()=>{
  console.log(`Servidor rodando em: http://localhost:${process.env.PORT}`);
});