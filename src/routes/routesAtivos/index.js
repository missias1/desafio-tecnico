const routes = require('express').Router();
const controllerAtivos = require('../../controllers/controllerAtivos');

routes.get('/:clientId', controllerAtivos.getAssetsFromOneClientById);
// routes.get('/:assetId', controllerAtivos.getAssetById);
routes.get('/', controllerAtivos.getAllAssets)
module.exports = routes;