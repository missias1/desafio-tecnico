const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const WITHDRAWSCHEMA = Joi.object({
  clientId: Joi.number().required().min(1),
  value: Joi.number().required().min(1)
});

const validateWithdraw = (req, _res, next)=> {
  const {error} = WITHDRAWSCHEMA.validate(req.body);
  if(error) throw createErrorObj(400, error.message)
  next()
};

module.exports = {
  validateWithdraw,
}