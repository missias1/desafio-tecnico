const routes = require('express').Router();
const controllerConta = require('../../controllers/controllerConta');
const authentication = require('../../middlewares/authentication');
const { validateDeposit } = require('../../middlewares/validateDeposit');
const { validateWithdraw } = require('../../middlewares/validateWithdraw');

routes.post('/deposito', authentication, validateDeposit, controllerConta.addCashInWallet);
routes.post('/saque', authentication, validateWithdraw, controllerConta.removeCashFromWallet);
routes.get('/:clientId', authentication, controllerConta.getWalletInfoById);

module.exports = routes;