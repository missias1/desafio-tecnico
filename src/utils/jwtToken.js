const JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1h',
  algorithm: 'HS256',
};

const generateToken = (payload) => JWT.sign(payload, SECRET, jwtConfig);

const decodeToken = (token) => {
  const infoToken = JWT.verify(token, SECRET);
  return infoToken;
}; 

module.exports = {
  generateToken,
  decodeToken,
};