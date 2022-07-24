const routes = require('express').Router();
const controllerAtivos = require('../../controllers/controllerAtivos');
const authentication = require('../../middlewares/authentication');

routes.get('/client/:clientId', authentication, controllerAtivos.getAssetsFromOneClientById);
routes.get('/:id', controllerAtivos.getAssetById);
routes.get('/', controllerAtivos.getAllAssets);

module.exports = routes;