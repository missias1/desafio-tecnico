const routes = require('express').Router();
const controllerConta = require('../../controllers/controllerConta');

routes.post('/deposito', controllerConta.addCashInWallet);
routes.post('/saque', controllerConta.removeCashFromWallet);
routes.get('/:clientId', controllerConta.getWalletInfoById);

module.exports = routes;