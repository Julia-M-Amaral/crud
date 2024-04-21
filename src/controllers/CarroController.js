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
  },

  buscarUm: async(req, res) => {
    let json = {error: '', result: {}};

    let codigo = req.params.codigo;
    let carro = await CarroService.buscarUm(codigo);

    if(carro){
      json.result = carro;
    }
    res.json(json);
  },

  inserir: async(req, res) => {
    let json = {error: '', result: {}};

    let modelo = req.body.modelo;
    let placa = req.body.placa;

    if(modelo && placa){
      let CarroCodigo = await CarroService.inserir(modelo, placa);
      json.result = {
        codigo: CarroCodigo,
        modelo,
        placa
      };
    } else{
      json.error = 'Campos não enviados';
    }
    res.json(json);
  }
}