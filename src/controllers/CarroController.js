//esse arquivo é responsável por todo o controle da API.

//faz com que o carro controller acesse tudo relacionado a regra e comando de banco de dados.
const CarroService = require('../services/CarroService');

module.exports = {
  buscarTodos: async (req, res) => { //requisição e response
    let json = {error: '', result: []};

    let carros = await CarroService.buscarTodos();

    for(let i in carros){
      json.result.push({
        codigo: carros[i].codigo,
        descricao: carros[i].modelo
      });
    }
    res.json(json);
  }
}