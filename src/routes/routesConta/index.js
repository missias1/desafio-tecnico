const routes = require('express').Router();
const controllerConta = require('../../controllers/controllerConta');
const { validateJWT } = require('../../utils/jwtToken')

routes.post('/deposito', controllerConta.addCashInWallet);
routes.post('/saque', validateJWT, controllerConta.removeCashFromWallet);
routes.get('/:clientId', validateJWT, controllerConta.getWalletInfoById);

module.exports = routes;