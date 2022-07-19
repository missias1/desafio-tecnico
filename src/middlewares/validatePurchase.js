const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const PURCHASESCHEMA = Joi.object({
  clientId: Joi.number().required(),
  quantity: Joi.number().required().min(1),
  assetId: Joi.number().required().min(1)
});

const validatePurchase = (req, _res, next)=> {
  const {error} = PURCHASESCHEMA.validate(req.body);
  if(error) throw createErrorObj(400, error.message)
  next()
};

module.exports = {
  validatePurchase,
}