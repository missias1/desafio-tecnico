const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const DEPOSITSCHEMA = Joi.object({
  clientId: Joi.number().required().min(1),
  value: Joi.number().required().min(1)
});

const validateDeposit = (req, _res, next)=> {
  const {error} = DEPOSITSCHEMA.validate(req.body);
  if(error) throw createErrorObj(400, error.message)
  next()
};

module.exports = {
  validateDeposit,
}