const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const UPDATESCHEMA = Joi.object({
  clientId: Joi.string().required(),
  telephone: Joi.string().required().length(11)
});

const validateUpdateData = (req, _res, next)=> {
    const {error} = UPDATESCHEMA.validate(req.body)
    if(error) throw createErrorObj(400, error.message)
    next()
}

module.exports = {
  validateUpdateData,
}