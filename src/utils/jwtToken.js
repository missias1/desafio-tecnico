const JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const generateToken = (payload)=> JWT.sign(payload, SECRET);

module.exports = {
  generateToken,
}