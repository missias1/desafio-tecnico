const  { decodeToken } = require('../utils/jwtToken');
const createErrorObj = require('../utils/createErrorObj');

const authentication = (req, res, next)=> {
    if(!req.headers.authorization) throw createErrorObj(400, '"token" is required');
    try{
      const payload = decodeToken(req.headers.authorization)
      const { clientId } = req.body;
      const { client_id: clientToken } = payload;
      if(clientId !== clientToken) return res.status(400).json({message: "Action not allowed!"})
      req.user = payload;
      next();
    } catch(error){
      throw createErrorObj(400, "Expired or invalid token")
    }
};

module.exports = authentication;