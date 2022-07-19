const  { decodeToken } = require('../utils/jwtToken');
const createErrorObj = require('../utils/createErrorObj');

const authentication = (req, res, next)=> {
    if(!req.headers.authorization) throw createErrorObj(400, '"token" is required');
    try{
      const payload = decodeToken(req.headers.authorization)
      const {clientId: clientIdParam } = req.params;
      const { clientId } = req.body;
      const { client_id: clientIdToken } = payload;

      if(clientId !== clientIdToken && req.method === "POST"){
       return res.status(400).json({ message: "Action not allowed!" })
      };
      if(Number(clientIdParam) !== clientIdToken && req.method === "GET"){
       return res.status(400).json({ message: "Action not allowed!" })
      };

      req.user = payload;
      next();
    } catch(error){
      throw createErrorObj(400, error.message)
    }
};

module.exports = authentication;