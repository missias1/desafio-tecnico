const serviceLogin = require('../services/serviceLogin');

const findClient = async (req, res)=> {
  const {email, password} = req.body;

  const {error, sucess} = await serviceLogin.findClient(email, password);
  if(error) return res.status(error.code).json(error.message);

  res.status(sucess.code).json(sucess.token);
};

module.exports = {
  findClient,
}