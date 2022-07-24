const modelRegister = require('../database/models/modelRegister');
const modelLogin = require('../database/models/modelLogin');
const createErrorObj = require('../utils/createErrorObj');

const addClient = async ({ name, email, password, telephone }) => {
  const findEmail = await modelLogin.findClientByEmail(email);

  if (findEmail) throw createErrorObj(400, 'Email already exist!');

  const [result] = await modelRegister.addClient(name, email, password, telephone);

  return result.insertId;
};

module.exports = {
  addClient,
};