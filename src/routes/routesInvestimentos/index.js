const routes = require('express').Router();
const controllerInvestimentos = require('../../controllers/controllerInvestimentos');
const {validateJWT} = require('../../utils/jwtToken');

routes.post('/comprar', validateJWT, controllerInvestimentos.addAssetInWallet);
routes.post('/vender', validateJWT, controllerInvestimentos.removeAssetFromWallet);

module.exports = routes;