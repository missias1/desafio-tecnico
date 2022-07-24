const Joi = require('joi');
const createErrorObj = require('../utils/createErrorObj');

const LOGINSCHEMA = Joi.object({
  email: Joi.string().required().email(),
  password: Joi.string().required().min(6),
});

const validateLogin = (req, _res, next) => {
    const { error } = LOGINSCHEMA.validate(req.body);
    if (error) throw createErrorObj(400, error.message);
    next();
};

module.exports = {
  validateLogin,
};