const routes = require('express').Router();
const controllerInvestimentos = require('../../controllers/controllerInvestimentos');
const { validatePurchase } = require('../../middlewares/validatePurchase');
const { validateSale } = require('../../middlewares/validateSale');

routes.post('/comprar', authentication, validatePurchase, controllerInvestimentos.addAssetInWallet);
routes.post('/vender', authentication, validateSale, controllerInvestimentos.removeAssetFromWallet);

module.exports = routes;