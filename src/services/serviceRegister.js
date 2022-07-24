const modelRegister = require('../database/models/modelRegister');
const modelLogin = require('../../src/database/models/modelLogin');
const createErrorObj = require('../utils/createErrorObj');

const addClient = async ({ name, email, password, telephone })=> {

  const clientEmail = await modelLogin.findClientByEmail(email);

  if(clientEmail === email ) throw createErrorObj(400, "Email already exist!");

  const [result] = await modelRegister.addClient(name, email, password, telephone)

  return result.affectedRows;
};

module.exports = {
  addClient,
}