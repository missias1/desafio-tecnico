const modelLogin = require('../database/models/modelLogin');
const createErrorObj = require('../utils/createErrorObj');
const { generateToken } = require('../utils/jwtToken');

const findClient = async (email, password)=> {
  //procura no banco de dado o cliente correspondente ao email e senha
  const [client] = await modelLogin.findClient(email, password)

  //verifica se não foi encontrado
  if(!client) throw createErrorObj(400, "Username or password invalid!")

  //acessa os dados retornados, passando-os para gerar o token
  const { client_id, name } = client;
  const token = generateToken({ client_id, name, email });
  return {token, clientId:client_id}
};

module.exports = {
  findClient,
}