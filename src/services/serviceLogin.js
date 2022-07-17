const modelLogin = require('../models/modelLogin');
const { generateToken } = require('../utils/jwtToken');

const findClient = async (email, password)=> {
  const [client] = await modelLogin.findClient(email, password)

  if(!client) {
    return {error: {message: "Invalid fields", code: 400}}
  }
  const token = generateToken({email, password})
  return {sucess: {token, code: 200}};
};

module.exports = {
  findClient,
}