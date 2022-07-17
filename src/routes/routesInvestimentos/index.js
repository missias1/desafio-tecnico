const routes = require('express').Router();
const controllerInvestimentos = require('../../controllers/controllerInvestimentos');

routes.post('/comprar', controllerInvestimentos.addAssetInWallet);
// routes.post('/vender');

module.exports = routes;