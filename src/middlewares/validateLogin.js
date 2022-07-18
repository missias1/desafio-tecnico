const joi = require('joi');

const LOGINSCHEMA = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6)
});

const validateLogin = (req, res, next)=> {
  const { clientId, value } = req.body;

  const { error } = LOGINSCHEMA.validate(clientId, value)
  if(error) throw { error }
  next()
}

module.exports = {
  validateLogin,
}