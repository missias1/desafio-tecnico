const modelLogin = require('../models/modelLogin');

const findClient = async (email, password)=> {
  console.log('entrei no login service');
  const [client] = await modelLogin.findClient(email, password)
  console.log(client)
  if(!client) {
    return {error: {message: "Invalid fields", code: 400}}
  }

  return {sucess: {message: "deu certo", code: 200}};
};

module.exports = {
  findClient,
}