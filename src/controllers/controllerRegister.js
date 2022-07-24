const serviceRegister = require('../services/serviceRegister');

const addClient = async (req, res)=> {
  const insertId = await serviceRegister.addClient(req.body);
  return res.status(201).json({ clientId: insertId, message: "Created account!" })
};

module.exports = {
  addClient,
}