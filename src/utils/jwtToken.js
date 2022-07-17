const JWT = require('jsonwebtoken');
const modelLogin = require('../models/modelLogin');

const SECRET = process.env.JWT_SECRET;

const generateToken = (payload)=> JWT.sign(payload, SECRET);

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  const { clientId } = req.body;
  const { clientId:id } = req.params;
  if(!token) return res.status(401).json({message: "Token not found!"});
  
  try {
    const payload = JWT.verify(token, SECRET);

    const [client] = await modelLogin.findClientById(clientId || id);
    if(!client) return res.status(400).json({message: "Client doesn't found!"})

    const { client_id } = client
    if(client_id !== Number(payload.client_id)) return res.status(400).json({message: "Action not allowed"})

    req.user = payload

    next();
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  generateToken,
  validateJWT,
}