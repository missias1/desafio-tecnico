/* eslint-disable complexity */
/* eslint-disable sonarjs/cognitive-complexity */
const { decodeToken } = require('../utils/jwtToken');
const createErrorObj = require('../utils/createErrorObj');

const authentication = (req, res, next) => {
    if (!req.headers.authorization) throw createErrorObj(400, '"token" is required!');
    try {
      const token = req.headers.authorization;
      const payload = decodeToken(token);
      const { clientId: clientIdParam } = req.params;
      const { clientId } = req.body;
      const { clientId: clientIdToken } = payload;

      if (clientId !== clientIdToken && req.method === 'POST') {
       return res.status(401).json({ message: 'Action not allowed!' });
      }
      if (Number(clientIdParam) !== clientIdToken && req.method === 'GET') {
       return res.status(401).json({ message: 'Action not allowed!' });
      }
      res.user = payload;
      next();
    } catch (error) {
      throw createErrorObj(401, error.message);
    }
};

module.exports = authentication;