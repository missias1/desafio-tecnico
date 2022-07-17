const routes = require('express').Router();
const controllerInvestimentos = require('../../controllers/controllerInvestimentos');
const {validateJWT} = require('../../utils/jwtToken');

routes.post('/comprar', validateJWT, controllerInvestimentos.addAssetInWallet);
// routes.post('/vender');

module.exports = routes;