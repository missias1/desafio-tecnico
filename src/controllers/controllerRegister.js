const serviceRegister = require('../services/serviceRegister');

const addClient = async (req, res)=> {
  await serviceRegister.addClient(req.body);
  return res.status(201).json({ message: "Created account!" })
};

module.exports = {
  addClient,
}