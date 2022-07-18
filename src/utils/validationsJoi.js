const joi = require('joi');

const LOGINSCHEMA = joi.object({
  email: joi.string().required().email(),
  password: joi.string().required().min(6)
});

const DEPOSITSCHEMA = joi.object({
  validId: joi.integer().required(),
  value: joi.number().required().min(1)
})

module.exports = {
  LOGINSCHEMA,
  DEPOSITSCHEMA
}