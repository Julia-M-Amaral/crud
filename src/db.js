const mysql = require('mysql'); //chamando o mysql, dependencia criada anteriormente

//criando conexão
//pegando os parametros das variaveis.env para passar pro banco de dados 
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

//criando conexao com o banco e funcao que retorna se foi com sucesso ou o erro
connection.connect((error)=>{
  if(error) throw error;
  console.log(`Conectado ao Banco de Dados: ${process.env.DB_NAME}`); //else
});

module.exports = connection;