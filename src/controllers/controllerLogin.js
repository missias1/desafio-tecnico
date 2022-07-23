const serviceLogin = require('../services/serviceLogin');

const findClient = async (req, res)=> {
  const {email, password} = req.body;

  const token = await serviceLogin.findClient(email, password);
  res.status(201).json(token);
};

module.exports = {
  findClient,
}