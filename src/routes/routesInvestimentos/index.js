const routes = require('express').Router();
const controllerInvestimentos = require('../../controllers/controllerInvestimentos');
const authentication = require('../../middlewares/authentication');
const { validatePurchase } = require('../../middlewares/validatePurchase');
const { validateSale } = require('../../middlewares/validateSale');

routes.post('/comprar', authentication, validatePurchase, controllerInvestimentos.increaseAssetInWallet);
routes.post('/vender', authentication, validateSale, controllerInvestimentos.decreaseAssetFromWallet);

module.exports = routes;