const modelLogin = require('../models/modelLogin');
const createErrorObj = require('../utils/createErrorObj');
const { generateToken } = require('../utils/jwtToken');

const findClient = async (email, password)=> {
  const [client] = await modelLogin.findClient(email, password)
  if(!client) throw createErrorObj(400, "Username or password invalid!")
  const { client_id, name } = client;
  const token = generateToken({ client_id, name, email })
  return token;
};

module.exports = {
  findClient,
}