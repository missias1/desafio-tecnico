const routes = require('express').Router();
const controllerConta = require('../../controllers/controllerConta');
const { validateJWT } = require('../../utils/jwtToken')

routes.post('/deposito', validateJWT, controllerConta.addCashInWallet);
routes.post('/saque', validateJWT, controllerConta.removeCashFromWallet);
// routes.get('/:id');

module.exports = routes;