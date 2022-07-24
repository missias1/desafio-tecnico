const routes = require('express').Router();
const controllerConta = require('../../controllers/controllerConta');
const authentication = require('../../middlewares/authentication');
const { validateDeposit } = require('../../middlewares/validateDeposit');
const { validateWithdraw } = require('../../middlewares/validateWithdraw');

routes.post('/deposito', authentication, validateDeposit, controllerConta.increaseCashInWallet);
routes.post('/saque', authentication, validateWithdraw, controllerConta.decreaseCashFromWallet);
routes.get('/:clientId', authentication, controllerConta.getWalletInfoById);
routes.delete('/delete/:clientId', controllerConta.deleteClient);
routes.put('/edit', )

module.exports = routes;