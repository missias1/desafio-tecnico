const modelLogin = require('../models/modelLogin');
const { generateToken } = require('../utils/jwtToken');

const findClient = async (email, password)=> {
  const [client] = await modelLogin.findClient(email, password)
  if(!client) {
    return {error: {message: "Invalid fields", code: 400}}
  }
  const { client_id, name } = client;
  const token = generateToken({ client_id, name, email })
  return {sucess: {token, code: 200}};
};

module.exports = {
  findClient,
}