const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const REGISTERSCHEMA = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
  telephone: Joi.string().required().length(11)
});

const validateRegister = (req, _res, next)=> {
    const {error} = REGISTERSCHEMA.validate(req.body)
    if(error) throw createErrorObj(400, error.message)
    next()
}

module.exports = {
  validateRegister,
}