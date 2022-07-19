const JWT = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET;

const generateToken = (payload)=> JWT.sign(payload, SECRET);

const decodeToken = (token) => {
  const infoToken = JWT.verify(token, SECRET);
  return infoToken;
}; 

module.exports = {
  generateToken,
  decodeToken,
}